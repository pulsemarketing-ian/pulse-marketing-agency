export const baseURL = `https://pulse-marketing-drab.vercel.app`;

export const FireApi = async (endpoint:any, method:any, data = null) => {
    const token = localStorage.getItem("user-visited");

    const headers = {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
    };

    const options = {
        method: method,
        headers, 
        body: data ? JSON.stringify(data) : null
    };

    const url = `${baseURL}/${endpoint}`;

    console.log("Request URL:", url); 
    console.log("Request Options:", options); 

    const response = await fetch(url, options);
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    } else {
        return { code: response.status, message: response.statusText };
    }
};
