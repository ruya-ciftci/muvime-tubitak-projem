import { Image } from "../Image/Image";
import "./PeopleCard.css";

interface Props {
  className: any;
}

export const PeopleCard = (props: any): JSX.Element => {
  return (
    <div className={`actor-card ${props.className}`}>
      <div className="moviecard">
        <div className="frame">
          <Image className="image-4"
          backgroundImage={props.image}
           />
        </div>
        <div className="detail">
          <div className="name">{props.name}</div>
          <div className="seperator" />
          <div className="surname">{props.surname}</div>
          <div className="div" />
          <div className="rating">
            <div className="job">{props.job}</div>
          </div>
        </div>
      </div>
    </div>
  );
};