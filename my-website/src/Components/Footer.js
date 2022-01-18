import {Link} from "react-router-dom";

function Footer({buttonName}){
    
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to={buttonName}><button>{buttonName}</button></Link>
                </div>
            </div>
        </div>
    )

}
export default Footer;