import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./theme/Provider.tsx";
import I18nProvider from "./i18n/I18nProvider.tsx";
import Router from "./Router.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <I18nProvider>
            <Provider>
                <Router />
            </Provider>
        </I18nProvider>
    </React.StrictMode>
);
