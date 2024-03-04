export type WeatherDataProps = {
    location: string;
    temperature_c: number;
    condition: string;
    condition_icon: string;
    localtime:string;
    wind_mph: number,
    humidity:number,
    cloud: number,
    feelslike_c: number,
  };

  export type HourData = {
    time: string;
    temp_c: number;
    condition_text: string;
    condition_icon: string;
  };

  export type ForecastDataProps = HourData[][];
  
 export type DayCardListProps = {
    forecastData: HourData[][];
};

