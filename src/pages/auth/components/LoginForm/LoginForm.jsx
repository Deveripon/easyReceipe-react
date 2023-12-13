import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        userId: "",
        password: "",
    });
    const handleFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formData.userId || !formData.password) {
            toast.error("Invalid Login Credentials");
        } else {
            toast.success("Login Success");
            setFormData({
                userId: "",
                password: "",
            });
        }
    };

    return (
        <>
            <div className="login-form  w-full md:w-[80%]  rounded-md shadow">
                <form
                    action=""
                    onSubmit={handleFormSubmit}
                    className="reg-from w-[80%] m-auto mt-7 pt-8">
                    <div className="form-group m-auto mb-2 flex  gap-3 justify-center items-center">
                        <label className=" w-20 form-label text-sm" htmlFor="userId">
                            Email or Phone
                        </label>
                        <input
                            type="text"
                            className="form-control  text-sm  w-full outline-none px-4 py-4 rounded text-primary"
                            id="userId"
                            placeholder="Email address or Phone"
                            name="userId"
                            value={formData.userId}
                            onChange={handleFormData}
                        />
                    </div>

                    <div className="form-group mb-2 flex gap-3 justify-center items-center">
                        <label className=" w-20 form-label text-sm" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control  text-sm w-full outline-none px-4 py-4 rounded text-primary"
                            id="password"
                            placeholder="Enter your Password"
                            name="password"
                            value={formData.password}
                            onChange={handleFormData}
                        />
                    </div>
                    <p className="text-center text-[13px] text-paragraphFont mt-3">
                        <Link
                            className="text-textColor text-[12px] hover:text-primary hover:underline"
                            to="">
                            Forgot password? <br />
                        </Link>
                        or <br />
                        <Link className="text-primary hover:underline" to="/accounts/signup">
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
