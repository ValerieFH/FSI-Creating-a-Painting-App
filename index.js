let paintBrush = 'blue'
const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')
const clearBtn = document.querySelector('#clear')
const entirePainting = document.querySelectorAll('.pixel')

//palette function
palette.addEventListener('click', function(e){
    paintBrush = e.target.id
    // console.log(e.target.id)
    // console.log(typeof e.target.id)
})

//painting function
painting.addEventListener('click', function(e){
    if (e.target.style.backgroundColor === paintBrush) {
        e.target.style.backgroundColor = "white"
    } else {
    e.target.style.backgroundColor = paintBrush
    }
})

//clear button function
clearBtn.addEventListener('click', function(e){
    //console.log("done got clicked")
    for (let i = 0; i < entirePainting.length; i++){
        entirePainting[i].style.backgroundColor = "white"
    }
})