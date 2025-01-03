import Image from "next/image";
import { fetchImageList } from "@/app/lib/data";
import Link from "next/link";

export default async function PhotosPage() {
    const imageList = await fetchImageList();
    return (
        <main className="p-4">
            <Link href={'/'} className="underline">Back</Link>
            <p className="text-center my-5 bg-white/80 rounded-sm py-2 text-black">Click on the image below to access the dynamic routes.</p>
            <div className="grid grid-cols-3 gap-2 px-5">
                {
                    imageList.map((img) => (
                        <Link href={`/photos/${img.id}`} key={img.id} className="group">
                            <Image
                                src={img.download_url}
                                width={720}
                                height={480}
                                alt=""
                                className="w-full h-full rounded-md aspect-[3/2] object-cover transition group-hover:scale-[1.05] brightness-60 group-hover:brightness-100 group-hover:shadow-lg group-hover:shadow-slate-400"
                            />
                        </Link>
                    ))
                }
            </div>
        </main>
    )
}