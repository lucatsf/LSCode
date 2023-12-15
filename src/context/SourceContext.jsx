import { createContext, useContext, useState, useCallback } from "react"


const SourceContext = createContext({
  selected: '',
  setSelect: (id) => { },
  opened: [],
  addOpenedFile: (id) => { },
  delOpenedFile: (id) => { }
});

export const SourceProvider = ({ children }) => {
  const [selected, setSelected] = useState('');
  const [opened, updateOpenedFiles] = useState([]);

  const setSelect = (id) => {
    setSelected(id)
  }

  const addOpenedFile = useCallback((id) => {
    if (opened.includes(id)) return;
    updateOpenedFiles(prevOpen => ([...prevOpen, id]))
  }, [opened])

  const delOpenedFile = useCallback((id) => {
    updateOpenedFiles(prevOpen => prevOpen.filter(opened => opened !== id))
  }, [opened])

  return <SourceContext.Provider value={{
    selected,
    setSelect,
    opened,
    addOpenedFile,
    delOpenedFile
  }}>
    {children}
  </SourceContext.Provider>
}

export const useSource = () => {
  const { selected, setSelect, opened, addOpenedFile, delOpenedFile } = useContext(SourceContext)

  return { selected, setSelect, opened, addOpenedFile, delOpenedFile }
}
