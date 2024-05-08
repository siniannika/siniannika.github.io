import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { styled } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ImgItem, getSection } from "../../constants/section";
import React, { useMemo } from "react";
import ImageList, { StyledImageListItem } from "../common/ImageList";

const PortfolioSection = () => {
    const { t } = useTranslation();
    const { section } = useParams();
    const { title, items } = getSection(section);
    const navigate = useNavigate();

    const handleItemClick = (path: string | undefined) => {
        navigate(path ?? "");
    };

    const groups = useMemo(() => [...new Set(items.map((i) => i.group ?? 0))].sort(), [items]);

    return (
        <>
            <Layout header={t(title)} backButton>
                {groups.map((g) => (
                    <React.Fragment key={g}>
                        <ImageList variant="masonry" cols={1}>
                            {items
                                .filter((i) => i.fullWidth && (i.group ?? 0) === g)
                                .map((i) => (
                                    <ImageItem key={i.img ?? i.video} {...i} handleClick={handleItemClick} />
                                ))}
                        </ImageList>
                        <ImageList variant="masonry" cols={3}>
                            {items
                                .filter((i) => !i.fullWidth && (i.group ?? 0) === g)
                                .map((i) => (
                                    <ImageItem key={i.img ?? i.video} {...i} handleClick={handleItemClick} />
                                ))}
                        </ImageList>
                    </React.Fragment>
                ))}
            </Layout>
            <Outlet />
        </>
    );
};

export default PortfolioSection;

const StyledImageItem = styled(StyledImageListItem)(() => ({
    "& > video": {
        objectFit: "cover",
        width: "100%",
        display: "block",
    },
}));

const ImageItem = ({ img, video, fileExt = "png", height, handleClick }: ImgItem & { handleClick: (img: string | undefined) => void }) => {
    const { section } = useParams();

    return (
        <StyledImageItem key={img ?? video} rows={2} onClick={() => handleClick(img ?? video)}>
            {video ? (
                <video autoPlay loop muted src={`${section}/${video}.${fileExt}`} height={height} />
            ) : (
                <img src={`${section}/${img}.${fileExt}`} alt={img} />
            )}
        </StyledImageItem>
    );
};
