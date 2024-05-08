import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { ImageList, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PortfolioSectionPath } from "../../constants/enums";
import { StyledImageListItem } from "../common/ImageList";

interface ImgItem {
    img: string;
    path: string;
}

const items: ImgItem[] = [
    { img: "Tuotemuotoilu", path: PortfolioSectionPath.ProductDesign },
    { img: "Graafinen suunnittelu", path: PortfolioSectionPath.GraphicDesign },
    { img: "Visuaalinen ilme ja brändäys", path: PortfolioSectionPath.Branding },
    { img: "UI-suunnittelu", path: PortfolioSectionPath.UIDesign },
    { img: "Valokuvaus", path: PortfolioSectionPath.Photography },
    { img: "Tapahtumamuotoilu", path: PortfolioSectionPath.EventDesign },
    { img: "Kalligrafia", path: PortfolioSectionPath.Calligraphy },
    { img: "Muotoilupiirtäminen", path: PortfolioSectionPath.DesignDrawing },
];

const Portfolio = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleItemClick = (path: string) => {
        navigate(path);
    };

    return (
        <Layout header={t("Portfolio")}>
            <ImageList cols={3}>
                {items.map(({ img, path }) => (
                    <StyledImageListItem key={img} onClick={() => handleItemClick(path)}>
                        <img src={`cover_images/${img}.png`} alt={img} />
                        <ImageListItemBar title={img} position="below" sx={{ textAlign: "center" }} />
                    </StyledImageListItem>
                ))}
            </ImageList>
        </Layout>
    );
};

export default Portfolio;
