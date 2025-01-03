import { fetchPosts } from "@/app/lib/data";
import Link from "next/link";

export default async function Post({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const posts = await fetchPosts();
    const currentPost = posts.find(post => post.id == id)

    return (
        <main className="grid place-content-center">
            <h2>Post</h2>
            <div className="flex flex-col gap-2 border border-slate-700 rounded-md my-4">
                <h1 className="bg-slate-700 p-2">{currentPost?.title}</h1>
                <p className="p-2">UserId: {currentPost?.userId}</p>
            </div>
            <Link href={'/users'} className="underline">Back</Link>
        </main>
    )
}