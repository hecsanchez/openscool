import {User} from "@/types/User";

export interface Post {
    id: string;
    name: string;
    metadata: PostMetadata;
    postType: string;
    user: User;
    createdAt: string;
}

export interface PostMetadata {
    action: number;
    attachmentsEdit: number;
    comments: number;
    content: string;
    contentEdit: number;
    contributors: string; // JSON string of Contributor[]
    hasNewComments: number;
    imagePreview: string;
    imagePreviewSmall: string;
    labels: string;
    lastComment: number;
    pinned: number;
    rca: string;
    title: string;
    titleEdit: number;
    upvotes: number;
    videoLinks: string;
    videoLinksData: string; // JSON string of VideoLink[]
    videoLinksEdit: number;
}