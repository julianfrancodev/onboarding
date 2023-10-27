import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentService } from './appointment.service';

describe('AppointmentService', () => {
  let service: AppointmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentService],
    }).compile();

    service = module.get<AppointmentService>(AppointmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  

    // Requerimiento 2
  it('debe programar una cita no confirmada para un usuario en caso de éxito',()=>{
    const startTime = new Date('2022-01-01T14:00:00Z');
    const endTime = new Date('2022-01-01T15:00:00Z');

    const newAppointment = service.scheduleAppointment({
      patientId: 1,
      startTime,
      endTime
    });

    expect(newAppointment).toEqual({
      patientId: 1,
      startTime, 
      endTime, 
      confirmed: false,
    })
  });


  // Requerimiento 2
  it('Deberia dar un error cuando la hora en que acaba es anterior a la hora que empieza', ()=>{
    const startTime = new Date('2022-01-01T14:00:00Z');
    const endTime = new Date('2022-01-01T13:00:00Z');

    expect(()=>{
      service.scheduleAppointment({
        patientId: 1,
        startTime,
        endTime
      })
    }).toThrowError('La finalizacion de la cita debe ser despues de la de inicio')

  })
});
