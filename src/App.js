import './App.css';
import { Home, Welcome, Login } from './pages';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { GithubContext } from './Context/GitContext';
import { Loading } from './components';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
    const [loadingData, setLoadingData] = useState(false);
    const { isLoadingData } = useContext(GithubContext);
    useEffect(() => {
        setLoadingData(isLoadingData);
    }, [isLoadingData]);
    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading || loadingData) {
        return <Loading />;
    } else {
        return (
            <>
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Outlet />}>
                                <Route path="/" element={1 ? <Home /> : <Welcome />} />
                            </Route>
                            <Route path="/home" element={<Home />} />
                            <Route path="/login" element={<Welcome />} />
                        </Routes>
                    </div>
                </Router>
            </>
        );
    }
}

export default App;
