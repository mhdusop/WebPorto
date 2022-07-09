import { Component } from "react";
import "./home.css"
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare , FaLinkedin} from "react-icons/fa";

export default class Content extends Component {
    render(){
        return(
            <div className="content text-center mt-4">
                <img className="me-img" src={"https://i.im.ge/2022/07/09/upSUxa.jpg"} alt={"Me"} width={"250"} />
                <h1 className="mt-4 name-tag">Muhammad Yusof</h1>
                <h4 className="text-white" style={{ fontWeight : "normal"}}>Frontend Web Developer</h4>
                
                {/* icon Sosmed */}
                <span className="icon-wrap mt-4">
                    <a href="https://www.instagram.com/mhduusop/">
                        <BsInstagram className="icon" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100010430771081">
                        <FaFacebookSquare className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mhdusop/">
                        <FaLinkedin className="icon" />
                    </a>
                </span>
            </div>
        )
    }
}