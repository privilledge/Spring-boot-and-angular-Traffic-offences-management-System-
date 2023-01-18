import { Drivers } from "./drivers";
import { Offenses } from "./offenses";
import { Officers } from "./officers";

export class Fines {
    id!:number;
    bookingDate!:String;    
    paidDate!:String;
    ticketRef!:String;
    status!:String;
    amountDue!:number;
    amountPaid!:number;
    offence!:Offenses;
    offenceId!:number;
    driver!:Drivers;
    driverId!:number;
    officer!:Officers;   
    officerId!:number; 
    description!:String;
}
