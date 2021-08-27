import Layout from "../components/Layout/Layout";
import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";
import axios from "axios";
import Link from "next/link";
import Table from "../components/Table";
import LoadingWheel from "../components/LoadingWheel";
import SlideOver from "../components/SlideOver";

export default function YourUrls() {
  const [urlsList, setUrlsList] = useState([])
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(null)
  const [open, setOpen] = useState(false)
  const [currentLongUrl, setCurrentLongUrl] = useState(null)
  const [shortUrl, setShortUrl] = useState(null)

  const [urlId, setUrlId] = useState(null)

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


  return (
    <>
        <Layout>
          <h1 className="text-3xl font-semibold mb-10">
            Your short URLs
          </h1>
      {loading ? (
        <div className="flex justify-center mt-36">
          <LoadingWheel />
        </div>
      ) : (
        <>
          <Table urlsList={urlsList} setUrlId={setUrlId} open={open} setOpen={setOpen} setShortUrl={setShortUrl} setCurrentLongUrl={setCurrentLongUrl} />
          <SlideOver urlId={urlId} open={open} setOpen={setOpen} shortUrl={shortUrl} currentLongUrl={currentLongUrl} setCurrentLongUrl={setCurrentLongUrl} />
        </>
      )}
        </Layout>
    </>
  )
}