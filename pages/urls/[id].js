import { useRouter } from "next/router";
import axios from 'axios'
import LoadingWheel from "../../components/LoadingWheel";

export default function RedirectPage () {
  const router = useRouter()
  const { id } = router.query

  axios.get('/api/redirect', {
      params: {
        id
      }
    })
    .then(function (response) {
      response && window.location.assign(`${response.data.data[0]['long_url']}`)
    })

  return (
    <div className="flex justify-center mt-24">
      <LoadingWheel />
    </div>
  )
}