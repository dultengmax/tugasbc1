// console.log("abdul");


// function loop(){
//     for( let i=0; i<=4; i++){
    //         console.log(`langkah ke ${i}`);
    //     }
    // }
    
    // loop()
    // console.log("aziz");


    //asyncronus


//     for (let index = 1; index <= 4; index++) {
//         asyncronus(index,()=>{
//             if (index===4) {
//                 end()
//             }
//         });    
//     }

// console.log('abdullll');
// function asyncronus(iterasi,callback){
//     setTimeout(()=>{
//         console.log(`langkah ${iterasi}`);
//         callback()
//     },1000)
// }

// function end(){
//     console.log("end");
// }


//promise fetch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>console.log(res))
// .catch(res=>console.log(res))



/// promise

// const isvip =false

// const checkingvip = new Promise((resolve, reject) => {
//     if(isvip){
//         resolve("member is vip")
//     }else{
//         reject("member isnt vip")
//     }    
// })

// checkingvip
// .then((res)=>console.log('yes '+ res))
// .catch((respone)=>console.log('no '+ respone))

// const member = new Promise((resolve) => {
//    setTimeout(()=>{
//        resolve([
//            {
//                id:1,
//                name:'abduk',
//                ismember: true
//            }
//        ])
//    },2000)
// })

// const product= new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve([
//             {
//                 id:2,
//                 name:'bakso',
//                 ismember: true
//             }
//         ])
//     },2000)
// })

// Promise.all([member,product])
// .then(res=>console.log(res))


//asyncronus await function
// function member(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve([
//                 {
//                     id:1,
//                     name:'abdull',
//                     ismember: true
//                 }
//             ])
//         },4000)      
//     })
// }

// async function ranmember(){
//     const data = await member()
//     console.log(data);

// }
// ranmember()


// asyc await try catch

function member(){
    return new Promise((resolve, reject) => {
        const time= 3000
        if (time<5000){
            resolve('run')
        }
        else{
            reject('times up')
        }
        
    })
}

const runmember = async ()=>{
    try {
        const data = await member()
        console.log(datay);
    } catch (error) {
        console.log(error);   
    }
}

runmember()


const a=~~s