import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignInPage from './auth/sign-in'
import Header from './components/ui/custom/Header'
import EditResume from './dashboard/resume/[resumeid]/edit/index'

import Dashboard from './dashboard'
import Home from './Home'
import { ClerkProvider } from '@clerk/clerk-react'
import { Edit } from 'lucide-react'
import ViewResume from './my-resume/[resumeId]/view'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router= createBrowserRouter([
  {
    
    element:<App/>,
    children:[
    
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      }

    ]


    
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path :'/auth/sign-in',
    element:<SignInPage/>
  },
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
