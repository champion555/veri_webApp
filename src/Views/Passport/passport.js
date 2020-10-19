import React, { Component } from 'react';
import Header from "../../Components/header/header"
import PassportURL from "../../assets/ic_passport.png"
import CammeraIconURL from "../../assets/ic_camera.png"
import Button from "../../Components/button/button"
import './Passport.css'


class Passport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendHeaderText: 'Passport',
            PassportSrcs: PassportURL,
            CameraSrc: CammeraIconURL,
            Passport: "passport",
            PassportButtonTex: "capture the Passport",
        }
    }

    componentDidMount = () => {
        console.log("CountryName", localStorage.getItem("CountryName"))
        // if (localStorage.getItem("passport")) {
        //     this.setState({ PassportSrcs: localStorage.getItem("passport") })
        //     this.setState({ PassportButtonTex: "Edit the passport" })
        // }
        if(window.passport){
            this.setState({ PassportSrcs: window.passport })
                this.setState({ PassportButtonTex: "Edit the passport" })
        }
    }
    onCameraTarget = (CardTarget) => {
        localStorage.setItem("CardTarget", CardTarget)
        this.props.history.push(`/iddoccamera`)
    }


    render() {
        return (
            <div>
                <Header headerText={this.state.sendHeaderText} goIDMain="IDDoc" />
                <div className="Img-Container">
                    <div className="Passport-Container">
                        <img src={this.state.PassportSrcs} className="Passport" />
                    </div>
                </div>
                <div className="Icon-Container" >
                    <div className="Passport-Container" onClick={this.onCameraTarget.bind(this, this.state.Passport)}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style={{ margin: "0px", color: "white" }}>{this.state.PassportButtonTex}</p>
                    </div>
                    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                        <Button
                            label="Upload"
                            onClick={() => {
                                // this.props.history.push('facelivness');
                            }}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Passport;
