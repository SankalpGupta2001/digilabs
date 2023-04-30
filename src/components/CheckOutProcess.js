import React from "react";
import { Nav } from "react-bootstrap";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav >
            <Nav.Item className="navitem">
                {
                    step1 ? (

                        <div className="icons chng_colors">

                             <HttpsOutlinedIcon></HttpsOutlinedIcon>  
                            <a href="#"><Nav.Link className="chng_colors">Account</Nav.Link></a>

                        </div>

                    ) : (
                        <div className="icons chng_colors">
                        <HttpsOutlinedIcon></HttpsOutlinedIcon>

                        <a href="#"><Nav.Link  className="chng_colors">Account</Nav.Link></a>

                        </div>
                        
                    )
                }
            </Nav.Item>
            <Nav.Item className="navitem">
                {
                    step2 ? (
                        <div className="icons chng_colors">
                       
                        <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                            <a href="#"><Nav.Link className="chng_color">Personal</Nav.Link></a>
                        </div>


                    ) : (
                        <div className="icons chng_colors">
                        <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                        <a href="#"><Nav.Link  className="chng_colors">Personal</Nav.Link></a>

                        </div>
                       
                    )
                }
            </Nav.Item>
            <Nav.Item className="navitem">
                {
                    step3 ? (
                        <div className="icons chng_color">
                        <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
                        <a href="#"><Nav.Link className="chng_color">Billing</Nav.Link></a>
                        </div>
                        

                    ) : (
                        <div className="icons chng_color">
                        <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>                        
                        <Nav.Link  className="chng_color">Billing</Nav.Link>
                        </div>
                        
                    )
                }
            </Nav.Item>
            <Nav.Item className="navitem">
                {
                    step4 ? (
                        <div className="icons chng_color">
                        <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                        <a href="#"><Nav.Link className="chng_color">Done</Nav.Link></a>
                        </div>

                    ) : (
                        <div className="icons chng_color">
                        <ThumbUpOffAltIcon></ThumbUpOffAltIcon>


                        <Nav.Link  className="chng_color">Done</Nav.Link>
                        </div>
                        
                    )
                }
            </Nav.Item>

        </Nav>
        
    )
}

export default CheckoutSteps;
