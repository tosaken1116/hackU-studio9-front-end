import { Paper, Popover, useMediaQuery } from "@mui/material";
import { PopOverProps } from "../../../Type/type";

export default function AlertPopover({
    anchorElement,
    closePopOver,
}: PopOverProps) {
    const matches: boolean = useMediaQuery("(min-width:1000px)");

    return (
        <Popover
            open={Boolean(anchorElement)}
            onClose={closePopOver}
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: "top",
                horizontal: matches ? "right" : "center",
            }}
            transformOrigin={{
                vertical: matches ? "top" : "bottom",
                horizontal: matches ? "left" : "center",
            }}
        >
            <Paper
                sx={{
                    width: "200px",
                    height: "100px",
                    padding: 3,
                    textAlign: "center",
                }}
            >
                ログインすると利用可能になります
            </Paper>
        </Popover>
    );
}
