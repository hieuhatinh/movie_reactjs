import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes/routes';
import DefaultLayout from '~/layouts';
import ProtectedRoute from '~/components/routing/ProtectedRoute';

// 1. Làm Sidebar -> ok (còn lỗi active)
// 2. Làm giao diện trang login
// 3. Làm useContext để bảo vệ route
// 4. làm giao diện trang home

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        let Protected = Fragment;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        if (route.protected) {
                            Protected = ProtectedRoute;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Protected>
                                            <Page />
                                        </Protected>
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
