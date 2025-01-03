'use client';

import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
    children
}: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, [])

    const onDismiss = () => {
        router.back();
    }

    console.log('modal it is.')

    return (
        createPortal(
            <div className="absolute inset-0 bg-white/30">
                <dialog ref={dialogRef} onClose={onDismiss} className="p-4">
                    {children}
                    <div className="flex justify-end mt-5">
                        <button className="text-red-950 border border-red-950 px-2 py-1 rounded-md" onClick={onDismiss}>Close</button>
                    </div>
                </dialog>
            </div>,
            document.getElementById('modal-root')!
        )
    )
}