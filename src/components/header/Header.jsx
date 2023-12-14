import { Link } from "react-router-dom";
import { BiBookmarkHeart } from "react-icons/bi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const Header = () => {
    const isLoggedIn = true;
    const location = useLocation();
    const { handleModalView } = useContext(ModalContext);
    return (
        <>
            <section className="header-section bg-pink-50 shadow sticky top-0 z-10">
                <div className="container flex justify-between items-center py-4 ">
                    <div className="brand">
                        <Link to="/">
                            <h1 className="text-textColor max-xxs:text-[15px] text-[20px] md:text-[32px] border border-primary px-4 rounded-xl">
                                Easy
                                <span className="text-primary">Receipe</span>
                            </h1>
                        </Link>
                    </div>
                    <div className="menu ">
                        <ul className="flex justify-center items-center gap-3 md:gap-10 text-textColor">
                            {isLoggedIn || (
                                <li>
                                    {location.pathname == "/accounts/signup" ? (
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
                                            onClick={handleModalView}
                                            className="text-white hidden bg-primary hover:bg-primary-dark px-3 py-1 rounded-full md:flex justify-center items-center gap-3 transform duration-200 text-2xl"
                                            to="#">
                                            <MdPostAdd />{" "}
                                            <span className="text-[16px]">Post a Receipe</span>
                                        </Link>
                                    </li>
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
