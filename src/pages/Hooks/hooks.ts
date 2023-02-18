import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ideaIdProps } from "../../Type/type";
import { getDemandDetailDoc } from "../Document/Document";

export const useDemandDetail =()=> {
    const router = useRouter()
    const { data, loading } = useQuery(getDemandDetailDoc, { variables: { ideaId: router.query.ideaId } })
    return { demandDetail:data?.Idea[0],isLoading:loading}
}
export const useDemandDetailQuery = () => {
    const router = useRouter()
    const setDemandDetailQuery = ({ ideaId }:ideaIdProps) => {
        router.replace({ query: { ideaId: ideaId } })
    }

    return {isReady:router.isReady,setDemandDetailQuery:setDemandDetailQuery}
}