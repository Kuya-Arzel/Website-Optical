import React from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import HomePage from './pages/homePage';
import MainLayout from './Layout/mainLayout';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>

)
)

const App = () => {
  return ( <RouterProvider router={router} /> )
}

export default App;




