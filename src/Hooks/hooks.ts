import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getCommentDoc, getDemandDetailDoc, getProfileDoc, getSearchResultDoc, updateProfileDoc } from "../Document/Document";
import { ideaIdProps, updateProfileProps } from "../Type/type";
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
    const searchWord = router.query.searchWord;
    const { data } = useQuery(getSearchResultDoc, {
        variables: { searchWord: searchWord },
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