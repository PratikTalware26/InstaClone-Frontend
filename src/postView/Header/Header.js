import "./Header.css"
import {Link} from "react-router-dom"
import instaLogo from "../../Img/instaLogo.png"
import cameraLogo from "../../Img/camera.png"
const Header=()=>{
    return(
        <>
        <div className="header-container">
            <div className="insta-logo">
                <Link to="/">
                <img src={instaLogo} alt="img"/>
                </Link>
            </div>
            <div className="camera-logo">
                <Link to="/posts/create">
                <img src={cameraLogo} alt="img2"/>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Header;