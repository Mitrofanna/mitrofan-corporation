import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main-page";
import { AppRoute } from "../const";
import RegistrationPage from "../pages/registration-page";
import ProfilePage from "../pages/profile-page";

function App(): JSX.Element {
    return (
        <BrowserRouter>
        <Routes>
            <Route>
                path={AppRoute.Main}
                element={<MainPage />}
            </Route>
            <Route>
                path={AppRoute.Registration}
                element={<RegistrationPage />}
            </Route>
            <Route>
                path={AppRoute.Profile}
                element={<ProfilePage />}
            </Route>          
        </Routes>
        </BrowserRouter>
    );
}

export default App;