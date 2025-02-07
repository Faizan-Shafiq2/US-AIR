import Link from "next/link";
import Card from "../shared/card";
import { urlFor } from "@/sanity/lib/image";
import { blogs } from "@/api/blogs";

interface Blog {
  _createdAt: string;
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
}

const NewsCard = async () => {
  const blog: Blog[] = await blogs();
  return (
    <div className="2xl:max-w-[1500px] lg:max-w-[1050px] max-w-[700px] grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-x-2 pt-6 rounded-3xl">
      {blog?.map((items, index) => (
        <Link key={index} href={`/news/${items.slug.current}`}>
          <Card
            imageUrl={urlFor(items.mainImage.asset._ref).url()}
            date={items._createdAt}
            title={items.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default NewsCard;
