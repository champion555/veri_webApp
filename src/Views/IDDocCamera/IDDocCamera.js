import React, { Component } from 'react';
import Header from "../../Components/header/header"
import Webcam from "react-webcam";
import './IDDocCamera.css'
import BackImgURL from "../../assets/ic_background.png"
import BtnImgURL from "../../assets/camera_take.png"

class IDDocCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            previewImgHeight: window.innerHeight * 0.77,
            backimgSrc: BackImgURL,
            btnimgSrc: BtnImgURL,
            titleMarginTop: window.innerHeight*0.02
        }
    }
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.previewImage(imageSrc, (url) => {
            this.setState({ url });
            console.log(url, imageSrc);
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
                <div className="preview-container">
                    <img src={this.state.url}  className="previewImg" style={{ height: this.state.previewImgHeight }} />
                </div>
                <div className = "Background-Container">
                    <img src={this.state.backimgSrc} style = {{width:"100%",height:"100vh"}}/>
                </div>
                <div className="capture-containger">
                    <p className = "MessageTitle" style={{marginTop: window.innerHeight*0.12}}>powerd by BIOMIID</p>
                    <p className = "txtMessage" style={{marginTop: window.innerHeight*0.38}}>Place the front of ID card inside the frame and take the photo</p>                    
                    <img src={this.state.btnimgSrc} onClick = {this.capture} className = "CaptureButton" style={{marginTop: window.innerHeight*0.2}} />
                </div>

            </div>
        );
    }
}
export default IDDocCamera;