class Timer {
    constructor(id){
        this.hook = document.getElementById(id)
        this.minutes = 0;
        this.seconds = 0;
        this.mseconds = 0;
        this.counter = 0;
        this.timeIsRunning = false;
        this.startBtn = document.createElement("button");
        this.stopBtn = document.createElement("button");
        this.cancelBtn = document.createElement("button");
        this.lapBtn = document.createElement("button");
        this.digits = document.createElement("div");
        this.btns = document.createElement("div");
        this.lapHolder = document.createElement("div");
        this.timer;
        this.laps = [];
    }
    render(){
        //Display group

        this.digits.className = "header"
        this.digits.innerHTML = `<span class="min">${String(this.minutes).padStart(2,"0")}</span>:
                            <span class="sec">${String(this.seconds).padStart(2,"0")}</span>:
                            <span class="msec">0</span>`
        this.hook.append(this.digits)

        //Button group

        this.btns = document.createElement("div");
        this.startBtn = document.createElement("button");
        this.stopBtn = document.createElement("button");
        this.cancelBtn = document.createElement("button");
        this.lapBtn = document.createElement("button");
        this.btns.classList.add("btn-group");
    
        this.startBtn.innerText = "START";
        this.startBtn.addEventListener("click",this.update.bind(this));
        this.btns.append(this.startBtn);

        this.stopBtn.innerText = "PAUSE"
        this.stopBtn.addEventListener("click",this.pause.bind(this));
        this.stopBtn.disabled = true;
        this.btns.append(this.stopBtn);

        this.cancelBtn.innerText = "STOP";
        this.cancelBtn.addEventListener("click",this.cancel.bind(this));
        this.cancelBtn.disabled = true;
        this.btns.append(this.cancelBtn);

        this.lapBtn.innerText = "LAP";
        this.lapBtn.addEventListener("click",this.createLap.bind(this));
        this.lapBtn.disabled = true;
        this.btns.append(this.lapBtn);

        this.hook.append(this.btns);
        
        //Laps

        this.lapHolder = document.createElement("div");
        this.lapHolder.className = "footer";
        this.hook.append(this.lapHolder)


        //Save to local storage

        
    }
    update(){
        this.startBtn.disabled = true;
        this.lapBtn.disabled = false;
        this.cancelBtn.disabled = false;
        this.timeIsRunning = true;
        this.stopBtn.disabled = this.timeIsRunning ? false : true;
        this.timer = setInterval(()=>{
            this.counter++;
            this.mseconds++;
            if(this.counter % 10 === 0){
                this.mseconds = 0;
                this.seconds++;
            }
            if(this.counter % 600 === 0){
                this.seconds = 0;
                this.minutes++;
            }
            this.hook.querySelector(".msec").innerText = String(this.mseconds);
            this.hook.querySelector(".sec").innerText = String(this.seconds).padStart(2,"0");
            this.hook.querySelector(".min").innerText = String(this.minutes).padStart(2,"0");
        },100)
    }
    pause(){
        clearInterval(this.timer)
        this.startBtn.disabled = false;
        this.timeIsRunning = false;
        this.lapBtn.disabled = this.timeIsRunning ? false : true;
        this.stopBtn.disabled = this.timeIsRunning ? false : true;
    }
    cancel(){
        clearInterval(this.timer)
        this.minutes = 0;
        this.seconds = 0;
        this.mseconds = 0;
        this.counter = 0;
        this.hook.querySelector(".msec").innerText = "0";
        this.hook.querySelector(".sec").innerText = "00";
        this.hook.querySelector(".min").innerText = "00";
        this.lapHolder.innerHTML = "";
        this.stopBtn.disabled = true;
        this.cancelBtn.disabled = true;
        this.timeIsRunning = false;
        this.lapBtn.disabled = this.timeIsRunning ? false : true;
        this.startBtn.disabled = this.timeIsRunning ? true : false;
        this.laps = [];
    }
    createLap(){
        this.laps.push(new Lap(this.minutes, this.seconds, this.mseconds).render())
        this.showLap()
    }
    showLap(){
        for(let lap of this.laps){
            this.hook.querySelector(".footer").append(lap);
        }
    }
}

