const entries = {}

export const saveFileObject = (id, file) => {
  entries[id] = file
}

export const getFileObject = (id) => {
  return entries[id]
}

