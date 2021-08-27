import axios from 'axios'
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import LoadingWheel from "../Utils/LoadingWheel";
import SignIn from "../Account/Auth";
import Link from 'next/link'

function NewUrlForm() {
  const [session, setSession] = useState(supabase.auth.session())
  const [loading, setLoading] = useState(true)
  const [longUrl, setLongUrl] = useState(null)

  const generateRandomString =() => {
    return Math.random().toString(26).substring(2, 8);
  }

  // Loading delay
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [session])

  function handleSubmit (event) {
    event.preventDefault()
    setLoading(true)
    const user = supabase.auth.user()
    const randomString = generateRandomString()

    axios.post('/api/urls', {
        randomString,
        longUrl,
        userId: user.id,
      })
      .then(function (response) {
        console.log("URL POST response: ", response)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
        setLoading(false)
      })
      .finally(function () {
        setLoading(false)
      })
  }

  const handleClear = () => {
    setLongUrl('')
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <LoadingWheel />
        </div>
      ) :
      !session ? <SignIn /> : (
        <>
        <form className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto bg-gray-100 p-5 rounded-md shadow mb-10 md:mb-36">
          <div className="">
            <label htmlFor="longUrl" className="text-sm font-medium text-gray-700 px-5">
              Enter a new URL to be shortened
            </label>
            <div className="mt-3">
              <input
                type="text"
                name="longUrl"
                id="longUrl"
                placeholder="https://google.com"
                value={longUrl}
                className="mx-auto max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => setLongUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={handleClear}
              >
                Clear
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
      )}
    </>
  )
}


export default NewUrlForm
