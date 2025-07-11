import { MdOutlineArrowForwardIos } from "react-icons/md";

function CarouselNext({ className, handleNext }) {
  return (
    <button className={className} onClick={handleNext}>
      <MdOutlineArrowForwardIos />
    </button>
  );
}
export default CarouselNext;
