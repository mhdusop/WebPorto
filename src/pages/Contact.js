import { Component, Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import { contactData } from "../components/contact/contact_data";
import '../components/contact/contact.css'

export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            data : contactData
        }
    }

    render() {

        const contact = this.state.data.map((data) => {
            return(
                <a href={data.link} className="card card-skill text-center" style={{ width: "auto" }}>
                    <div className="card-body-skill p-4"  style={{ display : "grid" }}>
                        <span className="icon fs-1">{data.logo}</span>
                        <a href={data.link} class="card-title text-white fs-4">{data.sosmed}</a>
                        <h6 className="text-white">
                            <span ></span> 
                            <span className="fw-normal text-secondary">{data.username}</span>
                        </h6>
                    </div>
                </a>
            )
        })
        return(
            <Fragment>
                {/* Navbar */}
                <Navbar />

                {/* Contact Content */}
                <div className="container mt-3 mb-4">
                    <h1 className="text-center text-white mb-5" style={{ textTransform : "uppercase" }}>Contact</h1>
                    <div className="card-template-skill">
                        {contact}
                    </div>
                </div>
            </Fragment>
        )
    }
}