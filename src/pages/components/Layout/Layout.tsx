import { Box, Stack } from "@mui/material";
import { LayoutProps } from "../../../Type/type";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }: LayoutProps) {
    return (
        <Box>
            <Header></Header>
            <Stack direction="row">
                <Sidebar></Sidebar>
                <Box flexGrow={1}>{children}</Box>
            </Stack>
        </Box>
    );
}
