import Layout from "../components/Layout/Layout";
import EmailPasswordAuth from "../components/Account/EmailPasswordAuth";

export default function SignInPage() {
  return (
    <Layout>
      <EmailPasswordAuth registrationType="signin" />
    </Layout>
  )
}