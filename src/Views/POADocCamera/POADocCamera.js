import React, { Component } from 'react';
import Header from "../../Components/header/header"
import Webcam from "react-webcam";
import './POADocCamera.css'
import BackImgURL from "../../assets/pow_background.png"
import BtnImgURL from "../../assets/camera_take.png"
import Button from "../../Components/button/button"

class POADocCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            previewImgHeight: window.innerHeight * 0.77,
            backimgSrc: BackImgURL,
            btnimgSrc: BtnImgURL,
            PreviewImageStatus: false,
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
            this.setState({ PreviewImageStatus: true })
            localStorage.setItem("poaDoc", url)
        });
    };
    onReTake = () => {
        this.setState({ PreviewImageStatus: false })
    }
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
            facingMode: "user"
            // facingMode: { exact: "environment" }
        };

        return (
            <div className="POA-Camera-Container">
                <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    style={{ marginTop: window.innerHeight * 0.1 }}
                />
                {(this.state.PreviewImageStatus) && <div className="POA-preview-container" style={{ marginTop: window.innerHeight * 0.1, height: window.innerHeight - window * 0.1 }}>
                    <img src={this.state.url} className="POA-previewImg" style={{ height: this.state.previewImgHeight }} />
                </div>}
                {/* <div className="POA-preview-container" style={{marginTop:window.innerHeight*0.1, height: window.innerHeight - window *0.1}}>
                    <img src={this.state.url}  className="POA-previewImg" style={{ height: this.state.previewImgHeight }} />
                </div> */}
                <div className="POA-Background-Container">
                    <img src={this.state.backimgSrc} style={{ width: "100%", height: "100vh" }} />
                </div>
                <div className="POA-capture-containger">
                    <p className="POA-MessageTitle" style={{ marginTop: window.innerHeight * 0.07 }}>powerd by BIOMIID</p>
                    <p className="POA-txtMessage" style={{ marginTop: window.innerHeight * 0.75 }}>Place the front of POA Document inside the frame and take the photo</p>
                    {(!this.state.PreviewImageStatus) && <img src={this.state.btnimgSrc} onClick={this.capture} className="POA-CaptureButton" />}
                    {/* <img src={this.state.btnimgSrc} onClick = {this.capture} className = "POA-CaptureButton"  /> */}
                </div>
                {(this.state.PreviewImageStatus) &&
                    <div className="POA-button-preview" style={{ marginTop: window.innerHeight * 0.9 }}>
                        <Button
                        style = {{width:"40%"}}
                            label="My photo is clear"
                            onClick={() => {
                                this.props.history.push('poadoc');
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
export default POADocCamera;
