import { SnackbarProvider } from "notistack";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatHome from "./components/Chat/Home";
import { useState } from "react";
import Login from "./components/Login";
import { useUserValue } from "./providers/UserProvider";

function App() {
  const [{ user }, dispatch] = useUserValue();
  console.log(user);
  return (
    <div className="app">
      <SnackbarProvider>
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app__bg"></div>
            <div className="app__body">
              <BrowserRouter>
                <Sidebar />
                <Routes>
                  <Route path="/" element={<ChatHome />}></Route>
                  <Route path="rooms">
                    <Route path=":roomId" element={<Chat />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>
          </>
        )}
      </SnackbarProvider>
    </div>
  );
}

export default App;
