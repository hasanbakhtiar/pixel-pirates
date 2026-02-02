import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('AZ');
    useEffect(() => {
        setLang(localStorage.getItem('lang'));
    }, [lang])
    return <LangContext.Provider value={[lang, setLang]}>{children}</LangContext.Provider>
}