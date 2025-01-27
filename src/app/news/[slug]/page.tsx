import News from "@/components/news/news";
import { blogPost } from "@/api/blogs";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blogpost = await blogPost(slug);
  return {
    title: blogpost?.title,
    description: blogpost?.body[0]?.children[0]?.text,
  };
}

const NewsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blogpost = await blogPost(slug);
  // const blog = await blogs();

  return (
    <>
      <News blogpost={blogpost} />
    </>
  );
};

export default NewsPage;
