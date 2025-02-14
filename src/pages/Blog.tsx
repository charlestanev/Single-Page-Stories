import { useEffect } from "react"
import { useParams } from "react-router-dom"

const useDocumentHead = ({ title, describtion }) => {
    useEffect(() => {
        document.title = title
        if (describtion) {
            let metaDescribtion = document.querySelector('meta[name="describtion"]');
            if(!metaDescribtion){
                metaDescribtion = document.createElement('meta')
                metaDescribtion.setAttribute('name', 'describtion')
                document.head.appendChild
            }
        }
    }, [])
}

const Blog = () => {
    const { category, id } = useParams()

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