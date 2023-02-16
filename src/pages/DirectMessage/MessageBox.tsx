import { Stack,Box } from "@mui/material";
type MessageBoxProps={
    messages: string[],
}
export default function MessageBox({messages}:MessageBoxProps){
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