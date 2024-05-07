import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { ImageList, ImageListItem, ImageListItemBar, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PortfolioSectionPath } from "../../constants/enums";
import { useIsMobile } from "../../hooks";

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

export const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
    cursor: "pointer",
    "& > img:hover": {
        boxShadow: theme.shadows[4],
    },
    "& > video:hover": {
        boxShadow: theme.shadows[4],
    },
}));

const Portfolio = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleItemClick = (path: string) => {
        navigate(path);
    };

    const isMobile = useIsMobile();

    return (
        <Layout header={t("Portfolio")}>
            <ImageList cols={isMobile ? 1 : 3} gap={10}>
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
