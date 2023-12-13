import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cell: "",
        password: "",
        gender: "",
        location: "",
    });

    const handleFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formData.name) {
            toast.error("Name field is required", {
                style: {
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#000",
                    padding: "10px",
                },
            });
        } else if (!formData.email) {
            toast.error("Email field is required", {
                style: {
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#000",
                    padding: "10px",
                },
            });
        } else if (!formData.cell) {
            toast.error("Cell field is required", {
                style: {
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#000",
                    padding: "10px",
                },
            });
        } else if (!formData.password) {
            toast.error("Password field is required", {
                style: {
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#000",
                    padding: "10px",
                },
            });
        } else {
            toast.success("Form submitted successful", {
                style: {
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#000",
                    padding: "10px",
                },
            });
        }
    };
    return (
        <>
            <div className="signup-form w-full md:w-[calc(80%)] rounded-md shadow">
                <form action="" className="reg-from mt-7 pt-8" onSubmit={handleFormSubmit}>
                    <div className="form-group mb-2 w-[80%] m-auto flex gap-3 justify-center items-center">
                        <label className="form-label   w-20 text-sm" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control w-full  text-sm outline-none px-4  py-4 rounded text-primary"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleFormData}
                        />
                    </div>
                    <div className="form-group w-[80%] m-auto mb-2 flex gap-3 justify-center items-center">
                        <label className=" w-20 form-label text-sm" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control w-full  text-sm  outline-none px-4   py-4 rounded text-primary"
                            id="email"
                            placeholder="Enter your name"
                            name="email"
                            value={formData.email}
                            onChange={handleFormData}
                        />
                    </div>
                    <div className="form-group w-[80%] m-auto mb-2 flex gap-3 justify-center items-center">
                        <label className=" w-20 form-label text-sm" htmlFor="cell">
                            Cell
                        </label>
                        <input
                            type="text"
                            className="form-control w-full  text-sm  -none outline-none px-4   py-4 rounded text-primary"
                            id="cell"
                            placeholder="Enter your cell"
                            name="cell"
                            value={formData.cell}
                            onChange={handleFormData}
                        />
                    </div>
                    <div className="form-group w-[80%] m-auto mb-2 flex gap-3 justify-center items-center">
                        <label className=" w-20 form-label text-sm" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control w-full  text-sm  outline-none px-4   py-4 rounded text-primary"
                            id="password"
                            placeholder="Enter your Password"
                            name="password"
                            value={formData.password}
                            onChange={handleFormData}
                        />
                    </div>
                    <div className="form-group mb-2 w-[80%] m-auto flex gap-3  items-center">
                        <label className=" w-20 form-label  text-sm" htmlFor="gender">
                            Gender
                        </label>
                        <div className="gender-group flex gap-5">
                            <label className=" flex gap-1" htmlFor="male">
                                <input
                                    checked={formData.gender === "Male"}
                                    className=""
                                    type="radio"
                                    value="Male"
                                    name="gender"
                                    id="male"
                                    onChange={handleFormData}
                                />
                                Male
                            </label>
                            <label className=" flex gap-1" htmlFor="female">
                                <input
                                    checked={formData.gender === "Female"}
                                    className=""
                                    type="radio"
                                    value="Female"
                                    name="gender"
                                    id="female"
                                    onChange={handleFormData}
                                />
                                female
                            </label>
                        </div>
                    </div>
                    <div className="form-group mb-2 w-[80%] m-auto flex gap-3 justify-center items-center">
                        <label className=" w-20 form-label text-sm" htmlFor="location">
                            Location
                        </label>
                        <select
                            onChange={handleFormData}
                            className="form-control w-full  text-sm  border-none outline-none px-6   py-4 rounded text-primary"
                            name="location"
                            id="location">
                            <option value="">Select Your Location</option>
                            <option selected={formData.location === "Dhaka"} value="Dhaka">
                                Dhaka
                            </option>
                            <option selected={formData.location === "Barishal"} value="Barishal">
                                Barishal
                            </option>
                            <option selected={formData.location === "Sylet"} value="Sylet">
                                Sylet
                            </option>
                            <option selected={formData.location === "Chitagong"} value="Chitagong">
                                Chitagong
                            </option>
                        </select>
                    </div>
                    <p className="text-center text-[13px] text-paragraphFont mt-3">
                        already have an accounts ?{" "}
                        <Link className="text-primary hover:underline" to="/accounts/login">
                            login
                        </Link>
                    </p>
                    <div className="submit w-48 m-auto">
                        <button
                            className="bg-primary rounded w-48 text-white transform duration-200 hover:bg-primary-light   py-4 my-10 "
                            type="submit">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUpForm;
