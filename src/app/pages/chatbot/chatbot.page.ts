import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { PropiedadesService } from 'src/app/services/propiedades.service';

interface Propiedad {
  id: number;
  nombre: string;
  intereses: string[];
  precioVenta: number;
  precioRenta: number;
}
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  
  arrayMessages:any[]=[];
  message: string="";
  SpinnerMsg:boolean = false;
  id:number=1;
  isRecording = false;
  public isUserSpeaking: boolean = false;
  recordedTime:any;
  prompt:string='';

  propiedades: Propiedad[] = [
    {
      id: 1,
      nombre: 'Casa en la playa',
      intereses: ['playa', 'vacaciones', 'relajación'],
      precioVenta: 2000000,
      precioRenta: 3500,
    },
    {
      id: 2,
      nombre: 'Apartamento en la ciudad',
      intereses: ['ciudad', 'trabajo', 'entretenimiento'],
      precioVenta: 2000000,
      precioRenta: 15000,
    },
    {
      id: 3,
      nombre: 'Casa en la montaña',
      intereses: ['montaña', 'naturaleza', 'aventura'],
      precioVenta: 2000000,
      precioRenta: 15000,
    },
  ];

  interesesUsuario: string[] = ['playa', 'relajación'];

  recomendaciones: Propiedad[] = [];


  propiedadesArray:any[]=[];
  constructor(public propApi:PropiedadesService) { 
    
  }

  obtenerRecomendaciones() {
    this.propiedades.forEach((propiedad) => {
      const interesesEnComun = propiedad.intereses.filter((interes) =>
        this.interesesUsuario.includes(interes)
      );
      if (interesesEnComun.length > 0) {
        this.recomendaciones.push(propiedad);
      }
    });
  }


  ngOnInit() {
    this.propiedadesArray=this.propApi.getPropiedades()
  }

  async send() {
    const configuration = new Configuration({
      apiKey: "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"
    });
    const openai = new OpenAIApi(configuration);
    
    if (this.message != "") {
      if(this.message.includes('intereses')){
        let msg=this.message;
        this.message="";
        
        this.arrayMessages.push({ message: msg, id: 1, create: new Date() });
        let msgrec = "";
        this.obtenerRecomendaciones();
        if(this.recomendaciones.length>0){
          this.recomendaciones.forEach(item=>{
            msgrec+="Encontre algo para ti es una "+item.nombre+" perfecta para un fin de semana su precio es de "+item.precioRenta;
          })
        }else{
            msgrec="No encontre propiedades de acuerdo a tus intereses, en cuanto tengamos te notificaremos.";
        }
        this.arrayMessages.push({ message: "En un momento te muestro algunas opciones", id: 2, create: new Date() });
        this.arrayMessages.push({ message: msgrec, id: 2, create: new Date() });
        msg = "";

      }else{
        this.prompt=`Compórtate como un bot asistente de bienes raices, tu funcion es:
        - Buscar propiedades en venta o renta en una zona especifica, proporcionando informacion sobre el precio, tamaño etc.
        -Respuesta a preguntas frecuentes puedes proporcionar respuestas automaticas a preguntas frecuentes sobre bienes raices, terminos y condiciones de un contrato, requisitos para obtener una hipoteca etc.
       
       El siguiente json es un arreglo de objetos de propiedades que podras recomendar en base a lo que pide el usuario.
       ${JSON.stringify(this.propiedadesArray)}
       
       
       
       Tu: Hola, puedes recomendarme casas en renta en la piedad?
       Bot:Hola! Claro, estaré encantado de ayudarte. Según los datos proporcionados anteriormente, hay una casa en La Piedad que podría interesarte:

       Dirección: Calle 20 de Noviembre #345
       Ciudad: La Piedad
       `
        let msg=this.message;
        this.message="";
        this.arrayMessages.push({ message: msg, id: 1, create: new Date() });
        this.prompt+="\nTu: "+msg;
        msg = "";
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: this.prompt,
          temperature:0,
          max_tokens:500,
          top_p:1.0,
          frequency_penalty: 1,
          presence_penalty: 1,
          
        });
        this.prompt+="\nBot: "+completion.data.choices[0].text;
        console.log(completion.data.choices[0].text)
        let bot:string =completion.data.choices[0].text??"";
        bot=bot.split("Bot:")[1];
       
        this.arrayMessages.push({ message: bot, id: 2, create: new Date() });
      
      }
      
    }
    
  }


  startRecording(){

  }
  stopRecording(){

  }

}
