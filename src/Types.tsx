export type CurrentWeather = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: Weather[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export const initData = {
    "coord": {
    "lon": 139.697,
    "lat": 35.5221
    },
    "weather": [
    {
    "id": 801,
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 283.79,
    "feels_like": 281.93,
    "temp_min": 282.1,
    "temp_max": 285.92,
    "pressure": 1012,
    "humidity": 39
    },
    "visibility": 10000,
    "wind": {
    "speed": 3.09,
    "deg": 120
    },
    "clouds": {
    "all": 20
    },
    "dt": 1643866854,
    "sys": {
    "type": 1,
    "id": 8074,
    "country": "JP",
    "sunrise": 1643837994,
    "sunset": 1643875800
    },
    "timezone": 32400,
    "id": 1859642,
    "name": "Kawasaki",
    "cod": 200
    }