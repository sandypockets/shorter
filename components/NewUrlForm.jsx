import axios from 'axios'
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import LoadingWheel from "./LoadingWheel";
import SignIn from "../components/Auth";
import Link from 'next/link'

function NewUrlForm({ longUrl, setLongUrl, generateRandomString }) {
  const [urlsList, setUrlsList] = useState([])
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  // Loading delay
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [session])

  useEffect(() => {
    setSession(supabase.auth.session())
    const user = supabase.auth.user()
    console.log('user', user)
    axios
      .get('/api/urls', {
        params: {
          id: user.id
        }
      })
      .then(function (response) {
        console.log("URL response: ", response.data.data)
        setUrlsList(response.data.data)
        setLoading(false)
      })
  }, [])

  console.log("urlsList", urlsList)

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-24">
          <LoadingWheel />
        </div>
      ) :
      !session ? <SignIn /> : (
        <>
        <form className="">
          <div className="">
            <label htmlFor="longUrl" className="text-sm font-medium text-gray-700">
              Long URL
            </label>
            <div className="">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => setLongUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="pt-5">
            <div className="">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>

          {urlsList.map((row, index) => (
            <div key={index}>
              <Link href={`http://localhost:3000/urls/${row['short_url']}`}>
              <a>
                {`http://localhost:3000/urls/${row['short_url']}`}
              </a>
              </Link>
              <p>
                {row.long_url}
              </p>
              <p>
                {row.short_url}
              </p>
            </div>
          ))}

        </>
      )}
    </>
  )
}


export default NewUrlForm
