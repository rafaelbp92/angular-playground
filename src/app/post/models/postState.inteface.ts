import { PostInterface } from "./post.iterface";

export interface PostStateInterface {
    isLoading: boolean;
    posts: PostInterface[];
    error: string | null;
}