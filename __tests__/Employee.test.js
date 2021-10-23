const exp = require("constants")
const Employee = require('../lib/Employee');

test('tests creating an Employee',() =>{
    const employee = new Employee('Ed','015681','email@gmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');

    // expect(employee.getName()).toEqual(expect.any(String));
    // expect(employee.getEmail()).toEqual(expect.any(String));
    // expect(employee.getId()).toEqual(expect.any(Number));
    // expect(employee.getRole()).toEqual(expect('Employee'));
    console.table(employee)
})
