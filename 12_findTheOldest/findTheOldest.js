const findTheOldest = function(people) {
    let oldestPerson = people.reduce((oldest, current) => getAge(current) > getAge(oldest) ? current : oldest);
    return oldestPerson;
};

function getAge(person) {
    const CURRENT_DATE = new Date();
    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : CURRENT_DATE.getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
