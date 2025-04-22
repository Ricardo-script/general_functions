//yarn add i18next react-i18next


//em src:

src/i18n/locales
  en.json:

{
    "Painel inicial": "Dashboard",
    ...
}

pt-json:

{
    "Painel inicial": "Painel inicial",
     ...
}

//----------------------------------------------------------------------------------
src/i18n
  -index.tsx:

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

const savedLanguage = localStorage.getItem("i18nextLng") || "pt";

i18n.use(initReactI18next).init({
    lng: savedLanguage,
    resources: {
        en: {
            translation: enTranslation,
        },
        pt: {
            translation: ptTranslation,
        },
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

//-----------------------------------------------------------------------------------

  src/routes/index.tsx:
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MainLayout } from "../components/MainLayout";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export const Navigation = () => (
    <HashRouter>
        <I18nextProvider i18n={i18n}>
            <Routes>
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </MainLayout>
                    }
                />
            </Routes>
        </I18nextProvider>
    </HashRouter>
);
//-----------------------------------------------------------------------------------

//uso:

import { useTranslation } from "react-i18next";

export const Home = () => {

import { useTranslation } from "react-i18next";
const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng as string);
};
 return (
<Container breadCrumbs={breadCrumbs}>
    <span>{t("Painel inicial")}</span>
    <div>
        <button className="border" onClick={() => changeLanguage("en")}>
            English
        </button>
        <button className="border" onClick={() => changeLanguage("pt")}>
            Portuguese
        </button>
    </div>
</Container>
   );
};
