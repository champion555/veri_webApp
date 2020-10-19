import React, { Component } from 'react';
import Header from "../../Components/header/header"
import POADocURL from "../../assets/ic_address_doc.png"
import CammeraIconURL from "../../assets/ic_camera.png"
import Button from "../../Components/button/button"
import './POADoc.css'


class POADoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendHeaderText: 'POA Document',
            POADocSrc: POADocURL,
            CameraSrc: CammeraIconURL,
            POADocument: "passport",
            buttonMes: "capture the POADoc"
        }
    }

    componentDidMount = () => {
        // console.log("CountryName", localStorage.getItem("CountryName"))
        console.log("poaDoc")
        if (localStorage.getItem("poaDoc")) {
            this.setState({ POADocSrc: localStorage.getItem("poaDoc") })
            this.setState({buttonMes:"Edit the POADoc"})
        }
    }
    onCameraTarget = (CardTarget) => {
        localStorage.setItem("CardTarget", CardTarget)
        this.props.history.push(`/poadoccamera`)
    }


    render() {
        return (
            <div>
                <Header headerText={this.state.sendHeaderText} goIDMain="POADoc"/>
                <div className="POA-Img-Container">
                    <div className="POA-Container">
                        <img src={this.state.POADocSrc} className="POADoc" />
                    </div>
                </div>
                <div className="POA-Icon-Container" >
                    <div className="POA-Container" onClick={this.onCameraTarget.bind(this, this.state.POADocument)}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style={{ margin: "0px", color: "white" }}>{this.state.buttonMes}</p>
                    </div>
                    <div style={{ width: "100%", justifyContent: "center", display: "flex", marginTop: "30px" }}>
                        <Button
                            label="Upload"
                            onClick={() => {
                                this.props.history.push('facelivness');
                            }}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default POADoc;
