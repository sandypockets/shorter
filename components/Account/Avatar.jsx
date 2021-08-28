import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import EmptyAvatar from "./EmptyAvatar";
import AvatarLoading from "./AvatarLoading";

export default function Avatar({ url, size, onUpload, userData, setUserData }) {
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path) {
    setLoading(true)
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setUserData(prev => ({ ...prev, "avatar_url": url }))

    } catch (error) {
      console.log('Error downloading image: ', error.message)
    } finally {
      setLoading(false)
    }
  }


  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      {loading ? (
        <AvatarLoading />
      ) : (
        <div className="flex">
          {userData['avatar_url'] ? (
            <div className="flex rounded-full w-20 h-20">
              <img
                src={userData['avatar_url']}
                alt="Avatar"
                className="rounded-full"
              />
              <div className="flex flex-col justify-center ml-10">
                <label className="py-2 px-4 rounded-lg text-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 " htmlFor="single">
                  {uploading ? 'Uploading ...' : 'Upload'}
                </label>
                <input
                  className="hidden absolute"
                  type="file"
                  id="single"
                  accept="image/*"
                  onChange={uploadAvatar}
                  disabled={uploading}
                />
              </div>
            </div>
          ) : (
            <>
              <EmptyAvatar />
              <div className="flex flex-col justify-center ml-10">
                <label className="py-2 px-4 rounded-lg text-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 " htmlFor="single">
                  {uploading ? 'Uploading ...' : 'Upload'}
                </label>
                <input
                  className="hidden absolute"
                  type="file"
                  id="single"
                  accept="image/*"
                  onChange={uploadAvatar}
                  disabled={uploading}
                />
              </div>
            </>
          )}

        </div>
      )}

    </div>
  )
}