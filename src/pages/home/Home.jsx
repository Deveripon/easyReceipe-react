import AllReceipe from "../../components/AllReceipe/AllReceipe";
import CreateButton from "../../components/CreateButton/CreateButton";
import Footer from "../../components/Footer/Footer";
import CreateReceipeModal from "../../components/Modal/CreatCreceipeModal/CreateReceipeModal";
import OurPartner from "../../components/Partners/OurPartner";
import VarifiedChefs from "../../components/VerifiedChefs/VarifiedChefs";
import FeaturedReceipe from "../../components/feturedReceipe/FeaturedReceipe";
import TodayReceipe from "../../components/feturedReceipe/TodayReceipee/TodayReceipe";
import Meta from "../../components/meta/Meta";

const Home = () => {
    return (
        <div>
            <Meta title="EasyReceipe | Home" />
            <FeaturedReceipe />
            <TodayReceipe />
            <AllReceipe />
            <VarifiedChefs />
            <OurPartner />
            <Footer />
            <CreateButton />

            <CreateReceipeModal />
        </div>
    );
};

export default Home;
