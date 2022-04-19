const Spiderman = require("../app/spiderman");


describe("Unit Test for Spiderman class", () => {
    test('1) Create a spiderman object', () => {
        // Aqui escibimos el codigo que queremos usar tal cual
        // Quiero poder instanciar un objeto spiderman con esta informacion
        const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield", 2, "Sony");

        // Validamos que este codigo funcione de la dorma esperada
        expect(andrewGarfield.name).toBe('Spiderman Sony');
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe('Andrew Garfield');
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe('Sony');
    });

    test('2) Use the method getInfo()', () => {
        const tomHolland = new Spiderman('Spiderman Marvel', 25, "Tom Holland", 5, "Marvel");
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    })
})