import quests from '../data.js';

const section = document.querySelector('section');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    const a = document.createElement('a');
    a.textContent = quest.title;
    a.href = '/quest/?id=' + quest.id;
    
    section.append(a);
}