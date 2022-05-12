import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    
    getAll(){
        return [{
            "Pika": "Alo"
        }]
    }

}