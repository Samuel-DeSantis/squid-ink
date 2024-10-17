import Protected from '../pages/components/Protected'
import Dashboard from '../pages/protected/dashboard/page.jsx'
import Project from '../pages/protected/project/page.jsx'
import User from '../pages/protected/user/page.jsx'
// import User from '../pages/protected/User'

export const protectedRouter = [
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/project/:id",
        element: <Project />,
      },
      {
        path: "/user",
        element: <User/>,
      },
    ]
  },
]