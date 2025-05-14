import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { RiDeleteBin2Line } from 'react-icons/ri';

const cartProducts = [
    {
        productId: 1,
        name: 'T-shirt',
        size: 'M',
        color: 'Red',
        quantity: 1,
        price: 15,
        image: 'https://picsum.photos/200?random=1',
    },
    {
        productId: 2,
        name: 'Jeans',
        size: 'L',
        color: 'Blue',
        quantity: 2,
        price: 15,
        image: 'https://picsum.photos/200?random=2',
    },
];

type CartProduct = {
    productId: number;
    name: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
    image: string;
};

const CartContent = () => {
    return (
        <>
            {cartProducts.map((product: CartProduct) => (
                <section
                    key={product.productId}
                    className='flex justify-between py-4 border-b'
                >
                    <section className='flex items-start'>
                        <img
                            className='w-20 h-24 object-cover mr-4 rounded'
                            src={product.image}
                            alt={product.name}
                        />
                        <section>
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>
                                Size: {product.size} | Color: {product.color}
                            </p>
                            <section className='flex items-center mt-2'>
                                <CiSquarePlus className='h-10 w-10 hover:cursor-pointer hover:text-gray-500 transition' />
                                <span className='mx-4'>{product.quantity}</span>
                                <CiSquareMinus className='h-10 w-10 hover:cursor-pointer hover:text-gray-500 transition' />
                            </section>
                        </section>
                    </section>
                    <section className='flex flex-col justify-between items-center py-4'>
                        <p>${product.price.toFixed(2).toLocaleString()}</p>
                        <RiDeleteBin2Line className='h-6 w-6 mt-2 text-red-600 hover:cursor-pointer hover:text-red-400 transition' />
                    </section>
                </section>
            ))}
        </>
    );
};

export default CartContent;
