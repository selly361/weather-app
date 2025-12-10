import { DAYS } from "../constants";

export interface UnitSettings {
  temp: "c" | "f";
  wind: "kmh" | "mph";
  precip: "mm" | "in";
}

export type DayName = (typeof DAYS)[number]
