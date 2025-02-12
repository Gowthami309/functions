// Question-1
function sayHello(){
    console.log("Hello World!")
}
sayHello

// Question-2
function displayWarning(){
    console.log("Warning! system overlopad!")
}
displayWarning()

// Question-3
function printStatus(){
    console.log("System Status: Active")
}
printStatus()

// Question-4
function initialize(){
    console.log("Initialization Complete.")
    shutDown()
}
function shutDown(){
    console.log("System Shutting Down...")
}
initialize()

// Question-5
function startProcess(){
    console.log("Process Started")
    endProcess()
}
function endProcess(){
console.log("Process Ended")
}
startProcess()

// Question-6
function greetUser(name) {
    console.log("Hello ,Gowthami");
}
greetUser("Gowthami");

// Question-7
function calculateSum(n1,n2){
console.log(n1+n2)
}
calculateSum(5,8)
calculateSum(9,10)

// Question-8
function countDown(){
    for (var i=5; i >= 1; i--){
    }
}
countDown()

// Question-9
function checkEvenodd(num){
    if(num %2 == 0){
        console.log("Even")
}
else{
    console.log("odd")
}
}
checkEvenodd(8)
checkEvenodd(5)

// Question-10
function beginSession(){
    console.log("Session Started.")
    endSession()
}
    function endSession(){
        console.log("Session Endded")
    }
    beginSession()





