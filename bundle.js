
const currectNumber = 251;
let arrNums = [0 , 0 , 0];
const msg = ["Congratulations , You Are WIN" , "Wrong Keys"];


document.getElementById('first').addEventListener("click" , ()=>{
    if(arrNums[0] > 8){
        arrNums[0] = 0;
        document.getElementById('first').value = arrNums[0];
    }else{
        arrNums[0]++;
        document.getElementById('first').value = arrNums[0];
        console.log(arrNums);
    }
})
document.getElementById('second').addEventListener("click" , ()=>{
    if(arrNums[1] > 8){
        arrNums[1] = 0;
        document.getElementById('second').value = arrNums[1];
    }else{
        arrNums[1]++;
        document.getElementById('second').value = arrNums[1];
        console.log(arrNums);
    }
})
document.getElementById('third').addEventListener("click" , ()=>{
    if(arrNums[2] > 8){
        arrNums[2] = 0;
        document.getElementById('third').value = arrNums[2];
    }else{
        arrNums[2]++;
        document.getElementById('third').value = arrNums[2];
        console.log(arrNums);
    }
})
document.getElementById('enter').addEventListener("click" , ()=>{
    if(arrNums[0] === 2 && arrNums[1] === 5 && arrNums[2] === 1){
        document.getElementById("MSG").innerText = msg[0];
        document.getElementById("MSG").style.backgroundColor = 'mediumseagreen';
        document.getElementById("MSG").style.display = 'block';
        document.getElementById("MSG").style.animationPlayState = 'running';
        document.getElementById("MSG").style.animationName = 'greenLighter';
    }else{
        document.getElementById("MSG").innerText = msg[1];
        document.getElementById("MSG").style.backgroundColor = 'tomato';
        document.getElementById("MSG").style.display = 'block';
        document.getElementById("MSG").style.animationPlayState = 'running';
        document.getElementById("MSG").style.animationName = 'redLighter';
        setTimeout(()=> {
            document.getElementById("MSG").style.display = 'none';
        } , 1500)
    }
})