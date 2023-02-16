import { Box } from "@mui/material";
import SearchBox from "./components/Search/SearchBox";
import SearchResult from "./components/Search/SearchResult";

export default function Search() {
    return (
        <Box>
            <SearchBox />
            <SearchResult />
        </Box>
    );
}
