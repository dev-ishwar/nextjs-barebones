'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const pathname = usePathname();
    
    useEffect(() => {
        setShowLogin(pathname !== '/login')
    }, [pathname])

    return (
        <nav className="w-full bg-slate-900 flex justify-between p-2">
            <Link href={'/'}>
                <Image
                    src={'/next.svg'}
                    alt=""
                    width={50}
                    height={50}
                />
                <span className="text-white">BareBones</span>
            </Link>
            {
                showLogin &&
                <Link href={'/login'} className="border border-white text-white px-2 py-1 rounded-md">Login</Link>
            }
        </nav>
    )
}