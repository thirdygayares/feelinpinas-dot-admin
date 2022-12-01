import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

const Places = () => {

    const context = useContext(GlobalContext);
    
    useEffect(() => {
        context.setNavbarVisibility(true);
    }, []);

    return (
        <div className="p-3">
            Henlo from places
        </div>
    )
}

export default Places;