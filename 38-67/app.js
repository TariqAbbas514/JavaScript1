//chapter38-42
//  task 1

// function power(a,b)
// {
//     var result=Math.pow(a,b);
//     document.write("the Custom power is.."+result);

// }
// power(2,3);

// task2

// function leap_year( input )
// {
//     var input=+prompt("Enter year for checking leapyear...");
//     if(input%4===0)
//     {
//         document.write("Leap year.."+input);

//     }
//     else
//     {
//         document.write("Leap year not");
//     }
// }
// leap_year();

// task 3

// function traingle()
// {
//     var a=2;
//     var b=3;
//     var c=5;
//     var s= a+b+c/2;
//     var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     document.write("the area of a traigle is.."+area)

// }
// traingle();

// task 4
// var sub1 = 89;

// 
//

// function result() {
//     var sub1=78;
//     var sub2 = 67;
//     var sub3 = 76;

//     function averageMarks() {


//         var avg =( sub1 + sub2 + sub3);
//         document.write("The obtaining marks is ..." + avg);

//     }
//     function percentage() {
//         var p = ((sub1+sub2+sub3) / 300) * 100;
//         document.write("The percentage is.." + p);

//     }
//     averageMarks();
//     percentage();
// }
// result();


// task 5
// function indexOf(customfunction, singleChar) 
// {
//   for (var i = 0; i <= customfunction.length; i++)
//    {
//     if (customfunction[i] == singleChar)
//      {
//       document.write(customfunction + "<br>" + "index of " + customfunction[i] + "is" + i);

//     }

//   }

// }
// indexOf("Noshaba", "h");
// task 6


// alert ("The sentence is not more than 25 characters...");
// function disemvowel(str) 
// {
//     var str=prompt("Enter some string..");
//     alert(str.replace(/[aeiou]+/ig, ''));
//   }
// disemvowel();

// task 7

// function findOccurrences()
//  {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   var count2 = 0;

//   for (var i = 0; i <str.length; i++)
//   {
//     switch (str.slice(i, i + 2)) 
//     {
//       case 'ea':
//         count++;
//         break;
//       case 'ui':
//         count2++;
//         break;
//     }
//   }
//   document.write("Pleases read this application and give me gratuity" + "<br>" + count+count2 )
// }
// findOccurrences();

// task 8


// function convertor(input)
// {
//   var input=+prompt("Enter your city distance in km ..?");
//   function meter()
//   {
//     var meter=parseFloat (input)*1000;
//     document.write("Conert into meter your city distance is..."+meter);
//   }
//   function centiMeter()
//   {
//     var c_meter=parseFloat (input)*10000;
//     document.write("Conert into Centemeter your city distance is..."+c_meter);
//   }
//   function feet()
//   {
//     var feet=parseFloat (input)*	3280.839895013;
//     document.write("Conert into feet your city distance is..."+feet);
//   }
//   function inch()
//   {
//     var inch=parseFloat (input)*39370.07874015;
//     document.write("Conert into inch your city distance is..."+inch);
//   }
//   feet();
//   inch();
//   centiMeter();
//   meter();

// }
// convertor();                                                                                                                          h

// task9


// var employ,otime,opay,hours;
// var hours = prompt("Enter The Number Of Hours Worked By Employee");
// for (employ=1;employ<=10; employ++);
// {
// if(hours>40)
// {
// var otime=hours-40;
// var opay=otime*12;
// document.write( + "The Overtime Pay Of Employeee Is " + opay);
// }
// else if(hours<40){
//     document.write("There Is No Overtime Pay For Employee ");
// }
// }

// task 10
// function currencyDenomination() {
// 	var cash = +prompt("Please input amount for withdraw : ");
// 	document.write("\n\nRequired notes of Rs. 100  :", cash / 100);
// 	document.write("\n\nRequired notes of Rs. 50   :", (cash % 100) / 50);
// 	document.write("\n\nRequired notes of Rs. 10   :", (((cash % 100) % 50) / 10));
// 	document.write("\n\nAmount still remaining Rs. :", (((cash % 100) % 50) % 10));
// }
// currencyDenomination();


//Chapter58-67
//Task1
//i

// var b = document.getElementById('main-content');

// //ii
// console.log(b.childNodes);
// // console.log(b);

// //iii
// var c = document.getElementsByClassName('render');
// var d = c.innerHTML;
// console.log(d);

// // iv
// document.getElementById("first-name").value = "Tariq";

// //v
// document.getElementById("last-name").value = "Abbas";
// document.getElementById("email").value = "example@gmail.com";

// //Task2
// // i
//  var f = document.getElementById('form-content');
// console.log(f.nodeType);


// // ii
//  var g = document.getElementById('lastName');
// console.log(g.nodeType);
// console.log(g.childNodes);

// //iii

// //iv
// console.log(b.childNodes[0]);

// // v
// console.log(g.nextSibling);
// console.log(g.previousSibling);

// // vi
// var h = document.getElementById("email");
// console.log(h.parentNode);
// console.log(h.nodeType);


//Chapter43-48
// Task 1
// Task 2

// function Usms() {
// alert("Thanks For Purchasing A Phone Form Us");
// }


// // Task 3
// function deleteRow(btn) {
//     var table = btn.parentNode.parentNode.rowIndex;
//      document.getElementById("mytab").deleteRow(table);
// }
  



// // Task 4
// function SetNewImage()
// {
// document.getElementById("img1").src="images/others/2.jpg";
// }

// function SetOldImage(){
// document.getElementById("img1").src="images/others/1.jpg";
// }





// //Task 5
// x=0;

// function abc()
// {
//     x++;
//  document.getElementById("change").innerHTML=x;
// }

// function abc1()
// {
//     x--;
//  document.getElementById("change").innerHTML=x;
// }


//chapter49-52


//task 1
// function submit(){
//     var name=document.getElementById("name");
//     var email=document.getElementById("email");
//     var pass= document.getElementById("pass");
//     document.write("NAME: "+name.value);
//     document.write("<br>EMAIL: "+email.value);
//     document.write("<br>PASSWORD: "+pass.value);
// }


//task 2
// function data() {
//     var a = "<b>By:</b> Microsost.<br>Be the first to review this product<br><b> Colour available:</b> Silver, Black, Grey, Sandstone.<br><b>Storage:</b>128GB SSD<br><b>Processor:</b>Quad-Core 10th Gen Intel Core i5-1035G7<br><b>Display:</b>13.5” PixelSense Display";
//     var p = document.getElementById("ab");
//     p.innerHTML = a;
// }



//task 3              
// var count = 0;
// var b=0;
// var form = document.getElementById("f");
// function submit() 
// {
//     form.style.display = "none";
//     var name = document.getElementById("name");
//     var fname = document.getElementById("fname");
//     var rollno = document.getElementById("rollno");
//     var cl = document.getElementById("class");
//     var fac = document.getElementById("fac");
//     var tab = document.getElementById("tab");
//     var row = document.createElement('tr');
//     tab.appendChild(row);

//     if (count == '0') {
//         var head1 = document.createElement('th');
//         var txt1 = document.createTextNode("Sr No.");
//         head1.appendChild(txt1);
//         row.appendChild(head1);
//         head1.setAttribute("class","edit");

//         var head2 = document.createElement('th');
//         var txt2 = document.createTextNode("Name");
//         head2.appendChild(txt2);
//         row.appendChild(head2);
//         head2.setAttribute("class","edit");

//         var head3 = document.createElement('th');
//         var txt3 = document.createTextNode("F.Name");
//         head3.appendChild(txt3);
//         row.appendChild(head3);
//         head3.setAttribute("class","edit");

//         var head4 = document.createElement('th');
//         var txt4 = document.createTextNode("Roll No.");
//         head4.appendChild(txt4);
//         row.appendChild(head4);
//         head4.setAttribute("class","edit");

//         var head5 = document.createElement('th');
//         var txt5 = document.createTextNode("Class");
//         head5.appendChild(txt5);
//         row.appendChild(head5);
//         head5.setAttribute("class","edit");

//         var head6 = document.createElement('th');
//         var txt6 = document.createTextNode("Faculty");
//         head6.appendChild(txt6);
//         row.appendChild(head6);
//         head6.setAttribute("class","edit");

//         var head7 = document.createElement('th');
//         var but1 = document.createElement('button');
//         but1.setAttribute("onclick", "show()");
//         var t1 = document.createTextNode("Student Form");
//         but1.appendChild(t1);
//         but1.setAttribute("class","butt");
//         head7.appendChild(but1);
//         row.appendChild(head7);
//         head7.setAttribute("class","edit");
//     }
//     count++;
//     var row = document.createElement('tr');
//     tab.appendChild(row);

//     var head1 = document.createElement('td');
//     var txt1 = document.createTextNode(count);
//     head1.appendChild(txt1);
//     row.appendChild(head1);
//     head1.setAttribute("class","edit");

//     var head2 = document.createElement('td');
//     var txt2 = document.createTextNode(name.value);
//     head2.appendChild(txt2);
//     row.appendChild(head2);
//     head2.setAttribute("class","edit");
//     name.value="";

//     var head3 = document.createElement('td');
//     var txt3 = document.createTextNode(fname.value);
//     head3.appendChild(txt3);
//     row.appendChild(head3);
//     head3.setAttribute("class","edit");
//     fname.value="";

//     var head4 = document.createElement('td');
//     var txt4 = document.createTextNode(rollno.value);
//     head4.appendChild(txt4);
//     row.appendChild(head4);
//     head4.setAttribute("class","edit");
//     rollno.value="";

//     var head5 = document.createElement('td');
//     var txt5 = document.createTextNode(cl.value);
//     head5.appendChild(txt5);
//     row.appendChild(head5);
//     head5.setAttribute("class","edit");
//     cl.value="";

//     var head6 = document.createElement('td');
//     var txt6 = document.createTextNode(fac.value);
//     head6.appendChild(txt6);
//     row.appendChild(head6);
//     head6.setAttribute("class","edit");
//     fac.value="";

//     var head7 = document.createElement('td');
//     var but1 = document.createElement('button');
//     but1.setAttribute("onclick", "edit(this)");
//     var br = document.createElement('br');
//     var but2 = document.createElement('button');
//     but2.setAttribute("onclick", "del(this)");
//     var t1 = document.createTextNode("Edit");
//     var t2 = document.createTextNode("Delete");
//     but1.appendChild(t1);
//     but1.setAttribute("class","butt");
//     but2.appendChild(t2);
//     but2.setAttribute("class","butt");
//     head7.appendChild(but1);
//     head7.appendChild(br);
//     head7.appendChild(but2);
//     row.appendChild(head7);
//     head7.setAttribute("class","edit");
//     tab.style.display="block";
// }

// function show(){
//     form.style.display="block";
//     tab.style.display="none";
// }

// function del(e) {
//     var p = e.parentNode;
//     p.parentNode.remove();
// }

// function edit(e){
//     b=e;
//     editform.style.display="block";
//     tab.style.display="none";
//      var ename = document.getElementById("ename");
//     var efname = document.getElementById("efname");
//     var erollno = document.getElementById("erollno");
//     var ecl = document.getElementById("eclass");
//     var efac = document.getElementById("efac");
//     ename.value = e.parentNode.parentNode.firstChild.nextSibling.firstChild.nodeValue;
//     efname.value = e.parentNode.parentNode.firstChild.nextSibling.nextSibling.firstChild.nodeValue;
//     erollno.value = e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nodeValue;
//     ecl.value = e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue;
//     efac.value = e.parentNode.previousSibling.firstChild.nodeValue;
//     }

// function save() {
//     editform.style.display = "none";
//     tab.style.display="block";
//     var ename = document.getElementById("ename");
//     var efname = document.getElementById("efname");
//     var erollno = document.getElementById("erollno");
//     var ecl = document.getElementById("eclass");
//     var efac = document.getElementById("efac");
//     b.parentNode.parentNode.firstChild.nextSibling.firstChild.nodeValue=ename.value ;
//      b.parentNode.parentNode.firstChild.nextSibling.nextSibling.firstChild.nodeValue=efname.value;
//      b.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nodeValue=erollno.value;
//      b.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue=ecl.value;
//      b.parentNode.previousSibling.firstChild.nodeValue=efac.value;
// }


//chapter52-57
//task 2
// var a=["1.jpg","2.jpg","3.jpg","4.png","5.jpg","6.jpg","7.png","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.png","15.jpg"];
// // task 3
// var parent=document.getElementById("body");
// for (var i = 0; i < a.length; i++) {
//     var img = document.createElement("img");
//     img.src = a[i];
//     img.id=i;
//     img.classList.add("edit");
//     //task 4
//     img.setAttribute("onclick","mod(id)");
//     img.setAttribute("data-toggle","modal");
//     img.setAttribute("data-target","#exampleModalCenter");
//     parent.appendChild(img);
//     console.log(img);
// }
// //task 5-6
// function mod(id){
//     var img=document.getElementById(id);
//     var modImg=document.getElementById("img");
//     modImg.src=img.src;

// }

////The End