import { ImageListProps, ImageListItem, ImageList as MuiImageList, styled } from "@mui/material";
import { useIsMobile } from "../../hooks";

interface Props {
    cols: number;
    variant?: ImageListProps["variant"];
    children: JSX.Element | JSX.Element[];
}

const ImageList = ({ cols, variant, children }: Props) => {
    const isMobile = useIsMobile();

    return (
        <MuiImageList variant={variant} cols={isMobile ? 1 : cols} sx={{ my: 0.5 }} gap={10}>
            {children}
        </MuiImageList>
    );
};

export default ImageList;

export const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
    cursor: "pointer",
    "& > img:hover": {
        boxShadow: theme.shadows[4],
    },
    "& > video:hover": {
        boxShadow: theme.shadows[4],
    },
}));
