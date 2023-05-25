import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  propiedades:any[] = [
    {
      tipo: "casa",
      direccion: "Calle 1 #123",
      ciudad: "Ciudad de México",
      estado: "CDMX",
      codigoPostal: "12345",
      precioVenta: 2000000,
      precioRenta: 15000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 150
    },
    {
      tipo: "departamento",
      direccion: "Calle 2 #456",
      ciudad: "Monterrey",
      estado: "Nuevo León",
      codigoPostal: "67890",
      precioVenta: 1500000,
      precioRenta: 12000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 100
    },
    {
      tipo: "casa",
      direccion: "Calle 3 #789",
      ciudad: "Guadalajara",
      estado: "Jalisco",
      codigoPostal: "54321",
      precioVenta: 3000000,
      precioRenta: 20000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 200
    },
    {
      tipo: "departamento",
      direccion: "Calle 4 #1011",
      ciudad: "Puebla",
      estado: "Puebla",
      codigoPostal: "24680",
      precioVenta: 1000000,
      precioRenta: 8000,
      habitaciones: 1,
      banos: 1,
      metrosCuadrados: 70
    },
    {
      tipo: "casa",
      direccion: "Calle 5 #1213",
      ciudad: "Tijuana",
      estado: "Baja California",
      codigoPostal: "13579",
      precioVenta: 2500000,
      precioRenta: 18000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 170
    },
    {
      tipo: "departamento",
      direccion: "Calle 6 #1415",
      ciudad: "Querétaro",
      estado: "Querétaro",
      codigoPostal: "86420",
      precioVenta: 2000000,
      precioRenta: 15000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 90
    },
    {
      tipo: "casa",
      direccion: "Calle 7 #1617",
      ciudad: "Mérida",
      estado: "Yucatán",
      codigoPostal: "97531",
      precioVenta: 3500000,
      precioRenta: 25000,
      habitaciones: 5,
      banos: 4,
      metrosCuadrados: 250
    },
    {
      tipo: "departamento",
      direccion: "Calle 8 #1819",
      ciudad: "Cancún",
      estado: "Quintana Roo",
      codigoPostal: "77500",
      precioVenta: 1800000,
      precioRenta: 13000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 80
    },
    {
      tipo: "casa",
      direccion: "Calle 20 de Noviembre #345",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 2200000,
      precioRenta: 18000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 180
    },
    {
      tipo: "departamento",
      direccion: "Calle Juárez #567",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 1200000,
      precioRenta: 10000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 80
    },
    {
      tipo: "casa",
      direccion: "Calle Madero #891",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 3200000,
      precioRenta: 22000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 250
    },
    {
      tipo: "departamento",
      direccion: "Calle Aldama #234",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 1500000,
      precioRenta: 12000,
      habitaciones: 2,
      banos: 2,
      metrosCuadrados: 110
    },
    {
      tipo: "casa",
      direccion: "Calle Hidalgo #567",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 2800000,
      precioRenta: 20000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 200
    },
  ];
  constructor() { }


  getPropiedades(){
    return this.propiedades;
  }
}
