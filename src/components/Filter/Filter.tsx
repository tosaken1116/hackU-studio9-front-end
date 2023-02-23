import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import FilterPopover from "./FilterPopover";
export default function Filter() {
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);
    return (
        <Box>
            <IconButton
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    setAnchorElement(event.currentTarget)
                }
            >
                <FilterListIcon />
            </IconButton>
            <FilterPopover
                anchorElement={anchorElement}
                closePopOver={() => setAnchorElement(null)}
            ></FilterPopover>
        </Box>
    );
}
