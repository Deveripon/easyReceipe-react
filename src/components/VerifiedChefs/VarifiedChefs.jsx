import SectionHeader from "../SectionHeader/SectionHeader";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import Chefs from "./Chefs/Chefs";

const VarifiedChefs = () => {
    return (
        <>
            <section className="varified-chefs pb-14 bg-orange-100">
                <div className="container">
                    <SectionHeader title="Varified Chefs" />

                    <SectionSubtitle>
                        Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Perspiciatis, doloribus quaerat!
                        Dolore tenetur animi iusto unde
                        libero officiis velit sunt.
                    </SectionSubtitle>
                    <div className="chefs-wrapper flex justify-center items-center flex-wrap w-[calc(100vw_-_40px)] xl:w-[calc(100vw_-_40%)] gap-6  m-auto">
                        <Chefs img="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?cs=srgb&dl=pexels-miquel-ferran-gomez-figueroa-3814446.jpg&fm=jpg" />
                        <Chefs img="https://st.depositphotos.com/1518767/4291/i/450/depositphotos_42917235-stock-photo-confident-male-chef-with-cooked.jpg" />
                        <Chefs img="https://www.ecpi.edu/sites/default/files/civ_28.png" />
                        <Chefs img="https://panlasangpinoy.com/wp-content/uploads/2013/12/Executive-Chef-Training-Overview1.jpg" />
                        <Chefs img="https://www.mbbmanagement.com/wp-content/uploads/2017/09/Depositphotos_10674566_chef.jpg" />
                        <Chefs img="https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww=" />
                        <Chefs img="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN19wb3J0cmFpdF9vZl9hbl9hZnJpY2FuX2FtZXJpY2FuX2ZlbWFsZV9jaGVmX2luX182YTA4OTdkOS02MGYwLTRmNjQtOTcyYy1mZjEyOGEwMDFkNjMucG5n.png" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default VarifiedChefs;
