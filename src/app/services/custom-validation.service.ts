import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  get HumanName() {
    return "^[a-zA-Z-.'\\s]+$"; // only alphanumic and space . '
    // return "^[a-zA-Z0-9-.'\\s]*$";
   // return "^[a-zA-Z]+[\-'\s]?[a-zA-Z0-9]+$";
  }
  get Email() {
    return '^.+@.+\\..+$'; // contains @ and . with text surrounding
  }
  get Phone() {
    //return '^[7-9][0-9]{9}$'; // max 20 chars, numbers and -
    return '^[1-9][0-9]{9}'; //accept only ten digits
  } 
  get Pincode() {
    return '^[1-9][0-9][0-9][0-9][0-9][0-9]$'; //accept pincode with 6 digits with space after 3
  } 
  get Date() {
    return '^[0-9]{2}[- /.][0-9]{2}[- /.][0-9]{4}$'; // mm-dd-yyyy, all numbers
  }
  get Address() {
    return "^[a-zA-Z0-9-.'\\s]*$"; // only alphanumic and space . '
    //
   // return "^[a-zA-Z]+[\-'\s]?[a-zA-Z0-9]+$";
  }
  get NumbersOnly() {
    return "^[0-9]*$"; // only numbers . '
    // return "^[a-zA-Z0-9-.'\\s]*$";
   // return "^[a-zA-Z]+[\-'\s]?[a-zA-Z0-9]+$";
  }

  get AlphaNumbersOnly() {
    return "^[a-zA-Z0-9-.'\\s]*$"; // only alphanumic and space . '
    // return "^[a-zA-Z0-9-.'\\s]*$";
   // return "^[a-zA-Z]+[\-'\s]?[a-zA-Z0-9]+$";
  }

  get DecimalNumber() {
    return "^(\d*\.)?\d+$"; // only Decimal Number'
    // return "^[a-zA-Z0-9-.'\\s]*$";
   // return "^[a-zA-Z]+[\-'\s]?[a-zA-Z0-9]+$";
  }

  
  

}
