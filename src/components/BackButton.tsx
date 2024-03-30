import { RxArrowLeft } from "react-icons/rx";

const BackButton = () => {
  return (
    <div className="py-12">

      <RxArrowLeft
        className={`cursor-pointer text-2xl transition duration-200 ease-in-out hover:text-[#e64100]`}
        onClick={() => window.history.back()}
      />
    </div>
  );
};

export default BackButton;
