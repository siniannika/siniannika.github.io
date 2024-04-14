import { useLocation } from "react-router-dom";

const useCurrentPath = () => {
    const { pathname } = useLocation();
    return pathname.replace("/", "");
};

export default useCurrentPath;
