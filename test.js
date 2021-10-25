const team = [
    {
      name: 'asdf',
      id: 'asdf',
      email: 'asdf',
      role: 'Manager',
      officeNumber: 'asdf',
      confirmAddEmployee: true
    },
    {
      name: 'asdf',
      id: 'asdf',
      email: 'asdf',
      role: 'Engineer',
      Github: 'asdf',
      confirmAddEmployee: true
    },
    {
      name: 'asdf',
      id: 'asdf',
      email: 'asdf',
      role: 'Intern',
      school: 'asdf',
      confirmAddEmployee: false
    }
  ]

  function isManager(team) {
      const Managers = team.filter(team =>team.role==="Manager")
      console.log(Managers)
  }

  function isEngineer(team) {
    const Engineers = team.filter(team =>team.role==="Engineer")
    console.log(Engineers)
}

function isIntern(team) {
  const Interns = team.filter(team =>team.role==="Intern")
  console.log(Interns)
}
function filterTeam(team) {
  isManager(team)
  isEngineer(team)
  isIntern(team)
}
filterTeam(team)