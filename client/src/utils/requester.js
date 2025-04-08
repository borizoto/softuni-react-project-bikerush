export default async function request(method = 'GET', url, data = null, accessToken = null) {
    const options = {
        method,
        headers: {}
    };

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return;
    }

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message);
    }

    const fetchedData = await response.json();

    return fetchedData;
}