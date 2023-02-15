export type DemandRowType = {
    createdAt: string;
    caption: string;
    author: string;
    goodNumber: string;
    title: string;
    viewNumber: string;
    status: "inProgress" | "resolved" | "unResolved" | String;
};

export type DemandDetailModalProps = {
    isModalOpen: boolean;
    modalClose: () => void;
};
