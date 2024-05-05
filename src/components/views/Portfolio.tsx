import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ImgItem {
    img: string;
    path: string;
}

const items: ImgItem[] = [
    { img: "Graafinen suunnittelu", path: "graphic_design" },
    { img: "Kalligrafia", path: "calligraphy" },
    { img: "Muotoilupiirtäminen", path: "design_drawing" },
    { img: "Liikkuva kuva", path: "video" },
    { img: "Tuotemuotoilu", path: "product_design" },
    { img: "UI-suunnittelu", path: "ui_design" },
    { img: "Tapahtumamuotoilu", path: "event_design" },
    { img: "Visuaalinen ilme ja brändäys", path: "branding" },
    { img: "Valokuvaus", path: "photography" },
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
                    <ImageListItem key={img} onClick={() => handleItemClick(path)}>
                        <img src={`cover_images/${img}.png`} alt={img} />
                        <ImageListItemBar title={img} position="below" sx={{ textAlign: "center" }} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Layout>
    );
};

export default Portfolio;
