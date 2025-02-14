import { useParams } from "react-router-dom"

// import { Helmet } from "react-helmet"

const Blog = (post: any) => {
    const { category, id } = useParams()



    return (
        <>
            <article>

                <h1 className="bg-red-600">Blog</h1>
                <p className="flex">
                    {category} - {id}</p>
            </article>
        </>
    )
}

export default Blog