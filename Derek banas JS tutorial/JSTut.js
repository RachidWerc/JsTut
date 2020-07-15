console.log("ayy lmao");

function calcPI(iterations){
    const piVal = 3.14159;
    let pi=0, divisor =1;
    
    for(i = 0; i <= iterations; i++){
        pi = pi + (4/divisor) -(4/(divisor+2));
        divisor = divisor+4;
    }

    document.getElementById("output1").value=pi.toFixed(10);

}

let fibList=[];

function getFibList(howMany){
    
    for(i=0; i< howMany; i++){
        fibList[i]=fib(i);
    }
    fibList.shift();
    document.getElementById("output1").value=fibList.join(", ");

}

function fib(whichNum){
    let num1=1, num2=0, temp,
    i = 0;

    while(i<whichNum){
        temp=num1;
        num1 = num1+num2;
        num2 = temp;
        i++;
    }
    return num2;
}

let mLText = "Mmhhhh my dear ~ nta ch7al mlih, you sat me down to hear some words of tmenyik \n 1. Give a no9ch a ~ and you ~ him for a day ~ a PD to ~ and he'll ~ forever \n 2. He who ~ at the time of tbentyit can ~ again \n 3. Ya kho daymen elbess ~ ~ in case you're in a ~ \n 4. Dnn't use your ~ to wipe your ~ Always have a clean ~ with you";

// Convert string into an array 
let mLArray = mLText.split(" ");

// Create array for user input
let inputArray = [];

function madLibGenerator(){
    createInputArray();

    if(checkForMissingInput()){
        document.getElementById
        ("output1").value= "Wesh ya chkoupi tel3abha marag validi ga3 les valeurs aya kwd";
    } else {
        createMLSentence();
    }
}

function createInputArray(){
    for(i=0; i <= 13; i++){
        inputArray[i]=
        document.getElementById("i" + i)
        .value;
    }
}

function checkForMissingInput(){
    let defaultArrayVals = ["<Person>", "<Noun>", "<Verb>", 
    "<Adjective>","<Plural Verb>", "<Body Part>", "<Event>"]
    ;

    for(i=0; i<inputArray.length;i++){

        if(defaultArrayVals.indexOf(
        inputArray[i]) > -1){
            return true;
        }

        return false;
    }
}

function createMLSentence(){
    let arrIndex=0;
    for(i=0;i<mLArray.length; i++){
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray
        [arrIndex];
        arrIndex++;
    }

    document.getElementById("output1")
    .value = mLArray.join(" ");
}