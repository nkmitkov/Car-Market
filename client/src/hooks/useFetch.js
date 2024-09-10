import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });

                if (response.status !== 200) {
                    throw new Error("Something's wrong with fetching data");
                }

                const result = await response.json();
                setData(state => result);
            } catch (error) {
                console.log(error.message);
            }
        })()

        return () => AbortController.abort();
    }, []);

    const updateData = (newData) => setData(state => newData);

    return {
        data,
        updateData,
    };
};