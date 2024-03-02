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
  

export type WeatherDataExtProps = {
        location: {
            name: string,
            region: string,
            country: string,
            lat: number,
            lon: number,
            tz_id: string,
            localtime_epoch: string,
            localtime: string;
        },
        current: {
            last_updated_epoch: string,
            last_updated: string,
            temp_c: number,
            temp_f: number,
            is_day: number,
            
            condition: {
                text: string;
                icon: string,
                code: number
            },

            wind_mph: number,
            wind_kph: number,
            wind_degree: number,
            wind_dir: string,
            pressure_mb: number,
            pressure_in: number,
            precip_mm: number,
            precip_in: number,
            humidity:number,
            cloud: number,
            feelslike_c: number,
            feelslike_f: number,
            vis_km: number,
            vis_miles: number,
            uv: number,
            gust_mph: number,
            gust_kph: number
        }
    }

  