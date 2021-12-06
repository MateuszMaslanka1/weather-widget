
export interface OpenWeatherMapData {
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
