import { supabase } from "../../utils/supabaseClient";

async function deleteUrl(req, res) {
  const { urlId, userId } = req.body
  try {
    const { data, error } = await supabase
      .from('urls')
      .delete()
      .eq('user_id', userId)
      .eq('short_url', urlId)
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
  if (req.method === 'POST') {
    deleteUrl(req, res)
  } else if (req.method === 'GET') {
    // Get things
  } else {
    res.send("Something's not right. Check your query.")
  }
}