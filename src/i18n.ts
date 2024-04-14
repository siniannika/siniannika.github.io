import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            Name: "Roope Pöyry",
            JobTitle: "Senior Software Developer",
            Profile: "Profile",
            Technologies: "Technologies",
            Experience: "Experience",
            Education: "Education",
            Contact: "Contact",
            aboutMeContent:
                "Skilled Software Developer with 7 years of experience. I have developed multiple services from scratch to customers' needs and modernized older systems. I master multiple technologies and adopt new ones easily. I enjoy solving various kinds of challenges in my work.",
            email: "roope.poyry1@gmail.com",
            linkedin: "linkedin.com/in/rpoyry",
            github: "github.com/rrobben",
            mode: {
                dark: "Dark mode",
                light: "Light mode",
            },
            workExperience: {
                header: {
                    EasyOpp: "Senior Software Developer, EasyOpp",
                    Adalia: "Software Developer, Adalia Oy",
                    Other: "Other",
                },
                subheader: {
                    EasyOpp: "1/2023 - Present",
                    Adalia: "4/2017 - 1/2023",
                    Other: "",
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
                    Tuni: "Tampere University / TUT",
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
            tech: {
                header: {
                    React: "React",
                    ".NET": ".NET",
                    Rails: "Ruby on Rails",
                    Azure: "Azure",
                    AWS: "AWS",
                },
                content: {
                    React: "I have multiple years of experience of working with React UIs both with TypeScript and JavaScript. I have designed and implemented several React apps from scratch which has allowed me to try and learn new things about React along the way. I have used React in my personal projects as well such as this website and converted a React PWA to Android app and published it at the Play Store.",
                    ".NET": "I have worked with C# + .NET backends over a year now at EasyOpp. Currently using mainly .NET 8 and Entity Framework Core in our APIs. Additionally I have also worked with SignalR for sending real-time messages to our React UI from our API. For Unit tests we have been using NUnit framework.",
                    Rails: "I have 6 years of experience of maintaining and developing Rails applications both with existing systems and completely new projects. I have had the responsibility to design and implement application architecture, data model, user and permission management etc.",
                    Azure: "Currently all our apps are hosted in Azure and deployments are configured using Bicep scripts. I have done the setup for our new mobile frontend which is run as an App Service.",
                    AWS: 'I have experience of setting up containers to be run in AWS Fargate and configuring load balancers for these services. I have also setup API Gateways using <a href="https://docs.rubyonjets.com/" target="_blank">Ruby on Jets</a> to deploy the application code to be run in AWS Lambda.',
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
            workExperience: {
                header: {
                    EasyOpp: "Senior Software Developer, EasyOpp",
                    Adalia: "Software Developer, Adalia Oy",
                    Other: "Other",
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
                    Tuni: "Tampereen yliopisto / TTY",
                    "Järvenpään lukio": "Järvenpään lukio",
                },
                content: {
                    Tuni: "Tietotekniikan diplomi-insinööri",
                    "Järvenpään lukio": "Ylioppilas",
                },
                subcontent: {
                    Tuni: "Ohjelmistotuotanto <br/> 2012-2019",
                },
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
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        keySeparator: ".",
    });

export default i18n;
