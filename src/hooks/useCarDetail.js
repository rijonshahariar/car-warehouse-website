import { useEffect, useState } from "react";

const useCarDetail = id => {
    const [car, setCar] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/cars/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));

    }, [id]);
    return [car]
}

export default useCarDetail;