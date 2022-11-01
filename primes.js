outputP = document.getElementById('paragraph')
outputP.innerHTML = ''
btnP = document.getElementById('nexter')
infoSpan = document.getElementById('info')
pageSpan = document.getElementById('page')
insert = document.getElementById('insert')


// para = document.createElement('p')
// para.innerHTML = String(window.screen.width) + 'x' + String(window.screen.height)
// document.body.appendChild(para)

function prime_check(self){
    numero = parseInt(self)
    //outputP.innerHTML = 'Loading...'

    k = Math.ceil(numero/2)+1
    // console.log(k, 0)

    for(let i=2; i<k; i++){
        // console.log(i, k)
        if(numero%i == 0){

            return('.')
            break
        }

        else{
            k0 = parseInt(numero/i)
            // console.log(k0, 1)
            if(i>=k0){
                // console.log('fine', i,)
                //outputP.innerHTML += String(self) + ' - '
                //console.log(self)
                counter+=1
                lista.push(self)
                //return(self)
                
                break
            }
            else {
                // console.log(i, 2)
            }
        }


}
}

lista = [2]
bound = parseInt(prompt('Insert a positive integer: '))
var counter = 1

document.title = 'Primes < ' + String(bound)
document.getElementById('paragraph00').innerHTML = 'Primes < ' + String(bound)
// for(let j = 3; j<bound; j++){
//     let q = prime_check(j)
//     // console.log(q)
//     if(j == 3){
//         outputP.innerHTML = '2 - '
        
//     }
//     if(q != '.'){
//         //lista.push(q)
//         counter+=1
//         //outputP.innerHTML += String(q) + ' - '
        
        
//     }

    
// }
 for(let j = 3; j<bound; j++){
    prime_check(j)
    
 }




var theorem = Math.round(bound *100 / (Math.log(bound)))/100
document.getElementById('paragraph0').innerHTML = 'Total: ' + String(counter) 
document.getElementById('paraPred').innerHTML =  'Prediction =  n/ln(n) ≈ ' + String(theorem)


// for(j in lista){

//     if(j == 0){
//        outputP.innerHTML = ''
//        document.getElementById('paragraph0').innerHTML = 'Total: ' + String(lista.length) + '<br>'
//     }
//     outputP.innerHTML += String(lista[j]) + ' - '


// }
if(counter < 1000){
    shown = counter
}
else {
    shown = 1000
}





lowerBound = 0;
upperBound = 1



function draw(){
    outputP.innerHTML = ''
    for(let i = lowerBound; i<shown * upperBound; i++){
        if(lista[i]){
        outputP.innerHTML += String(lista[i]) + ' - '
        last = lista[i]
        }
    }
    
    infoSpan.innerHTML = 'from ' + String(lista[lowerBound]) + ' to ' + String(last)
    start = (lowerBound/1000)+1;
    end = parseInt((lista.length -1) / 1000) +1
    insert.value = start 
    pageSpan.innerHTML = '/' + String(end)
    if(window.screen.width<600){
        oldT = infoSpan.innerHTML
        infoSpan.innerHTML = '<br><br>' + oldT
    }

    insert.style.width = String((String(upperBound)).length) + 'ch'
    //console.log(lowerBound, upperBound)
}




function adjustP(){
    if((upperBound)*1000<=lista.length-1){
    lowerBound += 1000
    upperBound += 1
    //console.log('adjusted')
    }
    draw()
}

function adjustM(){
    if(lowerBound >= 1000){
    lowerBound -= 1000
    upperBound -= 1
    //console.log('adjusted')
    }

    draw()
}


function handler(e){
    console.log('handling....')
    if(Number.isInteger(parseInt(insert.value))){
        console.log('expan', insert.value)
        insert.style.width = String(String(insert.value).length +1) + 'ch'
    }
    

    if(e['key'] == 'Enter'){
        let num = parseInt(insert.value);
        end = parseInt((lista.length -1) / 1000) +1
        if(num>0 && num<=end){
        
        lowerBound = (num-1)*1000;
        upperBound = num
        
        draw()
        insert.blur()
        }

        else {
            
            insert.value = upperBound
            insert.style.width = String(String(upperBound).length) + 'ch'
            
        }
    
}
}


draw()



