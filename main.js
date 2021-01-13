var button = document.getElementById("show-button");
button.addEventListener("click",function(){
    var div3  = document.getElementById("cat3");
    if(div3.style.display=='none')
    {
        div3.style.display = 'flex';
        div3.style.flexDirection="row";
        button.innerHTML="Hide Categories"
        
    }
    else
    {
        div3.style.display = 'none';
        button.innerHTML="Show All Categories";
    }
});
var num=1;
var left = document.getElementById("left");
left.addEventListener('click',function(){
     var im = document.getElementById('cand');
     var name = document.getElementById('name');
     var field = document.getElementById('field');
     num = (num-1)%3;
     if(num==1)
     {
         im.style.backgroundImage = "url(emp1.jpg)";
         name.style.innerHTML = 'Erric Shannon';
         field.style.innerHTML ='React Developer';

     }
     else if(num==2)
     {
        im.style.backgroundImage = "url(emp2.png)";
        name.style.innerHTML = 'Michael';
        field.style.innerHTML ='Node Developer';
     }
     else
     {
        im.style.backgroundImage = "url(emp3.jpeg)";
        name.innerHTML = 'John Carry';
        field.innerHTML ='Data Scientist';
     }

});
var right = document.getElementById("right");
right.addEventListener('click',function(){
     var im = document.getElementById('cand');
     var name = document.getElementById('name');
     var field = document.getElementById('field');
     num = (num+1)%3;
     if(num==1)
     {
         im.style.backgroundImage = "url(emp1.jpg)";
         name.innerHTML = 'Erric Shannon';
         field.innerHTML ='React Developer';

     }
     else if(num==2)
     {
        im.style.backgroundImage = "url(emp2.png)";
        name.innerHTML = 'Michael';
        field.innerHTML ='Node Developer';
     }
     else{
        im.style.backgroundImage = "url(emp3.jpeg)";
        name.innerHTML = 'John Carry';
        field.innerHTML ='Data Scientist';
     }

});