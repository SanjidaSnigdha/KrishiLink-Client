import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
    const authInfo = use(AuthContext)
};

export default useAuth;
