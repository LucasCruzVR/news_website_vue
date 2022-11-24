import axios from "axios"


export async function publish(title, title_description, content, category) {
    const data = await axios.post(
        `${process.env.VUE_APP_BASE_API_URL}/publications`,
        {
            title,
            title_description,
            content,
            category_id: category,
        },
    );
    return {data}
}