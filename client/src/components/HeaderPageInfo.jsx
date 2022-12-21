import ReactDOM from "react-dom/client";
import {Routes, Route, Link} from "react-router-dom";
import Forms from "../pages/FormsPage.jsx";
import FormsViewer from "../pages/formsViewer";
import ErrorPage from "../pages/ErrorPage";
import App from "../assets/App.css";
function headerPageInfo() {
  return (
    <div>
      <header className="header">
          <nav className="header__nav">
              <div className="header__forms">
                <Link className="header__nav__link" to="/forms__create">Создать закупочный лист</Link>
                <Link className="header__nav__link" to="/">Просмотреть закупочные товары</Link>
              </div>
              <div className="header__authorization">
                  <a>
                      <p className="header__nav__link">Авторизация</p>
                  </a>
              </div>
          </nav>
      </header>
        <Routes>
            <Route path="/forms__create" element={<Forms />} />
            <Route path="/" element={<FormsViewer />} />
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </div>
  );
}

export default headerPageInfo;