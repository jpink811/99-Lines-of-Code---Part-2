document.addEventListener('DOMContentLoaded', function () {
    let name = ['Ian', 'Chris', 'Jason', 'Demarcus', 'Adam'];

    singBtn.addEventListener('click', function () {
        let singBtn = document.getElementById('singBtn');
        for (let i = 0; i <= 4; i++) {

            let friendDiv = document.createElement('div');
            friendDiv.className = 'friend';
            
            let friendHeader = document.createElement('h3');
            friendDiv.appendChild(friendHeader);
            document.body.appendChild(friendDiv);

            let friendName = document.createTextNode(name[i] + ':');
            friendHeader.appendChild(friendName);

            for (let j = 99; j > 1; j--) {
                let songLine = document.createElement('p');
                let songLyrics = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; ' + name[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
                songLine.appendChild(songLyrics);
                friendDiv.appendChild(songLine);
            }

            if (j = 1) {
                let songLine = document.createElement('p');
                let songLyrics = document.createTextNode(j + ' line of code in the file, ' + j + ' line of code; ' + name[i] + ' strikes one out, clears it all out, no more lines of code in the file');
                songLine.appendChild(songLyrics);
                friendDiv.appendChild(songLine);
            }
        }
    })
})