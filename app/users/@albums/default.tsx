import Link from "next/link";

export default function Default() {
    return (
        <main>
            <p>Default Album</p>
            <Link href='/users/album'>Album</Link>
        </main>
    );
}