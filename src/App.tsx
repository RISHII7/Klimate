import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "@/components/layout";
import { ThemeProvider } from "@/context/theme-provider";

import CityPage from "@/pages/city-page";
import WeatherDashboard from "@/pages/weather-dashboard";


function App() {

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
