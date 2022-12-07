import axios from "axios"

export async function getAllCategories() {
    const data = await axios.get(
        `${process.env.VUE_APP_BASE_API_URL}/categories`
    );
    return { data };
}