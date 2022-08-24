// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(find, found){
    return find.filter(
        (couldMatch) => couldMatch.toLowerCase() === found.toLowerCase()
    );
}

function fuzzyMatch(seek, sought) {
    return seek.filter( (possibleMatch) => possibleMatch.toLowerCase().indexOf(sought.toLowerCase()) === 0

    );
}
function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
}