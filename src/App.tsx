import "./App.css";
import { SourceProvider } from "./context/SourceContext";

function App() {
  return (
    <>
      <div className="wrapper">
        <div id="editor" className="h-screen flex items-start overflow-hidden bg-primary">
          <SourceProvider>
          <div>teste</div>
            <Sidebar />
            {/* <CodeArea /> */}
          </SourceProvider>
        </div>
      </div>
    </>
  );
}

export default App;
