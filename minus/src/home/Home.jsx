import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>
                <Link to="/minus">마이너스 경매</Link>
            <Outlet />
            </div>
        </>
    )
}

export default Home