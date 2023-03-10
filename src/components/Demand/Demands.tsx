import { Divider, List, ListItem, Stack, useMediaQuery } from "@mui/material";
import { DemandsType } from "../../Type/type";
import DemandRow from "./DemandRow";

const Demands = ({ maxHeight, demands, openModal }: DemandsType) => {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    return (
        <Stack sx={{ width: "100%" }}>
            <List sx={{ overflow: "auto", maxHeight: maxHeight }}>
                {demands?.map((demand, index) => (
                    <ListItem key={index}>
                        <DemandRow
                            {...demand}
                            openModal={openModal}
                        ></DemandRow>
                        <Divider></Divider>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
};

export default function DemandsWrapper(demandsProps: DemandsType) {
    return <Demands {...demandsProps}></Demands>;
}
