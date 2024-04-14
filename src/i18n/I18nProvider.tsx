import { createContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "usehooks-ts";
import { initI18n } from "./i18n";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const I18nContext = createContext({ language: "en", changeLanguage: (_lng: string) => {} });

interface Props {
    children: JSX.Element | JSX.Element[];
}

const I18nProvider = (props: Props) => {
    const [lng, setLng] = useLocalStorage("lng", "en");
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
        if (!isInitialized) {
            initI18n(lng)
                .then(() => setIsInitialized(true))
                .catch(console.error);
        }
    }, []);

    // Render context provider when the i18n instance has been initialized
    return !isInitialized ? null : <ContextProvider lng={lng} setLng={setLng} {...props} />;
};

interface ContextProviderOwnProps {
    lng: string;
    setLng: (lng: string) => void;
}

type ContextProviderProps = Props & ContextProviderOwnProps;

const ContextProvider = ({ lng, setLng, children }: ContextProviderProps) => {
    const { i18n } = useTranslation();

    const i18nContext = useMemo(
        () => ({
            language: lng,
            changeLanguage: (lng: string) => {
                setLng(lng);
            },
        }),
        [lng]
    );

    useEffect(() => {
        if (lng !== i18n.language) {
            i18n.changeLanguage(lng);
        }
    }, [lng]);

    return <I18nContext.Provider value={i18nContext}>{children}</I18nContext.Provider>;
};

export default I18nProvider;
