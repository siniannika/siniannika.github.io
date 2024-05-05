import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ImgItem {
    img: string;
    fileExt?: string;
    path: string;
    cols?: number;
    rows?: number;
}

const items: ImgItem[] = [
    { img: "Postikortti1", path: "product_design" },
    { img: "Postikortti2", path: "ui_design" },
    { img: "Postikortti3", path: "event_design" },
    { img: "Postikortti4", path: "branding" },
    { img: "Keikkajuliste1", fileExt: "jpg", path: "graphic_design" },
    { img: "Keikkajuliste2", fileExt: "jpg", path: "calligraphy" },
    { img: "Keikkajulisteet", fileExt: "jpg", path: "calligraphy", cols: 2 },
    { img: "Osallisuus", path: "design_drawing", cols: 2, rows: 2 },
    { img: "Pandakalenteri", path: "video", cols: 2, rows: 2 },
];

const GraphicDesign = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleItemClick = (path: string) => {
        navigate(path);
    };

    return (
        <Layout header={t("GraphicDesign")}>
            <ImageList variant="quilted" cols={4} sx={{ overflowY: "visible" }} rowHeight={200}>
                {items.map(({ img, path, fileExt = "png", cols = 1, rows = 1 }) => (
                    <ImageListItem key={img} cols={cols} rows={rows} onClick={() => handleItemClick(path)}>
                        <img src={`graphic_design/${img}.${fileExt}`} alt={img} />
                        {/* <ImageListItemBar title={img} position="below" sx={{ textAlign: "center" }} /> */}
                    </ImageListItem>
                ))}
            </ImageList>
        </Layout>
    );
};

export default GraphicDesign;
