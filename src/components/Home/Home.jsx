import { Helmet } from "react-helmet-async";
import EstateCards from "./EstateCards/EstateCards";
import About from "./About/About";
import Contact from "./Contact/Contact";

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const Home = () => {



    return (
        <div>
            <Helmet>
                <title>Modern House | Home</title>
            </Helmet>
            <div className="mb-6">
                <swiper-container speed="500" loop="true" navigation="true" pagination="true">
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/C0gnjvy/slide2.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/R3rGM36/slide3.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/ccj5R7S/slide4.jpg" alt="" /></swiper-slide>
                    <swiper-slide><img className=" rounded-xl" src="https://i.ibb.co/264MTWN/slide1.jpg" alt="" /></swiper-slide>
                </swiper-container>
            </div>
            <EstateCards></EstateCards>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;