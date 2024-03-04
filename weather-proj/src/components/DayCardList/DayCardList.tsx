import { HourData } from '../../types/types';
import DayCard from '../DayCard/DayCard';
import "./DayCardList.scss";


type DayCardListProps = {
    forecastData: HourData[][];
};


const DayCardList = ({ forecastData }:DayCardListProps) => {

     // Function to filter the forecast data for the current day and specific times
  const filteredHours = (hours: HourData[]): HourData[] => {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-UK', { weekday: 'long' });

    const targetTimes = ['06:00', '10:00', '14:00', '18:00', '22:00'];

    // Filter hours for the current day and specific times
    return hours.filter(hour => {
      const hourDate = new Date(hour.time);
      const hourDay = hourDate.toLocaleDateString('en-UK', { weekday: 'long' });
      const hourTime = hourDate.toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });

      return hourDay === currentDay && targetTimes.includes(hourTime);
    });
  };

  return (
    <div className="day-card-list">
      {/* Filter and render forecast data for each day */}
      {forecastData.map((hourData, index) => (
        <div key={index} className="day-card-list__container">
    
          <div className="day-card-list__inner">
            {/* Render only the filtered hours */}
            {filteredHours(hourData).map((hour, i) => (
              <DayCard key={i} hour={hour} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayCardList;