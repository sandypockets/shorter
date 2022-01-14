import Auth from "../components/Account/Auth";
import Layout from "../components/Layout/Layout";
import EmailPasswordAuth from "../components/Account/EmailPasswordAuth";

export default function SignInPage() {
  return (
    <Layout>
      {/*<Auth registrationType="signin"/>*/}
      <EmailPasswordAuth registrationType="signin" />
    </Layout>
  )
}