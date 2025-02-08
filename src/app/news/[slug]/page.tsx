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

  return (
    <div >
      <div className="px-4 md:px-16 py-6"> 
      <News blogpost={blogpost} />
      </div>
    </div>
  );
};

export default NewsPage;
