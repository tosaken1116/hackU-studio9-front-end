import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useDemandDetailQuery } from "../../Hooks/hooks";
import { DemandRowType, DemandsType } from "../../Type/type";
import { Date } from "../Format/Date";
import ProfilePopOver from "../Profile/ProfilePopOver";

export default function DemandRow({
    createdAt,
    author,
    goodNumber,
    title,
    views,
    status,
    id,
    openModal,
}: DemandRowType & Pick<DemandsType, "openModal">) {
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);
    const { isReady, setDemandDetailQuery } = useDemandDetailQuery();

    const handleOpenProfilePopOver = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorElement(event.currentTarget);
    };
    return (
        <Stack p={2} sx={{ flexGrow: 1 }}>
            <Stack direction="row">
                <Button
                    onClick={() => {
                        openModal();
                        setDemandDetailQuery({ ideaId: id });
                    }}
                >
                    <Typography variant="h5">{title}</Typography>
                </Button>
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
                    <Typography>{views}</Typography>
                </Stack>
                <Date dateString={createdAt} />
            </Stack>
        </Stack>
    );
}
