test('tests creating a Manager'),() =>{
    const employee = new employee('name','id','email','officeNumber');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
}