import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import ProfilePopOver from "../Profile/ProfilePopOver";
import { DemandRowType } from "./type";

export default function DemandRow({
    createdAt,
    author,
    goodNumber,
    title,
    viewNumber,
    status,
}: DemandRowType) {
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);
    const handleOpenProfilePopOver = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorElement(event.currentTarget);
    };
    return (
        <Stack p={2}>
            <Stack direction="row">
                <Typography variant="h5">{title}</Typography>
                <Box flexGrow={1}></Box>
                <Button onClick={handleOpenProfilePopOver}>
                    <Typography>質問者:{author}</Typography>
                </Button>
                <ProfilePopOver
                    anchorElement={anchorElement}
                    closePopOver={() => setAnchorElement(null)}
                />
            </Stack>
            <Stack direction="row" spacing={2}>
                <Typography
                    sx={{
                        color:
                            status == "inProgress"
                                ? "orange"
                                : status == "resolved"
                                ? "green"
                                : "red",
                    }}
                >
                    {status == "inProgress"
                        ? "進行中"
                        : status == "resolved"
                        ? "解決"
                        : "未解決"}
                </Typography>
                <Stack direction="row">
                    <ThumbUpIcon fontSize="small" />
                    <Typography>{goodNumber}</Typography>
                </Stack>
                <Stack direction="row">
                    <ViewKanbanIcon fontSize="small" />
                    <Typography>{viewNumber}</Typography>
                </Stack>
                <Typography variant="body2">{createdAt}</Typography>
            </Stack>
        </Stack>
    );
}
