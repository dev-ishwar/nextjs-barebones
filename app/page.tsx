import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[30px_30px_auto] gap-7 items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>A basic barebones app to demonstrate the NextJS concepts</h2>
      <div className="flex gap-10">
        <Link href={'/photos'} className="bg-white/80 border border-gray-800 px-4 py-2 rounded-md text-black/90 hover:text-black hover:bg-white">
          Gallery
        </Link>
        <Link href={'/users'} className="bg-white/80 border border-gray-800 px-4 py-2 rounded-md text-black/90 hover:text-black hover:bg-white">
          Users
        </Link>
      </div>
      <Link href={`/photos/${5}`}>
        <Image
          src={`https://picsum.photos/id/5/900/700`}
          width={700}
          height={500}
          alt=""
          className="w-full"
        />
      </Link>
    </div>
  );
}
