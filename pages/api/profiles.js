import { supabase } from "../../utils/supabaseClient";

async function getProfile(req, res) {
  const userId = req.query.id
  try {
    let { data, error, status } = await supabase
      .from('profiles')
      .select()
      .eq('id', userId)
      .single()
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

async function updateProfile(req, res) {
  const { id, username, email, website, avatar_url } = req.body
  try {
    const updates = {
      id,
      username,
      email,
      website,
      avatar_url,
      updated_at: new Date(),
    }
    let { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })
      .then((response) => {
        res.status(response.status).json({ response })
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
    updateProfile(req, res)
  } else if (req.method === 'GET') {
    getProfile(req, res)
  } else {
    res.send("Something's not right. Check your query.")
  }
}

