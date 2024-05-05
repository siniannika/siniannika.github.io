import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { ImageList, ImageListItem } from "@mui/material";
import { useParams } from "react-router-dom";
import { PortfolioSectionPath } from "../../constants/enums";

interface ImgItem {
    img?: string;
    video?: string;
    fileExt?: string;
    cols?: number;
    rows?: number;
}

interface Section {
    title: string;
    items: ImgItem[];
}

const getSection = (section: string | undefined): Section => {
    switch (section) {
        case PortfolioSectionPath.GraphicDesign:
            return {
                title: "GraphicDesign",
                items: [
                    { img: "Postikortti1" },
                    { img: "Postikortti2" },
                    { img: "Postikortti3" },
                    { img: "Postikortti4" },
                    { img: "Keikkajuliste1", fileExt: "jpg" },
                    { img: "Keikkajuliste2", fileExt: "jpg" },
                    { img: "Keikkajulisteet", fileExt: "jpg", cols: 2 },
                    { img: "Osallisuus", cols: 2, rows: 2 },
                    { img: "Pandakalenteri", cols: 2, rows: 2 },
                ],
            };
        case PortfolioSectionPath.Calligraphy:
            return {
                title: "Calligraphy",
                items: [
                    { img: "Elisa1", fileExt: "jpg" },
                    { img: "Elisa2", fileExt: "jpg" },
                    { img: "Kukkakrassi", fileExt: "jpg" },
                    { img: "Mietelause", fileExt: "jpg" },
                    { img: "Nimitaulu" },
                    { img: "Runo", fileExt: "jpg" },
                    { img: "Sini1", cols: 2 },
                    { img: "Sini2", cols: 2, rows: 2 },
                    { img: "Sini3", cols: 2, rows: 2 },
                ],
            };
        case PortfolioSectionPath.DesignDrawing:
            return {
                title: "DesignDrawing",
                items: [
                    { img: "Eläimet1", fileExt: "jpg" },
                    { img: "Eläimet2", fileExt: "jpg" },
                    { img: "Koru1", fileExt: "jpg" },
                    { img: "Koru2", fileExt: "jpg" },
                    { img: "Kukat1", fileExt: "jpg" },
                    { img: "Kukat2", fileExt: "jpg" },
                    { img: "Kukat3", fileExt: "jpg", cols: 2 },
                    { img: "Kukat4", fileExt: "tif", cols: 2, rows: 2 },
                    { img: "Työvälineet", fileExt: "jpg", cols: 2, rows: 2 },
                ],
            };
        case PortfolioSectionPath.ProductDesign:
            return {
                title: "ProductDesign",
                items: [
                    { img: "Aulateos1" },
                    { img: "Aulateos2" },
                    { img: "Käsidesi" },
                    { img: "Lamppu1", fileExt: "jpg" },
                    { img: "Lamppu2", fileExt: "jpg" },
                    { img: "Lamppu3", fileExt: "jpg" },
                    { img: "Yöpöytä1", cols: 2 },
                    { img: "Yöpöytä2", cols: 2, rows: 2 },
                    { img: "Yöpöytä3", cols: 2, rows: 2 },
                ],
            };
        case PortfolioSectionPath.UIDesign:
            return {
                title: "UIDesign",
                items: [{ img: "Unelmapaja" }, { video: "Unelmapaja2", fileExt: "mp4" }],
            };
        case PortfolioSectionPath.EventDesign:
            return {
                title: "EventDesign",
                items: [{ img: "Ompelu2" }, { img: "Ompelu1" }, { img: "Häät1", fileExt: "jpeg" }, { img: "Häät 2", fileExt: "jpg" }],
            };
        case PortfolioSectionPath.Branding:
            return {
                title: "Branding",
                items: [
                    { img: "Elisa1" },
                    { img: "Elisa2" },
                    { img: "Häät1" },
                    { img: "Häät2" },
                    { img: "Häät3" },
                    { img: "Häät4" },
                    { img: "Häät5" },
                    { img: "Sini1" },
                    { img: "Sini2" },
                ],
            };
        case PortfolioSectionPath.Photography:
            return {
                title: "Photography",
                items: [
                    { img: "Anna1", fileExt: "jpg" },
                    { img: "Anna2", fileExt: "jpg" },
                    { img: "Anna3", fileExt: "jpg" },
                    { img: "Kangas1", fileExt: "jpg" },
                    { img: "Kangas2", fileExt: "jpg" },
                    { img: "Koru1", fileExt: "jpg" },
                    { img: "Koru2", fileExt: "jpg", cols: 2 },
                    { img: "Maisema1", fileExt: "jpg", cols: 2, rows: 2 },
                    { img: "Maisema2", fileExt: "jpg", cols: 2, rows: 2 },
                    { img: "Maisema3", fileExt: "jpg", cols: 2, rows: 2 },
                    { img: "Maisema4", fileExt: "jpg", cols: 2, rows: 2 },
                    { img: "Maisema5", fileExt: "jpg", cols: 2, rows: 2 },
                    { img: "Maisema6", fileExt: "jpg", cols: 2, rows: 2 },
                    { img: "Maisema7", fileExt: "jpg", cols: 2, rows: 2 },
                    { img: "Martsu1", fileExt: "jpg" },
                    { img: "Martsu2", fileExt: "jpg" },
                    { img: "Martsu3", fileExt: "jpg" },
                    { img: "Matka1", fileExt: "jpg" },
                    { img: "Matka2", fileExt: "jpg" },
                    { img: "Matka3", fileExt: "jpg" },
                    { img: "Matka4", fileExt: "jpg" },
                    { img: "Matka5", fileExt: "jpg" },
                    { img: "Roosa", fileExt: "jpg" },
                    { img: "Samu1", fileExt: "jpg" },
                    { img: "Samu2", fileExt: "jpg" },
                ],
            };
        default:
            return {
                title: "",
                items: [],
            };
    }
};

const PortfolioSection = () => {
    const { t } = useTranslation();
    const { section } = useParams();
    const { title, items } = getSection(section);

    // const navigate = useNavigate();

    // const handleItemClick = (path: string) => {
    //     navigate(path);
    // };

    return (
        <Layout header={t(title)} backButton>
            <ImageList variant="quilted" cols={4} sx={{ overflowY: "visible" }} rowHeight={200}>
                {items.map(({ img, video, fileExt = "png", cols = 1, rows = 1 }) => (
                    <ImageListItem key={img ?? video} cols={cols} rows={rows}>
                        {video ? (
                            <video className="img-list-video" autoPlay loop muted src={`${section}/${video}.${fileExt}`} />
                        ) : (
                            <img src={`${section}/${img}.${fileExt}`} alt={img} />
                        )}
                    </ImageListItem>
                ))}
            </ImageList>
        </Layout>
    );
};

export default PortfolioSection;
