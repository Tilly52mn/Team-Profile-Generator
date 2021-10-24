const exp = require("constants")
const Engineer = require('../lib/Engineer');

test('tests creating an Engineer',() =>{
    const engineer = new Engineer('Adam', '125498465' ,'emailA@gmail','Tilly52mn');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual('Engineer');
    expect(engineer.Github).toEqual(expect.any(String));
    
    console.table(engineer)

    expect(engineer.getName()).toEqual(expect.any(String));
    console.log(engineer.getName())
    expect(engineer.getEmail()).toEqual(expect.any(String));
    console.log(engineer.getEmail())
    expect(engineer.getId()).toEqual(expect.any(String));
    console.log(engineer.getId())
    expect(engineer.getRole()).toEqual(expect.any(String));
    console.log(engineer.getRole())
    expect(engineer.getGithub()).toEqual(expect.any(String));
    console.log(engineer.getGithub())
})