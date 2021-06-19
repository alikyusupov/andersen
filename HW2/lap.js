function createLap(mins, secs, msecs){
    const lap = document.createElement("p");
    lap.innerText = `${mins}:${secs}:${msecs}`;
    return lap
}