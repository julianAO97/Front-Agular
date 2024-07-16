import { Time } from "@angular/common";
export interface Schedule {
    id: number;   
    route_id: number; 
    week_num: number; 
    from: Time; 
    to: Time;     
    active: boolean;  
}