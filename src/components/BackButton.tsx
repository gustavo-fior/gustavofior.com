import { RxArrowLeft } from "react-icons/rx";

const BackButton = () => {
  return (
    <div className="pt-12 pb-6">

      <RxArrowLeft
        className={`cursor-pointer text-xl transition duration-200 ease-in-out hover:text-[#e64100]`}
        onClick={() => window.history.back()}
      />
    </div>
  );
};

export default BackButton;
