const User = require('../models/user');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin Bio");
    }

    static getInfo(user = User) {
        let userList = [];
        userList.push(user.id);
        userList.push(user.username);
        userList.push(user.name);
        userList.push(user.bio);
        return userList
    }

    static updateUserUsername(user = User, newUsername) {
        user.setUsername = newUsername;
    }

    static getAllUsernames(users = []) {
        let usernames = []
        users.forEach(user => {
            usernames.push(user.username);
        })
        return usernames;
    }
}

module.exports = UserService;