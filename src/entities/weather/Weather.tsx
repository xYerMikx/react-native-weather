import { WeatherCard } from "@/components/WeatherCard/WeatherCard";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import { url } from "@/constants/weatherApi";
import { geoUrl } from "@/constants/geoAPi";
import { gql, useQuery } from "@apollo/client";
import { Loader } from "@/ui/Loader/Loader";

const GET_CITY_COORDS = gql`
  query GetCityCoords($city: String!, $apiKey: String!) {
    getCityCoords(city: $city, apiKey: $apiKey) {
      lon
      lat
    }
  }
`;

const GET_WEATHER = gql`
  query GetWeather($lon: Float!, $lat: Float!, $apiKey: String!) {
    getWeather(lon: $lon, lat: $lat, apiKey: $apiKey) {
      humidity
      temp
      windSpeed
    }
  }
`;

interface CoordsData {
  getCityCoords: {
    lon: number;
    lat: number;
  };
}

interface WeatherData {
  getWeather: {
    humidity: number;
    temp: number;
    windSpeed: number;
  };
}

interface WeatherProps {
  city: string;
}

export function Weather({ city: p }: WeatherProps) {
  const city = "London";
  const apiKey = process.env.EXPO_PUBLIC_WEATHER_API;
  const { data, loading, error } = useQuery<CoordsData>(GET_CITY_COORDS, {
    variables: { city, apiKey },
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Text className="text-red-500">{error?.message}</Text>;
  }

  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
  } = useQuery<WeatherData>(GET_WEATHER, {
    variables: {
      lon: data?.getCityCoords.lon,
      lat: data?.getCityCoords.lat,
      apiKey,
    },
  });
  if (weatherLoading) {
    return <Text>Weather is loading...</Text>;
  }
  if (weatherError) {
    return <Text className="text-red-500">Weather error...</Text>;
  }
  const humidity = weatherData?.getWeather.humidity;
  const windSpeed = weatherData?.getWeather.windSpeed;
  const degrees = weatherData?.getWeather.temp;

  if (!humidity || !windSpeed || !degrees) {
    return <Text>No data yet...</Text>;
  }
  return (
    <View className="mt-5 w-full flex flex-col items-center">
      <WeatherCard
        city={city}
        degrees={degrees - 273.15}
        humidity={humidity}
        windSpeed={windSpeed}
      />
    </View>
  );
}

// useEffect(() => {
//   const fetchData = async () => {
//     const { data: geoData } = await axios.get(
//       geoUrl + `direct?q=${city}&appid=${process.env.EXPO_PUBLIC_WEATHER_API}`
//     );

//     // const { data } = await axios.get(
//     //   url +
//     //     `onecall?lat=${lat}&lon=${lon}appid=${process.env.EXPO_PUBLIC_WEATHER_API}`
//     // );
//   };
//   fetchData();
// }, []);
