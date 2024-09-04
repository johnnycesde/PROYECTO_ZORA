import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from "./auth/login"
import Dashboard from "./Dashboard"

let router = createBrowserRouter([
    {
        element: <Login />,
        path: '/Login',   
    
    },
    {
        path: '/Dashboard',
        element: <Dashboard />
    }
])
const Home = () => {
    return(
       < RouterProvider router={router} />
    )
}

export default Home;