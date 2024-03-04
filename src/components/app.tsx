import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainPage from "../pages/main-page";
import { AppRoute, AuthorizationStatus } from "../const";
import RegistrationPage from "../pages/registration-page";
import NotFoundPage from "../pages/not-found-page";
import FeedPage from "../pages/feed-page";
import ProfilePage from "../pages/profile-page";
import MessagesPage from "../pages/messages-page";
import PopularPage from "../pages/popular-page";
import PrivateRoute from "./private-route";

function App(): JSX.Element {
    return (
        <HelmetProvider>
        <BrowserRouter>
        <Routes>
            <Route
                path={AppRoute.Root}
                element={<MainPage />}
            />
            <Route
                path={AppRoute.Registration}
                element={<RegistrationPage />}
            />
            <Route
                path={AppRoute.Feed}
                element={
                    <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                        <FeedPage />
                    </PrivateRoute>}
            />          
            <Route
                path={AppRoute.Profile}
                element={<ProfilePage />}
            />          
            <Route
                path={AppRoute.Messages}
                element={<MessagesPage />}
            />          
            <Route
                path={AppRoute.Popular}
                element={<PopularPage />}
            />          
            <Route
                path="*"
                element={<NotFoundPage />}
            />          
        </Routes>
        </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;