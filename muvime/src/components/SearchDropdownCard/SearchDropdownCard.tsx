import "./SearchDropdownCard.css";

export const SearchDropdownCard = (props: any) => {
  return (
    <div className="row dropdown-card">
        <div className="col-2">
            <img src="https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg" alt="movie poster" />
        </div>
        <div className="col-10">
            <h5>{props.title}</h5>
            <p>{props.date}</p>
        </div>
    </div>
  );
};
