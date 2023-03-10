import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Paper,
    Popover,
    Radio,
    RadioGroup,
    Stack,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useFilterProps } from "../../Hooks/hooks";
import { PopOverProps, resolvedType } from "../../Type/type";

export default function FilterPopover({
    anchorElement,
    closePopOver,
}: PopOverProps) {
    const { setSearchParams, isReady, query } = useFilterProps();
    const [selectedFilterCategory, setSelectedFilterCategory] =
        useState<resolvedType>([]);
    const handleCheckBoxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (
            event.target.checked &&
            (event.target.name == "resolved" ||
                event.target.name == "unResolved" ||
                event.target.name == "inProgress")
            // ["resolved", "unResolved", "inProgress"].includes(event.target.name)
            // ["resolved", "unResolved", "inProgress"].some(
            //     (value) => value == event.target.name
            // )
        ) {
            setSelectedFilterCategory([
                ...selectedFilterCategory,
                event.target.name,
            ]);
        } else {
            setSelectedFilterCategory(
                selectedFilterCategory.filter(
                    (label) => label !== event.target.name
                )
            );
        }
    };
    const handleRadioButtonChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchParams({ [event.target.name]: event.target.value });
    };
    useEffect(() => {
        setSearchParams({ status: selectedFilterCategory });
    }, [selectedFilterCategory]);
    return (
        <Popover
            open={Boolean(anchorElement)}
            onClose={closePopOver}
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
        >
            <Paper>
                <Stack p={2} spacing={3}>
                    <Stack>
                        <Typography>????????????</Typography>
                        <Stack>
                            <FormControlLabel
                                label="????????????"
                                control={
                                    <Checkbox
                                        name="resolved"
                                        checked={selectedFilterCategory.some(
                                            (selectedFilter) =>
                                                selectedFilter == "resolved"
                                        )}
                                        onChange={handleCheckBoxChange}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="?????????"
                                control={
                                    <Checkbox
                                        name="inProgress"
                                        checked={selectedFilterCategory.some(
                                            (selectedFilter) =>
                                                selectedFilter == "inProgress"
                                        )}
                                        onChange={handleCheckBoxChange}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="?????????"
                                control={
                                    <Checkbox
                                        name="unResolved"
                                        checked={selectedFilterCategory.some(
                                            (selectedFilter) =>
                                                selectedFilter == "unResolved"
                                        )}
                                        onChange={handleCheckBoxChange}
                                    />
                                }
                            />
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                ?????????????????????
                            </FormLabel>
                            <RadioGroup
                                defaultValue="created_at"
                                name="sort"
                                onChange={handleRadioButtonChange}
                            >
                                <FormControlLabel
                                    value="created_at"
                                    name="sort"
                                    control={<Radio />}
                                    label="??????"
                                />
                                <FormControlLabel
                                    value="views"
                                    name="sort"
                                    control={<Radio />}
                                    label="?????????"
                                />
                                <FormControlLabel
                                    value="title"
                                    name="sort"
                                    control={<Radio />}
                                    label="????????????"
                                />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                ????????????
                            </FormLabel>
                            <RadioGroup
                                defaultValue="asc"
                                name="order"
                                onChange={handleRadioButtonChange}
                            >
                                <FormControlLabel
                                    value="asc"
                                    name="order"
                                    control={<Radio />}
                                    label="??????"
                                />
                                <FormControlLabel
                                    value="desc"
                                    name="order"
                                    control={<Radio />}
                                    label="??????"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                </Stack>
            </Paper>
        </Popover>
    );
}
