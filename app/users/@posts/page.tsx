import { fetchPosts } from "@/app/lib/data"
import Link from "next/link";

export default async function Page() {
    const posts = await fetchPosts();
    const filtered = posts.slice(0, 10);

    return (
        <main>
            <h2>Posts</h2>
            <div>
                {
                    filtered.map((post, index) => (
                        <div className="my-1 bg-gray-700 pl-1" key={index}>
                            <Link href={`/users/post/${post.id}`}>
                                <h3>{post.title}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}