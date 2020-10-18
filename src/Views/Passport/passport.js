import React, { Component } from 'react';
import Header from "../../Components/header/header"
import PassportURL from "../../assets/ic_passport.png"
import CammeraIconURL from "../../assets/ic_camera.png"
import './Passport.css'


class IDCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendHeaderText: 'Passport',
            PassportSrcs: PassportURL,
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
                    <div className="Passport-Container">
                        <img src={this.state.PassportSrcs} className="Passport" />
                    </div>
                </div>
                <div className = "Icon-Container" >
                    <div className="Passport-Container" onClick={()=>{this.props.history.push('iddoccamera');}}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style = {{margin:"0px",color:"white"}}>capture the Passort</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default IDCard;
