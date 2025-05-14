import { IoMdClose } from 'react-icons/io';
import CartContent from './CartContent';

type Props = {
    toggleDrawer: () => void;
    isOpen: boolean;
};

const CartDrawer = ({ toggleDrawer, isOpen }: Props) => {
    return (
        <>
            <section
                className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-500 flex flex-col z-50 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <section className='flex justify-end p-4'>
                    <button
                        onClick={toggleDrawer}
                        className='flex justify-end p-4'
                    >
                        <IoMdClose className='h-6 w-6 text-gray-600' />
                    </button>
                </section>
                <section className='flex-grow p-4 overflow-y-auto'>
                    <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
                    <CartContent />
                </section>
                <section className='p-4 bg-white sticky bottom-0'>
                    <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>
                        Checkout
                    </button>
                    <p className='text-xs tracking-tighter text-gray-500 mt-2 text-center'>
                        Shipping, Taxes, and Discount Codes calculated at
                        Checkout.
                    </p>
                </section>
            </section>
        </>
    );
};

export default CartDrawer;
