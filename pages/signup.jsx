import Auth from "../components/Account/Auth";
import Layout from "../components/Layout/Layout";

export default function SignUpPage() {
  return (
    <Layout>
      <Auth registrationType="signup" />
    </Layout>
  )
}