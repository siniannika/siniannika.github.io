import { PortfolioSectionPath } from "./enums";

export interface ImgItem {
    img?: string;
    video?: string;
    fileExt?: string;
    fullWidth?: boolean;
    height?: string;
    text?: string;
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
                    { img: "Keikkajulisteet", fileExt: "jpg", text: "Keikkajulisteet" },
                    { img: "Postikortti2", text: "Postikortit" },
                    { img: "Pandakalenteri" },
                    { img: "Keikkajuliste1", fileExt: "jpg", text: "Keikkajulisteet" },
                    { img: "Postikortti3", text: "Postikortit" },
                    { img: "Osallisuus", text: "Osallisuus" },
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
                    { img: "Yöpöytä2", text: "Yöpöytä" },
                    { img: "Aulateos2", text: "Taukotila" },
                    { img: "Lamppu2", fileExt: "jpg", text: "Lamppu" },
                    { img: "Yöpöytä3", text: "Yöpöytä" },
                    { img: "Käsidesi", text: "Käsidesi" },
                    { img: "Lamppu3", fileExt: "jpg", text: "Lamppu" },
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
                    { img: "Ompelu2", text: "Ompeluviikonloppu" },
                    { img: "Häät1", fileExt: "jpeg", text: "Häät" },
                    { img: "Häät 2", fileExt: "jpg", text: "Häät" },
                ],
            };
        case PortfolioSectionPath.Branding:
            return {
                title: "Branding",
                items: [
                    { img: "Sini2", fullWidth: true },
                    { img: "Elisa2", fullWidth: true },
                    { img: "Häät1" },
                    { img: "Häät2" },
                    { img: "Häät3" },
                    { img: "Häät4" },
                    { img: "Häät5" },
                ],
            };
        case PortfolioSectionPath.Photography:
            return {
                title: "Photography",
                items: [
                    { img: "Anna1", fileExt: "jpg" },
                    { img: "Kangas1", fileExt: "jpg" },
                    { img: "Kangas2", fileExt: "jpg" },
                    { img: "Koru1", fileExt: "jpg" },
                    { img: "Koru2", fileExt: "jpg" },
                    { img: "Maisema1", fileExt: "jpg" },
                    { img: "Maisema2", fileExt: "jpg" },
                    { img: "Maisema3", fileExt: "jpg" },
                    { img: "Maisema5", fileExt: "jpg" },
                    { img: "Anna2", fileExt: "jpg" },
                    { img: "Roosa", fileExt: "jpg" },
                    { img: "Maisema4", fileExt: "jpg" },
                    { img: "Maisema6", fileExt: "jpg" },
                    { img: "Samu1", fileExt: "jpg" },
                    { img: "Samu2", fileExt: "jpg" },
                    { img: "Anna3", fileExt: "jpg" },
                    { img: "Matka1", fileExt: "jpg" },
                    { img: "Maisema7", fileExt: "jpg" },
                    { img: "Matka2", fileExt: "jpg" },
                    { img: "Matka3", fileExt: "jpg" },
                    { img: "Matka4", fileExt: "jpg" },
                    { img: "Matka5", fileExt: "jpg" },
                    { img: "Martsu1", fileExt: "jpg" },
                    { img: "Martsu2", fileExt: "jpg" },
                    { img: "Martsu3", fileExt: "jpg" },
                ],
            };
        default:
            return {
                title: "",
                items: [],
            };
    }
};
