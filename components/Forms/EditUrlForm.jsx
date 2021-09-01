import {useEffect, useState} from "react";
import {supabase} from "../../utils/supabaseClient";
import axios from "axios";

export default function EditUrlForm({ shortUrl, urlId, currentLongUrl, setCurrentLongUrl, setEditedUrl, setOpen }) {
  const [longUrl, setLongUrl] = useState(currentLongUrl)

  function handleSubmit (event) {
    event.preventDefault()
    const user = supabase.auth.user()
    axios.post('/api/edit-url', {
      urlId,
      shortUrl,
      newLongUrl: currentLongUrl,
      userId: user.id,
    })
      .then(function (response) {
        console.log("URL POST response: ", response)
        setLongUrl(currentLongUrl)
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {
        setEditedUrl(currentLongUrl)
        setOpen(false)
      })
  }

  const handleClear = () => {
    setCurrentLongUrl(longUrl)
    setOpen(false)
  }

  const handleChange = (event) => {
    setCurrentLongUrl(event.target.value)
  }

  return (
    <>
      <form className="mx-auto p-5 rounded-md shadow mb-10 md:mb-36">
        <div className="">
          <label htmlFor="longUrl" className="text-sm font-medium text-gray-700 px-5">
            Change where your short URL leads to
          </label>
          <div className="mt-3 flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              https://
            </span>
            <input
              type="text"
              name="longUrl"
              id="longUrl"
              placeholder="google.com"
              value={currentLongUrl}
              className="mx-auto max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 border-l-0 rounded-md rounded-l-none"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-center mx-auto w-4/5">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleClear}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={(event) => handleSubmit(event)}
            >
              Save URL
            </button>
          </div>
        </div>
      </form>
    </>
  )
}