"use client";

import axios from "axios";
import { useState } from "react";

function usePost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const postData = async (url, info, onSuccess) => {
        setLoading(true);
        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_API + url, info);
            setData(res.data);
            onSuccess && onSuccess();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { postData, data, loading };
}

export default usePost;
