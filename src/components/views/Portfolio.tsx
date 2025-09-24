import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useNavigate } from "react-router-dom";
import { PortfolioSectionPath } from "../../constants/enums";
import ImageList, { StyledImageListItem } from "../common/ImageList";

interface ImgItem {
    img: string;
    path: string;
    ext?: string;
}

const items: ImgItem[] = [
    { img: "Visuaalinen ilme ja brändäys", path: PortfolioSectionPath.Branding },
    { img: "Graafinen suunnittelu", path: PortfolioSectionPath.GraphicDesign, ext: "jpg" },
    { img: "Palvelumuotoilu", path: PortfolioSectionPath.ServiceDesign, ext: "jpg" },
    { img: "Valokuvaus", path: PortfolioSectionPath.Photography, ext: "jpg" },
    { img: "UI-suunnittelu", path: PortfolioSectionPath.UIDesign },
    { img: "Tuotemuotoilu", path: PortfolioSectionPath.ProductDesign, ext: "jpg" },
    { img: "Tapahtumamuotoilu", path: PortfolioSectionPath.EventDesign, ext: "jpg" },
    { img: "Kalligrafia", path: PortfolioSectionPath.Calligraphy, ext: "jpg" },
    { img: "Muotoilupiirtäminen", path: PortfolioSectionPath.DesignDrawing, ext: "jpg" },
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
                {items.map(({ img, path, ext = "png" }) => (
                    <StyledImageListItem key={img} onClick={() => handleItemClick(path)}>
                        <img src={`cover_images/${img}.${ext}`} alt={img} />
                        <ImageListItemBar title={img} position="below" sx={{ textAlign: "center" }} />
                    </StyledImageListItem>
                ))}
            </ImageList>
        </Layout>
    );
};

export default Portfolio;
