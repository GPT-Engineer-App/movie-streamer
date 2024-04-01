import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navigation />
      <Box maxW="container.lg" mx="auto" mt={8}>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
