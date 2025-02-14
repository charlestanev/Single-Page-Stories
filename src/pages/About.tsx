import { Helmet } from "react-helmet"

export const About = () => {
    return (
        <>
            <Helmet>
                <title>About Page</title>
                <meta name="description" content="My about page description ..." />
            </Helmet>
            <div className="container flex px-8 py-8 mx-auto">
                <h1 className="text-3xl font-bold">About Page</h1>
            </div>
        </>
    )
}
