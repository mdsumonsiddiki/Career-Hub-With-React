import Category from "../components/category/Category";
import Features from "../components/feature/Features";
import HeaderBanner from "../components/header/HeaderBanner";


const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <Category></Category>
            <Features></Features>
        </div>
    );
};

export default Home;