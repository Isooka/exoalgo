var a = 5;
console.log(a);

 // exo 2 //

 var a = 5;
 var b = 10;

 let azazaz = a+b;
 console.log(a+b)

 //exo 3 //

 var a = "Coucou je suis une variable"
 console.log(a)

 //exo 4 //

 var a = "Coucou "
 var b = "Je suis toujours une variable"
 console.log(a,b)

 //exo 5 //

 var a = 20
 var b = 10
 var c = a

 a = b
 b = c 
 console.log(a,b)

 var a = 10
 var b = 20
 var c = a

 b = a
 a = c 
 console.log(b,a)

 //exo 6 //

 var a = 50
 var b = 200

 if (a > b) {
    console.log (+(a),"a est moins grand que b"+(b));
}else {

    console.log (+(b),"b est moins grand que a"+(a));
}

//exo 7//

var a = 20 ;
var b = 30 ;
function grandeur (a,b) {
 if (a > b) {
     console.log ("le nombre le plus grand est a");
} else {
    console.log (" le nombre le plus grand est b");
}
}

grandeur(a,b);

//exo 8 //

console.log (Math.random(10,90));

// exo9//

for( i=0; i<=10; i++){

    console.log(Math.floor(Math.random(+1) *100));
  }

  //exo 10//

  var a = 0;

  while (a<=90)
  {
      console.log(a = Math.floor(Math.random(+1)*100));
  }
