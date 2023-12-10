import AllReceipe from "../../components/AllReceipe/AllReceipe";
import Footer from "../../components/Footer/Footer";
import OurPartner from "../../components/Partners/OurPartner";
import VarifiedChefs from "../../components/VerifiedChefs/VarifiedChefs";
import FeaturedReceipe from "../../components/feturedReceipe/FeaturedReceipe";
import TodayReceipe from "../../components/feturedReceipe/TodayReceipee/TodayReceipe";
import Meta from "../../components/meta/Meta";

const Home = () => {
    return (
        <>
            <Meta title="EasyReceipe | Home" />
            <FeaturedReceipe />
            <TodayReceipe />
            <AllReceipe />
            <VarifiedChefs />
            <OurPartner />
            <Footer />
        </>
    );
};

export default Home;
