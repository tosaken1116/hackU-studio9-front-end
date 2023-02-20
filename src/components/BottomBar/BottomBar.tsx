import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Grid, IconButton, Paper } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import AlertPopover from "../Alert/LoginAlert";
export default function BottomBar() {
    const router = useRouter();
    const { data: session, status } = useSession();

    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);

    return (
        <Box sx={{ height: "10vh" }}>
            <Paper sx={{ height: "100%" }}>
                <Grid
                    py={2}
                    container
                    sx={{
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Grid item xs={3}>
                        <IconButton href="/">
                            {router.pathname == "/" ? (
                                <HomeIcon />
                            ) : (
                                <HomeOutlinedIcon />
                            )}
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton href="Search">
                            {router.pathname == "/Search" ? (
                                <SearchIcon />
                            ) : (
                                <SearchOutlinedIcon />
                            )}
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton
                            onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                            ) => {
                                if (!Boolean(session)) {
                                    setAnchorElement(event.currentTarget);
                                } else {
                                    router.push("/Profile/my");
                                }
                            }}
                        >
                            {router.pathname == "/Profile/[userId]" ? (
                                <PersonIcon />
                            ) : (
                                <PermIdentityIcon />
                            )}
                        </IconButton>
                        <AlertPopover
                            anchorElement={anchorElement}
                            closePopOver={() => setAnchorElement(null)}
                        ></AlertPopover>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton
                            onClick={(
                                event: React.MouseEvent<HTMLButtonElement>
                            ) => {
                                if (!Boolean(session)) {
                                    setAnchorElement(event.currentTarget);
                                } else {
                                    router.push("/DirectMessage");
                                }
                            }}
                        >
                            {router.pathname == "/DirectMessage" ? (
                                <EmailIcon />
                            ) : (
                                <EmailOutlinedIcon />
                            )}
                        </IconButton>
                        <AlertPopover
                            anchorElement={anchorElement}
                            closePopOver={() => setAnchorElement(null)}
                        ></AlertPopover>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
