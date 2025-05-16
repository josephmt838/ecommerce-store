import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import type { NAVLINK } from '../types';

type Props = {
    toggleNavDrawer: () => void;
    navDrawerOpen: boolean;
};

const MobileNavbar = ({ toggleNavDrawer, navDrawerOpen }: Props) => {
    return (
        <section
            className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:1/3 h-full bg-white shadow-lg transform transition-transform duration-500 z-50 ${
                navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <section className='flex justify-end p-4'>
                <button onClick={toggleNavDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600 hover:cursor-pointer hover:text-gray-800'></IoMdClose>
                </button>
            </section>
            <section className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                <nav className='space-y-4'>
                    {CATEGORIES.map(({ name, path }: NAVLINK) => (
                        <Link
                            key={name}
                            to={path}
                            onClick={toggleNavDrawer}
                            className='block text-gray-600 uppercase hover:text-black'
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </section>
        </section>
    );
};

export default MobileNavbar;
