import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb';

const Topbar = () => {
    return (
        <section className='bg-brand-primary text-white'>
            <section className='container mx-auto flex justify-between items-center py-3 px-4'>
                <section className='hidden md:flex item-center space-x-4'>
                    <a
                        href='#'
                        className='hover:text-gray-300'
                    >
                        <TbBrandMeta className='h-5 w-5' />
                    </a>
                    <a
                        href='#'
                        className='hover:text-gray-300'
                    >
                        <IoLogoInstagram className='h-5 w-5' />
                    </a>
                    <a
                        href='#'
                        className='hover:text-gray-300'
                    >
                        <RiTwitterXLine className='h-5 w-5' />
                    </a>
                </section>
                <section className='text-sm text-center flex-grow'>
                    <span>We Ship Worldwide - Fast and Reliable Shipping!</span>
                </section>
                <section className='text-sm hidden md:block'>
                    <a
                        href='tel:12345678901'
                        className='hover:text-gray-300'
                    >
                        +1 (234) 567-8901
                    </a>
                </section>
            </section>
        </section>
    );
};

export default Topbar;
