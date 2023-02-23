import { Box, Stack, TextField } from "@mui/material";
import { useSearchParams } from "../../Hooks/hooks";
import Filter from "../Filter/Filter";

export default function SearchBox() {
    const { handleSearchInput } = useSearchParams();
    return (
        <Box p={2} sx={{ height: "20vh" }}>
            <Stack direction="row">
                <TextField
                    placeholder="検索"
                    onChange={handleSearchInput}
                ></TextField>
                <Box flexGrow={1}></Box>
                <Filter></Filter>
            </Stack>
        </Box>
    );
}
