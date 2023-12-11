import { Link } from "react-router-dom";
import AuthImage from "../../assets/img/undraw_barbecue_3x93.svg";
import Meta from "../../components/meta/Meta";
import { useLocation } from "react-router-dom";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";

const Auth = () => {
    const location = useLocation();
    return (
        <>
            <Meta title="EasyReceipe | Accounts" />
            <section className="auth-section flex justify-center items-center">
                <div className="container flex justify-center gap-3 md:gap-10 items-center">
                    <div className="auth-left flex-1 hidden md:block">
                        <img
                            className="w-[80%]"
                            src={AuthImage}
                            alt="auth-image"
                        />
                    </div>
                    <div className="auth-right flex-1 flex justify-center items-center">
                        {location.pathname ===
                        "/accounts/signup" ? (
                            <SignUpForm />
                        ) : (
                            <LoginForm />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Auth;
