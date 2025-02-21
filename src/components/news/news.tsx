"use client";
import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import PortableTextComponent from "./portable-text";
import "swiper/css/bundle";
import { urlFor } from "@/sanity/lib/image";
import RelatedPost from "./related-post";
import { BlogPost } from "@/types/index";
import {
  LinkedinIcon,
  LinkedinShareButton,
  FacebookIcon,
  FacebookShareButton,
  } from "next-share";

interface PostProps {
  title: string;
  tag?: string[];
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
  slug: string;
}

const News = ({ blogpost, slug}: { blogpost: PostProps; slug: string }) => {
  // console.log("🚀 ~ News ~ slug:", slug)
  return (
    <article className="article rounded-t-3xl z-50">
      <h1 className="blog-title">{blogpost?.title}</h1>
      <div className="blog">
        <PortableText
          value={blogpost?.body}
          components={
            PortableTextComponent as Partial<PortableTextReactComponents>
          }
        />
        <div>
          <div className="flex md:flex-row flex-col md:justify-between items-start gap-6">
            <div className="flex flex-wrap md:gap-8 gap-2 text-xs">
              {blogpost?.tag?.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-center bg-black text-white rounded-full sm:py-3 py-2 md:w-[120px] w-[80px]  md:text-[14px] text-[10px]`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <h4 className="text-[#c7c7c7] text-md">Share on</h4>
              <LinkedinShareButton url={`https://us-air-faizans-projects-c118cff1.vercel.app/news/${slug}`}>
                <LinkedinIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "gray" }}
                />
              </LinkedinShareButton>
              <FacebookShareButton url={`https://us-air-faizans-projects-c118cff1.vercel.app/news/${slug}`}>
                <FacebookIcon
                  size={32}
                  round={true}
                  bgStyle={{ fill: "gray" }}
                />
              </FacebookShareButton>
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
          <div className="flex flex-col gap-4 md:px-6 md:pt-0 pt-4">
            <h1 className="md:text-start text-center -mb-5 font-semibold">
              {blogpost?.author?.name || "Author Name"}
            </h1>
            <h2 className="md:text-start text-center">{blogpost?.author?.title || "Author Title"}</h2>
            <p className="text-start">
              {blogpost?.author?.bio[0]?.children[0]?.text ||
                "Author description goes here."}
            </p>
            <div className="flex gap-4">
              <Image
                src={"/X_logo.svg"}
                alt="US AIR TECH"
                width={40}
                height={100}
                className="border-[1px] rounded-full p-3"
              />
              <Image
                src={"/insta_logo.svg"}
                alt="US AIR TECH"
                width={40}
                height={100}
                className="border-[1px] rounded-full p-3"
              />
              <Image
                src={"/tiktok_logo.svg"}
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
      <RelatedPost blogPost={blogpost?.relatedPosts} />
    </article>
  );
};

export default News;
