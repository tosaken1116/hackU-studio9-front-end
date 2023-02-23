import { Box, Typography } from "@mui/material";
import { DemandRowType } from "../../Type/type";

export default function Status({ status }: Pick<DemandRowType, "status">) {
    return (
        <Box
            sx={{
                backgroundColor:
                    status == "inProgress"
                        ? "orange"
                        : status == "resolved"
                        ? "green"
                        : "red",
                borderRadius: "100px",
                width: 80,
                height: 30,
                textAlign: "center",
                color: "white",
                p: 0.5,
            }}
        >
            <Typography sx={{ pt: "auto" }}>
                {status == "inProgress"
                    ? "進行中"
                    : status == "resolved"
                    ? "解決"
                    : "未解決"}
            </Typography>
        </Box>
    );
}
