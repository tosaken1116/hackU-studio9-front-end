import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useDemandDetail } from "../../../Hooks/hooks";
import Comments from "../Comment/Comments";
export default function DemandDetail() {
    const { demandDetail, isLoading } = useDemandDetail();
    if (isLoading) {
        return <></>;
    }
    return (
        <Box flexGrow={1} p={2} sx={{ overflow: "auto", maxHeight: "85vh" }}>
            <Stack p={2} spacing={2}>
                <Paper>
                    <Stack p={3} spacing={2}>
                        <Stack>
                            <Typography variant="h3">
                                {demandDetail.title}
                            </Typography>
                            <Stack direction="row">
                                <Box flexGrow={1}></Box>
                                <Typography>{demandDetail.author}</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body1">
                            {demandDetail.caption}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Box>
                                <Typography
                                    sx={{
                                        color: demandDetail.isResolved
                                            ? "green"
                                            : "red",
                                    }}
                                >
                                    {demandDetail.isResolved
                                        ? "解決済"
                                        : "未解決"}
                                </Typography>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <ViewKanbanIcon fontSize="small" />
                                    <Typography>
                                        {demandDetail.viewNumber}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <ThumbUpIcon fontSize="small" />
                                    <Typography>
                                        {demandDetail.goodNumber}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Paper>
                <Comments />
            </Stack>
        </Box>
    );
}
