import { Injectable } from '@nestjs/common';
import { Appointment } from './appointment.model';

export interface AppointmentInput {
    patientId: number;
    startTime: Date;
    endTime: Date;
  }
  

@Injectable()
export class AppointmentService {

    public scheduleAppointment(appointmentData: AppointmentInput): Appointment{

        if(appointmentData.endTime < appointmentData.startTime){
            throw new Error('La finalizacion de la cita debe ser despues de la de inicio')
        }

        console.log("Test ci/cd");

        return {
            ...appointmentData, 
            confirmed: false
        }
    }

}
