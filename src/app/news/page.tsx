import NewsCard from "@/components/news/news-card";

export const metadata = {
  title: "News",
  description: "Stay updated with the latest news and developments at US AIR TECH.",
};


const page = () => {
  return (
    <div className="">
      <NewsCard />
    </div>
  );
};

export default page;
