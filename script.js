//---------------------login--------------------------//
let user2=document.getElementById("user2")
let pass2=document.getElementById("pass2")
let warning=document.getElementById("invalid")                    /**      */
let newptag=document.createElement("p")
let submit2=document.getElementById("submit2")
let backup
// let db=new Map()
// db.set("admin","bca123")
let flag                                                                             
let user 
let pass
if(sessionStorage.validate!="success"){
    localStorage.status="failure"
}
if(location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html#" || location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"){
try{
user2.addEventListener("change",()=>{
      getUser(user2)
})
function getUser(e){
    user=e.value
    console.log(user)
}
pass2.addEventListener("change",()=>{
    getPass(pass2)
})
function getPass(e){
    pass=e.value
    console.log(pass)
}
submit2.addEventListener("click",()=>{
    validate()
})
if(localStorage.status=="success" && sessionStorage.validate=="failure"){
        localStorage.setItem("flag",true)
        sessionStorage.setItem("validate","success")
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html"
}else{
    sessionStorage.setItem("validate","failure") 
}
}catch(e){
    console.log("error",e)
}
}
console.log(localStorage.status)
console.log(localStorage.length)
function validate(){
    // console.log("Username:",user)
    // console.log("password:",pass)
    // let dbusers=Array.from(db.keys())
    // let dbvalues=Array.from(db.values())
    // console.log(dbusers,dbvalues)
for(let i=0;i<localStorage.length || localStorage.length==1;i++){
if(user==localStorage.key(i) && pass==localStorage.getItem(localStorage.key(i))){
    localStorage.setItem("status","success")
    sessionStorage.setItem("validate","success")
    // localStorage.setItem(dbusers[i],dbvalues[i])
     flag=true
     break
}
else{
   // localStorage.clear()
    flag=false
    console.log(newptag)
}
}
if(flag==true && localStorage.status=="success"){
    warning.innerHTML="<p>LOGIN SUCCESSFUL</p>"
    setTimeout(()=>{
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html"
     },3000)
}else{
    warning.appendChild(newptag)
    newptag.innerText="Invalid password"
    setTimeout(()=>{
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
     },3000)
}
}

if(localStorage.status=="success"){
    flag=true
}

//-----------------------------HOME-----------------------------//
if(location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html" || location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html#"){
nav()
// `function addbook(){
// }`
}
function nav(){
    if(localStorage.status=="success" && flag==true){
        location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html"
    }else{
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html#"
    } 
let mainlog=document.getElementById("mlog")
let mainsignup=document.getElementById("msignup")
  if(flag==true){
    mainlog.classList.add("mloginv")
    mainsignup.classList.add("msignupinv")
  }
  else{
    mainlog.id="mlog"
    mainsignup.id="msignup"
  }
let mlogout=document.getElementById("mlogout")
mlogout.addEventListener("click",()=>{
    localStorage.status="failure"
    location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
})
let borrowbooks=document.getElementById("borrowbooks")
borrowbooks.addEventListener("click",()=>{
     location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/borrowbooks.html"
})
}
// if(flag==false){
//     location.href="./login.html"
//     break
// }
// else{
//     location.href="./main.html"
// }


//-------------------------signup----------------------------//
// let db1=[]
// let map1=new Map()
let fname1a
let lname1a
let user1a
let pass1a
// let dbusers=Array.from(db.keys())
// let dbvalues=Array.from(db.values())
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let user1=document.getElementById("user1")
let pass1=document.getElementById("pass1")
let submit1=document.getElementById("submit1")
let warning2=document.getElementById("warning2")
let flag_signup=true
// console.log(dbusers,"  ",dbvalues)
if(location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/signup.html#" || location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/signup.html"){
fname.addEventListener("change",()=>{
    fname1(fname)
})
function fname1(fname){
    // map1.set("first_name",fname.value)
    fname1a=fname.value     
    // console.log(map1)
    }
lname.addEventListener("change",(e)=>{
    lname1(lname)
})
function lname1(lname){
    // map1.set("last_name",lname.value) 
    lname1a=lname.value    
    // console.log(map1)
}
user1.addEventListener("change",(e)=>{
    userName(user1)
})
function userName(user1){
    // map1.set("user_name",user1.value)     
    // db.set("user_name",user1.value) 
    console.log("Username:",user1.value) 
    user1a=user1.value
    // console.log(map1)
}
pass1.addEventListener("change",(e)=>{
    passWord(pass1)
})
function passWord(e){
    // map1.set("password",pass1.value)  
    // db.set("password",pass1.value) 
    console.log("Password:",e.value)   
    pass1a=e.value
    // console.log(map1)
    // console.log("DB:",db)
}
submit1.addEventListener("click",()=>{
    storeinfo()
})
function storeinfo(){
    for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)==user1a){
            warning2.id=""
            warning2.classList.add("vis1")
            warning2.innerHTML="<p>You are already having an account</p>"
            if(localStorage.getItem(user1a)!=pass1a){
             localStorage.setItem("password","wrong")
             warning2.innerHTML="<p>We Updated Your Existing Username With Your New Password</p>"
             localStorage.status="wait" 
            }
            break
           // ------------------
        }else{
            warning2.classList.remove("vis1")
            warning2.classList.add("vis2")
            warning2.innerHTML="<p>You are registered the account successfully</p>"
            // db1.push(map1)
            localStorage.setItem("FName,LName",[fname1a,lname1a])
            localStorage.setItem(user1a,pass1a)
            localStorage.status="success"
            // console.log(map1)
      }
    }   
    if(localStorage.status=="wait"){
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
    }
}
if(localStorage.status=="success" && localStorage.getItem(user1a)==pass1a){
    setTimeout(()=>{
        location.href=".https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html"
    },2000)
}
}


//borrow books  
if(location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/borrowbooks.html" || location.href=="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/borrowbooks.html#"){
   
let bkname=document.getElementById("bkname")
let bookname
let bkauth=document.getElementById("bkauth")
let author
let sid=document.getElementById("sid")
let studentid
let sname=document.getElementById("sname")
let studentname
let dateofsub=document.getElementById("dateofsub")
let msg=document.getElementById("msg")
let subdate
let bksubmit=document.getElementById("bksubmit")
let books=[
             {        
            'name':'java',
             'quantity':12,
             'author':'balagurusamy'
            },
            {
            'name':'java',
            'quantity':10,
            'author':'ramesh'
            },
            {
             'name':'python',
             'quantity':7,
             'author':'prince'
              },
              {
              'name':'frontend frameworks',
              'quantity':15,
              'author':'badri'
               }, 
           {
            'name':'mysql',
            'quantity':12,
            'author':'aaron'
             },
            {
            'name':'dotnet',
            'quantity':0,
             'author':'balaji'
            }
]
let bookdb
for(let i=0;i<localStorage.length;i++){
if(localStorage.key(i)=="books"){
    bookdb="found"
    localStorage.setItem("bookdb","found")
    break
}
else{
    bookdb="notfound"
    localStorage.setItem("bookdb","notfound")
}
}
if(bookdb=="notfound"){
        localStorage.setItem("books",JSON.stringify(books))  
    localStorage.setItem("bookdb","found")
}
let booknames=[]
let quantities=[]
let authornames=[]
for(let i=0;i<JSON.parse(localStorage.getItem("books")).length;i++){
   booknames.push(JSON.parse(localStorage.getItem("books"))[i].name)
   quantities.push(JSON.parse(localStorage.getItem("books"))[i].quantity)
   authornames.push(JSON.parse(localStorage.getItem("books"))[i].author)
}

console.log(booknames,quantities,authornames)
if(localStorage.getItem("record")==null || localStorage.getItem("record")==undefined){
    localStorage.setItem("record",1)
}


bkname.addEventListener("keyup",()=>{
    setbkname(bkname)
   })  
   function setbkname(e){
     bookname=e.value
     console.log(bookname)
}
bkauth.addEventListener("keyup",()=>{
    setauth(bkauth)
})
function setauth(e){
    author=e.value
    console.log(author)
}
sid.addEventListener("keyup",()=>{
    setid(sid)
})
function setid(e){
    studentid=JSON.stringify(e.value)
    console.log(studentid)
}
sname.addEventListener("keyup",()=>{
    setsname(sname)
})
function setsname(e){
    studentname=e.value
    console.log(studentname)
}
dateofsub.addEventListener("change",()=>{
     setdate(dateofsub)
})
function setdate(e){
     subdate=JSON.stringify(e.value)
     console.log(subdate)
}
bksubmit.addEventListener("click",()=>{
    if(bookname!=null && author!=null && studentid!=null && studentname!=null && subdate!=null){
        msg.classList.remove("warning")
        msg.classList.add()
   submitBook()
    }else{
        newptag.innerText="PLEASE FILL ALL THE ABOVE FIELD"
        msg.append(newptag)
        msg.classList.add("warning")
    }
})
let numstate
let numkeys=[]
for(let i=0;i<localStorage.length;i++){
if(isNaN(localStorage.key(i))==false){
    numstate="found"
    numkeys.push(i)
   }else{
    numstate="notfound"
}
}
if(numkeys.length>=1){
    numstate="found"
}
if(numstate=="notfound"){
    localStorage.setItem("record",0)
}

if(numstate=="found"){
    for(let i=0;i<numkeys.length;i++){
     // console.log(JSON.parse(localStorage.getItem(localStorage.key(numkeys[i]))))
}
}
console.log(numkeys)
let loopCount=localStorage.getItem("record")
let nums=[]
for(let i=0;i<localStorage.length;i++){
    for(let j=0;j<localStorage.length;j++){
    if(localStorage.key(i)==j){
        nums.push(j)
       // loopCount=j
        console.log("index:",i," ","j:",j)
    }
}
}
//let nums=[4,1,2,3]
let tmp
for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        if(j>i){
        if(nums[i]<nums[j]){
         tmp=nums[j]
         nums[j]=nums[i]
         nums[i]=tmp
        }
    }
    }
}
console.log(nums)
if(nums[0]!=null){
loopCount=nums[0]
}else{
    loopCount=1
   }
localStorage.setItem("record",loopCount)
console.log(loopCount)

function submitBook(){  
    // bkdetails.push({"bookName":bookname,"bookAuthor":author,"studentId":studentid,"studentName":studentname})

    for(let i=0;i<localStorage.length;i++){   
        console.log(localStorage.key(i))
        if(localStorage.key(i)==loopCount){
            console.log(localStorage.key(i))
            console.log("loopCount:",loopCount)                              
            localStorage.setItem("record",loopCount)
            loopCount=parseInt(localStorage.getItem("record"))+1
            localStorage.setItem("record",loopCount)
            break
       }//else{
    //     localStorage.record=loopCount
    //     loopCount=parseInt(localStorage.getItem("record"))+1
    //    }
    }
let bookavail
let authoravail
let quantityavail
let bookstate
let bi 
let ai  
console.log(booknames)
console.log(bookname)
//----------------------------------
for(let i=0;i<booknames.length;i++){
    if(booknames[i]==bookname){
        localStorage.setItem(`bkavail:${i}`,[1])
        bi=i
    }else{
        localStorage.setItem(`bkavail:${i}`,[0])
    }
}
for(let i=0;i<authornames.length;i++){
        if(localStorage.getItem(`bkavail:${i}`)==[1] && authornames[i]==author ){
            localStorage.setItem(`authavail:${i}`,[1])
            ai=i
            break
        }else{
            localStorage.setItem(`authavail:${i}`,[0])
        }
}
for(let i=0;i<quantities.length;i++){
            if(quantities[i]>=1 && localStorage.getItem(`authavail:${i}`)==[1] && ai==i){
                localStorage.setItem(`quavail:${i}`,[1])
                break
            }else{
                localStorage.setItem(`quavail:${i}`,[0])
            }
    
}
//----------------------------------------------------
for(let i=0;i<booknames.length;i++){
if(localStorage.getItem(`bkavail:${i}`)==[1]){
    bookavail=[i,"success"]
    console.log("book available ",bookavail)
    break
}else if(localStorage.getItem(`bkavail:${i}`)==[0]){
    bookavail=[i,"failure"]
    console.log("book unavailable ",bookavail)
}
}
for(let i=0;i<booknames.length;i++){
    if(localStorage.getItem(`authavail:${i}`)==[1]){
        authoravail=[i,"success"]
        console.log("author available ",authoravail)
        break
    }else if(localStorage.getItem(`authavail:${i}`)==[0]){
        authoravail=[i,"failure"]
        console.log("author unavailable ",authoravail)
    }
}
for(let i=0;i<booknames.length;i++){
        if(localStorage.getItem(`quavail:${i}`)==[1]){
            quantityavail=[i,"success"]
            console.log("quantity available ",quantityavail)
            break
}else if(localStorage.getItem(`quavail:${i}`)==[0]){
    quantityavail=[i,"failure"]
    console.log("quantity unavailable ",quantityavail)
}
}
// ---------------------------------------------------
//    for(let i=0;i<booknames.length;i++){
//     if(booknames[i]==bookname){
//         bookavail=[i,"success"]
//         console.log("book available ",bookavail)
//         localStorage.setItem("bkavail",`${bookname,"index:",[i]}`)
//         if(authornames[i]==author){
//             authoravail=[i,"success"]
//             console.log("author available ",authoravail)
//             localStorage.setItem("authavail",`${author,"index:",[i]}`)
//             if(quantities[i]>=1){
//                 quantityavail=[i,"success"]
//                 console.log("quantity available ",quantityavail)
//                 localStorage.setItem("quavail",`${quantities[i],"index:",[i]}`)
//                 break
//             }else{
//                 quantityavail=[i,"failure"]
//                 console.log("quantity unavailable ",quantityavail)
//                 localStorage.setItem("quaunvail",`${[i]}`)
//             }
//         }else{
//             authoravail=[i,"failure"]
//             console.log("author unavailable ",authoravail)
//             localStorage.setItem("authunavail",`${[i]}`)
//         }
//    }else{
//         bookavail=[i,"failure"]
//         console.log("book unavailable ",bookavail)
//         localStorage.setItem("bkunavail",`${[i]}`)
//     }
// }


let newptag1=document.createElement("p")
let newptag2=document.createElement("p")
let newptag3=document.createElement("p")
if(bookavail[1]=="success" && booknames[bookavail[0]]==bookname){
    msg.classList.add("inv")
    if(authoravail[1]=="success" && authornames[authoravail[0]]==author){
        msg.classList.add("inv")
        if(quantityavail[1]=="success" && quantities[quantityavail[0]]>=1){
            msg.classList.add("vis")
            console.log("quantity check ok")
            localStorage.setItem(loopCount,[`{"studentId":${studentid},"studentName":${studentname},"bookName":${bookname},"bookAuthor":${author},"dateOfSubmission":${subdate}}`])
            bookstate="issued"
            msg.innerHTML=`<p>THE REQUESTED BOOK WILL BE ISSUED, PLEASE RETURN THE ${bookname.toUpperCase()} BOOK ON ${JSON.parse(subdate)} AT MORNING 9:30 A.M AT LIBRARY INCHARGE</p>`
        }else{
            msg.classList.add("vis")
            msg.innerHTML=`<p>THE REQUESTED BOOK IS NOT AVAILABLE DUE TO THE INSUFFICIENT QUANTITY</p>`
            setTimeout(()=>{
                location.reload()
            },15000)
            msg.classList.add("inv")
        }
    }else{
        msg.classList.add("vis")
        newptag1.innerText=`THE REQUESTED BOOK WITH THE DIFFERENT AUTHOR IS AVAILABLE`
        msg.append(newptag1)
        newptag2.innerText=`AVAILABLE BOOKS WITH DIFFERENT AUTHORS`
        msg.append(newptag2)
        newptag3.innerText="AUTHOR NAME:"
        for(let i=0;i<authornames.length;i++){  
        if(bookname==booknames[i]){
        let newptag4=document.createElement("p")
        newptag4.innerText=`${authornames[i]}`
        msg.append(newptag4)
        }
        }
        setTimeout(()=>{
            location.reload()
        },15000)
        msg.classList.add("inv")
    }
}else{
    msg.classList.add("vis")
    msg.innerHTML=`<p>THE BOOK WAS NOT AVAILABLE</p>` 
    setTimeout(()=>{
        location.reload()
    },15000)
    msg.classList.add("inv")
}
    let decrement
    bks=JSON.parse(localStorage.getItem("books"))
    decrement=quantities
    for(let i=0;i<decrement.length;i++){               
    if(bookstate=="issued"){
        if(bks[i].name==bookname && bks[i].author==author){
          decrement[i]--
          bks[i].quantity=decrement[i]
          localStorage.setItem("books",JSON.stringify(bks))
        }
    }
}
    bkdetails=localStorage.getItem(loopCount)
    console.log(bkdetails)
    nav()
}
if(localStorage.status!="success" && sessionStorage.validate!="success"){
    location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
}
}
  //calling  navbar function
// if(sessionStorage.length<=1 && sessionStorage.key(0)=="IsThisFirstTime_Log_From_LiveServer" && sessionStorage.validate!="success"){
//      location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
// }

// fetch("./data.json")
// .then((response)=>response.json())
// .then((json)=>{ 
//     //json.b.quantity=3
//     console.log(json)
// })
