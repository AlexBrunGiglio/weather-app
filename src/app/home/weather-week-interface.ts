export interface WeatherWeekInterface {
    city: {
        coord: {
            lat: string;
            lon: string;
        };
        country: string;
        id: number;
        name: string;
        population: string;
        sunrise: string;
        sunset: string;
        timezone: string;
    }
    cnt: string;
    cod: string;
    list: Array<WeatherListInterface>,
    message: string;
}

export interface WeatherListInterface {
    dt: string,
    dt_txt: string,
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temps_max: number;
        pressure: number;
        humidity: number;
    },
    weather: Array<{
        id: string,
        main: "Clouds" | "Sun" | "Rain",
        description: string,
        icon: string
    }>,
    cloud: {
        all: string;
    },
    wind: {
        speed: string;
        deg: string;
    },
    visibility: string;
    pop: string;
}