import { CursorPaginationData } from "./cursor-pagination-interface";

export interface ChatResponse {
    id: string;
    creatorId: string;
    context?: string;
    title?: string;
    type: 'conversation' | 'interview';
    visibility: 'PRIVATE' | 'PUBLIC';
    status?: boolean;
}

export interface IChat {
    id: string;
    creatorId: string;
    title?: string;
    type: 'conversation' | 'interview';
    visibility: 'PRIVATE' | 'PUBLIC';
    status?: boolean;

}

export interface ChatCursorPaginated {
    data: ChatResponse[];
    pagination: CursorPaginationData;
}