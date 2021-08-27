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

async function addNewUrl(req, res) {
  const { randomString, longUrl, userId } = req.body
  try {
    const { data, error } = await supabase
      .from('urls')
      .insert([
        { short_url: randomString, long_url: longUrl, user_id: userId }
      ]).then(function (response) {
        res.status(200).json({ response })
      })
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
    addNewUrl(req, res)
  } else if (req.method === 'GET') {
    getUrls(req, res)
  } else {
    res.send("Something's not right. Check your query.")
  }
}