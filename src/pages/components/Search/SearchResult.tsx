import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import DemandsWrapper from "../Demand/Demands";

export default function SearchResult() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const demodata = [
        {
            id: "1",
            title: "testtitle",
            createdAt: "2022-02-16",
            author: "test",
            goodNumber: "1",
            views: "1",
            status: "unResolved",
            caption: "test caption",
        },
    ];
    return (
        <DemandsWrapper
            maxHeight={matches ? "65vh" : "54vh"}
            demands={demodata}
            openModal={() => setIsModalOpen(true)}
        ></DemandsWrapper>
    );
}
