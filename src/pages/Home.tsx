import { Helmet } from "react-helmet"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="My home page description ..." />
            </Helmet>
            <div className="container flex px-8 py-8 mx-auto bg-red-500">
                <h1 className="text-3xl font-bold">Home Page 2</h1>
            </div>
        </>
    )
}

export default Home