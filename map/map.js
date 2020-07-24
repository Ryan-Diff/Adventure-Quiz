import quests from '../data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (getUser.hp <= 0) {
    alert('GAME OVER');
    alert('You have this much gold: ' + user.gold);
    window.location('../index.html');
}
const section = document.querySelector('section');

let completedQuests = 0;

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        completedQuests++;
    }
}

if (completedQuests === quests.length) {
    alert('Fantastic! You win and have earned this much Gold: ' + user.gold);
}

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'strikeThrough';
        section.append(span);
    } else {
        const a = document.createElement('a');
        a.textContent = quest.title;
        a.href = '/quest/?id=' + quest.id;

        section.append(a);
    }
}
// for (let i = 0; i < quests.length; i++) {
//     const quest = quests[i];

//     const a = document.createElement('a');
//     a.textContent = quest.title;
//     a.href = '/quest/?id=' + quest.id;
    
//     section.append(a);
// }