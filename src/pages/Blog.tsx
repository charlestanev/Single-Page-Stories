import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

const Blog = (post: any) => {
    const { category, id } = useParams()

    return (
        <>
            <Helmet>
                <title>Blog Page</title>
                <meta name="description" content="My page description ..." />
            </Helmet>
            <article>
                <h1 className="bg-red-600">Blog</h1>
                <p className="flex">
                    Category: {category} - ID: {id}</p>
            </article>
        </>
    )
}

export default Blog