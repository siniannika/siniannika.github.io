import { useLocation } from "react-router-dom";

const useCurrentPath = (topLevel = false) => {
    const { pathname } = useLocation();
    const path = pathname.replace("/", "");
    return topLevel ? path.split("/")[0] : path;
};

export default useCurrentPath;
