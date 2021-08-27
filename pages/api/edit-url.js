import { supabase } from "../../utils/supabaseClient";

async function editUrl(req, res) {
  const { shortUrl, newLongUrl } = req.body
  try {
    const updates = {
      "short_url": shortUrl,
      "long_url": newLongUrl,
      updated_at: new Date(),
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