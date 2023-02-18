import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useSearch } from "../../../Hooks/hooks";
import { SearchResultProps } from "../../../Type/type";
import DemandsWrapper from "../Demand/Demands";

export default function SearchResult({ openModal }: SearchResultProps) {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const { Idea } = useSearch();
    return (
        <DemandsWrapper
            maxHeight={matches ? "65vh" : "54vh"}
            demands={Idea}
            openModal={openModal}
        ></DemandsWrapper>
    );
}
