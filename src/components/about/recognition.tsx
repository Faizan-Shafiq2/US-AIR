import { recognitionData } from "@/data/recognition";



const Recognition = () => {
  return (
    <>
      <div className="w-[90%] py-20 mx-auto">
        <p className="flex items-center justify-center uppercase text-3xl font-bold pb-10">Recognition</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {recognitionData?.map((items, index) => (
        <div key={index}
          className={`flex items-center ${items.classname} h-40 bg-accent text-accent sm:px-14 px-6 rounded-xl`}
        >
          <p className="text-center"> {items.description}</p>
        </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Recognition;
