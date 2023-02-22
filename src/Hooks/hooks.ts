import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deleteLikeDoc, getCommentDoc, getDemandDetailDoc, getProfileDoc, getSearchResultDoc, insertLikeDoc, updateProfileDoc } from "../Document/Document";
import { DebounceExecuteProps, ideaIdProps, updateProfileProps } from "../Type/type";
import { SearchWordProps } from './../Type/type';

export const useDemandDetail =()=> {
    const router = useRouter()
    const { data, loading } = useQuery(getDemandDetailDoc, { variables: { ideaId: router.query.ideaId } })
    return { demandDetail:data?.ideas[0],isLoading:loading}
}
export const useDemandDetailQuery = () => {
    const router = useRouter()
    const setDemandDetailQuery = ({ ideaId }:ideaIdProps) => {
        router.replace({ query: {...router.query, ideaId: ideaId } })
    }

    return {isReady:router.isReady,setDemandDetailQuery:setDemandDetailQuery}
}
export const useSearch = () => {
    const router = useRouter();
    const searchWord = String(router.query.searchWord);
    const { debouncedKeyword } = useDebounceSearch({
        keyword: searchWord,
        timeOutMillSec: 1000,
    });

    const { data } = useQuery(getSearchResultDoc, {
        variables: { searchWord: debouncedKeyword!=""?`%${debouncedKeyword}%`:"" },
    });
    return {
        Idea: data?.ideas,
    };
};
export const useSearchParams = () => {
    const router = useRouter();

    const setSearchParams = ({searchWord}: SearchWordProps) => {
        router.replace({
            query: {...router.query,searchWord:searchWord},
        });
    };
    const handleSearchInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({searchWord: event.target.value})
    };

    return {
        isReady: router.isReady,
        handleSearchInput: handleSearchInput,
    };
};
export const useComments = () => {
    const router = useRouter()
    const { data, loading } = useQuery(getCommentDoc, { variables: { ideaId: router.query.ideaId } })
    return { comments:data?.comments,isLoading:loading}
}
export const useProfile = () => {
    const { data: session, status } = useSession();
    const { data, loading } = useQuery(getProfileDoc, { variables: { email: session?.user?.email } })
    const [updateProfile,{error}] = useMutation(updateProfileDoc)
    const handleUpdateProfile = async ({description,isEmailPublic}:updateProfileProps) => {
        const result = await updateProfile({ variables: { email: session?.user?.email, description: description,isEmailPublic:isEmailPublic } })
        return result?.data?.update_users?.returning
    }
    return {profile:data?.users[0],handleUpdateProfile,loading}
}

export const useDebounceSearch = ({
    keyword,
    timeOutMillSec,
}: DebounceExecuteProps) => {
    const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedKeyword(keyword);
        }, timeOutMillSec);
        return () => {
            clearTimeout(timer);
        };
    }, [keyword, timeOutMillSec]);
    return { debouncedKeyword };
};

export const useLike = () => {
    const { data: session, status } = useSession();
    const [insertLike] = useMutation(insertLikeDoc)
    const [deleteLike] = useMutation(deleteLikeDoc)
    const handleInsertLike = async(ideaID: string) => {
        const result = await insertLike({variables: {ideaID: ideaID, userEmail: session?.user?.email}})
        return result.data
    }
    const handleDeleteLike = async(ideaID: string) => {
        const result = await deleteLike({variables: {ideaID: ideaID, userEmail: session?.user?.email}})
        return result.data
    }

    return {
        handleInsertLike: handleInsertLike,
        handleDeleteLike: handleDeleteLike
    }
}