import { Link } from "react-router-dom";
import CopyRight from "./components/CopyRight";
import Subscribe from "./components/Subscribe";
import SupportedBy from "./components/SupportedBy";

const Footer = () => {
    return (
        <>
            <div className="footer-section py-20">
                <div className="container px-2 xl:px-20 m-auto flex flex-wrap justify-between">
                    <div className="copyright mb-10 xl:mb-0 h-full flex justify-between items-start flex-col text-gray-600">
                        <div className="footer-logo mb-[40px]">
                            <div className="brand">
                                <Link to="/">
                                    <h1 className="text-textColor max-xxs:text-[15px] text-[20px] md:text-[32px] border border-primary px-4 rounded-xl">
                                        Easy
                                        <span className="text-primary">
                                            Receipe
                                        </span>
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <div className="copyright-text">
                            <p className="text-[14px]">
                                {" "}
                                &copy; Copyright 2023 | All
                                rights reserved by{" "}
                                <a
                                    className="text-primary hover:underline"
                                    href="https://github.com/deveripon">
                                    devripon
                                </a>
                            </p>
                            <p className="text-[14px]">
                                <a
                                    className="hover:text-primary hover:underline"
                                    href="#">
                                    Terms of Service
                                </a>{" "}
                                |{" "}
                                <a
                                    className="hover:text-primary hover:underline"
                                    href="#">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="subscribe mb-10 xl:mb-0 h-full flex items-start  flex-col text-gray-600">
                        <h2 className="text-primary text-2xl mb-10">
                            Subscribe
                        </h2>
                        <div className="input-group flex justify-center item-center">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Please enter your email"
                                className="outline-none border rounded-l-full w-full py-1 px-8 border-primary"
                            />
                            <input
                                className="bg-primary transform duration-100 py-2 px-2 rounded-r-full text-white border-2 border-primary hover:bg-primary-light"
                                type="submit"
                                value="Subscribe"
                            />
                        </div>
                    </div>
                    <div className="supported-by mb-10 xl:mb-0 h-full flex items-start  flex-col text-gray-600">
                        <h2 className="text-primary text-2xl mb-10">
                            Supported By
                        </h2>
                        <div className="supporter-image">
                            <img
                                className="w-44"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png"
                                alt="vercel"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
