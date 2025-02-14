import { useParams } from "react-router-dom"
import { useDocumentHead } from "../hooks/useDocumentHead"

const Blog = () => {
    const { category, id } = useParams()

    useDocumentHead({
        title: 'My Page Title Deva 2.0',
        description: 'My Page Description'
    })

    return (
        <>
            <div className="flex flex-col">
                <h1 className="flex">Blog</h1>
                <p className="flex">
                    {category} - {id}</p>
            </div>
        </>
    )
}

export default Blog