import { useRef, useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const searchRef = useRef<null | HTMLInputElement>(null);

    const toggleSearch = () => setIsOpen((prev) => !prev);
    const handleSearch = (e: FormData) => {
        console.log(e, searchRef?.current?.value);
        toggleSearch();
    };
    return (
        <section
            className={`flex items-center justify-center w-full transition-all duration-300 ${
                isOpen
                    ? 'absolute top-0 left-0 w-full bg-[#fbfbfb] h-26 z-50'
                    : 'w-auto'
            }`}
        >
            {isOpen ? (
                <form
                    action={handleSearch}
                    className='relative flex items-center justify-center w-full'
                >
                    <section className='relative w-1/2'>
                        <input
                            type='text'
                            placeholder='Search'
                            ref={searchRef}
                            className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-md focus:outline-none w-full placeholder:text-gray-700'
                        />
                        <button
                            type='submit'
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'
                        >
                            <HiMagnifyingGlass className='h-6 w-6 hover:cursor-pointer' />
                        </button>
                    </section>
                    <button
                        type='button'
                        onClick={toggleSearch}
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'
                    >
                        <HiMiniXMark className='h-6 w-6 hover:cursor-pointer' />
                    </button>
                </form>
            ) : (
                <button onClick={toggleSearch}>
                    <HiMagnifyingGlass className='h-6 w-6 hover:cursor-pointer' />
                </button>
            )}
        </section>
    );
};

export default SearchBar;
