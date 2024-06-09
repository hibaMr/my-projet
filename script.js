//declaration

let img_1 = document.getElementById('img-1');
let img_2 = document.getElementById('img-2');
let img_3 = document.getElementById('img-3');
let img_4 = document.getElementById('img-4');
let img_5 = document.getElementById('img-5');
let img_6 = document.getElementById('img-6');
let img_7 = document.getElementById('img-7');
let img_8 = document.getElementById('img-8');
let img_9 = document.getElementById('img-9');
let img_10 = document.getElementById('img-10');
let img_11 = document.getElementById('img-11');
let img_12 = document.getElementById('img-12');

let imgJS = document.getElementById('imgJS');
let divImgJS = document.getElementById('divImgJS');

let header = document.getElementById('header');
let divX = document.getElementById('divX');

//form 1

let place_input = document.getElementById('place-input');
let how_input = document.getElementById('how-input');
let arrivals_input = document.getElementById('arrivals-input');
let leaving_input = document.getElementById('leaving-input');

let divForm11 = document.getElementById('divForm11');
let divForm12 = document.getElementById('divForm12');
let divForm13 = document.getElementById('divForm13');
let divForm14 = document.getElementById('divForm14');

//form 2

let name_input = document.getElementById('name-input');
let email_input = document.getElementById('email-input');
let number_input = document.getElementById('number-input');
let subject_input = document.getElementById('subject-input');
let message_input = document.getElementById('message-input');

let divForm1 = document.getElementById('divForm1');
let divForm2 = document.getElementById('divForm2');
let divForm3 = document.getElementById('divForm3');
let divForm4 = document.getElementById('divForm4');
let divForm5 = document.getElementById('divForm5');


//function

function click_img(src){
    imgJS.src = src;
    divImgJS.classList.remove('displayJS');
    divX.classList.remove('displayJS');
    console.log('okkk');
    header.classList.add('displayJS');
}

function click_X(){
    divX.classList.add('displayJS');
    divImgJS.classList.add('displayJS');
    
    header.classList.remove('displayJS');
}


//form 1

document.getElementById('btn-book').addEventListener('click',(e)=>{
    e.preventDefault()
    if(place_input.value == ""){
        divForm11.classList.remove('displayJS');
    }else{
        divForm11.classList.add('displayJS');
        place_input.value = ""
    }

    if(how_input.value == ""){
        divForm12.classList.remove('displayJS');
    }else{
        divForm12.classList.add('displayJS');
        how_input.value = ""
    }

    if(arrivals_input.value == ""){
        divForm13.classList.remove('displayJS');
    }else{
        divForm13.classList.add('displayJS');
        arrivals_input.value = ""
    }

    if(leaving_input.value == ""){
        divForm14.classList.remove('displayJS');
    }else{
        divForm14.classList.add('displayJS');
        leaving_input.vlaue = ""
    }

})
    

//form 2

document.getElementById('btnJS').addEventListener('click',(e)=>{
    e.preventDefault()
    if(name_input.value == ""){
        divForm1.classList.remove('displayJS');
    }else{
        divForm1.classList.add('displayJS');
        name_input.value = ""
    }

    if(email_input.value == ""){
        divForm2.classList.remove('displayJS');
    }else{
        divForm2.classList.add('displayJS');
        email_input.value = ""
    }

    if(number_input.value == ""){
        divForm3.classList.remove('displayJS');
    }else{
        divForm3.classList.add('displayJS');
        number_input.value = ""
    }

    if(subject_input.value == ""){
        divForm4.classList.remove('displayJS');
    }else{
        divForm4.classList.add('displayJS');
        subject_input.vlaue = ""
    }

    if(message_input.value == ""){
        divForm5.classList.remove('displayJS');
    }else{
        divForm5.classList.add('displayJS');
        message_input.value = ""
    }
})
    
