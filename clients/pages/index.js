import Layout from "../components/Layout"
import Link from 'next/Link'
const Index = () => {
    return (
        <Layout>
            <h2>Hello NextJs</h2>
            <Link href='/signup'>Signup</Link>
            <Link href='/signin'>Signin</Link>
        </Layout>
    )
}

export default Index