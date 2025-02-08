import NewsCard from "@/components/news/news-card";

export const metadata = {
  title: "News",
  description: "Stay updated with the latest news and developments at US AIR TECH.",
};


const page = () => {
  return (
    <div >
      <div className="px-4 md:px-16 py-6">
      <NewsCard />
      </div>
    </div>
  );
};

export default page;
