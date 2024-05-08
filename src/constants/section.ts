import { PortfolioSectionPath } from "./enums";

export interface ImgItem {
    img?: string;
    video?: string;
    fileExt?: string;
    fullWidth?: boolean;
    height?: string;
    maxHeight?: string;
    text?: string;
    group?: number;
}

interface Section {
    title: string;
    items: ImgItem[];
}

export const getSection = (section: string | undefined): Section => {
    switch (section) {
        case PortfolioSectionPath.GraphicDesign:
            return {
                title: "GraphicDesign",
                items: [
                    { img: "Postikortti1", text: "Postikortit" },
                    { img: "Postikortti4", text: "Postikortit" },
                    { img: "Keikkajulisteet", fileExt: "jpg", text: "KeikkajulisteetMockup" },
                    { img: "Postikortti2", text: "Postikortit" },
                    { img: "Keikkajuliste1", fileExt: "jpg", text: "Keikkajulisteet" },
                    { img: "Osallisuus", text: "Osallisuus" },
                    { img: "Postikortti3", text: "Postikortit" },
                    { img: "Keikkajuliste2", fileExt: "jpg", text: "Keikkajulisteet" },
                ],
            };
        case PortfolioSectionPath.Calligraphy:
            return {
                title: "Calligraphy",
                items: [
                    { img: "Sini1", text: "Sini" },
                    { img: "Elisa1", fileExt: "jpg", text: "Elisa" },
                    { img: "Kukkakrassi", fileExt: "jpg" },
                    { img: "Sini2", text: "Sini" },
                    { img: "Elisa2", fileExt: "jpg", text: "Elisa" },
                    { img: "Nimitaulu", text: "Syntymäjulisteet" },
                    { img: "Sini3", text: "Sini" },
                    { img: "Runo", fileExt: "jpg" },
                    { img: "Mietelause", fileExt: "jpg" },
                ],
            };
        case PortfolioSectionPath.DesignDrawing:
            return {
                title: "DesignDrawing",
                items: [
                    { img: "Eläimet1", fileExt: "jpg", text: "Eläimet" },
                    { img: "Koru1", fileExt: "jpg", text: "Korupiirrokset" },
                    { img: "Kukat1", fileExt: "jpg", text: "Kukkayhdistelmä" },
                    { img: "Työvälineet", fileExt: "jpg", text: "Välineet" },
                    { img: "Eläimet2", fileExt: "jpg", text: "Eläimet" },
                    { img: "Koru2", fileExt: "jpg", text: "Korupiirrokset" },
                    { img: "Kukat2", fileExt: "jpg", text: "Vesivärikukka" },
                    { img: "Kukat3", fileExt: "jpg", text: "Tussikukka" },
                    { img: "Kukat4", fileExt: "jpg", text: "Orvokki" },
                ],
            };
        case PortfolioSectionPath.ProductDesign:
            return {
                title: "ProductDesign",
                items: [
                    { img: "Yöpöytä1", text: "Yöpöytä" },
                    { img: "Aulateos1", text: "Taukotila" },
                    { img: "Lamppu1", fileExt: "jpg", text: "Lamppu" },
                    { video: "Pandakalenteri", fileExt: "mp4", text: "Pandakalenteri", maxHeight: "245px" },
                    { img: "Yöpöytä2", text: "Yöpöytä" },
                    { img: "Aulateos2", text: "Taukotila" },
                    { img: "Lamppu2", fileExt: "jpg", text: "Lamppu" },
                    { img: "Yöpöytä3", text: "Yöpöytä" },
                    { img: "Käsidesi", text: "Käsidesi" },
                    { img: "Lamppu3", fileExt: "jpg", text: "LamppuTyökuva" },
                ],
            };
        case PortfolioSectionPath.UIDesign:
            return {
                title: "UIDesign",
                items: [
                    { img: "Unelmapaja", text: "Unelmapaja" },
                    { video: "Unelmapaja2", fileExt: "mp4", height: "398px", text: "Unelmapaja" },
                ],
            };
        case PortfolioSectionPath.EventDesign:
            return {
                title: "EventDesign",
                items: [
                    { img: "Ompelu1", text: "Ompeluviikonloppu" },
                    { img: "Häät1", fileExt: "jpeg", text: "Häät" },
                    { img: "Ompelu2", text: "Ompeluviikonloppu" },
                    { img: "Häät 2", fileExt: "jpg", text: "HäätKattaus" },
                    { img: "Ompelu3", text: "Ompeluviikonloppu" },
                ],
            };
        case PortfolioSectionPath.Branding:
            return {
                title: "Branding",
                items: [
                    { img: "Sini", group: 1, fullWidth: true, text: "Sini" },
                    { img: "Sini2", group: 1, fileExt: "jpg", text: "Sini" },
                    { img: "Sini3", group: 1, fileExt: "jpg", text: "Sini" },
                    { img: "Sini4", group: 1, fileExt: "jpg", text: "Sini" },
                    { img: "Elisa", group: 2, fullWidth: true, text: "Elisa" },
                    { img: "Häät1", group: 2, text: "Häät" },
                    { img: "Häät2", group: 2, text: "Häät" },
                    { img: "Häät3", group: 2, text: "Häät" },
                    { img: "Häät4", group: 2, text: "Häät" },
                    { img: "Häät5", group: 2, text: "Häät" },
                ],
            };
        case PortfolioSectionPath.Photography:
            return {
                title: "Photography",
                items: [
                    { img: "Anna1", fileExt: "jpg", text: "Anna", group: 1 },
                    { img: "Anna2", fileExt: "jpg", text: "Anna", group: 1 },
                    { img: "Anna3", fileExt: "jpg", text: "Anna", group: 1 },
                    { img: "Matka1", fileExt: "jpg", text: "Matka", group: 2 },
                    { img: "Matka3", fileExt: "jpg", text: "Matka", group: 2 },
                    { img: "Matka4", fileExt: "jpg", text: "Matka", group: 2 },
                    { img: "Matka5", fileExt: "jpg", text: "Matka", group: 2 },
                    { img: "Matka2", fileExt: "jpg", text: "Matka", group: 2 },
                    { img: "Kangas2", fileExt: "jpg", text: "Kangas", group: 3 },
                    { img: "Kangas3", fileExt: "jpg", text: "Kangas", group: 3 },
                    { img: "Kangas4", fileExt: "jpg", text: "Kangas", group: 3 },
                    { img: "Koru1", fileExt: "jpg", text: "Korut", group: 4 },
                    { img: "Koru2", fileExt: "jpg", text: "Korut", group: 4 },
                    { img: "Maisema1", fileExt: "jpg", group: 4 },
                    { img: "Maisema2", fileExt: "jpg", group: 4 },
                    { img: "Maisema3", fileExt: "jpg", group: 4 },
                    { img: "Maisema5", fileExt: "jpg", group: 4 },
                    { img: "Maisema4", fileExt: "jpg", group: 4 },
                    { img: "Maisema6", fileExt: "jpg", group: 4 },
                    { img: "Maisema7", fileExt: "jpg", group: 4 },
                    { img: "Martsu1", fileExt: "jpg", text: "Martsu", group: 5 },
                    { img: "Samu2", fileExt: "jpg", text: "Samu", group: 5 },
                    { img: "Martsu2", fileExt: "jpg", text: "Martsu", group: 5 },
                    { img: "Samu1", fileExt: "jpg", text: "Samu", group: 5 },
                    { img: "Martsu3", fileExt: "jpg", text: "Martsu", group: 5 },
                    { img: "Roosa", fileExt: "jpg", text: "Roosa", group: 5 },
                ],
            };
        default:
            return {
                title: "",
                items: [],
            };
    }
};
