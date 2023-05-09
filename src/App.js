import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Category from "./Page/Category";
import Business from "./Page/Business ";
import Faq from "./Page/Faq";
import EmailTemplate from "./Page/EmailTemplate";
import './App.css';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
           <Route path="/categorys" element={<Category />} />
            <Route path="/businesses" element={<Business />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/emailtemplate" element={<EmailTemplate />} />
          
  
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
