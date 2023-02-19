import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getDemandDetailDoc, getSearchResultDoc,getCommentDoc } from "../Document/Document";
import { ideaIdProps } from "../Type/type";
import { SearchWordProps } from './../Type/type';
import { GetCommentDocument } from '../gql/graphql';

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