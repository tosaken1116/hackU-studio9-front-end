import { Box, Stack } from "@mui/material";
import CommentRow from "./CommentRow";

export default function Comments() {
    const demodata = [
        {
            author: "testauthor",
            createdAt: "2022/02/16",
            caption: "testcaption",
        },
        {
            author: "testauthor",
            createdAt: "2022/02/16",
            caption: "testcaption",
        },
        {
            author: "testauthor",
            createdAt: "2022/02/16",
            caption: "testcaption",
        },
        {
            author: "testauthor",
            createdAt: "2022/02/16",
            caption: "testcaption",
        },
    ];
    return (
        <Stack spacing={2} pl={2}>
            {demodata.map((comment, index) => (
                <Box key={index}>
                    <CommentRow {...comment}></CommentRow>
                </Box>
            ))}
        </Stack>
    );
}
