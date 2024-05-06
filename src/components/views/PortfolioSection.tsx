import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { ImageList, ImageListItem } from "@mui/material";
import { useParams } from "react-router-dom";
import { PortfolioSectionPath } from "../../constants/enums";
import { useIsMobile } from "../../hooks";

interface ImgItem {
    img?: string;
    video?: string;
    fileExt?: string;
    fullWidth?: boolean;
    height?: string;
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
                    { img: "Postikortti4" },
                    { img: "Keikkajulisteet", fileExt: "jpg" },
                    { img: "Postikortti2" },
                    { img: "Pandakalenteri" },
                    { img: "Keikkajuliste1", fileExt: "jpg" },
                    { img: "Postikortti3" },
                    { img: "Osallisuus" },
                    { img: "Keikkajuliste2", fileExt: "jpg" },
                ],
            };
        case PortfolioSectionPath.Calligraphy:
            return {
                title: "Calligraphy",
                items: [
                    { img: "Sini1" },
                    { img: "Elisa1", fileExt: "jpg" },
                    { img: "Kukkakrassi", fileExt: "jpg" },
                    { img: "Sini2" },
                    { img: "Elisa2", fileExt: "jpg" },
                    { img: "Nimitaulu" },
                    { img: "Sini3" },
                    { img: "Runo", fileExt: "jpg" },
                    { img: "Mietelause", fileExt: "jpg" },
                ],
            };
        case PortfolioSectionPath.DesignDrawing:
            return {
                title: "DesignDrawing",
                items: [
                    { img: "Eläimet1", fileExt: "jpg" },
                    { img: "Koru1", fileExt: "jpg" },
                    { img: "Kukat1", fileExt: "jpg" },
                    { img: "Työvälineet", fileExt: "jpg" },
                    { img: "Eläimet2", fileExt: "jpg" },
                    { img: "Koru2", fileExt: "jpg" },
                    { img: "Kukat2", fileExt: "jpg" },
                    { img: "Kukat3", fileExt: "jpg" },
                    { img: "Kukat4", fileExt: "jpg" },
                ],
            };
        case PortfolioSectionPath.ProductDesign:
            return {
                title: "ProductDesign",
                items: [
                    { img: "Yöpöytä1" },
                    { img: "Aulateos1" },
                    { img: "Lamppu1", fileExt: "jpg" },
                    { img: "Yöpöytä2" },
                    { img: "Aulateos2" },
                    { img: "Lamppu2", fileExt: "jpg" },
                    { img: "Yöpöytä3" },
                    { img: "Käsidesi" },
                    { img: "Lamppu3", fileExt: "jpg" },
                ],
            };
        case PortfolioSectionPath.UIDesign:
            return {
                title: "UIDesign",
                items: [{ img: "Unelmapaja" }, { video: "Unelmapaja2", fileExt: "mp4", height: "398px" }],
            };
        case PortfolioSectionPath.EventDesign:
            return {
                title: "EventDesign",
                items: [{ img: "Ompelu1" }, { img: "Ompelu2" }, { img: "Häät1", fileExt: "jpeg" }, { img: "Häät 2", fileExt: "jpg" }],
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

const PortfolioSection = () => {
    const { t } = useTranslation();
    const { section } = useParams();
    const { title, items } = getSection(section);
    const isMobile = useIsMobile();

    // const handleItemClick = (path: string) => {
    //     navigate(path);
    // };

    return (
        <Layout header={t(title)} backButton>
            <ImageList variant="masonry" cols={1} sx={{ overflowY: "visible" }} gap={10}>
                {items
                    .filter((i) => i.fullWidth)
                    .map((i) => (
                        <ImageItem key={i.img ?? i.video} {...i} />
                    ))}
            </ImageList>
            <ImageList variant="masonry" cols={isMobile ? 1 : 3} sx={{ overflowY: "visible" }} gap={10}>
                {items
                    .filter((i) => !i.fullWidth)
                    .map((i) => (
                        <ImageItem key={i.img ?? i.video} {...i} />
                    ))}
            </ImageList>
        </Layout>
    );
};

export default PortfolioSection;

const ImageItem = ({ img, video, fileExt = "png", height }: ImgItem) => {
    const { section } = useParams();

    return (
        <ImageListItem key={img ?? video} rows={2}>
            {video ? (
                <video className="img-list-video" autoPlay loop muted src={`${section}/${video}.${fileExt}`} height={height} />
            ) : (
                <img src={`${section}/${img}.${fileExt}`} alt={img} />
            )}
        </ImageListItem>
    );
};
