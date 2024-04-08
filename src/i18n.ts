import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            Profile: "Profile",
            Technologies: "Technologies",
            Experience: "Experience",
            Education: "Education",
            Contact: "Contact",
            aboutMeContent:
                "Skilled Software Developer with 7 years of experience. I have developed multiple services from scratch to customers' needs and modernized older systems. I master multiple technologies and adopt new ones easily. I enjoy solving various kinds of challenges in my work.",
            email: "roope.poyry1@gmail.com",
            linkedin: "linkedin.com/in/rpoyry",
            workExperience: {
                header: {
                    EasyOpp: "Senior Software Developer, EasyOpp - Remote, 1/2023 -",
                    Adalia: "Software Developer, Adalia Oy - Tampere, 4/2017 - 1/2023",
                    Other: "Other",
                },
                content: {
                    EasyOpp:
                        "Designing and developing ERP software in a product development team. I have had the responsibility to implement a new mobile UI (ReactJS + TypeScript) from scratch which is used by employees of our customers to log work hours and tasks among other things. Other familiar technologies include e.g. .NET, MSSQL and Azure.",
                    Adalia: "Designing and developing cloud-based solutions both in different customer projects and with own products as well. The most commonly used technologies were Ruby on Rails, React, PostgreSQL and AWS.",
                    Other: "Additionally I have previous work experience as Prison Guard, Storage Worker and School Assistant.",
                },
            },
            education: {
                header: {
                    Tuni: "Tampere University / TUT (until 2018)",
                    "Järvenpään lukio": "Järvenpään lukio",
                },
                content: {
                    Tuni: "M.Sc. (Tech.) in Information Technology",
                    "Järvenpään lukio": "Matriculation examination",
                },
                subcontent: {
                    Tuni: "Software Engineering <br/> 2012-2019",
                    "Järvenpään lukio": "2008-2011",
                },
            },
            lang: {
                en: "In English",
                fi: "Suomeksi",
            },
        },
    },
    fi: {
        translation: {
            Profile: "Profiili",
            Technologies: "Teknologiat",
            Experience: "Työkokemus",
            Education: "Koulutus",
            Contact: "Yhteystiedot",
            aboutMeContent:
                "Osaava ohjelmistosuunnittelija 7 vuoden kokemuksella. Olen kehittänyt useita palveluita alusta saakka asiakkaiden tarpeisiin sekä ollut uudistamassa vanhempia järjestelmiä. Hallitsen useampia teknologioita ja omaksun myös uudet nopeasti. Nautin työssäni erityyppisten haasteiden ratkaisemisesta.",
            email: "roope.poyry1@gmail.com",
            linkedin: "linkedin.com/in/rpoyry",
            workExperience: {
                header: {
                    EasyOpp: "Senior Software Developer, EasyOpp - Remote, 1/2023 -",
                    Adalia: "Software Developer, Adalia Oy - Tampere, 4/2017 - 1/2023",
                    Other: "Muuta",
                },
                content: {
                    EasyOpp:
                        "Tuotekehitystiimissä toiminnanohjausjärjestelmän kehitys- ja suunnittelutyö. Uuden mobiilikäyttöliittymän (ReactJS + TypeScript) kehitys alusta saakka, jota asiakasyritystemme työntekijät käyttävät mm. työajan kellottamiseen. Muita tutuksi tulleita teknologioita ovat mm. .NET, MSSQL ja Azure.",
                    Adalia: "Pilvipohjaisten palvelujen suunnittelu ja toteutus erilaisissa asiakasprojekteissa sekä omien tuotteiden parissa. Yleisimpinä teknologioina Ruby on Rails, React, PostgreSQL ja AWS.",
                    Other: "Lisäksi aiempaa työkokemusta mm. vanginvartijana, varastotyöntekijänä ja kouluavustajana.",
                },
            },
            education: {
                header: {
                    Tuni: "Tampereen yliopisto / TTY (2018 asti)",
                    "Järvenpään lukio": "Järvenpään lukio",
                },
                content: {
                    Tuni: "Tietotekniikan diplomi-insinööri",
                    "Järvenpään lukio": "Ylioppilas",
                },
                subcontent: {
                    Tuni: "Ohjelmistotuotanto <br/> 2012-2019",
                    "Järvenpään lukio": "2008-2011",
                },
            },
            lang: {
                en: "In English",
                fi: "Suomeksi",
            },
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        keySeparator: ".",
    });

export default i18n;
