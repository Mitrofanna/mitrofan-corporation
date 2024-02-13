import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main-page";
import { AppRoute } from "../const";
import RegistrationPage from "../pages/registration-page";
import ProfilePage from "../pages/profile-page";
import NotFoundPage from "../pages/not-found-page";

function App(): JSX.Element {
    return (
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
                path={AppRoute.Profile}
                element={<ProfilePage />}
            />          
            <Route
                path="*"
                element={<NotFoundPage />}
            />          
        </Routes>
        </BrowserRouter>
    );
}

export default App;