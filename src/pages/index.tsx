import { useQuery } from "@apollo/client";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import DemandDetail from "../components/Demand/DemandDetail";
import DemandDetailModal from "../components/Demand/DemandDetailModal";
import DemandsWrapper from "../components/Demand/Demands";
import { getHomeDemandsDoc } from "../Document/Document";

export default function TopPage() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, loading } = useQuery(getHomeDemandsDoc);
    if (loading) {
        return <></>;
    }
    return (
        <Box>
            <Stack
                direction="row"
                sx={{
                    height: matches ? "85vh" : "74vh",
                    width: matches ? "100%" : "50%",
                }}
            >
                <DemandsWrapper
                    maxHeight={matches ? "85vh" : "74vh"}
                    demands={data?.ideas}
                    openModal={() => setIsModalOpen(true)}
                ></DemandsWrapper>
                {matches && <DemandDetail />}
            </Stack>
            {!matches && (
                <DemandDetailModal
                    isModalOpen={isModalOpen}
                    modalClose={() => setIsModalOpen(false)}
                />
            )}
        </Box>
    );
}
