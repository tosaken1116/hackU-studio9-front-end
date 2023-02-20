import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
export default function Header() {
    const { data: session, status } = useSession();
    return (
        <Paper sx={{ height: "15vh" }}>
            <Stack direction="row" p={2} sx={{ position: "static" }}>
                <Typography variant="h3">サービス名</Typography>
                <Box flexGrow={1}></Box>
                {status === "authenticated" ? (
                    <Stack>
                        <Stack direction="row" spacing={1} alignSelf="center">
                            <Image
                                src={String(session?.user?.image)}
                                alt="icon"
                                width={32}
                                height={32}
                                style={{ borderRadius: "9999px" }}
                            />
                            <Typography variant="h6">
                                {session?.user?.name}さん
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Box flexGrow={1} />

                            <Button
                                size="small"
                                startIcon={<LogoutIcon />}
                                onClick={() => signOut()}
                            >
                                ログアウト
                            </Button>
                        </Stack>
                    </Stack>
                ) : (
                    <Box alignSelf="center">
                        <Button
                            onClick={() => signIn()}
                            startIcon={<LoginIcon />}
                        >
                            ログイン
                        </Button>
                    </Box>
                )}
            </Stack>
        </Paper>
    );
}
