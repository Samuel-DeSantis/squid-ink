import Layout from '../pages/layout'
import Home from '../pages/public/Home'
import SignIn from '../pages/public/SignIn'
import SignUp from '../pages/public/SignUp'
import PageNotFound from '../pages/public/PageNotFound'
import Protected from '../pages/components/Protected'
import Dashboard from '../pages/protected/Dashboard'

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