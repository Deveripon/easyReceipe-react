import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <>
            <div className="login-form  w-full md:w-80  rounded-md shadow">
                <form
                    action=""
                    className="reg-from mt-7 pt-8">
                    <div className="form-group mb-2 flex  gap-3 justify-center items-center">
                        <label
                            className="w-16 form-label text-sm"
                            htmlFor="uid">
                            Email or Phone
                        </label>
                        <input
                            type="text"
                            className="form-control  text-sm  -none outline-none px-4 py-2 rounded text-primary"
                            id="uid"
                            placeholder="Email address or Phone"
                            name="uid"
                        />
                    </div>

                    <div className="form-group mb-2 flex gap-3 justify-center items-center">
                        <label
                            className="w-16 form-label text-sm"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control  text-sm  -none outline-none px-4 py-2 rounded text-primary"
                            id="email"
                            placeholder="Enter your Password"
                            name="pass"
                        />
                    </div>
                    <p className="text-center text-[13px] text-paragraphFont mt-3">
                        <Link
                            className="text-textColor text-[12px] hover:text-primary hover:underline"
                            to="">
                            Forgot password? <br />
                        </Link>
                        or <br />
                        <Link
                            className="text-primary hover:underline"
                            to="/accounts/signup">
                            create a new account
                        </Link>
                    </p>
                    <div className="submit w-48 m-auto">
                        <button
                            className="bg-primary rounded w-48 text-white transform duration-200 hover:bg-primary-light py-2 my-10 "
                            type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
