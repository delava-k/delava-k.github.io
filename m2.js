var ls=false;try{var t0='t0';localStorage.setItem(t0,t0);localStorage.removeItem(t0);ls=true}catch(e){ls= false};

var dom='https://delava.tk/';
var gzr = {}; // json-Object Глобальный Заказ R101

function myDate(dat) { 
 d= new Date(Number(dat));
 var yyyy = d.getFullYear();
 var mm = d.getMonth()+ 1; //January is 0!
 var dd = d.getDate();
 var h = d.getHours();
 var m = d.getMinutes();
 var s = d.getSeconds();
 var ms = d.getMilliseconds();
  if (dd < 10) {dd = '0' + dd;};
  if (mm < 10) {mm = '0' + mm;};
  if (h < 10) {h = '0' + h;};
  if (m < 10) {m = '0' + m;};
  if (s < 10) {s = '0' + s;};

 //return dd + '/' + mm + '/' + yyyy;
 return dd + '.' + mm + '.' +yyyy +' ' + h + ':' + m ;
//+ ':' + s + '.' + ms;
}

//---

function st2(ist) { 
 var prim=screen.availWidth+' * '+screen.availHeight+' / '+screen.width+' * '+screen.height+' ('+navigator.platform+')';
 var xhr=new XMLHttpRequest();
if (ls){
 if (ist==''){var p = window.location['pathname'].split('/');ist=p[p.length - 1]}
 var sidz=localStorage.getItem('idz');
 if ((sidz === null) || (sidz == "")||(sidz==='undefined')) {var sidz=Date.now();localStorage.setItem('idz',sidz);sidz=localStorage.getItem('idz')}
 var arid = new Array();
 var arco = new Array();
 var sz=localStorage.getItem('zakaz');
 if ((sz != null) && (sz != "")) { arid = sz.split(',');}
 for (var j = 0; j < arid.length; j++)
 {
  vr=localStorage.getItem(arid[j]);
  if ((vr != null) && (vr != "")) {	
   arco[j]=vr;
   arid[j]=arid[j].substr(1);
  }
 }


 var st=dom+'st2.php?ist='+ist+'&idz='+sidz+'&disp='+encodeURIComponent(prim)+'&zakaz='+encodeURIComponent(arid.join('|'))+'&com='+encodeURIComponent(arco.join('|'));
 xhr.open('GET', st, true);
 xhr.send();
 } else {
  var sidz='100';
  var st=dom+'st2.php?ist='+ist+'&idz='+sidz+'&disp='+encodeURIComponent(prim)+'&zakaz='+encodeURIComponent('error Storage')+'&com='+encodeURIComponent('error Storage');
  xhr.open('GET', st, true);
  xhr.send();
  alert('Проблема с localStorage, зайдите с другого браузера(Chrom, Opera или FireFox) ');
 }
}

//-------------------------------------------

function schet(){if (ls){

 var tmp=Date.now();console.log(' SS ');console.log(tmp);

 var v="";
 var id;
 var ei = document.querySelectorAll('input');

 for (var i = 0; i < ei.length; i++) //0 это из меню input, пропускаем
 {
  id=ei[i].id;
//  vr=localStorage.getItem(id);

  //из глобал-массива 
  vr=gzr[id];//код из инпута в формате r101

  var er=document.getElementById('d'+id);//красный
  var ba=document.getElementById('ba'+id);

  console.log(vr);

   if ((vr != null)&&(vr != ""))
   { 
	ei[i].value = vr;
        ei[i].style="color: #000;display:auto;";

	er.style="display:block;";
	er.innerHTML=vr;
	if (ba != null) {document.getElementById('ba'+id).innerHTML = "ИЗМЕНИТЬ";}	

  } else //пустое значение для Код
  {
	ei[i].value = "";
	ei[i].style="color: #BBBBBB;display:auto;";

	er.innerHTML = '&nbsp';
	er.style = "display:none;";
	if (ba != null) {document.getElementById('ba'+id).innerHTML = "ДОБАВИТЬ";}
  }
 }//цикл
 } else {alert('Проблема с localStorage, зайдите с другого браузера(Chrom, Opera или FireFox) ')}
 var tmp=Date.now();console.log(' SE ');console.log(tmp);
}

//-------------------------------------------

function cSave(id) {if (ls){

 var t=localStorage.getItem('t');
 var u=localStorage.getItem('u');

 console.log('u/'+u+'/');
 console.log('t/'+t+'/');
 console.log('id/'+id+'/');


  var sidz=localStorage.getItem('idz'); if ((sidz === null) || (sidz == "")||(sidz==='undefined')) {var sidz=Date.now();  localStorage.setItem('idz',sidz);  sidz=localStorage.getItem('idz'); }
  var zn=document.getElementById(id).value;

  if ((zn=="")||(zn==null)){
    zn="";
//    localStorage.removeItem(id);
//    localStorage.removeItem("t"+id);
  }else{
//    localStorage.setItem(id,zn);
//    localStorage.setItem("t"+id, document.getElementById("t"+id).innerHTML);
  } 

  gzr[id]=zn;
  console.log('zn/'+zn+'/');

/*  отказываемся от LS в пользу переменных JS глобальных полученных из Load
  var arid = new Array();
  var sz="";
  sz=localStorage.getItem('zakaz');
  if ((sz != null) && (sz != "")){arid = sz.split(',');}

  if ( (zn!="")&&(arid.indexOf(id)<0) ) {
    arid.push(id);
    localStorage.setItem('zakaz',arid.join(','));
  }else{
    var ind=arid.indexOf(id);
    if ((zn=="")&&(ind>=0)) {
      arid.splice(ind, 1);
      localStorage.setItem('zakaz',arid.join(','));
    }
  }
*/

  //...

  // One save 

  if (zn==""){zn=0};

 console.log('1');

  var xhr2=new XMLHttpRequest();
 console.log('2');
  var st2=dom+'sc.php?u='+u+'&t='+t+'&idz='+sidz+'&id='+id+'&zn='+encodeURIComponent(zn);
 console.log('3');
 console.log(st2);

  xhr2.open('GET', st2, true);
  xhr2.send();

  xhr2.onload = function() {

   let res = xhr2.response;
   console.log('/'+res+'/');
    var er=document.getElementById('d'+id);//красный

   if (res == '0') {
	er.style="display:none;";
	er.innerHTML='';
    alert('Проблемы при сохранении данных');

   }else{
	er.style="display:block;";
	if (zn==0) {
	  document.getElementById('ba'+id).innerHTML = "ДОБАВИТЬ";
          er.innerHTML='';
	} else {
	  document.getElementById('ba'+id).innerHTML = "ИЗМЕНИТЬ";
	  er.innerHTML=zn;
        }
     //данные сохранены успешно
     console.log(res);
   }
  }



 } else {alert('Проблема с localStorage, зайдите с другого браузера(Chrom, Opera или FireFox) ')}
}

//--------------------------------------------

function fun1(id){
//  if (document.getElementById(id).value == "введите тут колво и нажмите ДОБАВИТЬ"){
//	document.getElementById(id).value = "";}
  document.getElementById(id).style="color: #000;"
}

//-------------------------------------------

function load() {
if (ls){
 var u=localStorage.getItem('u');
 var t=localStorage.getItem('t');
 var idz=localStorage.getItem('idz');

  if ((idz===null)||(idz==='undefined')) {
    gzr ={};
    schet();
  } else {

    var xhr=new XMLHttpRequest();
    var st=dom+'gc.php?idz='+idz+'&u='+u+'&t='+t;
    xhr.open('GET', st, true);
    xhr.send();
    console.log('/'+st+'/');

    xhr.onload = function() {
    var tmp=Date.now();console.log(' L2 ');console.log(tmp);
     let res1 = xhr.response;
     console.log('/'+res1+'/');

     if (res1 !='0') {
      try{
       localStorage.setItem("zjson", res1); //запишем его в хранилище по ключу "myKey"

       //тут у нас(в глобальной VAR JS) все данные по заказу, что бы обходиться без LS
       gzj = JSON.parse(res1); //спарсим его обратно объект

       //глобальный маасив кодов r101 //для чтения в GetSchet
       gzr = gzj['zakaz'];

//alert(gzr["r3148"]);
       localStorage.setItem("zakaz",JSON.stringify(gzr));
//alert(JSON.stringify(gzr));

       for (var key in gzr) {
//        console.log("Ключ: " + key + " значение: " + gzr[key] );
        localStorage.setItem(key, gzr[key]);
       }
      }
      catch(e){console.log(e)};

      schet();

     }else{
      localStorage.setItem("zakaz", '');
      gzr ={};
      schet();
     }
    }
  }
} else {alert('Проблема с localStorage, зайдите с другого браузера(Chrom, Opera или FireFox) ')}
var tmp=Date.now();console.log(' LE ');console.log(tmp);
}



