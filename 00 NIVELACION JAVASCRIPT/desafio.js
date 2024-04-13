const users = [
    {
        name : 'santi',
        age : 32,
        series : [' casados con hijos', 'Breakin bad']
    },
    {
        name : 'julii',
        age : 22,
        series : ['badboy', 'yo y mi otro yo']
    },
]



users.forEach(
    (user) => {        
        user.age++, user.series.push('Gouky')
    })

    console.log(users);