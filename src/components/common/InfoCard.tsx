import { SxProps } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

interface Props {
    header: string;
    content: string;
    subcontents: string[];
    sx?: SxProps
}

const InfoCard = ({ header, content, subcontents, sx }: Props) => {
    return (
        <Card sx={sx}>
            <CardHeader title={header} />
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    {content}
                </Typography>
                {subcontents.map((c) => (
                    <Typography key={c} gutterBottom color="text.secondary">
                        {c}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
};

export default InfoCard;
