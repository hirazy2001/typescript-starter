import { Body, Controller, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { AppService } from "./app.service";
import { UserService } from "././service/user.service";

@Controller('/users')
export class UserController{

    constructor(private readonly appService: UserService) {}

    @Get()
    getAllUsers(){
         return this.appService.getAll();
    }

    @Post()
    createUser(@Body() body){

    }

    @Get()
    findOne(@Param('id', ValidationPipe) user){
        return user
    }
}