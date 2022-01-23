import { SnackbarProvider } from "notistack";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <SnackbarProvider>
        <div className="app__bg"></div>
        <div className="app__body">
          <Sidebar />
          <Chat />
        </div>
      </SnackbarProvider>
    </div>
  );
}

export default App;
