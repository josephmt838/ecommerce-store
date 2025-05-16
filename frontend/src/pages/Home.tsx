import Hero from '../components/Hero';
import GenderCollectionSection from '../features/products/GenderCollectionSection';
import NewArrivals from '../features/products/NewArrivals';

const Home = () => {
    return (
        <>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />
        </>
    );
};

export default Home;
