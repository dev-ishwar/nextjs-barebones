import { fetchAlbums } from "@/app/lib/data"
import Link from "next/link";

export default async function Page() {
    const albums = await fetchAlbums();
    const filteredAlbums = albums.slice(0, 10);
    return (
        <main>
            <h2>Albums Page</h2>
            <div>
                {
                    filteredAlbums.map((album, index) => (
                        <div className="my-1 bg-gray-700 pl-1" key={index}>
                            <Link href={`/users/album/${album.id}`}>
                                <h3>{album.title}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}