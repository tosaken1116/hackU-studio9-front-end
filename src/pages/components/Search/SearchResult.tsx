import { useMediaQuery } from "@mui/material";
import DemandsWrapper from "../Demand/Demands";

export default function SearchResult() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");

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
        <DemandsWrapper
            maxHeight={matches ? "65vh" : "54vh"}
            demands={demodata}
        ></DemandsWrapper>
    );
}
