import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const App = () => {
    return (
        <div className='min-h-screen w-screen'>
            <Header />
            <section className="flex">
                <Sidebar />
                <Outlet />
            </section>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
