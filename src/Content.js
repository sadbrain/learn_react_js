import { useState, useEffect } from "react";

function Content() {
  const [avatar, SetAvatar] = useState();
  useEffect(() => {
    return () => {
        avatar && URL.revokeObjectURL(avatar.preview);
    }
  },[avatar])
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file)
    SetAvatar(file)
  }
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            <img
                src={avatar?.preview} width="80%"
            />
        </div>
    )
}
export default Content;