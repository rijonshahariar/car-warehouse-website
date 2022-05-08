import { useEffect, useState } from "react";

const useCarDetail = id => {
    const [car, setCar] = useState({});

    useEffect(() => {
        const url = `https://powerful-shelf-07443.herokuapp.com/cars/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));

    }, [id]);
    return [car]
}

export default useCarDetail;