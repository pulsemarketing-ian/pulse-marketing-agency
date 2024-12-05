export const baseURL = `https://pulse-marketing-drab.vercel.app`;

 export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGVlOWNmM2M2YTY0YTVhN2ZhNzVkYSIsImVtYWlsIjoic3VwZXJfYWRtaW5AZ21haWwuY29tIiwicm9sZSI6InN1cGVyX2FkbWluIiwiaWF0IjoxNzMzMzEwODc3fQ.JCcxl8LwCawTGAZQryB6KcNNbbprBE81G08VtrDCyLk";


export const FireApi = async (endpoint:any, method:any, data = null) => {
    // const token = localStorage.getItem("user-visited");
   
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
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
