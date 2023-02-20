import { Box, Stack } from "@mui/material";
import { useComments } from "../../Hooks/hooks";
import { CommentRowType } from "../../Type/type";
import CommentRow from "./CommentRow";

export default function Comments() {
    const { comments, isLoading } = useComments();
    if (isLoading) {
        return <></>;
    }
    return (
        <Stack spacing={2} pl={2}>
            {comments.map((comment: CommentRowType, index: number) => (
                <Box key={index}>
                    <CommentRow {...comment}></CommentRow>
                </Box>
            ))}
        </Stack>
    );
}
