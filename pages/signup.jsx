import Auth from "../components/Account/Auth";
import Layout from "../components/Layout/Layout";
import EmailPasswordAuth from "../components/Account/EmailPasswordAuth";

export default function SignUpPage() {
  return (
    <Layout>
      {/*<Auth registrationType="signup" />*/}
      <EmailPasswordAuth registrationType="signup" />
    </Layout>
  )
}