import React, { Component } from 'react';
import Header from "../../Components/header/header"
import FrontIDCardURL from "../../assets/ic_idcard_front.png"
import BackIDCardURL from "../../assets/ic_idcard_back.png"
import CammeraIconURL from "../../assets/ic_camera.png"
import './ResidentPermit.css'


class IDCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendHeaderText: 'Resident Permit',
            FrontImageSrcs: FrontIDCardURL,
            BackImageSrcs: BackIDCardURL,
            CameraSrc: CammeraIconURL
        }
    }

    // ComponentDidamount = () => {
    //     console.log("home")
    // }


    render() {
        return (
            <div>
                <Header headerText={this.state.sendHeaderText} />
                <div className="Img-Container">
                    <div className="FrontCard-Container">
                        <img src={this.state.FrontImageSrcs} className="FrontCard" />
                    </div>
                    <div className="BackCard-Container">
                        <img src={this.state.BackImageSrcs} className="BackCard" />
                    </div>
                </div>
                <div className = "Icon-Container" >
                    <div className="FrontCard-Container" onClick={()=>{this.props.history.push('iddoccamera');}}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style = {{margin:"0px",color:"white"}}>capture Front Resident Permit</p>
                    </div>
                    <div className="BackCard-Container" onClick={()=>{this.props.history.push('iddoccamera');}}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style = {{margin:"0px",color:"white"}}>capture Back Resident Permit</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default IDCard;
