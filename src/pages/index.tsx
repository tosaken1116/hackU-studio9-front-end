import { useQuery } from "@apollo/client";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { getHomeDemandsDoc } from "../Document/Document";
import DemandDetail from "./components/Demand/DemandDetail";
import DemandDetailModal from "./components/Demand/DemandDetailModal";
import DemandsWrapper from "./components/Demand/Demands";

export default function TopPage() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, loading } = useQuery(getHomeDemandsDoc);

    return (
        <Box>
            <Stack direction="row" sx={{ height: matches ? "85vh" : "74vh" }}>
                <DemandsWrapper
                    maxHeight={matches ? "85vh" : "74vh"}
                    demands={data?.Idea}
                    openModal={() => setIsModalOpen(true)}
                ></DemandsWrapper>
                {matches && <DemandDetail />}
            </Stack>
            <DemandDetailModal
                isModalOpen={isModalOpen}
                modalClose={() => setIsModalOpen(false)}
            />
        </Box>
    );
}
