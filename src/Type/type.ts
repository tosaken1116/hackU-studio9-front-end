export type LayoutProps = {
    children: React.ReactNode;
};
export type DemandRowType = {
    created_at: string;
    caption: string;
    author: string;
    goodNumber: string;
    title: string;
    views: string;
    id:string
    status: "inProgress" | "resolved" | "unResolved" | String;
    likes: {
        user: {
            email: string
        }
    }[]
};
export type CommentRowType = {
    created_at:string,
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
export type updateProfileProps = {
    description: string
    isEmailPublic:boolean
}
export type TimeProps = {
    dateString:string
}
export type DebounceExecuteProps = {
    keyword: string;
    timeOutMillSec: number;
};