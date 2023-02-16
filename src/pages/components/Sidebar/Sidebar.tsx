import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Grid, Paper, Slide } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Sidebar() {
    const router = useRouter();
    const [isHover, setIsHover] = useState(false);
    return (
        <Box
            sx={{
                width: "60px",
                transitionDelay: "300",
                msTransitionDelay: "2000",
                animationDuration: "300",
                transition: "width 1s ease-in-out 0s",
                position: "static",
                marginTop: "auto",
                flexShrink: 1,
            }}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Slide direction="right" in={isHover}>
                <Paper>
                    <Grid
                        container
                        spacing={5}
                        sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: "85vh",
                        }}
                    >
                        <Grid item xs={8}>
                            <Link href="/">
                                {router.pathname == "/" ? (
                                    <HomeIcon />
                                ) : (
                                    <HomeOutlinedIcon />
                                )}
                            </Link>
                        </Grid>
                        <Grid item xs={8}>
                            <Link href="Search">
                                {router.pathname == "/Search" ? (
                                    <SearchIcon />
                                ) : (
                                    <SearchOutlinedIcon />
                                )}
                            </Link>
                        </Grid>
                        <Grid item xs={8}>
                            <Link href="/Profile/my">
                                {router.pathname == "/Profile/[userId]" ? (
                                    <PersonIcon />
                                ) : (
                                    <PermIdentityIcon />
                                )}
                            </Link>
                        </Grid>
                        <Grid item xs={8}>
                            <Link href="/DirectMessage">
                                {router.pathname == "/DirectMessage" ? (
                                    <EmailIcon />
                                ) : (
                                    <EmailOutlinedIcon />
                                )}
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Slide>
        </Box>
    );
}
