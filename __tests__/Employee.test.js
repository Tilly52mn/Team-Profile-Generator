const exp = require("constants")

test('tests creating an Employee'),() =>{
    const employee = new employee('name','id','email');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getRole()).toEqual(expect('Employee'));
}
