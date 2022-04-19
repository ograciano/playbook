const User = require("../../app/models/user")


describe("Unit Test for User Class", () => {
    test('Create an User Object', () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const user = new User(1, "ograciano", "Oscar", "bio");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(user.id).toBe(1);
        expect(user.username).toBe('ograciano');
        expect(user.name).toBe('Oscar');
        expect(user.bio).toBe('bio');
        expect(user.dateCreated).not.toBeUndefined(); // verifica que el valor no sea indefinido
        expect(user.lastUpdated).not.toBeUndefined();
    });
    test('Add Getters', () => {
        const user = new User(1, "ograciano", "Oscar", "Bio");
        expect(user.getUsername).toBe('ograciano');
        expect(user.getBio).toBe('Bio');
        expect(user.getDateCreated).not.toBeUndefined(); // verifica que el valor no sea indefinido
        expect(user.getLastUpdated).not.toBeUndefined();
    });
    test('Add Setters', () => {
        const user = new User(1, "ograciano", "Oscar", "Bio");
        expect(user.setUsername='osimental').toBe('osimental');
        expect(user.setBio='bio').toBe('bio');
    });
})