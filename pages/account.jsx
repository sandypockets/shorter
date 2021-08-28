import Layout from "../components/Layout/Layout";
import Account from "../components/Account/Account";
import Container from "../components/Layout/Container";

export default function AccountPage() {
  return (
    <Layout>
      <div className="mt-10">
        <Account />
      </div>
    </Layout>
  )
}