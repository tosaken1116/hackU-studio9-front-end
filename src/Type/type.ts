export type LayoutProps = {
    children: React.ReactNode;
};
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
export type ProfilePopOverProps = {
    closePopOver: () => void;
    anchorElement: HTMLButtonElement | null;
};
export type DemandsType = {
    maxHeight: string
    demands: DemandRowType[]

}