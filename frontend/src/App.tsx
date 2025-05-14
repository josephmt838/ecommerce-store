import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import UserLayout from './components/layout/UserLayout';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<UserLayout />}
                />
                <Route
                    path='/auth'
                    element={<AuthLayout />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
