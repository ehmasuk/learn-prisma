"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function useGet(url,query = {}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_API + url, {
                headers: {
                    "Content-Type": "application/json",
                    query: JSON.stringify(query),
                },
            });
            setData(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { getData, loading, data };
}

export default useGet;
