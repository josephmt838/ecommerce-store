import { IoMdClose } from 'react-icons/io';

type Props = {
    toggleDrawer: () => void;
    isOpen: boolean;
};

const CartDrawer = ({ toggleDrawer, isOpen }: Props) => {
    return (
        <>
            <section
                className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button
                    onClick={toggleDrawer}
                    className='flex justify-end p-4'
                >
                    <IoMdClose className='h-6 w-6 text-gray-600' />
                </button>
            </section>
        </>
    );
};

export default CartDrawer;
