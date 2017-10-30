import { Injectable } from '@angular/core';



@Injectable()
export class ConfigProvider {

  private config = {
    slide: false,
    nome: ""
  };

  constructor() {

  }

  getConfigData(){
    return localStorage.getItem("config");
  }

  setConfigData(slide?: boolean, nome?: string){
    let config = {
      slide: false,
      nome: ""
    };

    if(slide){
      this.config.slide = slide;
    }

    if(nome){
      this.config.nome = nome;
    }

    localStorage.setItem("config", JSON.stringify(this.config));
  }

}
