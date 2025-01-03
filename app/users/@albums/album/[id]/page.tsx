import { fetchAlbums } from "@/app/lib/data";
import Link from "next/link";

export default async function Album({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const albums = await fetchAlbums();
    const currentAlbum = albums.find(album => album.id == id)

    return (
        <main className="grid place-content-center">
            <h2>Album</h2>
            <div className="flex flex-col gap-2 border border-slate-700 rounded-md my-4">
                <h1 className="bg-slate-700 p-2">{currentAlbum?.title}</h1>
                <p className="p-2">UserId: {currentAlbum?.userId}</p>
            </div>
            <Link href={'/users'} className="underline">Back</Link>
        </main>
    )
}