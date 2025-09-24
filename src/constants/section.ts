import { DialogProps } from "@mui/material/Dialog";
import { PortfolioSectionPath } from "./enums";
import { ImageListProps } from "@mui/material";

export interface ImgItem {
    img?: string;
    video?: string;
    fileExt?: string;
    fullWidth?: boolean;
    fill?: boolean;
    height?: string;
    maxHeight?: string;
    text?: string;
    group?: number;
    dialogWidth?: DialogProps["maxWidth"];
    cols?: number;
}

interface Section {
    title: string;
    items: ImgItem[];
    cols?: number;
    variant?: ImageListProps["variant"];
}

export const getSection = (section: string | undefined): Section => {
    switch (section) {
        case PortfolioSectionPath.GraphicDesign:
            return {
                title: "GraphicDesign",
                items: [
                    { img: "Oppari 1", text: "Oppari", group: 1 },
                    { img: "Oppari 2", text: "Oppari", group: 1 },
                    { img: "Oppari 3", text: "Oppari", group: 1 },
                    { img: "Postikortti1", text: "Postikortit", group: 2 },
                    { img: "Postikortti2", text: "Postikortit", group: 2 },
                    { img: "Postikortti4", text: "Postikortit", group: 3 },
                    { img: "Postikortti3", text: "Postikortit", group: 2 },
                    { img: "Keikkajuliste1", fileExt: "jpg", text: "Keikkajulisteet", group: 3 },
                    { img: "Keikkajuliste2", fileExt: "jpg", text: "Keikkajulisteet", group: 3 },
                    { img: "Keikkajulisteet", fileExt: "jpg", text: "KeikkajulisteetMockup", group: 4 },
                    { img: "Osallisuus", text: "Osallisuus", group: 4 },
                    { img: "Aluekartta", text: "Aluekartta", group: 4 },
                ],
            };
        case PortfolioSectionPath.Calligraphy:
            return {
                title: "Calligraphy",
                items: [
                    { img: "Sini1", text: "Sini", group: 1 },
                    { img: "Sini2", text: "Sini", group: 1 },
                    { img: "Sini3", text: "Sini", group: 1 },
                    { img: "Elisa1", fileExt: "jpg", text: "Elisa", group: 2 },
                    { img: "Elisa2", fileExt: "jpg", text: "Elisa2", group: 2 },
                    { img: "Mietelause", fileExt: "jpg", group: 2 },
                    { img: "Kukkakrassi", fileExt: "jpg", group: 3 },
                    { img: "Lumous", text: "Lumous", group: 3 },
                    { img: "Tahdon", fileExt: "jpg", group: 3 },
                    { img: "Kattaus2", fileExt: "jpg", text: "Kattaus", group: 3 },
                    { img: "Runo", fileExt: "jpg", group: 3 },
                    { img: "Kattaus", fileExt: "jpg", text: "Kattaus", group: 3 },
                ],
            };
        case PortfolioSectionPath.DesignDrawing:
            return {
                title: "DesignDrawing",
                items: [
                    { img: "Pandat", group: 1, fullWidth: true, text: "Pandat" },
                    { img: "Kukka", text: "Kukka", group: 3 },
                    { img: "Kartano", group: 3, text: "Kartano" },
                    { img: "Koru1", fileExt: "jpg", text: "Korupiirrokset", group: 3 },
                    { img: "Eläimet1", fileExt: "jpg", text: "Eläimet", group: 3 },
                    { img: "Pöllöt", group: 3, text: "Pöllöt" },
                    { img: "Kukat1", fileExt: "jpg", text: "Kukkayhdistelmä", group: 3 },
                    { img: "Kultalogo", text: "Kultalogo", group: 3 },
                    { img: "Kirkko", group: 3, text: "Kirkko" },
                    { img: "Koru2", fileExt: "jpg", text: "Korupiirrokset", group: 3 },
                    { img: "Eläimet2", fileExt: "jpg", text: "Eläimet", group: 3 },
                    { img: "Työvälineet", fileExt: "jpg", text: "Välineet", group: 3 },
                    { img: "Kukat3", fileExt: "jpg", text: "Tussikukka", group: 3 },
                    { img: "Kukat4", fileExt: "jpg", text: "Orvokki", group: 3 },
                    { img: "Kukat2", fileExt: "jpg", text: "Vesivärikukka", group: 3 },
                ],
            };
        case PortfolioSectionPath.ProductDesign:
            return {
                title: "ProductDesign",
                items: [
                    { img: "Yöpöytä1", fileExt: "jpg", text: "Yöpöytä", group: 1 },
                    { img: "Yöpöytä2", fileExt: "jpg", text: "Yöpöytä", group: 1 },
                    { img: "Yöpöytä3", fileExt: "jpg", text: "Yöpöytä", group: 1 },
                    { img: "Aulateos1", text: "Taukotila", group: 2 },
                    { img: "Aulateos2", text: "Taukotila", group: 2 },
                    { img: "Käsidesi", text: "Käsidesi", group: 2 },
                    { img: "Lamppu1", fileExt: "jpg", text: "Lamppu", group: 3 },
                    { img: "Lamppu2", fileExt: "jpg", text: "Lamppu", group: 3 },
                    { img: "Lamppu3", fileExt: "jpg", text: "LamppuTyökuva", group: 3 },
                    { video: "Pandakalenteri", fileExt: "mp4", text: "Pandakalenteri", maxHeight: "245px", group: 4 },
                ],
            };
        case PortfolioSectionPath.UIDesign:
            return {
                title: "UIDesign",
                variant: "standard",
                items: [
                    { video: "Unelmapaja1", fileExt: "mp4", height: "398px", text: "Unelmapaja", group: 2 },
                    { video: "Unelmapaja3", fileExt: "mp4", text: "Unelmapaja", group: 2, cols: 2, dialogWidth: "xl" },
                    { video: "Lumous", fileExt: "mp4", text: "Lumous", group: 1, fullWidth: true },
                ],
            };
        case PortfolioSectionPath.EventDesign:
            return {
                title: "EventDesign",
                items: [
                    { img: "Ompelu1", text: "Ompeluviikonloppu", group: 1 },
                    { img: "Ompelu2", text: "Ompeluviikonloppu", group: 1 },
                    { img: "Ompelu3", text: "Ompeluviikonloppu", group: 1 },
                    { img: "Häät1", fileExt: "jpeg", text: "Häät", group: 2 },
                    { img: "Häät 2", fileExt: "jpg", text: "HäätKattaus", group: 2 },
                    { img: "Seaplane", text: "Seaplane", group: 2 },
                ],
            };
        case PortfolioSectionPath.Branding:
            return {
                title: "Branding",
                items: [
                    { img: "Sini", group: 1, fullWidth: true, text: "Sini" },
                    { img: "Lumous", group: 2, fullWidth: true, text: "Lumous" },
                    { img: "Elisa", group: 3, fullWidth: true, text: "Elisa" },
                    { img: "Häät1", group: 3, text: "Häät" },
                    { img: "Häät2", group: 3, text: "Häät" },
                    { img: "Häät3", group: 3, text: "Häät" },
                ],
            };
        case PortfolioSectionPath.ServiceDesign:
            return {
                title: "ServiceDesign",
                cols: 2,
                items: [
                    { img: "Oppari", group: 1, text: "Oppari", dialogWidth: "md" },
                    { img: "Bench", group: 1, text: "Bench", dialogWidth: "md" },
                    { img: "Koto", group: 1, text: "Koto", dialogWidth: "md" },
                    { img: "Lumous", group: 1, text: "Lumous", dialogWidth: "md" },
                    { img: "Pandakalenteri", group: 1, text: "Pandakalenteri", dialogWidth: "md" },
                ],
            };
        case PortfolioSectionPath.Photography:
            return {
                title: "Photography",
                items: [
                    { img: "Kattaus1", fileExt: "jpg", text: "Kattaus", group: 1 },
                    { img: "Silta1", fileExt: "jpg", text: "Silta", group: 1 },
                    { img: "Kulta 1", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Kukka 1", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Musta1", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Kangas3", fileExt: "jpg", text: "Kangas", group: 1 },
                    { img: "Anna2", fileExt: "jpg", text: "Anna", group: 1 },
                    { img: "Sinihelmi1", text: "Sinihelmi", group: 1 },
                    { img: "Koru1", fileExt: "jpg", text: "Korut", group: 1 },
                    { img: "Maisema1", fileExt: "jpg", group: 1, text: "Maisema" },
                    { img: "Roosa", fileExt: "jpg", text: "Roosa", group: 1 },
                    { img: "Matka2", fileExt: "jpg", text: "Matka", group: 1 },
                    { img: "Kattaus4", fileExt: "jpg", text: "Kattaus", group: 1 },
                    { img: "Silta2", fileExt: "jpg", text: "Silta", group: 1 },
                    { img: "Kulta 2", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Kukka 2", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Musta2", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Kangas4", fileExt: "jpg", text: "Kangas", group: 1 },
                    { img: "Anna3", fileExt: "jpg", group: 1, text: "Maisema" },
                    { img: "Sinihelmi4", text: "Sinihelmi", group: 1 },
                    { img: "Koru2", fileExt: "jpg", text: "Korut", group: 1 },
                    { img: "Maisema5", fileExt: "jpg", group: 1, text: "Maisema" },
                    { img: "Samu2", fileExt: "jpg", text: "Samu", group: 1 },
                    { img: "Matka1", fileExt: "jpg", text: "Matka", group: 1 },
                    { img: "Matka3", fileExt: "jpg", text: "Matka", group: 1 },
                    { img: "Kattaus2", fileExt: "jpg", text: "Kattaus", group: 1 },
                    { img: "Oliver", fileExt: "jpg", text: "Oliver", group: 1 },
                    { img: "Kulta 3", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Kukka 3", fileExt: "jpg", text: "Kutsukortit", group: 1 },
                    { img: "Kangas1", fileExt: "jpg", text: "Kangas", group: 1 },
                    { img: "Laukku", fileExt: "jpg", text: "Laukku", group: 1 },
                    { img: "Sinihelmi3", text: "Sinihelmi", group: 1 },
                    { img: "Sinihelmi2", text: "Sinihelmi", group: 1 },
                    { img: "Maisema7", fileExt: "jpg", group: 1, text: "Maisema" },
                    { img: "Martsu2", fileExt: "jpg", text: "Martsu", group: 1 },
                    { img: "Matka4", fileExt: "jpg", text: "Matka", group: 1 },
                    { img: "Matka5", fileExt: "jpg", text: "Matka", group: 1 },
                ],
            };
        default:
            return {
                title: "",
                items: [],
            };
    }
};
