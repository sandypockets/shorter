import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import axios from "axios";

export default function Layout({ children }) {
  const [userData, setUserData] = useState({
    username: null,
    website: null,
    avatar_url: null,
  })
  const router = useRouter()
  const currentUrl = router.asPath

  useEffect(() => {
  let responseData;
  const user = supabase.auth.user()
    if (user) {
      const id = user.id
      axios
        .get('/api/profiles', {
          params: {
            id,
          }
        })
        .then(function (response) {
          responseData = response.data.data
          setUserData({
            username: responseData.username,
            website: responseData.website,
            avatar_url: responseData['avatar_url'],
          })
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [])


  console.log("42 Layout: ", userData)
  return (
    <div>
      <Navigation username={userData.username} currentUrl={currentUrl} />
      <div className="m-10">
        {children}
      </div>
    </div>
  )
}