const  myPromise =  new Promise((rosolve, reject)=>{
  const random = Math.random()
  if(random>0.5){
    rosolve("all Good random = " + random)
  } else {
    reject("error random = " + random)
  }
});

myPromise
.then((response)=>{
  console.log(response);
})
.catch((err)=>{
  console.log(err);
})
.finally(()=>{
  console.log("Finally");
})