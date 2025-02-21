import { Component, Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import { projectData } from "../components/project/project_data";
import { BsGithub } from "react-icons/bs"
import '../assets/css/project.css'

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: projectData,
        }
    }

    render() {
        const project = this.state.data.map((data) => {
            const checkData = data.github === "" ? "none" : ""
            return (
                <div class="card" style={{ width: "auto" }}>
                    <img src={data.img} className={"card-img-top"} alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-white">{data.title}</h5>
                        <p class="card-text text-white ">{data.subtitle}</p>
                        <div className="d-flex float-start">
                            <h5><span class="badge bg-secondary m-1" style={{ borderRadius: "0px" }}>{data.technologies[0]}</span></h5>
                            <h5><span class="badge bg-secondary m-1" style={{ borderRadius: "0px" }}>{data.technologies[1]}</span></h5>
                            <h5><span class="badge bg-secondary m-1" style={{ borderRadius: "0px" }}>{data.technologies[2]}</span></h5>
                            <h5><span class="badge bg-secondary m-1" style={{ borderRadius: "0px" }}>{data.technologies[3]}</span></h5>
                        </div>
                        <span className="icon float-end">
                            <a href={data.github} style={{display: checkData}}>
                                <BsGithub className="iconGithub" />
                            </a>
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <Fragment>
                {/* Navbar */}
                <Navbar />

                {/* Content Project */}
                <div className="container mt-3 mb-4">
                    <h1 className="text-center text-white mb-5" style={{ textTransform : "uppercase" }}>Portfolio</h1>
                    <div className="card-template">
                        {project}
                    </div>
                </div>
            </Fragment>
        )
    }
}