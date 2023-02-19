import SettingsIcon from "@mui/icons-material/Settings";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
    Box,
    Button,
    IconButton,
    Stack,
    Switch,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../Hooks/hooks";
import { updateProfileProps } from "../../Type/type";
export default function Profile() {
    const router = useRouter();
    const [isConfigMode, setIsConfigMode] = useState(false);
    const { data: session, status } = useSession();
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const { profile, loading, handleUpdateProfile } = useProfile();
    const [changeProfile, updateChangeProfile] = useState<updateProfileProps>({
        description: profile?.description,
        isEmailPublic: profile?.isEmailPublic,
    });

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.ctrlKey) {
            if (event.key == "Enter") {
                handleUpdateProfile(changeProfile);
                setIsConfigMode(false);
            }
        }
    };
    useEffect(() => {
        updateChangeProfile({
            description: profile?.description,
            isEmailPublic: profile?.isEmailPublic,
        });
    }, [profile]);
    if (loading) {
        return <></>;
    }
    return (
        <Box sx={{ height: matches ? "85vh" : "74vh" }}>
            <Stack p={2} direction="row" spacing={3}>
                <Image
                    src={
                        router.query.userId == "my"
                            ? String(session?.user?.image)
                            : profile.picture
                    }
                    width={64}
                    height={64}
                    style={{ borderRadius: "9999px" }}
                    alt="icon"
                ></Image>
                <Stack flexGrow={1} spacing={2}>
                    <Typography variant="h3">
                        {router.query.userId == "my"
                            ? session?.user?.name
                            : profile.name}
                    </Typography>
                    <Stack direction="row" px={2}>
                        <ThumbUpIcon fontSize="small" />
                        <Typography variant="body1">
                            {profile.likeNumber}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} p={2}>
                        <Typography>メールアドレス</Typography>
                        {isConfigMode ? (
                            <Stack direction="row" spacing={2}>
                                <Typography>公開する</Typography>
                                <Switch
                                    value={changeProfile.isEmailPublic}
                                    onChange={() => {
                                        updateChangeProfile({
                                            ...changeProfile,
                                            isEmailPublic:
                                                !changeProfile.isEmailPublic,
                                        });
                                    }}
                                ></Switch>
                            </Stack>
                        ) : (
                            <Typography>
                                {profile.isEmailPublic
                                    ? profile.email
                                    : "非公開"}
                            </Typography>
                        )}
                    </Stack>
                    {isConfigMode ? (
                        <Stack spacing={2}>
                            <TextField
                                onKeyDown={handleKeyDown}
                                multiline
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    updateChangeProfile({
                                        ...changeProfile,
                                        description: event.target.value,
                                    });
                                }}
                                value={changeProfile.description}
                            ></TextField>
                            <Box>
                                <Button
                                    onClick={() => {
                                        handleUpdateProfile(changeProfile);
                                        setIsConfigMode(false);
                                    }}
                                    variant="contained"
                                    sx={{ px: 2, borderRadius: "100px" }}
                                >
                                    保存
                                </Button>
                            </Box>
                        </Stack>
                    ) : (
                        <Typography variant="body1" p={2}>
                            {changeProfile.description}
                        </Typography>
                    )}
                </Stack>
                {router.query.userId == "my" && (
                    <Box>
                        <IconButton
                            sx={{
                                "&:hover": {
                                    animation: "spin 1s linear infinite",
                                },
                                "@keyframes spin": {
                                    "0%": {
                                        transform: "rotate(0deg)",
                                    },
                                    "100%": {
                                        transform: "rotate(360deg)",
                                    },
                                },
                            }}
                            onClick={() => setIsConfigMode(!isConfigMode)}
                        >
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                )}
            </Stack>
        </Box>
    );
}
