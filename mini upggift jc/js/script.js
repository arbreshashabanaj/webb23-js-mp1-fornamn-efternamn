document.addEventListener("DOMContentLoaded", function()  {
    for (let i = 1; i < 6; i++) {
        const h2Element = document.createElement('h2');
        document.body.appendChild(h2Element);
        h2Element.innerText = "rad" + i;
   
       h2Element.style.backgroundColor = `hsl(${90 + i * 20}, 70%, 70%)`;
       console.log(90 + i * 20);
       h2Element.style.fontSize = i * 5 + "px";
       h2Element.style.textAlign = "center";
    }
   
   
    const container = document.createElement('div');
    document.body.append(container);
   
    container.style.border = '1px solid black';
    container.style.padding = '5rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'space-around';
   
    for (let i = 0; i <3; i++) {
       const smallContainer = document.createElement('div');
       container.append(smallContainer);
       smallContainer.style.backgroundColor = "violet";
       smallContainer.style.padding = '1rem';
       smallContainer.style.width ='5rem';
    }
   
    if (i == 0){
       for(let i = 0; i <10; i++){
           const h1 = document.createElement('h1');
           smallContainer.append(h1);
   
           h1.innerText = i;
           
   
           h1.style.backgroundColor = `HSL(0, 0%, 100%`;
           h1.style.margin = '0px';
           if(i%2==0){
               h1.style.backgroundColor = `HSL(0, 0%, 0%)`;
               h1.style.color = `HSL(0, 0%, 100%`;
           }
           if (i == 4){
               h1.style.backgroundColor = null;
           }
       }
   
    } else if(i == 1){
       for (let i = 9; i >=0; i--) {
           const h1 = document.createElement('h1');
           smallContainer,append(h1);
           h1.style.textAlign = 'center';
           h1.style.backgroundColor = `HSL(0, 0%, 100%`;
   
           h1.innerText = i;
           h1.style.margin = '0px';
           if(i%2==0){
               h1.style.backgroundColor = `HSL(0, 0%, 0%)`;
               h1.style.color = `HSL(0, 0%, 100% `;
   
           }
           if(i == 8){
   
           h1.style.backgroundColor = null;
   
           }
       }
   
   }else {
       const numbers = [ "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
       for (let i = 0; i <10; i++){
           const h1 = document.createElement('h1');
           smallContainer.append(h1);
           h1.style.textAlign = 'right';
           h1.style.backgroundColor = `HSL(0, 0%, 100%`;
   
           h1.innerText =numbers[i];
           h1.style.margin = '0px';
           if (i%2==0){
               h1.style.backgroundColor = `HSL(0, 0%, 0%)`;
               h1.style.color = `HSL(0, 0%, 100%`;
   
           }if (i == 5) {
               h1.style.backgroundColor = null;     
           }    
       }
   }
   });
   