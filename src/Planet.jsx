import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function Planet() {
  const { planet } = useParams();

  const currentPlanet = data.find((item) => item.name === planet);

  return <div>{currentPlanet.name}</div>;
}
