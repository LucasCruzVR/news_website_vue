import { NEWS_INDEX, NEWS_CREATE, CATEGORIES_INDEX } from "./routesName"
const links = [
    {
        name: 'News',
        route: NEWS_INDEX
    },
    {
        name: 'Categories',
        route: CATEGORIES_INDEX
    },
    {
        name: 'Articles',
        route: NEWS_INDEX
    },
    {
        name: 'Post',
        route: NEWS_CREATE
    }
]

export default links;