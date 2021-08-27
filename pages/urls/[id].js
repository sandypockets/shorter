import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios'
import LoadingWheel from "../../components/LoadingWheel";

export default function RedirectPage () {
  const router = useRouter()
  const { id } = router.query
  console.log("id", id)

  axios
    .get('/api/redirect', {
      params: {
        id
      }
    })
    .then(function (response) {
      response &&
      router.push(response.data.data[0]['long_url'])
    })

  return (
    <div className="flex justify-center mt-24">
      <LoadingWheel />
    </div>
  )
}