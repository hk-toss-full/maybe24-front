import Details from "../../components/details/Details"
import AverageRating from "../../components/details/AverageRating";
import ReservationButton from "../../components/details/ReservationButton";

const DetailsPage = () => {
  return (
    <div>
      <div>
        <Details/>
      </div>
      <div>
        <AverageRating productId={Details} />
      </div>
      <div>
        <ReservationButton />
      </div>
    </div>
  )
}

export default DetailsPage;