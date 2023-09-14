import { Route, Routes } from "react-router-dom";
import ClientePage from "./pages/clientePage";
import ClienteForm from "./pages/ClienteForm";
import NotFound from "./pages/NotFound";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClientePage />} />
        <Route path="/new" element={<ClienteForm />} />
        <Route path="/edit/:id" element={<ClienteForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
