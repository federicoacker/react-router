import { Outlet } from "react-router";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Ad from "../Ad.jsx";

function PageLayout() {
    return (
        <>
            <div className="d-flex flex-column min-vh-100 bg-dark">
                <Header />
                <div className="d-flex flex-grow-1">
                    <div className="d-flex align-items-center ad-wrapper px-2 border rounded border-white">
                        <Ad starterIndex={1}/>
                    </div>
                    <main className="flex-grow-1 px-3">
                        <Outlet/>
                    </main>
                    <div className="d-flex align-items-center ad-wrapper px-2 border rounded border-white">
                        <Ad starterIndex={0}/>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageLayout