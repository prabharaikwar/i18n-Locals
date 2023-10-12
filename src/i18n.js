import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: true,
        fallbackLng: 'en',
        // resources: {
            // en: {
            //     translation: {
            //         editBtn: "Edit",
            //         delBtn: 'Delete',
            //         Heading: 'CRUD in Redux-ToolKit with Redux-Thunk!',
            //         Addbtn: 'Add',
            //         backBtn: "Back"
            //     }
            // },
            // hi: {
            //     translation: {
            //         editBtn: "संपादित करें",
            //         delBtn: 'हटाएं',
            //         Heading: 'CRUD में स्वागत Redux-ToolKit साथ Redux-Thunk!',
            //         Addbtn: 'जोड़ें',
            //         backBtn: "पीछे"
            //     }
            // }
        // },
    })


    export default i18n;