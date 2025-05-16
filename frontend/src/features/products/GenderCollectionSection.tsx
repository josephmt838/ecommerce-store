import { Link } from 'react-router-dom';
import mensCollectionImg from '../../assets/mens-collection.webp';
import womensCollectionImg from '../../assets/womens-collection.webp';

const GenderCollectionSection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <section className='container mx-auto flex flex-col md:flex-row gap-8'>
                <section className='relative flex-1'>
                    <img
                        src={womensCollectionImg}
                        alt="Women's Collection"
                        className='w-full h-[700px] object-cover'
                    />
                    <section className='absolute bottom-8 left-8 bg-white p-4'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Women's Collection
                        </h2>
                        <Link
                            to='/collections/all?gender=Women'
                            className='text-gray-900 underline'
                        >
                            Shop Now
                        </Link>
                    </section>
                </section>
                <section className='relative flex-1'>
                    <img
                        src={mensCollectionImg}
                        alt="Men's Collection"
                        className='w-full h-[700px] object-cover'
                    />
                    <section className='absolute bottom-8 left-8 bg-white p-4'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Men's Collection
                        </h2>
                        <Link
                            to='/collections/all?gender=Men'
                            className='text-gray-900 underline'
                        >
                            Shop Now
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default GenderCollectionSection;
