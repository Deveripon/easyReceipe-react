import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import banner from "../../assets/img/banner.png";

const FeaturedReceipe = () => {
    return (
        <>
            <section className="featured-receipe-section w-full relative bg-pink-50 pb-4">
                <div className=" absolute right-[25%] opacity-[.5] blur-[70px] top-[30%] pink bg-pink-600 h-20 w-96 rotate-45"></div>
                <div className=" absolute right-[20%] opacity-[.5] blur-[70px] top-[20%] pink bg-primary h-20 w-96 rotate-90"></div>
                <div className="container block m-auto xl:flex justify-between items-center py-8 gap-12">
                    <div className="featured-receipe-left xl:w-1/2">
                        <img
                            className="w-full h-full rounded"
                            src={banner}
                            alt="featured-reaceipe"
                        />
                    </div>
                    <div className="featured-receipe-right pt-10 xl:pt-0  xl:w-1/2 text-center xl:text-left">
                        <h2 className=" text-[30px] xl:text-[48px] xl:leading-[55px]  text-textColor">
                            Receipe Of The Day <br />
                            <span className="text-primary">
                                Debitis explicabo.
                            </span>
                        </h2>
                        <p className="py-8 text-gray-500 font-paragraphFont">
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                            Consectetur, iure placeat? Id
                            aspernatur velit obcaecati
                            incidunt? Ut reprehenderit
                            consequatur laborum!
                        </p>

                        <Link
                            to="/"
                            className="w-52 m-auto xl:m-0 flex items-center font-[500] primary-button py-3 px-5">
                            View Full Receipe{" "}
                            <IoIosArrowRoundForward />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedReceipe;
