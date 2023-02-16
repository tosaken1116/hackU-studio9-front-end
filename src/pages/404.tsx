import { Box, Stack, Typography } from "@mui/material";

export default function CustomErrorPage() {
    return (
        <Box>
            <Stack sx={{ textAlign: "center" }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="body1">
                    お探しのページは見つかりませんでした＼(・ω・＼)(／・ω・)／
                </Typography>
            </Stack>
        </Box>
    );
}
