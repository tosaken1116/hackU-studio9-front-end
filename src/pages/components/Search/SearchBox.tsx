import { Box, TextField } from "@mui/material";

export default function SearchBox() {
    return (
        <Box p={2} sx={{ height: "20vh" }}>
            <TextField placeholder="検索"></TextField>
        </Box>
    );
}
