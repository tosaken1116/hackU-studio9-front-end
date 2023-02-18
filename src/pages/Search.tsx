import { Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import DemandDetail from "./components/Demand/DemandDetail";
import DemandDetailModal from "./components/Demand/DemandDetailModal";
import SearchBox from "./components/Search/SearchBox";
import SearchResult from "./components/Search/SearchResult";

export default function Search() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Stack direction="row">
            <Stack sx={{ width: "50%" }}>
                <SearchBox />
                <SearchResult openModal={() => setIsModalOpen(true)} />
            </Stack>
            {matches && <DemandDetail />}
            {!matches && (
                <DemandDetailModal
                    isModalOpen={isModalOpen}
                    modalClose={() => setIsModalOpen(false)}
                />
            )}
        </Stack>
    );
}
