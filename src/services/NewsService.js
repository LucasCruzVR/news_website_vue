import axios from "axios"


export async function publish(form) {
    console.log(form)
    const data = await axios.post(
        `${process.env.VUE_APP_BASE_API_URL}/publications`, form,
        {
            headers: { "Content-Type": "multipart/form-data" },
        }
    );
    return {data}
}

export async function getAllPublished() {
    const data = await axios.get(
        `${process.env.VUE_APP_BASE_API_URL}/publications`
    );
    return {data}
}