import { Box, TextField } from "@mui/material";
import { useSearchParams } from "../../Hooks/hooks";

export default function SearchBox() {
    const { handleSearchInput } = useSearchParams();
    return (
        <Box p={2} sx={{ height: "20vh" }}>
            <TextField
                placeholder="検索"
                onChange={handleSearchInput}
            ></TextField>
        </Box>
    );
}
