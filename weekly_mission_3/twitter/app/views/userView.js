const UserService = require('../services/userService')

class UserView {
    static createUser(payload = {}) {
        if(payload == null){
            return { error: 'payload no existe'}
        }

        if(payload.username == null || payload.name == null || payload.id == null){
            return {error: 'Necesitan tener un valor valido'}
        }
        
        const newUser = UserService.create(payload.id,payload.username,payload.name);

        return newUser;
    }
}

module.exports = UserView;