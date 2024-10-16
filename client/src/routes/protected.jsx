import Dashboard from '../pages/protected/Dashboard'
import Protected from '../pages/components/Protected'
import User from '../pages/protected/User'

export const protectedRouter = [
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ]
  },
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
    ]
  },
]