import { useContext } from "react";
import { userContext,chenelContext } from "../App";
const ComponentE = () => {
    const userName = useContext(userContext);
    const chanelName = useContext(chenelContext)
    return (
        <div>
            {userName} - {chanelName}
        </div>
    );
};

export default ComponentE;