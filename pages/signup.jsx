import Layout from "../components/Layout/Layout";
import EmailPasswordAuth from "../components/Account/EmailPasswordAuth";

export default function SignUpPage() {
  return (
    <Layout>
      <EmailPasswordAuth registrationType="signup" />
    </Layout>
  )
}