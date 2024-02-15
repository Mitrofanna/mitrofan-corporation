export type TPost = {
    id: number,
    parent_post_id: number | null,
    type: number,
    title: string,
    cite?: string,
    content: string,
    views: number,
    likes: number,
    reposts: number,
    comments: number,
    created_at: string,
    updated_at: string,
    author: {
        id: number,
        name: string,
        image: string
    },
    original_author: null | {
        id: number,
        name: string,
        image: string
    }
};