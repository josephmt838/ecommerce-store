import {
    useEffect,
    useRef,
    useState,
    type MouseEvent,
    type MouseEventHandler,
} from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import products from '../../data/products';

const NewArrivals = () => {
    const scrollRef = useRef<HTMLElement>(document.createElement('div'));
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
    const newArrivals = products.slice(0, 8);

    const scroll = (direction: 'left' | 'right') => {
        const scrollAmount = direction === 'left' ? -300 : 300;
        if (scrollRef?.current) {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable =
                container.scrollWidth > leftScroll + container.clientWidth;

            setCanScrollLeft(() => leftScroll > 0);
            setCanScrollRight(() => rightScrollable);
        }
    };

    const handleMouseDown = (e: MouseEvent<HTMLElement>) => {
        setIsDragging(() => true);

        if (scrollRef?.current?.offsetLeft) {
            setStartX(() => e.pageX - scrollRef.current.offsetLeft || 0);
            setScrollLeft(scrollRef.current?.scrollLeft);
        }
    };

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave: MouseEventHandler<HTMLElement> = () => {
        setIsDragging(() => false);
    };

    useEffect(() => {
        const container = scrollRef.current;

        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
        }
    }, []);

    return (
        <section className='mb-5'>
            <section className='container mx-auto text-center mb-10 relative'>
                <h2 className='text-3xl font-bold mb-4'>
                    Explore New Arrivals
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                    Discover the latest styles straight off the runway, totally
                    added to keep your wardrobe on the cutting edge of fashion.
                </p>
                <section className='absolute right-0 flex space-x-2 bottom-[-30px]'>
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded border ${
                            canScrollLeft
                                ? 'bg-white text-black'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <FiChevronLeft className='text-2xl' />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border ${
                            canScrollRight
                                ? 'bg-white text-black'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <FiChevronRight className='text-2xl' />
                    </button>
                </section>
            </section>
            <section
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
                    isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
            >
                {newArrivals.map((product) => (
                    <section
                        key={product.sku}
                        className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'
                    >
                        <img
                            src={product.images[0]?.url}
                            alt={product.images[0]?.altText || product.name}
                            className='w-full h-[500px] object-cover rounded-lg'
                            draggable={false}
                        />
                        <section className='absolute bottom-0 left-0 right-0 bg-black opacity-75 backdrop-blur-xs text-white p-4 rounded-lg'>
                            <Link
                                to={`/product/${product.sku}`}
                                className='block'
                            >
                                <h4 className='font-medium'>{product.name}</h4>
                                <p className='mt-1'>{product.price}</p>
                            </Link>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    );
};

export default NewArrivals;
