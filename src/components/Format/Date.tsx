import { Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import { TimeProps } from "../../Type/type";
export const Date = ({ dateString }: TimeProps) => {
    const date = parseISO(dateString);
    return (
        <Typography variant="caption" sx={{ placeSelf: "center" }}>
            {format(date, "yyyy/MM/dd HH:mm")}
        </Typography>
    );
};
