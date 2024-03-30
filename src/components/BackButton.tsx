import { RxArrowLeft } from "react-icons/rx";
import { primaryOrange } from "~/utils/colors";

const BackButton = () => {
  return (
    <div className="flex w-full flex-col">
      <div className={`p-8 sm:py-12 sm:w-[30rem] sm:px-0 md:w-[40rem] lg:w-[45rem]`}>
        <RxArrowLeft
          className={`cursor-pointer text-2xl transition duration-200 ease-in-out hover:text-[${primaryOrange}]`}
          onClick={() => window.history.back()}
        />
      </div>
    </div>
  );
};

export default BackButton;
