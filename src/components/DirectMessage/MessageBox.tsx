import { Box, Stack } from "@mui/material";
type MessageBoxProps = {
    messages: string[];
};
export default function MessageBox({ messages }: MessageBoxProps) {
    if (messages === undefined) {
        return (
            <h1 style={{ backgroundColor: "black" }}>
                話し相手を選んでください
            </h1>
        );
    } else {
        return (
            <Stack>
                {messages.map((message, index) => (
                    <Stack direction="row" key={index}>
                        <Box flexGrow={index % 2 == 0 ? 1 : 0}></Box>
                        <Box
                            sx={{
                                backgroundColor: "#99ff99",
                                borderRadius: "30px",
                            }}
                            p={1}
                        >
                            {message}
                        </Box>
                    </Stack>
                ))}
            </Stack>
        );
    }
}
