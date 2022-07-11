import { getPosts } from "libs/post";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import PostListSection from "components/PostListSection";
import Footer from "components/Footer";

export default function PostsPage({ posts }) {
  return (
    <>
      <DocumentHead title="Posts" />
      <Header />
      <Container>
        <PostListSection title="Posts" posts={posts} />
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
