import { useEffect, useState } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("https://powerful-shelf-07443.herokuapp.com/cars")
            .then((res) => res.json())
            .then((data) => setCars(data));
    }, []);
    return [cars, setCars]
};
export default useCars;