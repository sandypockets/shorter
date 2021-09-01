import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import axios from 'axios'
import AccountForm from "../Forms/AccountForm";
import ProfileForm from "../Forms/ProfileForm";
import LoadingWheel from "../Utils/LoadingWheel";
import Container from "../Layout/Container";

function Account() {
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState(supabase.auth.session())
  const user = supabase.auth.user()
  const [userData, setUserData] = useState({
    username: null,
    email: null,
    website: null,
    avatar_url: null,
    first_name: null,
    last_name: null,
  })

  // Loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [session])

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  useEffect(() => {
    if (user) {
      setLoading(true)
      axios
        .get('/api/profiles', {
          params: {
            id: user.id,
          }
        })
        .then(function (response) {
          setUserData({
            username: response.data.data.username,
            email: response.data.data.email,
            website: response.data.data.website,
            avatar_url: response.data.data['avatar_url'],
            first_name: response.data.data['first_name'],
            last_name: response.data.data['last_name'],
          })
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setLoading(false)
        })
    }
  }, [])

  const updateProfile = () => {
    setLoading(true)
    axios
      .post('/api/profiles', {
        "id": user.id,
        "username": userData.username,
        "first_name": userData["first_name"],
        "last_name": userData["last_name"],
        "email": userData.email,
        "website": userData.website,
        "avatar_url": userData["avatar_url"],
        "user": user,
    })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false)
      })
  }


  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <LoadingWheel />
        </div>
      ) : user ? (
          <div className="max-w-3xl mx-auto">
            <ProfileForm user={user} userData={userData} setUserData={setUserData} loading={loading} updateProfile={updateProfile} />
            {/*<AccountForm userData={userData} setUserData={setUserData} loading={loading} updateProfile={updateProfile} />*/}
          </div>
        ) : (
          <Container>
            <h2 className="flex justify-center text-2xl mt-24 h-72">
              You must be signed in to view this page
            </h2>
          </Container>
      )}

    </>
  )
}

export default Account