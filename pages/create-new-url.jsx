import Layout from "../components/Layout/Layout";
import NewUrlForm from "../components/Forms/NewUrlForm";
import Container from "../components/Layout/Container";

export default function CreateNewUrl() {
  return (
    <Layout>
      <Container>
        <h1 className="text-3xl font-semibold mb-10">
          Create a new URL
        </h1>
        <div className="flex justify-center">
          <NewUrlForm />
        </div>
      </Container>
    </Layout>
  )
}