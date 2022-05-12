import {User} from './model/user'

function add(a: number, b: number, user: User){
    const {id, name, address, age} = user  
    return a + b
}
