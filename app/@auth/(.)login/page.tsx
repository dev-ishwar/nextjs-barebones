"use client";
import dynamic from 'next/dynamic';
import Login from '@/app/components/login';
const Modal = dynamic(() => import('@/app/components/modal'), { ssr: false })

export default function Page() {
    return (
        <Modal>
            <div className='text-orange-950 bg-green-500' >Intercepted Route</div>
            <Login />
        </Modal>
    )
}