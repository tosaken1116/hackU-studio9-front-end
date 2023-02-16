import { Paper, Popover, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ProfilePopOverProps } from "./type";

export default function ProfilePopOver({
    anchorElement,
    closePopOver,
}: ProfilePopOverProps) {
    const userData = {
        userName: "test",
        resolveNumber: 1,
        iconPath: "",
    };
    return (
        <Popover
            open={Boolean(anchorElement)}
            onClose={closePopOver}
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <Paper sx={{ width: "240px", height: "140px" }}>
                <Stack direction="row" p={2} spacing={2}>
                    <Image
                        width={32}
                        height={32}
                        src={userData.iconPath}
                        alt="icon"
                    ></Image>
                    <Stack spacing={1}>
                        <Typography variant="h6">
                            {userData.userName}
                        </Typography>
                        <Stack spacing={0.5} pl={0.5}>
                            <Typography variant="caption">
                                解決件数:{userData.resolveNumber}件
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Paper>
        </Popover>
    );
}
