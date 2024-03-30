import { RxArrowLeft } from "react-icons/rx";
import { primaryOrange } from "~/utils/colors";

const BackButton = () => {
  return (
    <div className="py-12">

      <RxArrowLeft
        className={`cursor-pointer text-2xl transition duration-200 ease-in-out hover:text-[${primaryOrange}]`}
        onClick={() => window.history.back()}
      />
    </div>
  );
};

export default BackButton;
