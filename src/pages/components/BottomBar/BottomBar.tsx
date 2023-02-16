import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
export default function BottomBar() {
    const router = useRouter();
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
                    <Grid item xs={4}>
                        <Link href="/">
                            {router.pathname == "/" ? (
                                <HomeIcon />
                            ) : (
                                <HomeOutlinedIcon />
                            )}
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link href="Search">
                            {router.pathname == "/Search" ? (
                                <SearchIcon />
                            ) : (
                                <SearchOutlinedIcon />
                            )}
                        </Link>
                    </Grid>

                    <Grid item xs={4}>
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
        </Box>
    );
}
