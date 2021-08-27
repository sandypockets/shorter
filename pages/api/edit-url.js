import { supabase } from "../../utils/supabaseClient";

async function editUrl(req, res) {
  const { urlId, shortUrl, newLongUrl, userId } = req.body
  try {
    const updates = {
      "id": urlId,
      "long_url": newLongUrl,
      "short_url": shortUrl,
      "user_id": userId,
    }
    let { error } = await supabase
      .from('urls')
      .upsert(updates)
      .then((response) => {
        res.status(response.status).json({ response })
      })
    if (status === '200') {
      console.log("status 200!")
    }
    if (error) {
      throw error
    }
  } catch (error) {
    res.status(error.status)
    res.send(error.message)
  }
}

export default function handler(req, res) {
  console.log("FIRED!")
  if (req.method === 'POST') {
    console.log("FIRED! POST!")
    // Post things
    editUrl(req, res)
  } else if (req.method === 'GET') {
    // Get things
  } else {
    res.send("Something's not right. Check your query.")
  }
}