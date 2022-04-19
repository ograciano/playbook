const UserService = require("../../app/services/userService");

describe("Test for User Service", () => {
    test("1) Create a New User using de UserService", () => {
        const user = UserService.create(1, "ograciano", "Oscar");
        expect(user.username).toBe("ograciano");
        expect(user.name).toBe("Oscar");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();

    })

    test("2) get all user data in a list", () => {
        const user = UserService.create(1, "ograciano", "Oscar");
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("ograciano");
        expect(userInfoList[2]).toBe("Oscar");
        expect(userInfoList[3]).toBe("Sin Bio");
    })

    test("3) Update UserName", () => {
        const user = UserService.create(1, "ograciano", "Oscar");
        UserService.updateUserUsername(user, 'OscarO');
        expect(user.username).toBe('OscarO');
    })

    test("3) Update UserName", () => {
        const user1 = UserService.create(1, "ograciano1", "Oscar");
        const user2 = UserService.create(1, "ograciano2", "Oscar");
        const user3 = UserService.create(1, "ograciano3", "Oscar");
        const usernames = UserService.getAllUsernames([user1,user2,user3]);
        expect(usernames).toContain('ograciano1');
        expect(usernames).toContain('ograciano2');
        expect(usernames).toContain('ograciano3');
    })
})