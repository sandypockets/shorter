import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios'
import LoadingWheel from "../../components/LoadingWheel";

export default function RedirectPage () {
  const router = useRouter()
  const { id } = router.query
  console.log("id", id)

  // useEffect(() => {
  //   axios
  //     .get('/api/redirect', {
  //       params: {
  //         id
  //       }
  //     })
  //     .then(function (response) {
  //       router.push(response.data.data[0]['long_url'])
  //     })
  // })

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
    <>
      <LoadingWheel />
    </>
  )
}