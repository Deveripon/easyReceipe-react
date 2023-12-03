import { Helmet } from "react-helmet";
const Meta = ({ title }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link
                    rel="shortcut icon"
                    href="https://static.vecteezy.com/system/resources/previews/023/858/876/non_2x/ai-generative-breakfast-sandwich-eggs-benedict-chophouse-restaurant-buffalo-burger-breakfast-food-recipe-breakfast-free-png.png"
                    type="image/x-icon"
                />
            </Helmet>
        </>
    );
};

export default Meta;
