import FeaturedReceipe from "../../components/feturedReceipe/FeaturedReceipe";
import TodayReceipe from "../../components/feturedReceipe/TodayReceipee/TodayReceipe";
import Meta from "../../components/meta/Meta";

const Home = () => {
    return (
        <>
            <Meta title="EasyReceipe | Home" />
            <FeaturedReceipe />
            <TodayReceipe />
        </>
    );
};

export default Home;
