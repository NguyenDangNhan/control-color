function isTwoSameSequences(arr){
    var a=0;
    var b=0;
 for(var u=0;u<arr.lenght-1;u++)   
   { for(var i=0;i<=u;i++)
     {  a=a+arr[i];}
     console.log(a);
    for(var j=u+1;j<arr.lenght;j++)
     {  b=b+arr[j]; }
    console.log(b);
    if(b==a)
      {var tong=1;}}
    if(tong==1)
     return a= true;
    else
      return a=false; 
   console.log(isTwoSameSequences());
}

