class Lap{
    constructor(min,sec,msec){
        this.min = min;
        this.sec = sec;
        this.msec = msec;
    }
    render(){
        const lap = document.createElement("p");
        lap.addEventListener("click", e => e.target.remove())
        lap.innerText = `${this.min}:${this.sec}:${this.msec}`;
        return lap
    }
}
