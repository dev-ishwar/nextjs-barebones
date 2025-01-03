import { ImageProps } from "@/app/lib/types";

// Generates blur placeholders
const cache = new Map<ImageProps, string>();
export const getBase64ImageUrl = async (image: ImageProps): Promise<string> => {
    let url = cache.get(image);
    if (url) return url;

    const response = await fetch(`https://picsum.photos/id/${image.id}/80?grayscale&blur=2`)

    const buffer = await response.arrayBuffer();
    url = `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
    cache.set(image, url);
    return url;
}