import { useRef } from "react"
import { convertFileSrc } from "@tauri-apps/api/tauri"

export default function PreviewImage({ path, active }) {
  const imgRef = useRef(null)

  return (
    <div className={`${active ? '' : 'hidden'} p-8`}>
      <img ref={imgRef} src={convertFileSrc(path)} alt="" />
    </div>
  )
}
