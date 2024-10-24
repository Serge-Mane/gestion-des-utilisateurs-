import { Link, Outlet } from 'react-router-dom'

function Dashbord() {
    return (
        <section>
            <header>
                <Link to={"/"} className="text-2xl rounded-md  px-5 py-4 block">
                    LES NOUVELLES VIES
                </Link>

            </header>
            <main>
                <Outlet />
            </main>
        </section>
    )
}

export default Dashbord