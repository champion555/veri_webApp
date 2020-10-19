import React, { Component } from 'react';
import { withRouter } from "react-router";
import countryList from 'react-select-country-list'

import Header from "../../Components/header/header"
import IDDocButton from "../../Components/idDocButton/idDocButton"
import IDCardURL from "../../assets/ic_idcard_purple.png"
import PassportURL from "../../assets/ic_passport_purple.png"
import ResidentURL from "../../assets/ic_residence_purple.png"
import IdentityURL from "../../assets/ic_identity_purple.png"
import './IDMain.css';

class IDMain extends Component {
    constructor(props) {
        super(props);

        this.options = countryList().getData()

        this.state = {
            ImgSrc: IdentityURL,
            IDCardSrc: IDCardURL,
            PassportSrc: PassportURL,
            ResidentSrc: ResidentURL,
            sendHeaderText: 'Identity Document',
            selectCountryStatus: false,
            options: this.options,
            value: null,
            nextUrl: '',
        }
    }

    componentDidMount = () => {
        console.log("countries:", this.options)

    }

    // goSrc = () => {
    //     this.props.history.push(`/idcard`)
    // } 
    onSelectNextURL = (link) => {
        this.setState({ selectCountryStatus: true })
        this.setState({ nextUrl: link })
    }

    onSelectCountry = (CountryName) => {
        this.props.history.push(`${this.state.nextUrl}`)
        localStorage.setItem("CountryName", CountryName)
    }

    render() {
        return (
            <div style={{ background: 'black' }}>
                <Header headerText={this.state.sendHeaderText} />
                {(!this.state.selectCountryStatus) &&
                    <>

                        <div className="body-container">
                            <div className="mark-container">
                                <div className="markView">
                                    <img src={this.state.ImgSrc} className="identityIcon" />
                                </div>
                            </div>
                            <IDDocButton
                                label="National ID Card"
                                imgURL={this.state.IDCardSrc}
                                onClick={this.onSelectNextURL.bind(this, "idcard")}
                            />
                            <IDDocButton
                                label="Passport"
                                imgURL={this.state.PassportSrc}
                                onClick={this.onSelectNextURL.bind(this, "passport")}
                            />
                            <IDDocButton
                                label="Resident Permit"
                                imgURL={this.state.ResidentSrc}
                                onClick={this.onSelectNextURL.bind(this, "residentpermit")}
                            />
                        </div>
                    </>}
                {(this.state.selectCountryStatus) &&
                    <div style={{ background: 'white' }}>
                        {this.state.options.map(CountryItem => {
                            let CountryFlag = "https://www.countryflags.io/" + CountryItem.value + "/flat/64.png";
                            return (
                                <div onClick={this.onSelectCountry.bind(this,CountryItem.label )} style={{display:'flex', float:'left', width:'100%', boxShadow:'0 1px'}}>
                                    <img src={CountryFlag}  />
                                    <span style={{ textAlign: 'center', marginTop:'20px', marginLeft:'10px'  }}>{CountryItem.label}</span>
                                    
                                    <br />
                                    <br />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(IDMain);
