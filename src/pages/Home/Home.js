import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import Loading from '../Loading/Loading'
import Banner from "./Banner/Banner";
import FeaturedCar from "./FeaturedCar/FeaturedCar";


const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <Banner></Banner>
            <FeaturedCar></FeaturedCar>
        </div>
    );
};

export default Home;