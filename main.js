let boom = new Audio ('./sound/boom.wav')
let clap = new Audio ('./sound/clap.wav')
let hihat = new Audio ('./sound/hihat.wav')
let kick = new Audio ('./sound/kick.wav')
let openhat = new Audio ('./sound/openhat.wav')
let ride = new Audio ('./sound/ride.wav')
let snare = new Audio ('./sound/snare.wav')
let tink = new Audio ('./sound/tink.wav')
let tom = new Audio ('./sound/tom.wav')

document.addEventListener('keypress', () =>{
    let key = event.key;
    if(key == "y"){boom.load(),boom.play()}
else if(key == "q"){clap.load(),clap.play()}
else if(key == "w"){hihat.load(),hihat.play()}
else if(key == "e"){kick.load(),kick.play()}
else if(key == "r"){openhat.load(),openhat.play()}
else if(key == "u"){ride.load(),ride.play()}
else if(key == "i"){snare.load(),snare.play()}
else if(key == "o"){tom.load(),tom.play()}
else if(key == "p"){tink.load(),tink.play()}
 });
 const a=()=>{boom.load(),boom.play()}
 const y=()=>{clap.load(),clap.play()};
 const q=()=>{hihat.load(),hihat.play()};
 const w=()=>{kick.load(),kick.play()};
 const e=()=>{openhat.load(),openhat.play()};
 const r=()=>{ride.load(),ride.play()};
 const u=()=>{snare.load(),snare.play()};
 const i=()=>{tom.load(),tom.play()};
 const o=()=>{tink.load(),tink.play()};

