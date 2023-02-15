import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";
import {} from "@mui/system";
import { DemandDetailModalProps } from "../../Types/type";
import DemandDetail from "./DemandDetail";
export default function DemandDetailModal({
    isModalOpen,
    modalClose,
}: DemandDetailModalProps) {
    return (
        <Modal
            open={isModalOpen}
            onClose={modalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ position: "relative" }}>
                <IconButton
                    sx={{ position: "absolute" }}
                    onClick={() => modalClose()}
                >
                    <CloseIcon />
                </IconButton>
                <DemandDetail></DemandDetail>
            </Box>
        </Modal>
    );
}
