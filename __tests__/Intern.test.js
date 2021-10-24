const exp = require("constants")
const Intern = require('../lib/Intern');

test('tests creating an Intern',() =>{
    const intern = new Intern('Tyler', '894526541' ,'Temail@gmail','NDSU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual('Intern');
    expect(intern.school).toEqual(expect.any(String));
    
    console.table(intern)

    expect(intern.getName()).toEqual(expect.any(String));
    console.log(intern.getName())
    expect(intern.getEmail()).toEqual(expect.any(String));
    console.log(intern.getEmail())
    expect(intern.getId()).toEqual(expect.any(String));
    console.log(intern.getId())
    expect(intern.getRole()).toEqual(expect.any(String));
    console.log(intern.getRole())
    expect(intern.getSchool()).toEqual(expect.any(String));
    console.log(intern.getSchool())
})