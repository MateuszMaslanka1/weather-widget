
export interface FullWeatherData {
  weather: [
    {
      description: string,
      icon: string
    }
  ],
  main: {
    temp: number
  },
  id: number,
  name: string
}
