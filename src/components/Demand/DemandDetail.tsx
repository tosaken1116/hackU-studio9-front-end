import { useMutation } from "@apollo/client";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDemandDetail, useViewsCountUp } from "../../Hooks/hooks";
import Comments from "../Comment/Comments";
import { Date } from "../Format/Date";
export default function DemandDetail() {
    const { demandDetail, isLoading } = useDemandDetail();
    console.log(demandDetail)
    if (isLoading || demandDetail == undefined) {
        return <></>;
    }
    return (
        <Box
            flexGrow={1}
            p={2}
            sx={{ overflow: "auto", maxHeight: "85vh", width: "100%" }}
        >
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
                                        {demandDetail.views}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box flexGrow={1}>
                                <Stack direction="row">
                                    <ThumbUpIcon fontSize="small" />
                                    <Typography>
                                        {demandDetail.likes.length}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Date dateString={demandDetail.created_at} />
                        </Stack>
                    </Stack>
                </Paper>
                <Comments />
            </Stack>
        </Box>
    );
}
