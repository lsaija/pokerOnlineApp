import { Pipe, PipeTransform } from '@angular/core';
import { Ruolo } from 'src/app/model/ruolo';

@Pipe({
  name: 'decodificaRuolo'
})
export class DecodificaRuoloPipe implements PipeTransform {
  private admin:Ruolo ={id:1,descrizione:"ROLE_ADMIN",codice:"ROLE_ADMIN"};
  private player:Ruolo={id:2,descrizione:"ROLE_CLASSIC_PLAYER",codice:'ROLE_CLASSIC_PLAYER'};
  private special:Ruolo={id:3,descrizione:"ROLE_SPECIAL_PLAYER",codice:'ROLE_CLASSIC_PLAYER'};
     
  /*transform(ruolo: String[]): string[]{
    let result:string[]=[] ;
    for(let i of ruolo){
        if( i == 'ROLE_ADMIN'){ 
             result.push('Admin');
        }else if(i== 'ROLE_CLASSIC_PLAYER'){
          result.push('Player');
        }else if( i=='ROLE_SPECIAL_PLAYER'){
          result.push('SpecialPlayer');
        }else{
          result.push('nuovo');
        }
      }
      return result;
    }*/

    transform(ruolo: number[]): string[]{
      let result:string[]=[];
      for(let i of ruolo){
          if( i == 0){ 
               result.push(this.admin.codice!);
          }else if(i==1){
            result.push(this.player.codice!);
          }else if( i==2){
            result.push(this.special.codice!);
          }else{
            result.push('nuovo');
          }
        }
        return result;
     
     
  }

}
