function changeColor(){
    let hex_values=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    let hex_code='';
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random()*hex_values.length);
        hex_code+=hex_values[index];
    }
    document.getElementsByTagName('body')[0].style.backgroundColor=`#${hex_code}`;
    document.getElementById("hex-code").innerHTML=`${hex_code}`;

}