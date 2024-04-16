import React from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <RouterProvider>
        <Routes>
          <Route path="/">
            <Route></Route>
          </Route>
        </Routes>
    </RouterProvider>
  )
}
