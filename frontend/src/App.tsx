import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import UserLayout from './components/layout/UserLayout';
import Home from './pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<UserLayout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                </Route>
                <Route
                    path='/auth'
                    element={<AuthLayout />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
