import { Component } from "react";
import "./home.css"
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default class Content extends Component {
    render(){
        return(
            <div className="content text-center mt-4">
                <img className="me-img" src={"https://i.im.ge/2022/11/24/SLnnu4.hengker.jpg"} alt={"Me"} width={"250"} />
                <h1 className="mt-4 name-tag">Muhammad Yusof</h1>
                <h3 className="text-white" style={{ fontWeight : "normal"}}>Front End Web Developer</h3>
                
                {/* icon Sosmed */}
                <span className="icon-wrap mt-4">
                    <a href="https://www.instagram.com/mhduusop/">
                        <BsInstagram className="icon" />
                    </a>
                    <a href="https://github.com/mhdusop">
                        <BsGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mhdusop/">
                        <FaLinkedin className="icon" />
                    </a>
                </span>
            </div>
        )
    }
}