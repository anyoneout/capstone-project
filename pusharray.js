
let cuteAnimals = ["cat", "dog", "bunny", "hamster"];
let scaryAnimals = ["lions", "tigers", "bears"];



function doJob() {

  for(let i=0; i < scaryAnimals.length; i++) {
    let a;
     a = scaryAnimals[i];
     cuteAnimals.push(a);
     
  }
  console.log(cuteAnimals);
}

buttonarray.onclick = doJob;



