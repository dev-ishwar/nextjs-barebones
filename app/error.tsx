'use client';

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="grid h-screen place-content-center">
            <p>{error.message}</p>
            <button onClick={reset}>Try Again!</button>
        </main>
    )
}