import { useRouter } from "next/router";

const message = () => {
        const router = useRouter()
        const { userid } = router.query;
        return <div>{userid}さんとの会話です</div>
};


export default message;