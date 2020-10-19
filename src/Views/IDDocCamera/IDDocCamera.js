import React, { Component } from 'react';
import Header from "../../Components/header/header"
import Webcam from "react-webcam";
import './IDDocCamera.css'
import BackImgURL from "../../assets/ic_background.png"
import BtnImgURL from "../../assets/camera_take.png"
import Button from "../../Components/button/button"

class IDDocCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            previewImgHeight: window.innerHeight * 0.77,
            backimgSrc: BackImgURL,
            btnimgSrc: BtnImgURL,
            titleMarginTop: window.innerHeight * 0.02,
            idDocType: "",
            PreviewImageStatus: false,
        }
    }
    componentDidMount = () => {
        console.log("received Data:", localStorage.getItem("CardTarget"))
        this.setState({ idDocType: localStorage.getItem("CardTarget") })
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.previewImage(imageSrc, (url) => { 
            this.setState({ url });
            console.log(url, imageSrc);
            this.setState({ PreviewImageStatus: true })
            let { idDocType } = this.state
            if (idDocType == "back  of IDCard") {
                localStorage.setItem("backIDCard",url)

            } else if (idDocType == "front of IDCard") {
                localStorage.setItem("frontIDCard",url)

            } else if (idDocType == "passport") {
                localStorage.setItem("passport",url)
                
            } else if (idDocType == "front of Resident") {
                localStorage.setItem("frontResident",url)

            } else if (idDocType == "back of Resident") {
                localStorage.setItem("backResident",url)

            }
        });
    };
    previewImage = (imageBase64, cb) => {
        var img = new Image();
        img.src = imageBase64;
        img.onload = () => {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, img.width / 2, img.height / 2);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);
            cb(canvas.toDataURL("image/jpeg"))
        };
    };
    onReTake = () => {
        this.setState({ PreviewImageStatus: false })
    }
      

    render() {
        const videoConstraints = {
            // facingMode: "user"
            facingMode: { exact: "environment" }
        };

        return (
            <div className="Camera-Container">
                <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
                {(this.state.PreviewImageStatus) && <div className="preview-container">
                    <img src={this.state.url} className="previewImg" style={{ height: this.state.previewImgHeight }} />
                </div>}
                <div className="Background-Container">
                    <img src={this.state.backimgSrc} style={{ width: "100%", height: "100vh" }} />
                </div>
                <div className="capture-containger">
                    <p className="MessageTitle" style={{ marginTop: window.innerHeight * 0.12 }}>powerd by BIOMIID</p>
                    <p className="txtMessage" style={{ marginTop: window.innerHeight * 0.38 }}>Place the {this.state.idDocType} inside the frame and take the photo</p>
                    {(!this.state.PreviewImageStatus) && <img src={this.state.btnimgSrc} onClick={this.capture} className="CaptureButton" style={{ marginTop: window.innerHeight * 0.2 }} />}
                </div>
                {(this.state.PreviewImageStatus) &&
                    <div className="id-button-preview" style={{ marginTop: window.innerHeight * 0.7 }}>
                        <Button
                            label="My photo is clear"
                            onClick={() => {

                                let { idDocType } = this.state
                                if (idDocType == "back  of IDCard") {
                                    this.props.history.push('idcard');                    
                                } else if (idDocType == "front of IDCard") {
                                    this.props.history.push('idcard');
                    
                                } else if (idDocType == "passport") {
                                    this.props.history.push('passport');
                    
                                } else if (idDocType == "front of Resident") {
                                    this.props.history.push('residentpermit');
                    
                                } else if (idDocType == "back of Resident") {
                                    this.props.history.push('residentpermit');
                    
                                }
                                // this.props.history.push('residentpermit');
                            }}
                        />
                        <Button
                            label="Re-take"
                            onClick={this.onReTake}
                        />
                    </div>}


            </div>
        );
    }
}
export default IDDocCamera;