import './App.css';
import { SourceProvider } from './context/SourceContext';
import Titlebar from './compnents/Titlebar';
import Sidebar from './compnents/Sidebar';
import CodeArea from './compnents/CodeArea';

function App() {
  return (
    <div className="wrapper">
      <Titlebar />
      <div id="editor" className="h-screen flex items-start overflow-hidden bg-primary">
        <SourceProvider>
          <Sidebar /> 
          <CodeArea />
        </SourceProvider>
      </div>
    </div>
  );
}

export default App;
