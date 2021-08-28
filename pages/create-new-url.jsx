import Layout from "../components/Layout/Layout";
import NewUrlForm from "../components/Forms/NewUrlForm";
import Container from "../components/Layout/Container";
import LoadingWheel from "../components/Utils/LoadingWheel";
import SignIn from "../components/Account/Auth";
import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";
import axios from "axios";

export default function CreateNewUrl() {
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
    }, 300)
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
    <Layout>
      <Container>
        {loading ? (
            <div className="flex justify-center">
              <LoadingWheel />
            </div>
          ) :
          !session ? <SignIn /> : (
            <>
              <h1 className="text-4xl mb-10 tracking-tight font-extrabold flex justify-center">
                Create a new URL
              </h1>
              <div className="flex justify-center">
                <NewUrlForm session={session} loading={loading} setLoading={setLoading} longUrl={longUrl} setLongUrl={setLongUrl} handleClear={handleClear} handleSubmit={handleSubmit} />
              </div>
            </>
          )}
      </Container>
    </Layout>
  )
}