var ls=false;try{var t0='t0';localStorage.setItem(t0,t0);localStorage.removeItem(t0);ls=true}catch(e){ls= false};
var dom='https://delava.tk/';

//---

function st2(ist) { 
 var prim=screen.availWidth+' * '+screen.availHeight+' / '+screen.width+' * '+screen.height+' ('+navigator.platform+')';
 var xhr=new XMLHttpRequest();
if (ls){
 if (ist==''){var p = window.location['pathname'].split('/');ist=p[p.length - 1]}
 var sidz=localStorage.getItem('idz');
 if ((sidz === null) || (sidz == "")) {var sidz=Date.now();localStorage.setItem('idz',sidz);sidz=localStorage.getItem('idz')}
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


//---
