import {
    HiBars3BottomRight,
    HiOutlineShoppingBag,
    HiOutlineUser,
} from 'react-icons/hi2';
import { IoStorefront } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NAVLINKS = [
    { name: 'men', path: '#' },
    { name: 'women', path: '#' },
    { name: 'topwear', path: '#' },
    { name: 'bottomwear', path: '#' },
];

type NAVLINK = {
    name: string;
    path: string;
};

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <aside>
                    <Link to='/'>
                        <IoStorefront className='w-10 h-10' />
                    </Link>
                </aside>
                <section className='hidden md:flex space-x-6'>
                    {NAVLINKS.map(({ name, path }: NAVLINK) => (
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
                        {<HiOutlineUser className='h-6 w-6 text-gray-700' />}
                    </Link>
                    <button className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-1 bg-brand-primary text-white text-sm rounded-full px-2 py-0.5'>
                            4
                        </span>
                    </button>
                    <SearchBar />
                    <button className='md:hidden'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                    </button>
                </aside>
            </nav>
        </>
    );
};

export default Navbar;
