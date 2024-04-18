import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
import { Destination } from "./Destination";

export const DestinationList = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return <Destination destination={destination} key={destination.id} />;
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
};
