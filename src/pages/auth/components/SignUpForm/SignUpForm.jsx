import { Link } from "react-router-dom";

const SignUpForm = () => {
    return (
        <>
            <div className="signup-form w-full md:w-[calc(80%)] rounded-md shadow">
                <form action="" className="reg-from mt-7 pt-8">
                    <div className="form-group mb-2 w-[80%] m-auto flex gap-3 justify-center items-center">
                        <label className="form-label  w-16 text-sm" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control w-full  text-sm outline-none px-4  py-4 rounded text-primary"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group w-[80%] m-auto mb-2 flex gap-3 justify-center items-center">
                        <label className="w-16 form-label text-sm" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control w-full  text-sm  outline-none px-4   py-4 rounded text-primary"
                            id="email"
                            placeholder="Enter your name"
                            name="email"
                        />
                    </div>
                    <div className="form-group w-[80%] m-auto mb-2 flex gap-3 justify-center items-center">
                        <label className="w-16 form-label text-sm" htmlFor="cell">
                            Cell
                        </label>
                        <input
                            type="text"
                            className="form-control w-full  text-sm  -none outline-none px-4   py-4 rounded text-primary"
                            id="cell"
                            placeholder="Enter your cell"
                            name="cell"
                        />
                    </div>
                    <div className="form-group w-[80%] m-auto mb-2 flex gap-3 justify-center items-center">
                        <label className="w-16 form-label text-sm" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control w-full  text-sm  -none outline-none px-4   py-4 rounded text-primary"
                            id="email"
                            placeholder="Enter your Password"
                            name="pass"
                        />
                    </div>
                    <div className="form-group mb-2 w-[80%] m-auto flex gap-3  items-center">
                        <label className="w-16 form-label  text-sm" htmlFor="password">
                            Gender
                        </label>
                        <div className="gender-group flex gap-5">
                            <label className=" flex gap-1" htmlFor="male">
                                <input
                                    className=""
                                    type="radio"
                                    value="Male"
                                    name="gender"
                                    id="male"
                                />
                                Male
                            </label>
                            <label className=" flex gap-1" htmlFor="female">
                                <input
                                    className=""
                                    type="radio"
                                    value="Female"
                                    name="gender"
                                    id="female"
                                />
                                female
                            </label>
                        </div>
                    </div>
                    <div className="form-group mb-2 w-[80%] m-auto flex gap-3 justify-center items-center">
                        <label className="w-16 form-label text-sm" htmlFor="location">
                            Location
                        </label>
                        <select
                            className="form-control w-full  text-sm  border-none outline-none px-6   py-4 rounded text-primary"
                            name="location"
                            id="location">
                            <option value="">Select Your Location</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Sylet">Sylet</option>
                            <option value="Chitagong">Chitagong</option>
                            <option value="Barishal">Barishal</option>
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
