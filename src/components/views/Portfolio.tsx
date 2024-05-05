import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PortfolioSectionPath } from "../../constants/enums";

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

    return (
        <Layout header={t("Portfolio")} Icon={BusinessCenterIcon}>
            <ImageList cols={3}>
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
