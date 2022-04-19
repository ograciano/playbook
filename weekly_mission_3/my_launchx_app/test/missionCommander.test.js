const MissionCommander = require('./../app/missionCommander')
describe("Esto es una suite de pruebas", () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe('Woopa')
    })
})