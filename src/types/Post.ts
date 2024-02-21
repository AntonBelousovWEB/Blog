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
    file: Photo;
    tagsList: string[];
}

interface User {
    name: string
}

export interface Comment {
    id: number,
    content: string,
    user: User
}