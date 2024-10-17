import Layout from '../pages/layout'
import Home from '../pages/public/home/page.jsx'
import SignIn from '../pages/public/sign_in/page.jsx'
import SignUp from '../pages/public/sign_up/page.jsx'
import PageNotFound from '../pages/public/PageNotFound'

export const publicRouter = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "sign_in",
        element: <SignIn />,
      },
    ]
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "sign_up",
        element: <SignUp />,
      },
    ]
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]