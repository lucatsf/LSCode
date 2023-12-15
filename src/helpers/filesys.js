import { invoke } from "@tauri-apps/api/tauri"
import { nanoid } from "nanoid"
import { saveFileObject } from "../stores/file"

export const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    invoke("get_file_content", {filePath}).then((message) => {
      resolve(message);
    }).catch(error => reject(error))
  })
}

export const writeFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    invoke("write_file", { filePath, content }).then((message) => {
      if (message === 'OK') {
        resolve(message)
      } else {
        reject('ERROR')
      }
    })
  })
}

export const readDirectory = (folderPath) => {
  return new Promise((resolve, reject) => {
    invoke("open_folder", { folderPath }).then((message) => {
      const mess = message;
      const files = JSON.parse(mess.replaceAll('\\', '/').replaceAll('//', '/'));
      const entries = [];
      const folders = [];

      if (!files || !files.length) {
        resolve(entries);
        return;
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const id = nanoid();
        const entry = {
          id,
          kind: file.kind,
          name: file.name,
          path: file.path
        }

        if (file.kind === 'file') {
          entries.push(entry)
        } else {
          folders.push(entry)
        }

        saveFileObject(id, entry)

      }

      resolve([...folders, ...entries]);

    })
  })
}
