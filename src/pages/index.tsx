import { Box, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import DemandDetail from "./components/Demand/DemandDetail";
import DemandDetailModal from "./components/Demand/DemandDetailModal";
import DemandsWrapper from "./components/Demand/Demands";

export default function TopPage() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const demodata = [
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "unResolved",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "resolved",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
        {
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            viewNumber: "1",
            status: "inProgress",
            caption: "test caption",
        },
    ];
    return (
        <Box>
            <Stack direction="row">
                <DemandsWrapper
                    maxHeight={matches ? "85vh" : "74vh"}
                    demands={demodata}
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
