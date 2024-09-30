export default async function requester(method, url, data) {
    const options = {};

    if (method !== "GET") {
        options.method = method;
    };

    if (data) {
        options.headers = {
            "Content-Type": "application/json",
        };

        options.body = JSON.stringify(data);
    };

    const response = await fetch(url, options);

    const result = await response.json();

    if (response.status !== 200) {
        throw new Error(result);
    }

    return result;
};