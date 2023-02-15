import { Box } from "@mui/material";
import Header from "../Header/Header";
import { LayoutProps } from "./type";

export default function Layout({ children }: LayoutProps) {
    return (
        <Box>
            <Header></Header>
            <Box>{children}</Box>
        </Box>
    );
}
