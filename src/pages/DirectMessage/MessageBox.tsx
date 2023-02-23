import { Stack,Box } from "@mui/material";
import { useDirectMessage } from "../Hooks/hooks";
type MessageBoxProps={
    [K: string]: string[],
}

export default function MessageBox({messages}:MessageBoxProps){
    if(messages === undefined){
        return <h1>select client</h1>
    }else{
        return(
            <Stack >
                {messages.map((message,index)=>(
                    <Stack direction="row">
                        <Box flexGrow={index%2==0?1:0}></Box>
                        <Box sx={{backgroundColor:"#dddddd",borderRadius:"30px"}} p={1}>{message}</Box>
                    </Stack>
                ))}
            </Stack>
        )
    }
}