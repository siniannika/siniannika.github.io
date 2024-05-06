import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PortfolioSectionPath } from "../../constants/enums";
import { useIsMobile } from "../../hooks";

interface ImgItem {
    img: string;
    path: string;
}

const items: ImgItem[] = [
    { img: "Graafinen suunnittelu", path: PortfolioSectionPath.GraphicDesign },
    { img: "Kalligrafia", path: PortfolioSectionPath.Calligraphy },
    { img: "Muotoilupiirtäminen", path: PortfolioSectionPath.DesignDrawing },
    { img: "Tuotemuotoilu", path: PortfolioSectionPath.ProductDesign },
    { img: "UI-suunnittelu", path: PortfolioSectionPath.UIDesign },
    { img: "Tapahtumamuotoilu", path: PortfolioSectionPath.EventDesign },
    { img: "Visuaalinen ilme ja brändäys", path: PortfolioSectionPath.Branding },
    { img: "Valokuvaus", path: PortfolioSectionPath.Photography },
];

const Portfolio = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleItemClick = (path: string) => {
        navigate(path);
    };

    const isMobile = useIsMobile();

    return (
        <Layout header={t("Portfolio")}>
            <ImageList cols={isMobile ? 1 : 3}>
                {items.map(({ img, path }) => (
                    <ImageListItem key={img} sx={{ cursor: "pointer" }} onClick={() => handleItemClick(path)}>
                        <img src={`cover_images/${img}.png`} alt={img} />
                        <ImageListItemBar title={img} position="below" sx={{ textAlign: "center" }} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Layout>
    );
};

export default Portfolio;
