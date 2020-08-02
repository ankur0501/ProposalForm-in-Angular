import { Pipe, PipeTransform } from '@angular/core';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(name: string, gender: string,maritalstatus:string): string {
    console.log("=============Calling pipe=========");
    console.log(maritalstatus);
    console.log(gender);
    if (gender == "M" || gender == "Male") {
      if(maritalstatus!="Single")
      {
        return "Mr. " + name;  
      }
      else{return "Master " + name}
    }
    else {
      if(maritalstatus!="Single")
      return "Mrs." + name;
      else
      return "Miss "+name;
    }
    return null;
  }


}

