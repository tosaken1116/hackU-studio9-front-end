import { useRouter } from "next/router"
type DirectMessageProps = {
    DirectMessageId:string
}
export const useDirectMessageProps=()=>{
    const router = useRouter()
    const setDirectMessageProps=({DirectMessageId}:DirectMessageProps)=>{
        router.replace({query:{DirectMessageId:DirectMessageId}})
    }
    return {setDirectMessageProps}
}

export const useDirectMessage=()=>{
    const router = useRouter()
    const messageId = String(router.query.DirectMessageId)
    const messages =  {example1:["message1","message1","message1","message1","message1","message1",],example2:["message2","message2","message2","message2","message2","message2",],example3:["message","message","message","message","message","message",],example4:["message","message","message","message","message","message",],example5:["message","message","message","message","message","message",],example6:["message","message","message","message","message","message",]}
    return {message:messages[messageId]}
}

