let minutes = 0;
let seconds = 0;
let mseconds = 0;
let counter = 0;
let timeIsRunning = false;
let timer,
    hook,
    startBtn,
    btns,
    stopBtn,
    cancelBtn,
    lapBtn;
class Timer {
    constructor(id){
        this.id = id;
    }
    render(){
        hook = document.getElementById(this.id);
        btns = document.createElement("div");
        startBtn = document.createElement("button");
        stopBtn = document.createElement("button");
        cancelBtn = document.createElement("button");
        lapBtn = document.createElement("button");
        btns.classList.add("btn-group")
        hook.appendChild(btns)

        startBtn.innerText = "START"
        startBtn.addEventListener("click",this.update)
        btns.appendChild(startBtn)

        stopBtn.innerText = "PAUSE"
        stopBtn.addEventListener("click",this.pause)
        stopBtn.disabled = true;
        btns.appendChild(stopBtn)

        cancelBtn.innerText = "STOP"
        cancelBtn.addEventListener("click",this.cancel)
        cancelBtn.disabled = true;
        btns.appendChild(cancelBtn)

        lapBtn.innerText = "LAP"
        lapBtn.addEventListener("click",this.lap)
        lapBtn.disabled = true;
        btns.appendChild(lapBtn)
    }
    
    update(){
        startBtn.disabled = true;
        lapBtn.disabled = false;
        cancelBtn.disabled = false;
        timeIsRunning = true;
        stopBtn.disabled = timeIsRunning ? false : true
        timer = setInterval(()=>{
            counter++;
            mseconds++;
            if(counter % 10 === 0){
                mseconds = 0;
                seconds++;
            }
            if(counter % 600 === 0){
                seconds = 0;
                minutes++
            }
            msec.innerText = String(mseconds)
            sec.innerText = String(seconds).padStart(2,"0")
            min.innerText = String(minutes).padStart(2,"0")

        },100)
    }
    pause(){
        clearInterval(timer)
        startBtn.disabled = false;
        timeIsRunning = false;
        lapBtn.disabled = timeIsRunning ? false : true;
        stopBtn.disabled = timeIsRunning ? false : true;
    }
    cancel(){
        clearInterval(timer)
        minutes = 0;
        seconds = 0;
        mseconds = 0;
        counter = 0;
        msec.innerText = "0";
        sec.innerText = "00";
        min.innerText = "00";
        laps.innerHTML = "";
        stopBtn.disabled = true;
        cancelBtn.disabled = true;
        timeIsRunning = false;
        lapBtn.disabled = timeIsRunning ? false : true;
        startBtn.disabled = timeIsRunning ? true : false;
    }
    lap(){
        const lap = createLap(min.innerText, sec.innerText, msec.innerText)
        laps.appendChild(lap)
        
    }
}

new Timer("stopWatch").render()
