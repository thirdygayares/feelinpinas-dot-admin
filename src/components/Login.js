
import { Link } from "react-router-dom"

export function Login (){

    return (
        <div>
            <h1>This is Login</h1>
            <Link to="/dashboardDot">Admin Dot</Link>
            <br/>
            <Link to="/dashboardCity">Admin City</Link>
        </div>
    )
   

}

