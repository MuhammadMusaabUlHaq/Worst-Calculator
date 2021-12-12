button = document.querySelectorAll('button')
display = document.querySelector('.disp')
user = document.querySelector('.user')
operatorNum = 0

operators = ['+','-','*','/']
function events(element) {
    element.addEventListener('click',(e)=>{
        if (e.target.innerText === 'clear') {
            display.innerText = ''
        } else {
            if(operatorNum!=0){
                operatorNum = 1
                if (e.target.innerText == '/') {
                    display.innerText = brains(display.innerText,e.target.innerText,user.innerText)
                } else if (e.target.innerText == '-') {
                    display.innerText = brains(display.innerText,e.target.innerText,user.innerText)
                } else if (e.target.innerText == '+') {
                    display.innerText = brains(display.innerText,e.target.innerText,user.innerText)
                } else if (e.target.innerText == '*') {
                    display.innerText = brains(display.innerText,e.target.innerText,user.innerText)
                }
            } else if (e.target.innerText == 'clear') {
                console.log(user.innerText)
                clear(display)
            } else {
                user.innerText = user.innerText + e.target.innerText
            }
        }
        
        /** 
        
        if((e.target.innerText == '/')&&(e.target.innerText == '*')&&(e.target.innerText == '-')&&(e.target.innerText == '+')) {
            display.innerText = display.innerText + e.target.innerText + user.innerText
        } else {
            user.innerText = user.innerText + e.target.innerText
        }
        */
    })
}

function add(a,b) {
    return a + b
}
function multiply(a,b) {
    return a*b
}
function divide(a,b) {
    return a/b
}
function subtract(a,b) {
    return a-b
}
function brains(a,operator,b) {
    a=parseInt(a)
    b=parseInt(b)
    if (operator=='+') {
        return add(a,b)
    } else if (operator=='/') {
        return divide(a,b)
    } else if (operator=='*') {
        return multiply(a,b)
    } else if (operator=='-') {
        return subtract(a,b)
    } else {
        console.log('invalid')
    }
}
function clear(element) {
    element.innerText = ""
}
function removelastletter(element) {
    arr = [...element]
    arr.pop()
    return arr.join('')
}


button.forEach(element => {
    events(element)
});


console.log(brains(3,'+',7))
