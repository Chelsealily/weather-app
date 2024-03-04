import { HourData } from "../../types/types";
import "./DayCard.scss"

type DayCardProps = {
    hour: HourData;
  };
  
  const DayCard = ({ hour }:DayCardProps) => {
    const { time, temp_c, condition_text, condition_icon } = hour;

     // Function to extract only the time part from datetime string
     const getTimePart = (datetime: string): string => {
        return datetime.split(' ')[1]; // Split the datetime string and get the time part
    };
    
    return (
      <div className="day-card">
          <p className="day-card__title">{getTimePart(time)}</p> {/* Display only the time part */}
        <p>{temp_c}°C</p>
        <p>{condition_text}</p>
        <img className="day-card__pic" src={condition_icon} alt={condition_text} />
      </div>
    );
  };

export default DayCard;
