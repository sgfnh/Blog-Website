function handle(event){
    event.preventDefault()
    const user={
        "imag":event.target.img.value,
        "title":event.target.tit.value,
        "descri":event.target.des.value,
    }
    axios.post("https://crudcrud.com/api/30b1d962ce4e4264b694120202b6002f/blog",user)
    .then((res)=>{
        showscr(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/30b1d962ce4e4264b694120202b6002f/blog")
    .then((res)=>{
        console.log(res)
        for(var i=0;i<res.data.length;i++){
            showscr(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
function showscr(user){
    const blo=document.getElementById('blo')
    const count=document.querySelectorAll('#y')
    let co=count.length+1
    blo.textContent="Total Blog:" + co;
    const ou=document.getElementById('po')

    //create div
    const dih=document.createElement('div')
    dih.id="y"

    //create image
    var image=document.createElement('img')
    image.id="u"
    image.width="150"
    image.height="150"
    image.src=user.imag

    //create heading
    const pa=document.createElement('h2')
    pa.textContent=user.title

    //create paragraph
    const py=document.createElement('p')
    py.textContent=user.descri

    //create edit button
    const edi=document.createElement('button')
    edi.textContent="EDIT"
    edi.id="yo"
    
    //create delete button
    const det=document.createElement('button')
    det.textContent="DELETE"
    det.id="dr"

    dih.appendChild(pa)
    dih.appendChild(image)
    dih.appendChild(py)
    dih.appendChild(edi)
    dih.appendChild(det)
    ou.insertAdjacentElement("afterend",dih)
    
    //edit functionality
    edi.addEventListener("click",()=>{
        document.getElementById("y").remove()
        document.getElementById('img').value=user.imag,
        document.getElementById('tit').value=user.title,
        document.getElementById('des').value=user.descri
        axios.delete(`https://crudcrud.com/api/30b1d962ce4e4264b694120202b6002f/blog/${user._id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.post("https://crudcrud.com/api/30b1d962ce4e4264b694120202b6002f/blog",user)
       .then((res)=>{
        console.log(res.data)
        })
       .catch((err)=>{
        console.log(err)
        })
    })

    //delete functionality
    det.addEventListener("click",()=>{
        document.getElementById("y").remove()
        const g=co-1
        blo.textContent="Total Blog:"+g
            axios.delete(`https://crudcrud.com/api/30b1d962ce4e4264b694120202b6002f/${user._id}`)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
            
    })
    
}
