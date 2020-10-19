import React, { Component } from 'react';
import Header from "../../Components/header/header"
import FrontIDCardURL from "../../assets/ic_idcard_front.png"
import BackIDCardURL from "../../assets/ic_idcard_back.png"
import CammeraIconURL from "../../assets/ic_camera.png"
import Button from "../../Components/button/button"
import './IDCard.css'


class IDCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendHeaderText: 'IDCard',
            FrontImageSrcs: FrontIDCardURL,
            BackImageSrcs: BackIDCardURL,
            CameraSrc: CammeraIconURL,
            BackIDCard: "back  of IDCard",
            FrontIDCard: "front of IDCard",
            FrontIDButtonTxt: "capture front of ID Card",
            BackIDButtonTxt: "capture back of ID Card"
        }
    }

    componentDidMount = () => {
        console.log("CountryName", localStorage.getItem("CountryName"))

        if (localStorage.getItem("backIDCard")) {
            // alert(localStorage.getItem("backIDCard"))
            // this.setState({BackImageSrcs:URL.createObjectURL(localStorage.getItem("backIDCard"))})
            this.setState({ BackImageSrcs: localStorage.getItem("backIDCard") })
            this.setState({BackIDButtonTxt:"Edit back of ID Card"})

        }
        if (localStorage.getItem("frontIDCard")) {
            this.setState({ FrontImageSrcs: localStorage.getItem("frontIDCard") })
            this.setState({FrontIDButtonTxt:"Edit front of ID Card"})
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
                    <div className="FrontCard-Container">
                        <img src={this.state.FrontImageSrcs} className="FrontCard" />
                    </div>
                    <div className="BackCard-Container">
                        <img src={this.state.BackImageSrcs} className="BackCard" />
                    </div>
                </div>
                <div className="Icon-Container" >
                    <div className="FrontCard-Container" onClick={this.onCameraTarget.bind(this, this.state.FrontIDCard)}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style={{ margin: "0px", color: "white" }}>{this.state.FrontIDButtonTxt}</p>
                    </div>
                    <div className="BackCard-Container" onClick={this.onCameraTarget.bind(this, this.state.BackIDCard)}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style={{ margin: "0px", color: "white" }}>{this.state.BackIDButtonTxt}</p>
                    </div>
                    <div style={{width:"100%",justifyContent:"center",display:"flex"}}>
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

export default IDCard;
