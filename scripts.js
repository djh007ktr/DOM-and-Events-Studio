// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
  
    const takeoffBtn = document.getElementById('takeoff');
    const landBtn = document.getElementById('landing');
    const abortBtn = document.getElementById('missionAbort');
    const upBtn = document.getElementById('up');
    const downBtn = document.getElementById('down');
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');


    const flightStatusDisp = document.getElementById('flightStatus');
    const shuttleFlightScreen = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const shuttleIcon = document.getElementById('rocket');
        const shuttleStyleProps = window.getComputedStyle(shuttleIcon);
            let shuttleLeftVal = parseFloat(shuttleStyleProps.left);
            let shuttleBottomVal = parseInt(shuttleStyleProps.bottom);
    
    takeoffBtn.addEventListener('click', () => {

        let confirmTakeoff = confirm('Confirm that the shuttle is ready for takeoff.');

        if (confirmTakeoff) {
            flightStatusDisp.innerHTML = 'Shuttle in flight.';
            shuttleFlightScreen.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10000';
        }
        
    });

    landBtn.addEventListener('click', () => {

        alert('The shuttle is landing. Lanidng gear engaged.');
        flightStatusDisp.innerHTML = 'The shuttle has landed';
        shuttleFlightScreen.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        shuttleIcon.style.left = `241.5px`;
        shuttleIcon.style.bottom = '0px';
    });

    abortBtn.addEventListener('click', () => {

       let confirmAbort = confirm('Confirm that you want to abort the mission.');

       if (confirmAbort) {
        flightStatusDisp.innerHTML = 'Mission aborted.';
        shuttleFlightScreen.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        shuttleIcon.style.left = `241.5px`;
        shuttleIcon.style.bottom = '0px';
       }
    });

    upBtn.addEventListener('click', () => {

        if (shuttleBottomVal < 250 && shuttleIcon.style.bottom !== '250px') {
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            shuttleIcon.style.bottom = (parseInt(spaceShuttleHeight.innerHTML) / 1000) + 'px';
        }

        
    });

    downBtn.addEventListener('click', () => {

        if (parseInt(shuttleIcon.style.bottom) > 0) {
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
            shuttleIcon.style.bottom = (parseInt(spaceShuttleHeight.innerHTML) / 1000) + 'px';
        }

        
    });

    leftBtn.addEventListener('click', () => {

        if (shuttleLeftVal >= 1.5) {
            shuttleLeftVal -= 10;
            shuttleIcon.style.left = `${shuttleLeftVal}px`;
        }

        
    });

    rightBtn.addEventListener('click', () => {

        if (shuttleLeftVal < 501.5) {
            shuttleLeftVal += 10;
            shuttleIcon.style.left = `${shuttleLeftVal}px`;
        }

        
    });

})