import { SxProps } from "@mui/material";
import Avatar from "@mui/material/Avatar";

type AvatarSize = "sm" | "lg"; // Defaults to "sm"

interface Props {
    size?: AvatarSize;
    sx?: SxProps;
    blue?: boolean;
}

const getSize = (size?: AvatarSize) => (size === "lg" ? 200 : 40);

export const MyAvatar = ({ size, sx, blue }: Props) => (
    <Avatar src={blue ? "profile_round.png" : "profile_round2.png"} alt="Profile" sx={{ width: getSize(size), height: getSize(size), ...sx }} />
);
