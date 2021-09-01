const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
//  এখানে data is an object . but 5 person's details is in 5 arrays.we have to get each person by for of loop
const displayBuddies = (data) => {
    const buddies = data.results
    // buddiesDiv is a parent div . i have to appened new child to this 
    const buddiesDiv = document.getElementById('buddies')
    // for of for each person 
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} ${buddy.email}`;
        buddiesDiv.appendChild(p);
        console.log(p)
    }
}
// object can be in an array , and arrya can be in an object.....nested object