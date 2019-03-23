
waitForDAE()

function waitForDAE() {
    if(obj1 === undefined){
        setTimeout(()=> {
            waitForDAE()
        }, 300)
        
    } else {

        getkeys1()
    }

}

var strO = `obj1.children`
var generalIndex = [];
var strTemp = ``
var noElemnts1 = [];
var noElemnts2 = [];
var strElements2 = [];
var noElemnts3 = [];
var strElements3 = [];
var noElemnts4 = [];
var strElements4 = [];
var noElemnts5 = [];
var strElements5 = [];
var dictUrls = [];

let newObj = new Object()

function getkeys1() {
    
    noElemnts1.push(eval(strO).length);
    getkeys1_1()
    
}

function getkeys1_1() {

    if(noElemnts1.length > 0 ) {
        for(var i = 0; i< noElemnts1.length; i++){
        
            for(var j = 0; j<noElemnts1[i]; j++){
    
                strTemp = `obj1.children[${j}].children`
    
                if(eval(strTemp).length === 0){
    
                    let strDivide = strTemp.split(".")
                    strDivide.pop()
                    strTemp = strDivide.join(".")
                    generalIndex.push(strTemp)               
    
                } else {
    
                    noElemnts2.push(eval(strTemp).length)
                    strElements2.push(strTemp)
    
                }
            }
        } 
    
        getkeys2()

    } else {
        findAllKeys()
    }
    
}

function getkeys2() {
    if(noElemnts2.length >0 || strElements2.length > 0){
        for(let i = 0; i< noElemnts2.length; i++){
            
            for(let j= 0; j<noElemnts2[i]; j++){
                strTemp = `${strElements2[i]}[${j}].children`
                if (eval(strTemp).length === 0){
                    let strDivide = strTemp.split(".")
                    strDivide.pop()
                    strTemp = strDivide.join(".")
                    generalIndex.push(strTemp)        
    
                } else {
                    noElemnts3.push(eval(strTemp).length)
                    strElements3.push(strTemp)
                }
            }
            
        }
    
        getkeys3()

    } else {
        findAllKeys();
    }
    
}

function getkeys3() {

    if(noElemnts3.length > 0 ||strElements3.length >0){

        for(let i=0; i<noElemnts3.length; i++){
            for(let j=0; j<noElemnts3[i]; j++){
                strTemp = `${strElements3[i]}[${j}].children`
                if (eval(strTemp).length === 0){
                    let strDivide = strTemp.split(".")
                    strDivide.pop()
                    strTemp = strDivide.join(".")
                    generalIndex.push(strTemp)        
    
                } else {
                    noElemnts4.push(eval(strTemp).length)
                    strElements4.push(strTemp)
                }
            }
        }
        getkeys4()

    } else {
        findAllKeys()
    }

}

function getkeys4() {

    if(noElemnts4.length > 0 || strElements4.length > 0){

        for(let i=0; i<noElemnts4.length; i++){
            for(let j=0; j<noElemnts4[i]; j++){
                strTemp = `${strElements4[i]}[${j}].children`
                if (eval(strTemp).length === 0){
                    let strDivide = strTemp.split(".")
                    strDivide.pop()
                    strTemp = strDivide.join(".")
                    generalIndex.push(strTemp)        
        
                } else {
                    noElemnts5.push(eval(strTemp).length)
                    strElements5.push(strTemp)
                }
            }
        }
        getkeys5()
    } else {
        findAllKeys()
    }
}

function getkeys5() {
    alert("demasiados niveles en modelo 3D, favor de validar")
    console.log(noElemnts5)
    console.log(strElements5)
}


function findAllKeys(){

    for(let i in generalIndex){
        
        newObj[eval(generalIndex[i]).name] = {
            path:generalIndex[i],
        }

    }
}