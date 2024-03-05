import { HourData } from "../../types/types";
import DayCard from "../DayCard/DayCard";
import "./WeekCardList.scss";

type WeekCardListProps = {
  forecastData: HourData[][];
};

const WeekCardList = ({ forecastData }: WeekCardListProps) => {
  // Function to get the day name from date string
  const getDayNameFromDate = (dateString: string): string => {
    const date = new Date(dateString);
    const days = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thur",
      "Fri",
      "Sat",
    ];
    return days[date.getDay()];
  };

  // Function to filter the forecast data for specific times
  const filteredHours = (hours: HourData[]): HourData[] => {
    const targetTime = "10:00";
    return hours.filter((hour) => hour.time.includes(targetTime));
  };

  // Slice the forecastData array to skip the first day
  const next5DaysData = forecastData.slice(1);

  return (
    <section>
      <p className="week-card">{"> Later This Week"}</p>
      <div className="week-card__list">
        {next5DaysData.map((hourData, index) => (
          <div key={index} className="week-card__container">

            <div className="week-card__inner">
              {/* Render only the filtered hours */}
              <p className="weekcard__inner--title">
                {getDayNameFromDate(hourData[0].time)}
              </p>
              {filteredHours(hourData).map((hour, i) => (
                <DayCard key={i} hour={hour} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeekCardList;
