const exp = require("constants")
const Manager = require('../lib/Manager');

test('tests creating an Manager',() =>{
    const manager = new Manager('Ed', '0015681' ,'email@gmail','B52');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual('Manager');
    expect(manager.officeNumber).toEqual(expect.any(String));
    
    console.table(manager)

    expect(manager.getName()).toEqual(expect.any(String));
    console.log(manager.getName())
    expect(manager.getEmail()).toEqual(expect.any(String));
    console.log(manager.getEmail())
    expect(manager.getId()).toEqual(expect.any(String));
    console.log(manager.getId())
    expect(manager.getRole()).toEqual(expect.any(String));
    console.log(manager.getRole())
    expect(manager.getofficeNumber()).toEqual(expect.any(String));
    console.log(manager.getofficeNumber())
})