import React, { Component } from 'react';
import Header from "../../Components/header/header"
import FrontIDCardURL from "../../assets/ic_idcard_front.png"
import BackIDCardURL from "../../assets/ic_idcard_back.png"
import CammeraIconURL from "../../assets/ic_camera.png"
import Button from "../../Components/button/button"
import './ResidentPermit.css'


class ResidentPermit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendHeaderText: 'Resident Permit',
            FrontImageSrcs: FrontIDCardURL,
            BackImageSrcs: BackIDCardURL,
            CameraSrc: CammeraIconURL,
            FrontResident:"front of Resident",
            BackResident: "back of Resident",
            FrontResidentButtonTxt: "capture front of Resident Permit",
            BackResidentButtonTxt: "capture back of Resident Permit",
        }
    }

    componentDidMount = () => {
        console.log("CountryName", localStorage.getItem("CountryName"))        
        // if(localStorage.getItem("frontResident")){
        //     this.setState({FrontImageSrcs:localStorage.getItem("frontResident")})
        //     this.setState({FrontResidentButtonTxt:"Edit front of Resident Permit"})

        // }
        // if(localStorage.getItem("backResident")){
        //     this.setState({BackImageSrcs:localStorage.getItem("backResident")})
        //     this.setState({BackResidentButtonTxt:"Edit back of Resident Permit"})
        // }
        if (window.front_resident) {
            this.setState({ FrontImageSrcs: window.front_resident })
            this.setState({FrontResidentButtonTxt:"Edit front of Resident Permit"})

        }
        if (window.back_resident) {
            this.setState({ BackImageSrcs: window.back_resident })
            this.setState({BackResidentButtonTxt:"Edit back of Resident Permit"})
        }
        
    }
    onCameraTarget=(CardTarget)=>{
        localStorage.setItem("CardTarget", CardTarget)
        this.props.history.push(`/iddoccamera`)
    }


    render() {
        return (
            <div>
                <Header headerText={this.state.sendHeaderText} goIDMain="IDDoc"/>
                <div className="Img-Container">
                    <div className="FrontCard-Container">
                        <img src={this.state.FrontImageSrcs} className="FrontCard" />
                    </div>
                    <div className="BackCard-Container">
                        <img src={this.state.BackImageSrcs} className="BackCard" />
                    </div>
                </div>
                <div className = "Icon-Container" >
                    <div className="FrontCard-Container" onClick={this.onCameraTarget.bind(this, this.state.FrontResident)}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style = {{margin:"0px",color:"white"}}>{this.state.FrontResidentButtonTxt}</p>
                    </div>
                    <div className="BackCard-Container" onClick={this.onCameraTarget.bind(this, this.state.BackResident)}>
                        <img src={this.state.CameraSrc} className="CameraIcon" />
                        <p style = {{margin:"0px",color:"white"}}>{this.state.BackResidentButtonTxt}</p>
                    </div>
                    <div style={{width:"100%",justifyContent:"center",display:"flex"}}>
                        <Button
                            label="Upload"
                            onClick={() => {
                                this.props.history.push('poadoc');
                            }}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default ResidentPermit;
