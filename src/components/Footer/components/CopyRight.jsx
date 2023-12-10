import { Link } from "react-router-dom";

const CopyRight = () => {
    return (
        <>
            <div className="copyright h-full flex justify-between items-start flex-col text-gray-600">
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
                        &copy; Copyright 2023 | All rights
                        reserved by{" "}
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
        </>
    );
};

export default CopyRight;
