import Auth from "../components/Account/Auth";
import Layout from "../components/Layout/Layout";

export default function SignInPage() {
  return (
    <Layout>
      <Auth registrationType="signin"/>
    </Layout>
  )
}