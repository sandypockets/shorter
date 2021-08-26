export default function handler(req, res) {
  if (req.method === 'POST') {
    // Post things
  } else if (req.method === 'GET') {
    // Get things
  } else {
    res.send("Something's not right. Check your query.")
  }
}