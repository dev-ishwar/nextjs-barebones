import { Albums, ImageProps, Posts } from "@/app/lib/types";
import { getBase64ImageUrl } from "@/app/lib/utils";

let cachedImageList = [];
export const fetchImageList = async (): Promise<ImageProps[]> => {
    const result = await fetch(`https://picsum.photos/v2/list`);
    const images: ImageProps[] = await result.json();
    // const blurImagePromises = images.map((img: ImageProps) => getBase64ImageUrl(img));
    // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
    // for (let i = 0; i < images.length; i++) {
    //     images[i].blurDataUrl = imagesWithBlurDataUrls[i]
    // }
    cachedImageList = images;
    return cachedImageList;
}

export const fetchPosts = async (): Promise<Posts[]> => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await result.json();
    return posts;
}

export const fetchAlbums = async (): Promise<Albums[]> => {
    const result = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await result.json();
    return albums;
}