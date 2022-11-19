function createGame(country1, hour, country2) {
    return `
    <li>
    <img src="./Bandeiras dos países/icon=${country1}.svg" alt="${country1}"/>
    <strong>${hour}</strong>
    <img src="./Bandeiras dos países/icon=${country2}.svg" alt="${country2}"/>
    </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
             </ul>
            </div>
    `
}

document.querySelector('#cards').innerHTML = 
            createCard("20/11", "domingo", 
                createGame('qatar', '13:00', 'ecuador')) +
            createCard("21/11", "segunda",
                createGame('england', '10:00', 'iran') +
                createGame('senegal', '13:00', 'netherlands') +
                createGame('united states', '16:00', 'wales')) + 
            createCard("22/11", "terça", 
                createGame('argentina', '07:00', 'saudi arabia') +
                createGame('denmark', '10:00', 'tunisia') + 
                createGame('mexico', '13:00', 'poland') + 
                createGame('france', '16:00', 'australia')) + 
            createCard("23/11", "quarta", 
                createGame('morocco', '07:00', 'croatia') + 
                createGame('germany', '13:00', 'japan') + 
                createGame('spain', '13:00', 'costa rica') +
                createGame('belgium', '13:00', 'canada')) 
            
