import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getSection } from "../../constants/section";
import { styled } from "@mui/material";

const ImgDialog = () => {
    const { section, item } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const i = getSection(section).items.find((i) => i.img === item || i.video === item);

    if (!i) return null;

    const { img, video, fileExt = "png", fullWidth, text } = i;

    const onClose = () => {
        navigate("../");
    };

    const StyledCard = styled(Card)(() => ({
        overflow: "auto",
        "&  video": {
            objectFit: "cover",
            width: "100%",
            display: "block",
            height: "66vh",
            maxHeight: "750px",
        },
    }));

    return (
        <Dialog open={true} onClose={onClose} maxWidth={fullWidth ? "sm" : "xs"}>
            <StyledCard>
                {video ? (
                    <video autoPlay loop muted src={`${section}/${video}.${fileExt}`} />
                ) : (
                    <CardMedia component="img" alt={img} height="100%" image={`${section}/${img}.${fileExt}`} />
                )}
                {text ? (
                    <CardContent>
                        <Typography variant="body1">{t(`${section}.${text}`)}</Typography>
                    </CardContent>
                ) : null}
                <CardActions>
                    <Button variant="contained" color="primary" onClick={onClose}>
                        {t("Close")}
                    </Button>
                </CardActions>
            </StyledCard>
        </Dialog>
    );
};

export default ImgDialog;
