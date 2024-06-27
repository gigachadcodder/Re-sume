import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Home from './pages/Home.jsx'
import DashBoard from './pages/DashBoard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './pages/index.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter ([
  {
    path : "/auth/sign-in",
    element:<SignInPage/>
  },
  {
    element: <App/>,
    children: [
      {
        path:'/dashboard',
        element:<DashBoard/>
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      }
    ]
  },
  {
    path: "/",
    element: <Home/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router}> </RouterProvider>
    </ClerkProvider>
  </React.StrictMode>,
)
