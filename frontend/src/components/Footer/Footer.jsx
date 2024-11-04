import React from "react";
import { Link } from "react-router-dom";
import DividerLogo from "./DividerLogo";
import MainFooter from "./MainFooter";
import DownFooter from "./DownFooter";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCcPaypal} from "react-icons/fa";
//import { FaCcVisa } from "react-icons/fa";
//import { FaCcPaypal } from "react-icons/fa";
//import { FaGithub} from "react-icons/fa";
//import { FaCcMastercard } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div>
                <footer className="">
                    <main className=" basic-[80%] flex-col-reverse m-1 md:mx-[24rem] border-t-2 pt-16 border-b-2 md:w-[80%] ">
                        {/* oben teil 70/80% */}
                        <section className="md:flex md:mx-36  ">
                            <section>
                                <div>
                                    <h1 className="text-center text-[2rem] md:flex">
                                        Spaces that improve your quality of life
                                        - Request an estimate
                                    </h1>
                                </div>
                                <div className="md:flex-wrap-reverse">
                                    <p className=" text-center pt-12 text-[1.3rem]  ">
                                        Phone
                                    </p>
                                    <p className="text-center md:flex text-[1.5rem]">
                                        <Link>+49(40)88799</Link>
                                    </p>
                                    <p className="text-center md:flex pt-12 text-[1.3rem]">
                                        {" "}
                                        Mail
                                    </p>
                                    <p className="text-center md:flex">
                                        <Link to="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=ee272b19-4411-433f-8f28-5c13cb6fd407&redirect_uri=https%3A%2F%2Fsupport.microsoft.com%2Fsignin-oidc&response_type=code%20id_token&scope=openid%20profile%20offline_access&response_mode=form_post&nonce=638658020109283406.MzJmODBmZmMtZWVkMy00NDdlLTgwZTItOWI2NDNhZDVkMDhiNjAxNmJlNmUtNjQ0Ny00ZWNlLTg3Y2UtMjRkZGJmZWFkMTZi&nopa=2&state=CfDJ8C0ohqf0LPdLoRrMGwogAwwSEv6mdcEFmX7U9jsOkPgWe8NDPgOF1yCi9uVofFSWvD9yMU16TQ-lBVTC4V3ZAEclp_WRM1yqTAp05_FFzqdnnTqz9wTtXmOngyB2H0ejAtjYDc2fkJkSHvevPcQ7DZbnnlJoCQKXbaqTQ_NKAGpVU8KO51krks1UQbJnEJpj0ugtqj39L1WjVtDz5bKn2v2ZUrM0fmCZ9NjIcc4IweNuI5J9Dna35sAlBUf8gYVhHAVEYqk2NunDEpfN-VTpM1FV5IgpVEkvqL3hj5kBkE42VfXYnxiWXdGOc_qIXWIZo2vc0EaU_GyfrCkKLG_qAfH-cXEP6OnIxOYgDQDGr7N8iul4nmPnHkXCkfVygPJ1mdcBpq6VFJpdL2LnSnMkr2s&x-client-SKU=ID_NET6_0&x-client-ver=8.0.2.0">
                                            {" "}
                                            netory-furnitor@hotmil.com
                                        </Link>
                                    </p>
                                </div>
                            </section>
                            {/* unten teil 30/40% */}
                            <section className=" pt-12 px-6 flex gap-[7rem] text-[1.6rem] pb-16 font-bold ">
                                <b></b>
                                <ul className="flex-col">
                                    <Link>
                                        <li className="">-SHOP</li>
                                    </Link>
                                    <Link>
                                        <li className="">-PROJECTS</li>
                                    </Link>
                                    <Link>
                                        <li>-FAQ</li>
                                    </Link>
                                    <Link>
                                        <li>-SERVICES</li>
                                    </Link>
                                    <Link>
                                        <li>-ABOUT US</li>
                                    </Link>
                                    <Link>
                                        <li>-CONTACT</li>
                                    </Link>
                                </ul>
                                <ul className="">
                                    <Link>
                                        <li>-CHAIRS</li>
                                    </Link>
                                    <Link>
                                        <li>-BEDS</li>
                                    </Link>
                                    <Link>
                                        <li>-TABELS</li>
                                    </Link>
                                    <Link>
                                        <li>-SOFAS</li>
                                    </Link>
                                </ul>
                            </section>
                        </section>
                    </main>
                </footer>
                {/* paypal */}
                <section className="md:flex md:justify-evenly">
                    <div className="pt-8 flex justify-center">
                        <p className="text-[1.3rem]">
                            ©2024 neSTory by{" "}
                            <Link to="/" className="hover:underline">
                                LaLa Group
                            </Link>{" "}
                            | All Rights Reserved | Powered by{" "}
                            <Link className="hover:underline"> WordPass</Link>
                        </p>
                    </div>
                    <div className="flex justify-center p-8 ">
                        <Link to="https://www.paypal.com/de/digital-wallet/send-receive-money?kid=p79723554003&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oibhjoC_gTjsxjBgXXjbfBL47gewp8fzA-D2ztlRVx6_hkvuMa8AAaAnhDEALw_wcB&gclsrc=aw.ds">
                            <img
                                className=" hover:bg-blue-100 hover: hover:rounded-md w-28"
                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/PayPal.svg"
                                alt="paypal"
                            />
                        </Link>
                        <Link to="https://www.visa.de/">
                            <img
                                className="hover:bg-blue-100 hover:rounded-md w-28"
                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Visa.svg"
                                alt="visa"
                            />
                        </Link>
                        <Link to="https://www.unzer.com/de/mastercard/?utm_term&utm_campaign=11188183112&utm_campaign=11188183112&utm_source=adwords&utm_source=adwords&utm_medium=ppc&utm_medium=ppc&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pPLmht4RSx1vkFXmgIzokjkYLoAxGRPqywepcSAtQL1-v311_qZeAaAirvEALw_wcB">
                            <img
                                className="hover:bg-blue-100 hover:rounded-md w-28"
                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Mastercard.svg"
                                alt="mastercart"
                            />
                        </Link>
                        <Link to="https://www.priceless.com/celebrity/19354/pay-and-get-germany">
                            <img
                                className="hover:bg-blue-100 hover:rounded-md w-28"
                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Maestro.svg"
                                alt=""
                            />
                        </Link>
                        <Link to="https://stripe.com/de?utm_campaign=EMEA_DE_en_Google_Search_Brand_Stripe_EXA-866170064&utm_medium=cpc&utm_source=google&ad_content=276018915073&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gad_source=1&gclid=Cj0KCQjwsoe5BhDiARIsAOXVoUs8n7sUDmGGz9QaBwqXrCwcUgsT-bDZH9AzOxPRuClxSS6HwafyAHkaAoJMEALw_wcB">
                            <img
                                className="hover:bg-blue-100 hover:rounded-md w-28"
                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/themes/betheme/images/payment-methods/Stripe.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                </section>
            </div>
            <br />
            <p className="flex justify-center">.....</p>
            {/* neu footer */}
            <div className="text-center">Footer</div>
            <p className="text-center">
                ---------------------------------------------------------------------------
            </p>

            <div class="flex items-center justify-center my-8 mx-36">
                <div class="flex-grow border-t border-gray-200"></div>
                <div class="mx-4 text-center">
                    <img
                        src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-footer-logo.svg"
                        alt=""
                    />
                </div>
                <div class="flex-grow border-t border-gray-200"></div>
            </div>

            <footer className="w-full ">
                <main className="text-center  border-b-2 md:flex md:flex-wrap pt-8 gap-16 md:px-8 md:mx-36">
                    <section className="md:basis-[60%] md:pl-28 ">
                        <div className="">
                            <h1 className="md:text-left text-[2rem]">
                                Spaces that improve your quality of life -
                                Request an estimate
                            </h1>
                            <div className="md:flex gap-8 ">
                                <div>
                                    <p>Phone</p>
                                    <Link>+49(40)88799</Link>
                                </div>
                                <div>
                                    <p>Mail</p>
                                    <Link>netory-furnitur@hotmil.com</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 flex justify-center md:basis-[30%] flex gap-8 text-[1.8rem] font-bold">
                        <div>
                            <ul className="text-left list-disc space-y-4 ">
                                <li className="">
                                    <Link>SHOP</Link>
                                </li>
                                <li className="">
                                    <Link>PROJECTS</Link>
                                </li>
                                <li>
                                    <Link>FAQ</Link>
                                </li>
                                <li>
                                    <Link>SERVICES</Link>
                                </li>
                                <li>
                                    <Link>ABOUT US</Link>
                                </li>
                            </ul>{" "}
                        </div>
                        <div>
                            <ul className="text-left list-disc mx-4">
                                <li>
                                    <Link>CHAIRS</Link>
                                </li>
                                <li>
                                    <Link>BEDS</Link>
                                </li>

                                <li>
                                    <Link>TABELS</Link>
                                </li>
                                <li>
                                    <Link>SOFAS</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </footer>
            {/* jsx */}
            <div className="flex items-center justify-center my-8 "> </div>
            <DividerLogo />
            {/* mite */}
           
            <MainFooter />
            {/* jsx */}
           
            <DownFooter />
            <p className="p-8 text-center">....</p>
        </>
    );
};

export default Footer;
