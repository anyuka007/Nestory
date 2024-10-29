import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {fa-brands fa-paypal} from '@awesome.me/kit-KIT_CODE/icons';
const Footer = () => {
    return (
        <>
            <div>
                <footer className="flex justify-center m-12 ">
                    <div className="">
                        <div>
                            <h1 className="border-t-4 pt-16 text-center text-[2rem]">
                                Spaces that improve your quality of life -
                                Request an estimate
                            </h1>
                            <p className="flex justify-center pt-12">Phone</p>{" "}
                            <a className="flex justify-center" href="">
                                +49(40)88799
                            </a>
                            <p className="flex justify-center pt-12"> Mail</p>
                            <a className="flex justify-center" href="">
                                netory-furnitor@hotmil.com
                            </a>
                        </div>
                        <div className="pt-12 flex justify-center gap-16 flex text-[2rem] border-b-4 pb-16 "><b></b>
                            <ul className="">
                                <a href="">
                                    <li>- SHOP</li>
                                </a>
                                <a href="">
                                    <li>- PROJECTS</li>
                                </a>
                                <a href="">
                                    <li>- FAQ</li>
                                </a>
                                <a href="">
                                    <li>- SERVICES</li>
                                </a>
                                <a href="">
                                    <li>- ABOUT US</li>
                                </a>
                                <a href="">
                                    <li>- CONTACT</li>
                                </a>
                            </ul>
                            <ul>
                                <a href=""><li>- CHAIRS</li></a>
                                <a href=""><li>- BEDS</li></a>
                                <a href=""><li>- TABELS</li></a>
                                <a href=""><li>- SOFAS</li></a>
                            </ul>
                        </div>
                        <div>
                            <div className="pt-8"><p className="text-[1.3rem]">©2024 Betheme by <a href="">Muffin group</a> | All Rights Reserved | Powered by <a href="">WordPass</a></p></div>
                            {/* <div><FontAwesomeIcon icon="fa-brands fa-paypal" /></div> */}
                        </div>
                    </div>
                </footer>
            </div>
            <div>Footer</div>
        </>
    );
};

export default Footer;
