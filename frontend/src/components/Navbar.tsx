import { useState } from 'react';
import {
    HiBars3BottomRight,
    HiOutlineShoppingBag,
    HiOutlineUser,
} from 'react-icons/hi2';
import { IoStorefront } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import CartDrawer from '../features/cart/CartDrawer';
import type { NAVLINK } from '../types';
import MobileNavbar from './MobileNavbar';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => setNavDrawerOpen((prev) => !prev);

    const toggleCartDrawer = () => setCartDrawerOpen((prev) => !prev);
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <aside>
                    <Link to='/'>
                        <IoStorefront className='w-10 h-10' />
                    </Link>
                </aside>
                <section className='hidden md:flex space-x-6'>
                    {CATEGORIES.map(({ name, path }: NAVLINK) => (
                        <Link
                            key={name}
                            to={path}
                            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
                        >
                            {name}
                        </Link>
                    ))}
                </section>
                <aside className='flex items-center space-x-4'>
                    <Link
                        to={'#'}
                        className='hover:text-black'
                    >
                        {
                            <HiOutlineUser className='h-6 w-6 text-gray-700 hover:cursor-pointer' />
                        }
                    </Link>
                    <button
                        onClick={toggleCartDrawer}
                        className='relative hover:text-black'
                    >
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 hover:cursor-pointer' />
                        <span className='absolute -top-1 bg-brand-primary text-white text-sm rounded-full px-2 py-0.5'>
                            4
                        </span>
                    </button>
                    <SearchBar />
                    <button
                        onClick={toggleNavDrawer}
                        className='md:hidden'
                    >
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700 hover:cursor-pointer hover:text-gray-500' />
                    </button>
                </aside>
            </nav>
            <CartDrawer
                isOpen={cartDrawerOpen}
                toggleDrawer={toggleCartDrawer}
            />
            <MobileNavbar
                toggleNavDrawer={toggleNavDrawer}
                navDrawerOpen={navDrawerOpen}
            />
        </>
    );
};

export default Navbar;
