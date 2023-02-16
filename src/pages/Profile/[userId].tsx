import SettingsIcon from "@mui/icons-material/Settings";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
    Box,
    Button,
    IconButton,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { useRouter } from "next/router";
import React, { useState } from "react";
export default function Profile() {
    const router = useRouter();
    const [isConfigMode, setIsConfigMode] = useState(false);
    const { data: session, status } = useSession();
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.ctrlKey) {
            if (event.key == "Enter") {
                setIsConfigMode(false);
            }
        }
    };
    const demodata = {
        userName: "testuser",
        userIcon: "/test",
        likeNumber: "1200",
        selfIntroduction: "i am champion",
    };
    return (
        <Box sx={{ height: matches ? "85vh" : "74vh" }}>
            <Stack p={2} direction="row" spacing={3}>
                <Image
                    src={
                        router.query.userId == "my"
                            ? String(session?.user?.image)
                            : demodata.userIcon
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
                            : demodata.userIcon}
                    </Typography>
                    <Stack direction="row" px={2}>
                        <ThumbUpIcon fontSize="small" />
                        <Typography variant="body1">
                            {demodata.likeNumber}
                        </Typography>
                    </Stack>
                    {isConfigMode ? (
                        <Stack spacing={2}>
                            <TextField
                                onKeyDown={handleKeyDown}
                                multiline
                                defaultValue={demodata.selfIntroduction}
                            ></TextField>
                            <Box>
                                <Button
                                    onClick={() => setIsConfigMode(false)}
                                    variant="contained"
                                    sx={{ px: 2, borderRadius: "100px" }}
                                >
                                    完了
                                </Button>
                            </Box>
                        </Stack>
                    ) : (
                        <Typography variant="body1" p={2}>
                            {demodata.selfIntroduction}
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
