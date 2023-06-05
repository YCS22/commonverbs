import { RiPercentFill } from "react-icons/ri";
const TotalCounter = ({
  knownQuestion,
  listLength,
}: {
  knownQuestion: number;
  listLength: number;
}) => {
  return (
    <div className='w-full bg-gray-300 h-2.5  rounded-full mb-4 '>
      <div
        className='bg-blue-600 h-2.5 text-center rounded-full'
        style={{ width: `${(knownQuestion * listLength) / 100}%` }}
      ></div>
      <div className='flex justify-between'>
        <label>0</label>
        <label className='flex justify-center items-center space-x-1'>
          <span>{(knownQuestion * listLength) / 100} </span>{" "}
          <RiPercentFill size={"1em"} />
        </label>
        <label>{listLength}</label>
      </div>
    </div>
  );
};

export default TotalCounter;
