const exp = require("constants")
const Employee = require('../lib/Employee');

test('tests creating an Employee',() =>{
    const employee = new Employee('Ed', '0015681' ,'email@gmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');
    console.table(employee)

    expect(employee.getName()).toEqual(expect.any(String));
    console.log(employee.getName())
    expect(employee.getEmail()).toEqual(expect.any(String));
    console.log(employee.getEmail())
    expect(employee.getId()).toEqual(expect.any(String));
    console.log(employee.getId())
    expect(employee.getRole()).toEqual(expect.any(String));
    console.log(employee.getRole())
})
