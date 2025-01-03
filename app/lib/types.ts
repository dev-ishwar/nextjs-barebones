export type ImageProps = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
    blurDataUrl?: string 
}

export type Posts = {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export type Albums = Omit<Posts, 'body'>;

export type Todo = {
    userId: string;
    id: string;
    title: string;
    completed: boolean;
}