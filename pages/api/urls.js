import { supabase } from "../../utils/supabaseClient";

async function getUrls(req, res) {
  const userId = req.query.id
  try {
    let { data, error, status } = await supabase
      .from('urls')
      .select()
      .eq('user_id', userId)
    if (error && status !== 406) {
      throw error
    }
    if (data) {
      res.status(200).json({ data })
    }
  } catch (error) {
    console.log(error)
    res.send(error.message)
  }
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Post things
  } else if (req.method === 'GET') {
    // Get things
    getUrls(req, res)
  } else {
    res.send("Something's not right. Check your query.")
  }
}