import { Link } from "react-router-dom";
import { BiBookmarkHeart } from "react-icons/bi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
    const isLoggedIn = false;
    const location = useLocation();

    return (
        <>
            <section className="header-section bg-pink-50 shadow">
                <div className="container flex justify-between items-center py-4 ">
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
                    <div className="menu ">
                        <ul className="flex justify-center items-center gap-3 md:gap-10 text-textColor">
                            {isLoggedIn || (
                                <li>
                                    {location.pathname ==
                                    "/accounts/signup" ? (
                                        <Link
                                            className="primary-button px-5 py-1"
                                            to="/accounts/login">
                                            Log In
                                        </Link>
                                    ) : (
                                        <Link
                                            className="primary-button px-5 py-1"
                                            to="/accounts/signup">
                                            Sign Up
                                        </Link>
                                    )}
                                </li>
                            )}
                            {isLoggedIn && (
                                <>
                                    <li>
                                        <Link
                                            className="hover:text-primary-light transform duration-200 text-2xl"
                                            to="#">
                                            <BiBookmarkHeart />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="hover:text-primary-light transform duration-200 text-2xl"
                                            to="#">
                                            <HiMiniBellAlert />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="hover:text-primary-light transform duration-200 text-2xl"
                                            to="#">
                                            <FaUserCircle />
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
