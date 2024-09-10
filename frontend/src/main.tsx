import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from "./App.tsx";
import CreateBookmarkPage from "./Pages/CreateBookmark.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/createbookmark",
        element: <CreateBookmarkPage editMode={false}/>,
    },
    {
        path: "/editbookmark/:params",
        element: <CreateBookmarkPage editMode={true}/>
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
