import "./App.css";
import Sidebar from "./components/Sidebar";
import { SourceProvider } from "./context/SourceContext";

function App() {
  return (
    <>
      <div className="wrapper">
        <div id="editor" className="h-screen flex items-start overflow-hidden bg-primary">
          <SourceProvider>
            <Sidebar />
            {/* <CodeArea /> */}
          </SourceProvider>
        </div>
      </div>
    </>
  );
}

export default App;
