const exp = require("constants")
const Employee = require('../lib/Employee');

test('tests creating an Employee',() =>{
    const employee = new Employee('Ed', 0015681 ,'email@gmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');

    expect(employee.getName()).toEqual(expect.any(String));
    console.log(employee.getName())
    expect(employee.getEmail()).toEqual(expect.any(String));
    console.log(employee.getEmail())
    expect(employee.getId()).toEqual(expect.any(Number));
    console.log(employee.getId())
    expect(employee.getRole()).toEqual(expect.any(String));
    console.log(employee.getRole())
    console.table(employee)
})
