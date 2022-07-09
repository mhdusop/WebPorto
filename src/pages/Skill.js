import { Component, Fragment} from "react";
import Navbar from "../components/navbar/Navbar";
import NotFound404 from "../components/notFound404";

export default class Skill extends Component{
    render(){
        return(
            <Fragment>
                <Navbar />
                <NotFound404 />
            </Fragment>
        )
    }
}