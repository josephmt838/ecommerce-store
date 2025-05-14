import Topbar from './Topbar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='border border-b-gray-500'>
            <Topbar />
            <Navbar />
        </header>
    );
};

export default Header;
