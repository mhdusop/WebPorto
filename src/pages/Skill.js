import { Component, Fragment} from "react";
import Navbar from "../components/navbar/Navbar";
import { skillData } from "../components/skill/skill_data";
import "../components/skill/skill.css";

export default class Skill extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : skillData
        }
    }

    render(){
        const skill = this.state.data.map((data) => {
            return(
                <div className="card card-skill text-center" style={{ width: "auto" }}>
                    <div className="card-body-skill p-4">
                        <img src={data.logo} alt="" width={80} />
                        <h4 class="card-title text-white mt-3 mb-3">{data.name}</h4>
                        <h6 className="text-white">
                            <span style={{ fontWeight : "bold" }}>{data.experience}</span> <span style={{ fontWeight : "normal" }}>of experience.</span>
                        </h6>
                    </div>
                </div>
            )
        })

        return(
            <Fragment>
                {/* Navbar */}
                <Navbar />

                {/* Skill Content */}
                <div className="container mt-3 mb-4">
                    <h1 className="text-center text-white mb-5" style={{ textTransform : "uppercase" }}>skill</h1>
                    <div className="card-template-skill">
                        {skill}
                    </div>
                </div>
            </Fragment>
        )
    }
}