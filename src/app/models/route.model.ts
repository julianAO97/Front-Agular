import { Time } from "@angular/common";

export interface Route {
   id: number; 
    name: string;
    origin: string;
    destination: string;
    start_time: Time;
    end_time: Time;
    description: string;
    driver_id: number;
    vehicle_id: number;
    active: boolean;
}