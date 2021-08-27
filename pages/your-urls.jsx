import Layout from "../components/Layout/Layout";
import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";
import axios from "axios";
import Link from "next/link";
import Table from "../components/table";
import LoadingWheel from "../components/LoadingWheel";

export default function YourUrls() {
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


  return (
    <>
        <Layout>
      {loading ? (
        <div className="flex justify-center mt-24">
          <LoadingWheel />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-semibold mb-10">
            Your short URLs
          </h1>
          <Table urlsList={urlsList} />
        </>
      )}
        </Layout>
    </>
  )
}