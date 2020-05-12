let name = 'Sydni Williams';

let career = 'Full Stack Developer';

let description = 'I am a dedicated, creative and detail-oriented leader, focused on seeing results and fostering collaborative and equitable environments.'

let interests = ['Coding', 'Sewing', 'Socializing', 'Beauty Tutorials'];

let prevWork = [
    {
        company: 'Charly Nicole',
        title: 'Owner',
        duties: 'Making it work'
    },
    {
        company: 'UAB',
        title: 'Regional Admissions Counselor',
        duties: 'Recruiting in Midwest',
    },
    {
        company: 'Wells Fargo',
        title: 'Home Preservation Specialist',
        duties: 'Saving homes from foreclosure',
    }
];

let skills = [
    {
        type: 'Communication',
        isCool: false,
    }, {
        type: 'Web Development',
        isCool: true,
    }, {
        type: 'Socializing',
        isCool: true,
    }, {
        type: 'Time Management',
        isCool: false,
    }, {
        type: 'Leadership',
        isCool: false,
    }
];

console.log('Name: ' + name.toUpperCase());
console.log('Career: ' + career);
console.log('Description: ' + description);
console.log('\n');

console.log('My Interests:')
// for loop
for (let i = 0; i < interests.length; i++) {
    console.log('💎' + interests[i]);
}
console.log('\n');

console.log('My Previous Experience:');
//logged to console individually per instructions
displayPosition(prevWork[0].company, prevWork[0].title, prevWork[0].duties);
displayPosition(prevWork[1].company, prevWork[1].title, prevWork[1].duties);
displayPosition(prevWork[2].company, prevWork[2].title, prevWork[2].duties);
console.log('\n');

console.log('My Skills:');
//forEach loop
for (let mySkills of skills) {
    console.log(displaySkills(mySkills.type, mySkills.isCool));
}

function displayPosition(company, title, duties) {

    console.log('💎' + title + ' at ' + company + ' - ' + duties + '.')
};

function displaySkills(type, isCool) {
    if (isCool == 1) {
        return ('💎BAM: ' + type);
    } else {
        return ('💎' + type);
    }
}
