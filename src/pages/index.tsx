import { Box, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import DemandDetail from "./components/Demand/DemandDetail";
import DemandDetailModal from "./components/Demand/DemandDetailModal";
import Demands from "./components/Demand/Demands";

export default function TopPage() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Box>
            <Stack direction="row">
                <Demands></Demands>
                {/* <Button onClick={() => setIsModalOpen(true)}>open</Button> */}
                {/* <Divider orientation="vertical"></Divider> */}
                {matches && <DemandDetail />}
            </Stack>
            <DemandDetailModal
                isModalOpen={isModalOpen}
                modalClose={() => setIsModalOpen(false)}
            />
        </Box>
    );
}
