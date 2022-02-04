
export function getWeatherIcon(weatherId: number, icon: string): string {
    
    if(weatherId <= 232) { //thunderstorm
        return `<img src="https://img.icons8.com/small/100/000000/storm.png"/>`;
    } else if(weatherId <= 321) { //drizzle
        return `<img src="https://img.icons8.com/small/100/000000/light-rain.png"/>`
    } else if(weatherId <= 531) { //rain
        return `<img src="https://img.icons8.com/small/100/000000/rain.png"/>`
    } else if(weatherId <= 622) { //snow
        return `<img src="https://img.icons8.com/small/16/000000/snowflake.png"/>   `
    } else if(weatherId <= 781) { //atmosphere
        return `<img src="https://img.icons8.com/small/100/000000/dust.png"/>`
    } else if(weatherId <= 800) { //clear
        if (icon === '01d') return `<img src="https://img.icons8.com/small/100/000000/sun.png"/>`
        return `<img src="https://img.icons8.com/small/100/000000/bright-moon.png"/>`
    } else { // clouds
        return `<img src="https://img.icons8.com/small/100/000000/clouds.png"/>`
    }
}