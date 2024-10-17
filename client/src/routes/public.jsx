import Layout from '../pages/layout'
import Home from '../pages/public/home/page.jsx'
import SignIn from '../pages/public/sign_in/page.jsx'
import SignUp from '../pages/public/sign_up/page.jsx'
import PageNotFound from '../pages/public/PageNotFound'

export const publicRouter = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign_in",
        element: <SignIn />,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
    ]
  },
]