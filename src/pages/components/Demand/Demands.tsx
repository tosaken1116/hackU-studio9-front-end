import { Divider, List, ListItem, Stack, useMediaQuery } from "@mui/material";
import DemandRow from "./DemandRow";

export default function Demands() {
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
        <Stack sx={{ width: matches ? "50%" : "100%" }}>
            <List sx={{ overflow: "auto", maxHeight: "85vh" }}>
                {demodata.map((demand, index) => (
                    <ListItem key={index}>
                        <DemandRow {...demand}></DemandRow>
                        <Divider></Divider>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
