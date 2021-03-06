export interface WeatherDayInterface {
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>,
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    },
    wind: {
        speed: number;
        deg: number;
    },
    clouds: {
        all: number;
    },
    sys: {
        sunrise: number;
        sunset: number;
    }
    name: string
}