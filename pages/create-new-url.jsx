import Layout from "../components/Layout/Layout";
import NewUrlForm from "../components/NewUrlForm";
import { useState } from "react";

export default function CreateNewUrl() {
  const [longUrl, setLongUrl] = useState()

  const generateRandomString =() => {
    return Math.random().toString(26).substring(2, 8);
  }

  return (
    <Layout>
      <NewUrlForm longUrl={longUrl} setLongUrl={setLongUrl} generateRandomString={generateRandomString} />

    </Layout>
  )
}