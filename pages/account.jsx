import Layout from "../components/Layout/Layout";
import Account from "../components/Account/Account";
import Container from "../components/Layout/Container";

export default function AccountPage() {
  return (
    <Layout>
      <div className="mt-10">
        <h1 className="text-4xl mb-10 tracking-tight font-extrabold flex justify-center">
          Edit your profile
        </h1>
        <Account />
      </div>
    </Layout>
  )
}