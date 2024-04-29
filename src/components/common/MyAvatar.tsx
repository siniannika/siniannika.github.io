import { SxProps } from "@mui/material";
import Avatar from "@mui/material/Avatar";

type AvatarSize = "sm" | "lg"; // Defaults to "sm"

interface Props {
    size?: AvatarSize;
    sx?: SxProps;
}

const getSize = (size?: AvatarSize) => (size === "lg" ? 200 : 40);

export const MyAvatar = ({ size, sx }: Props) => (
    <Avatar src="profile_round2.png" alt="RP" sx={{ width: getSize(size), height: getSize(size), ...sx }} />
);
