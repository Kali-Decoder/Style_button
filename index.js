const result =document.querySelector(".result");
const leftTop= document.querySelector("#left-top");
const rightTop= document.querySelector("#right-top");
const rightBottom= document.querySelector("#right-bottom");
const leftBottom= document.querySelector("#left-bottom");
const width= document.querySelector("#width");
const height= document.querySelector("#height");
const textColor= document.querySelector("#text-color");
const bgColor= document.querySelector("#bg-color");
const borderColor= document.querySelector("#b-color");
const fontWeight=document.querySelector('#fontweight');
const paddingX=document.querySelector("#paddingx");
const paddingY=document.querySelector("#paddingy");
const fontSize=document.querySelector("#fontsize");
const text=document.querySelector("#text");
const output =document.querySelector(".output-text");

document.addEventListener("input",()=>{
    const useStyles={
        borderTopLeftRadius:`${leftTop.value}px`,
        borderTopRightRadius:`${rightTop.value}px`,
        borderBottomRightRadius:`${rightBottom.value}px`,
        borderBottomLeftRadius:`${leftBottom.value}px`,
        width:`${width.value}rem`,
        height:`${height.value}rem`,
        backgroundColor:`${bgColor.value}`,
        color:`${textColor.value}`,
        borderColor:`${borderColor.value}`,
        fontWeight:`${fontWeight.value}`,
        padding:`${paddingy.value}px ${paddingx.value}px`,
        fontSize:`${fontSize.value}rem`

    };
    result.innerHTML=text.value;
    
    Object.assign(result.style,useStyles);
})