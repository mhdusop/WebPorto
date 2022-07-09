import { Component, Fragment} from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/home/Content";

export default class Home extends Component{
    render(){
        return(
            <Fragment>
                {/* Navbar */}
                <Navbar />

                {/* Content */}
                <Content />
            </Fragment>
        )
    }
}