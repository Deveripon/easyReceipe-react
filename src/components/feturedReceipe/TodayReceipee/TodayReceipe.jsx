import SectionHeader from "../../SectionHeader/SectionHeader";
import TodayReceipeImg from "../../../assets/img//todayreceipe.png";
import SectionSubtitle from "../../SectionSubtitle/SectionSubtitle";

const TodayReceipe = () => {
    return (
        <>
            <div className="container ">
                <section className="today-receipe w-full relative bg-pink-50">
                    <SectionHeader title="Receipe for Today" />
                    <div className=" absolute left-[10%]  xl:left-[20%] opacity-[.7] blur-[30px] xl:blur-[80px] top-[80%] pink bg-pink-600 h-20 w-12 xl:w-96 rotate-45"></div>
                    <div className=" absolute left-[5%] xl:left-[30%] opacity-[.7] blur-[30px] xl:blur-[80px] top-[70%] pink bg-primary h-20 w-12 xl:w-96 rotate-90"></div>
                    <SectionSubtitle>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
                        doloribus quaerat! Dolore tenetur animi iusto unde libero officiis velit
                        sunt.
                    </SectionSubtitle>

                    <div className="receipe-section block m-auto xl:grid grid-cols-2 justify-center content-center py-8 gap-12">
                        <div className="section-right order-2">
                            <img
                                className="w-full h-full rounded"
                                src={TodayReceipeImg}
                                alt="today-receipe-image"
                            />
                        </div>
                        <div className="section-left order-1 pt-10 xl:pt-0 text-center xl:text-left">
                            <h2 className="receipe-title text-textColor text-[25px] xl:text-[38px] xl:w-96 leading-[40px]">
                                Chicken soup with vegitable oil
                            </h2>
                            <div className="ingridients my-5 w-full xl:w-[calc(100%_-50px)]">
                                <h3 className="text-primary text-2xl">Ingridients:</h3>
                                <p className="text-gray-600 font-paragraphFont mt-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptatibus perferendis fugit iusto mollitia omnis, aliquam est
                                    fugiat nobis, quae, rerum culpa ducimus saepe. In doloribus
                                    libero, nesciunt illum ipsa aut!
                                </p>
                                <div className="receipe my-5 w-full xl:w-[calc(100%_-50px)]">
                                    <h3 className="text-primary text-2xl">Receipe</h3>
                                    <p className="text-gray-600 font-paragraphFont mt-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatibus perferendis fugit iusto mollitia omnis, aliquam
                                        est fugiat nobis, quae, rerum culpa ducimus saepe. In
                                        doloribus libero, nesciunt illum ipsa aut!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TodayReceipe;
