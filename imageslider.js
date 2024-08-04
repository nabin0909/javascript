const images = ['ijk.jpeg','xyz.jepg', 'cover img ']
const imglength = img.length
let i=0
const demofunction =()=>{
    //i= i%imglength
    if(i>4){
        i=0
    }
    //0%5=0
    //1%5=1
    document.querySelector('img').src =`img/${image[1]}`
    i++
    let set = setInterval(demofunction, 5000)
    document.querySelector('right').addEventListener('click', demofunction)
    document.querySelector('left').addEventListener('click',()=>{
        if(i<=0){
            i = imglength-1
        }
        document.querySelector('img').scr =`img/${image[1]}`
        --1
    })
    document.querySelector('img'). addEventListener('mouseover', ()=>{
        clearInterval(set)
    })
    document.querySelector('img').addEventListener('mouseout',()=>{
        set= setInterval(demofunction,5000)
    })
    
}