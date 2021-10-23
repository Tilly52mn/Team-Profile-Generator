const exp = require("constants")
const Manager = require('../lib/Manager');

test('tests creating an Employee',() =>{
    const Manager = new Manager('Ed', '0015681' ,'email@gmail');

    expect(Manager.name).toEqual(expect.any(String));
    expect(Manager.id).toEqual(expect.any(String));
    expect(Manager.email).toEqual(expect.any(String));
    expect(Manager.role).toEqual('Manager');
    expect(Manager.officeNumber).toEqual(expect.any(String));
    
    console.table(Manager)

    expect(Manager.getName()).toEqual(expect.any(String));
    console.log(Manager.getName())
    expect(Manager.getEmail()).toEqual(expect.any(String));
    console.log(Manager.getEmail())
    expect(Manager.getId()).toEqual(expect.any(String));
    console.log(Manager.getId())
    expect(Manager.getRole()).toEqual(expect.any(String));
    console.log(employee.getRole())
})