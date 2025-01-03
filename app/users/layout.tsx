'use client';

import { useSelectedLayoutSegments } from "next/navigation";

export default function UsersLayout({
    children,
    albums,
    posts,
}: {
    children: React.ReactNode;
    albums: React.ReactNode;
    posts: React.ReactNode;

}) {
    const currentSegment = useSelectedLayoutSegments('albums');
    const currentSegmentP = useSelectedLayoutSegments('posts');
    console.log('cureseg: ', currentSegment, currentSegmentP)
    return (
        <main className="p-2">
            <p className="bg-slate-400 text-center">Users Layout</p>
            <div className="border py-3 border-slate-400 text-center">
                {children}
            </div>
            <div className="text-orange-950 bg-green-500 text-center">Parallel Routes</div>
            <div className="flex pt-5 border-slate-400 border">
                <div className="flex-1 p-3">
                    {albums}
                </div>
                <div className="flex-1 p-3">
                    {posts}
                </div>
            </div>
        </main>
    )
}