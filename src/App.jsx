import { useEffect } from 'react'
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'

function SiteLayout() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return undefined

    const sectionId = decodeURIComponent(hash.slice(1))
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFFDF5] px-6 pb-20 pt-24 text-center">
      <div className="border-4 border-black bg-[#FFD600] p-8 shadow-[8px_8px_0px_0px_#000]">
        <p className="text-sm font-black uppercase">VITA+ Centro Médico</p>
        <h1 className="my-3 text-4xl font-black uppercase">Página no encontrada</h1>
        <Link
          to="/#inicio"
          className="inline-block border-2 border-black bg-black px-5 py-3 text-sm font-black uppercase text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: '*', element: <NotFoundPage /> },
], {
  future: {
    v7_startTransition: true,
  },
})

function App() {
  return <RouterProvider router={router} />
}

export default App
