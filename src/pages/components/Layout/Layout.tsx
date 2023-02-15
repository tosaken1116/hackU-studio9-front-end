import { Box } from "@mui/material";
import { LayoutProps } from "../../../Type/type";
import Header from "../Header/Header";

export default function Layout({ children }: LayoutProps) {
    return (
        <Box>
            <Header></Header>
            <Box>{children}</Box>
        </Box>
    );
}
