"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPost } from "@/api/blogs";
import { usePathname, useParams } from "next/navigation";
import { navLinks } from "@/data/navbar";
import {
  backgroundImages,
  titles,
  descriptions,
  defaultBackground,
  defaultTitle,
  defaultDescriptions,
} from "@/data/header-data";
import AOS from "aos";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setDescriptionIndex(
            (prevIndex) => (prevIndex + 1) % defaultDescriptions.length
          );
          setTitleIndex((prevIndex) => (prevIndex + 1) % defaultTitle.length);
          setIsAnimating(false);
        }, 1000);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [pathname]);

  useEffect(() => {
    const fetchBlogImage = async () => {
      if (params.slug) {
        try {
          const post = await blogPost(params.slug as string);
          if (post && post.mainImage) {
            setBlogImage(post.mainImage.asset.url);
          }
          if (post && post.title) {
            setBlogTitle(post.title);
          }
          if (post && post.description) {
            setBlogDescription(post.description);
          }
        } catch (error) {
          console.error("Error fetching blog image:", error);
        }
      }
    };

    fetchBlogImage();
  }, [params.slug]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const backgroundImage =
    backgroundImages[pathname as keyof typeof backgroundImages] ||
    defaultBackground;
  const dynamicTitle = titles[pathname] || defaultTitle[titleIndex];
  const dynamicDescription =
    descriptions[pathname] || defaultDescriptions[descriptionIndex];
  const isSlugPresent = params.slug ? blogImage : backgroundImage;
  const isTitlePresent = params.slug ? blogTitle : dynamicTitle;
  const isDescriptionPresent = params.slug
    ? blogDescription
    : dynamicDescription;
    const [backgroundSizeStyle, setBackgroundSizeStyle] = useState(
      pathname === "/" ? "150%" : "cover"
    );
    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768 && pathname === "/") {
          setBackgroundSizeStyle("cover");
        } else {
          setBackgroundSizeStyle(pathname === "/" ? "150%" : "cover");
        }
      };
    
      handleResize(); // Set initial size
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [pathname]);

  const getLinkHref = (word: string) => {
    if (word.toUpperCase() === "COMMERCIAL") {
      return "#commercial-applications";
    } else if (word.toUpperCase() === "DEFENSE") {
      return "#defense-capabilities";
    }
    return "#";
  };

  return (
    <div className="max-w-[2000px] mx-auto">
      <div
        className="h-[80vh] 2xl:h-[85vh] bg-cover bg-no-repeat flex flex-col justify-between"
        style={{
          backgroundImage: `url('${isSlugPresent}')`,
          backgroundPosition: "center -90px",
          backgroundSize: backgroundSizeStyle,
        }}
      >
        <div>
          {/* <Image src="/site_logo.png" alt="US AIR TECH" width={100} height={50} className="lg:ml-28" /> */}

          <div className="z-20 py-8 text-white hidden md:flex justify-center">
            <nav className="flex space-x-8 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-blue-400 font-bold ${pathname === link.href ? "text-blue-400" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="absolute top-0 right-0 z-20 flex items-center justify-end p-6 text-white md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <Image
              src="/assets/hamburger-menu.svg"
              alt="Hamburger menu"
              width={10}
              height={10}
              className="w-8 h-8"
            />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 z-20 bg-black bg-opacity-90 text-white p-6 md:hidden h-full w-1/2 transition-transform duration-1000 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={toggleSidebar} className="mb-6 focus:outline-none">
            <Image
              src="/assets/cross-white-icon.svg"
              alt="Close menu"
              width={10}
              height={10}
              className="w-3 h-3"
            />
          </button>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-blue-400 ${
                  pathname === link.href ? "text-blue-400 font-semibold" : ""
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start mb-20">
          <div
            className="z-10 mx-8 md:mx-20 lg:mx-32 text-white"
            data-aos="fade-up"
          >
            <h1
              className={`heading transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {isTitlePresent}
            </h1>
            <p
              className={`2xl:max-w-[1100px] max-w-[700px] text-start pb-8 text-lg lg:text-xl 2xl:text-3xl font-light transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {isDescriptionPresent === "COMMERCIAL | DEFENSE"
                ? isDescriptionPresent.split(" | ").map((word, index) => (
                    <React.Fragment key={index}>
                      <Link href={getLinkHref(word)} className="cursor-pointer">
                        {word}
                      </Link>
                      {index !== isDescriptionPresent.split(" | ").length - 1 &&
                        " | "}
                    </React.Fragment>
                  ))
                : isDescriptionPresent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
