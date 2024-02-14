interface Photo {
    filename: string;
    id: number;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    CreatedAt: string;
    photo: Photo;
}