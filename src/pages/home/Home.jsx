import { useContext } from "react";
import AllReceipe from "../../components/AllReceipe/AllReceipe";
import CreateButton from "../../components/CreateButton/CreateButton";
import Footer from "../../components/Footer/Footer";
import CreateReceipeModal from "../../components/Modal/CreatCreceipeModal/CreateReceipeModal";
import OurPartner from "../../components/Partners/OurPartner";
import VarifiedChefs from "../../components/VerifiedChefs/VarifiedChefs";
import FeaturedReceipe from "../../components/feturedReceipe/FeaturedReceipe";
import TodayReceipe from "../../components/feturedReceipe/TodayReceipee/TodayReceipe";
import Meta from "../../components/meta/Meta";
import { ModalContext } from "../../context/ModalContext";

const Home = () => {
    const { modal } = useContext(ModalContext);
    const isLoggedIn = false;
    return (
        <div>
            <Meta title="EasyReceipe | Home" />
            <div className={`main relative ${modal === true ? "max-h-0" : ""} overflow-hidden`}>
                <FeaturedReceipe />
                <TodayReceipe />
                <AllReceipe />
                <VarifiedChefs />
                <OurPartner />
                <Footer />
                {isLoggedIn ? <CreateButton /> : ""}
            </div>

            <CreateReceipeModal />
        </div>
    );
};

export default Home;
