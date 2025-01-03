import Modal from '@/app/components/modal';
import Login from '@/app/components/login';

export default function Page() {
    return (
        <Modal>
            <div className='text-orange-950 bg-green-500' >Intercepted Route</div>
            <Login />
        </Modal>
    )
}