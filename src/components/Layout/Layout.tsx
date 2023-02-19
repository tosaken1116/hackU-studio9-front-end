import { Box, Stack, useMediaQuery } from "@mui/material";
import { LayoutProps } from "../../Type/type";
import BottomBar from "../BottomBar/BottomBar";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }: LayoutProps) {
    const matches: boolean = useMediaQuery("(min-width:1000px)");

    return (
        <Box>
            <Header></Header>
            <Stack direction={matches ? "row" : "column"} spacing={0}>
                {matches && <Sidebar></Sidebar>}
                <Box flexGrow={1}>{children}</Box>
                {!matches && <BottomBar></BottomBar>}
            </Stack>
        </Box>
    );
}
