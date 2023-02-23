import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Box, Button, IconButton, Typography, Checkbox } from "@mui/material";
import { Stack } from "@mui/system";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useDemandDetailQuery, useLike, useViewsCountUp } from "../../Hooks/hooks";
import { DemandRowType, DemandsType } from "../../Type/type";
import { Date } from "../Format/Date";
import ProfilePopOver from "../Profile/ProfilePopOver";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export default function DemandRow({
    created_at,
    author,
    goodNumber,
    title,
    views,
    status,
    id,
    likes,
    openModal,
}: DemandRowType & Pick<DemandsType, "openModal">) {
    const {data: session } = useSession()
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);
    const [isLiked, setIsLiked] = useState<boolean>(likes.some(u => (
        u.user.email == session?.user?.email
    )))
    const [viewsCount, setViewsCount] = useState<number>(Number(views))
    const [likesLength, setLikesLength] = useState<number>(likes.length)
    const { isReady, setDemandDetailQuery } = useDemandDetailQuery();
    const {handleViewsCountUp} = useViewsCountUp()
    const {handleInsertLike, handleDeleteLike} = useLike()
    const handleOpenProfilePopOver = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setAnchorElement(event.currentTarget);
    };
    const handleLikes = () => {
        if(isLiked) {
            //delete like
            handleDeleteLike(id)
            setLikesLength(likesLength-1)
        } else {
            //add like
            handleInsertLike(id)
            setLikesLength(likesLength+1)
        }
    }
    return (
        <Stack p={2} sx={{ flexGrow: 1 }}>
            <Stack direction="row">
                <Button
                    onClick={() => {
                        openModal();
                        setDemandDetailQuery({ ideaId: id });
                        handleViewsCountUp(id)
                        setViewsCount(viewsCount+1)
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
                    {/* <IconButton onClick={handleLikes}>
                        <ThumbUpIcon fontSize="small" sx={{color: isLiked ? "" : ""}}/>
                    </IconButton> */}
                    <Checkbox onClick={handleLikes} onChange={() => setIsLiked(!isLiked)} checked={isLiked} icon={<ThumbUpAltOutlinedIcon fontSize="small"/>} checkedIcon={<ThumbUpIcon fontSize="small"/>}/>
                    <Typography>{likesLength}</Typography>
                </Stack>
                <Stack direction="row">
                    <ViewKanbanIcon fontSize="small" />
                    <Typography>{viewsCount}</Typography>
                </Stack>
                <Date dateString={created_at} />
            </Stack>
        </Stack>
    );
}
