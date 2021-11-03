import React from "react"
import { Icon } from "semantic-ui-react";


const Footer = () => {

        return(
            <footer id="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <div className="footer-about-us">
                            <h3>Empowering Parents</h3>
                            <p>Great Schools of Georgia is an orgainzation empowering African American parents of 
                                Atlanta to unluck educational opportunities for thier children. We provide school information and parenting 
                                resources to have families navigate the complex schooling options in Georgia and provide guidance in identifying 
                                specific schools that have a record of providing a positive environment and equitable education for African American 
                                students.
                            </p>
                        </div>
                        <div className="footer-join-us">
                            <h3>Join us</h3>
                            <ul>
                                <li>Supporters</li>
                                <li>Licensing</li>
                                <li>Sponsorship</li>
                                <li>Advertisement</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="footer-learn-more">
                            <h3>Learn more</h3>
                            <ul>
                                <li>Newsletter</li>
                                <li>Privacy policy</li>
                                <li>Terms of use</li>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="footer-connect">
                            <h3>Connect</h3>
                            <ul>
                                <li><span><Icon className="facebook f"></Icon></span>Facebook</li>
                                <li><span><Icon className="twitter"></Icon></span>Twitter</li>
                                <li><span><Icon className="pinterest"></Icon></span>Pintrest</li>
                                <li><span><Icon className="youtube"></Icon></span>YouTube</li>
                                <li><span><Icon className="instagram"></Icon></span>Instagram</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rights">©2021-2022 GreatSchools for African American students in Georgia. Created by Chasity De La Cruz</div>
                </div>
            </footer>
        )
}

export default Footer;