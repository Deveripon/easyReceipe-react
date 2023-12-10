import { Link } from "react-router-dom";

const Receipies = () => {
    return (
        <>
            <div className="recepies h-full flex justify-between items-start  flex-col text-gray-600">
                <div className="receipe-list">
                    <h2 className="text-primary text-2xl">
                        Receipies
                    </h2>
                    <ul className="text-textColor flex flex-col gap-4">
                        <li>
                            <Link
                                className="hover:underline hover:text-primary text-[14px]"
                                to="">
                                Lorem ipsum dolor sit, amet
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline hover:text-primary text-[14px]"
                                to="">
                                Lorem ipsum dolor sit, amet
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline hover:text-primary text-[14px]"
                                to="">
                                magnam dolorem quos culpa
                                modi.
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline hover:text-primary text-[14px]"
                                to="">
                                distinctio accusamus tempore
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline hover:text-primary text-[14px]"
                                to="">
                                eos cupiditate alias dicta.
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:underline hover:text-primary text-[14px]"
                                to="">
                                Lorem ipsum dolor sit, amet
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Receipies;
