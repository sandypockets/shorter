import Layout from "../components/Layout/Layout";
import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";
import axios from "axios";
import Link from "next/link";
import Table from "../components/Utils/Table";
import LoadingWheel from "../components/Utils/LoadingWheel";
import SlideOver from "../components/Utils/SlideOver";
import Modal from "../components/Utils/Modal";
import Container from "../components/Layout/Container";
import SignIn from "../components/Account/Auth";
import EmptyUrls from "../components/Utils/EmptyUrls";

export default function YourUrls() {
  const [urlsList, setUrlsList] = useState([])
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(null)
  const [open, setOpen] = useState(false)
  const [currentLongUrl, setCurrentLongUrl] = useState(null)
  const [shortUrl, setShortUrl] = useState(null)

  const [urlId, setUrlId] = useState(null)

  const [editedUrl, setEditedUrl] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const user = supabase.auth.user()

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
    if (user) {

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

    }
  }, [editedUrl, isDeleted])


  const deleteUrl = (shortUrl) => {
    const user = supabase.auth.user()
    if (user) {
      setDeleteLoading(true)
      axios.post('/api/delete', {
        urlId: shortUrl,
        userId: user.id,
      })
        .then(function (response) {
          console.log("URL DELETE response: ", response)
        })
        .catch(function (error) {
          console.log(error)
        })
        .finally(function () {
          isDeleted ? setIsDeleted(false) : setIsDeleted(true)
          setShowModal(false)
          setDeleteLoading(false)
        })
    }
  }


  return (
    <>
        <Layout>
          <Container>
            {loading ? (
              <div className="flex justify-center">
                <LoadingWheel />
              </div>
            ) : !user ? <SignIn /> :
              (
              <>
                <h1 className="text-4xl mt-24 mb-10 tracking-tight font-extrabold flex justify-center">
                  Your short URLs
                </h1>
                {urlsList.length ? (
                  <>
                    <Table setShowModal={setShowModal} urlsList={urlsList} urlId={urlId} setUrlId={setUrlId} open={open} setOpen={setOpen} setShortUrl={setShortUrl} setCurrentLongUrl={setCurrentLongUrl} />
                    <SlideOver setEditedUrl={setEditedUrl} urlId={urlId} open={open} setOpen={setOpen} shortUrl={shortUrl} currentLongUrl={currentLongUrl} setCurrentLongUrl={setCurrentLongUrl} />
                  </>
                ) : (
                  <>
                  <EmptyUrls />
                  </>
                )}
                {showModal && (
                  <Modal deleteLoading={deleteLoading} deleteUrl={deleteUrl} showModal={showModal} setShowModal={setShowModal} urlId={urlId} setUrlId={setUrlId} />
                )}
              </>
            )}
          </Container>
        </Layout>
    </>
  )
}