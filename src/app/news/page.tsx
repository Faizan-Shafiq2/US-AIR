import NewsCard from "@/components/news/news-card";

export const metadata = {
  title: "News",
  description: "Stay updated with the latest news and developments at US AIR TECH.",
};


const page = () => {
  return (
    <div className="bg-black">
      <div className="rounded-t-3xl px-4 md:px-16 py-6 bg-white">
      <NewsCard />
      </div>
    </div>
  );
};

export default page;
