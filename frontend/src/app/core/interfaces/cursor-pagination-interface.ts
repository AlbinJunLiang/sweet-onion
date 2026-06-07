export interface CursorPaginationData {
    nextCursor: string | null;
    hasMore: boolean;
    limit: number | 10;
}