import axios from "axios"

export async function getAllCategories() {
    const data = await axios.get(
        `${process.env.VUE_APP_BASE_API_URL}/categories`
    );
    return { data };
}

export async function createCategory(name) {
    const data = await axios.post(
        `${process.env.VUE_APP_BASE_API_URL}/categories`,
        {
            name: name
        }
    );
    return {data};
}