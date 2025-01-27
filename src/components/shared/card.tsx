
import Image from "next/image";
interface CardProps {
  imageUrl: string;
  date?: string;
  day?: number;
  monthName?: string;
  title?: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  date,
  title,
  subtitle,
}) => {
  const newdate = new Date(date || Date.now());
  const monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(newdate);
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(newdate);
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg mx-auto overflow-hidden">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt="Satcom Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="px-4 pt-4">
          <div className="flex items-start h-28">
            <div className="flex flex-col gap-4">
              <h1 className="md:text-3xl text-lg font-bold text-gray-800">{day}</h1>
              <h2 className="max-w-[60px] text-lg text-gray-500">
                {monthName}
              </h2>
            </div>
            <div className="flex flex-col md:gap-8 gap-6 ml-4">
              <h2 className="max-w-[300px] md:text-lg text-md text-gray-800">
                {title} <span className="text-black font-semibold">{subtitle}</span>
              </h2>
              <div className="uppercase text-xs text-gray-400">Guide</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
