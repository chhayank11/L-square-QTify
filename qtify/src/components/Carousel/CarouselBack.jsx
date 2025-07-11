import { MdOutlineArrowBackIos } from "react-icons/md";

function CarouselBack({ className, handlePrev }) {
  return (
    <button className={className} onClick={handlePrev}>
      <MdOutlineArrowBackIos />
    </button>
  );
}
export default CarouselBack;
