import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import PortableTextComponent from "./portable-text";
import { btnData} from "@/data/card-data";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/bundle";
import { urlFor } from "@/sanity/lib/image";
import RelatedPost from "./related-post";
import { BlogPost } from "@/types/index";

interface PostProps {
  title: string;
  body: {
    _type: string;
    children: { text: string }[];
  }[];
  author: {
    name: string;
    title: string;
    bio: { children: { text: string }[] }[];
    image: { _ref: string; alt?: string };
  };
  relatedPosts?: BlogPost[];
  
}

const News = ({ blogpost}: { blogpost: PostProps }) => {
  return (
    <article className="article">
      <h1 className="blog-title">{blogpost?.title}</h1>
      <div className="blog">
        <PortableText
          value={blogpost?.body}
          components={PortableTextComponent as Partial<PortableTextReactComponents>}
        />
        <div>
          <div className="flex md:flex-row flex-col md:justify-between justify-center gap-6">
            <div className=" grid sm:grid-cols-3 grid-cols-2 justify-center md:mx-0 mx-auto md:gap-8 gap-2 text-xs">
              {btnData?.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`bg-black text-white rounded-full sm:py-3 py-2 md:text-[14px] text-[10px] ${item.class}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <h4 className="text-[#c7c7c7] text-md">Share on</h4>
              <Image
                src={"/linkedIn_outline.svg"}
                alt="US AIR TECH"
                width={40}
                height={100}
              />
            </div>
          </div>
          <hr className="w-full border-[#D9D9D9] mt-10" />
        </div>

        <div className="flex md:flex-row flex-col md:items-start items-center">
          {blogpost?.author?.image ? (
            <Image
              src={urlFor(blogpost.author.image).url()}
              alt={blogpost.author.name || "Author Image"}
              width={200}
              height={100}
              className="rounded-full"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          )}
          <div className="flex flex-col md:items-start items-center gap-4 p-6">
            <h1 className="-mb-5 font-semibold">
              {blogpost?.author?.name || "Author Name"}
            </h1>
            <h2>{blogpost?.author?.title || "Author Title"}</h2>
            <p>
              {blogpost?.author?.bio[0]?.children[0]?.text || "Author description goes here."}
            </p>
            <div className="flex gap-4">
              <Image
                src={"/assets/X_Logo.svg"}
                alt="US AIR TECH"
                width={40}
                height={100}
                className="border-[1px] rounded-full p-3"
              />
              <Image
                src={"/assets/insta_Logo.svg"}
                alt="US AIR TECH"
                width={40}
                height={100}
                className="border-[1px] rounded-full p-3"
              />
              <Image
                src={"/assets/tiktok_Logo.svg"}
                alt="US AIR TECH"
                width={40}
                height={100}
                className="border-[1px] rounded-full p-3"
              />
            </div>
          </div>
        </div>
        <hr className="w-full border-[#D9D9D9]" />
      </div>
      <RelatedPost blogPost={blogpost?.relatedPosts}  />
    </article>
  );
};

export default News;
