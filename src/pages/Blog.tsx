import { useEffect } from "react"
import { useParams } from "react-router-dom"

const useDocumentHead = ({
    title,
    description
}: {
    title: string,
    description: string
}) => {
    useEffect(() => {
        document.title = title
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta')
                metaDescription.setAttribute('name', 'description')
                document.head.appendChild(metaDescription)
            }
            metaDescription.setAttribute('content', description)
        }
    }, [title, description])
}

const Blog = () => {
    const { category, id } = useParams()

    useDocumentHead({
        title: 'My Page Title Deva',
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