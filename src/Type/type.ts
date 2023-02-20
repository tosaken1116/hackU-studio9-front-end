export type LayoutProps = {
    children: React.ReactNode;
};
export type DemandRowType = {
    createdAt: string;
    caption: string;
    author: string;
    goodNumber: string;
    title: string;
    views: string;
    id:string
    status: "inProgress" | "resolved" | "unResolved" | String;
};
export type CommentRowType = {
    createdAt:string,
    author: { name:string},
    caption:string,
}

export type DemandDetailModalProps = {
    isModalOpen: boolean;
    modalClose: () => void;
};
export type PopOverProps = {
    closePopOver: () => void;
    anchorElement: HTMLButtonElement | null;
};
export type DemandsType = {
    maxHeight: string
    demands: DemandRowType[]
    openModal:()=>void
}
export type ideaIdProps = {
    ideaId: string
}
export type SearchWordProps = {
    searchWord: string;
};
export type SearchResultProps = {
    openModal:()=>void
}
