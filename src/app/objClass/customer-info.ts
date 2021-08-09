import { BookCart } from './book-cart';
import { Timestamp } from 'rxjs';
import { CustomerPyment } from './customer-pyment';
export class CustomerInfo {

    cId: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNo: number;
    address: string;
    city: string;
    pin: string;
    orderDate:Timestamp<any>;
    
    payment=new CustomerPyment();
    
      
    
        
    
    product: BookCart[];
}
