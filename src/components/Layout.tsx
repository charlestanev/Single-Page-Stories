import { ReactNode } from 'react'
import Nav from './Nav'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    )
}

export default Layout