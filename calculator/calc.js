let screen1 = document.getElementById("cal-p");
let screen2 = document.getElementById("cal-q");
let z = document.getElementById("n0");
let o = document.getElementById("n1");
let tw = document.getElementById("n2");
let th = document.getElementById("n3");
let fr = document.getElementById("n4");
let fv = document.getElementById("n5");
let sx = document.getElementById("n6");
let sv = document.getElementById("n7");
let eg = document.getElementById("n8");
let ni = document.getElementById("n9");
let dot = document.getElementById("n.");

function zero()
{
    screen1.value = (screen1.value)+z.innerText;
}
function one()
{
    screen1.value = (screen1.value)+o.innerText;
}
function two()
{
    screen1.value = (screen1.value)+tw.innerText;
}
function three()
{
    screen1.value = (screen1.value)+th.innerText;
}

function four()
{
    screen1.value = (screen1.value)+fr.innerText;
}
function five()
{
    screen1.value = (screen1.value)+fv.innerText;
}
function six()
{
    screen1.value = (screen1.value)+sx.innerText;
}
function seven()
{
    screen1.value = (screen1.value)+sv.innerText;
}
function eight()
{
    screen1.value = (screen1.value)+eg.innerText;
}
function nine()
{
    screen1.value = (screen1.value)+ni.innerText;
}
function period()
{
    screen1.value = (screen1.value)+".";
}

function per()
{
    screen1.value = (screen1.value)+"%";
}

function div()
{
    screen1.value = (screen1.value)+"/";
}
function mul()
{
    screen1.value = (screen1.value)+"x";
}
function sub()
{
    screen1.value = (screen1.value)+"-";
}
function add()
{
    screen1.value = (screen1.value)+"+";
}

function c()
{
    window.location.reload(true);
}
function x()
{ 
    let nw = screen1.value;
    let nw2 = nw+"";
    let damn = nw2.slice(0,nw2.length-1);
    screen1.value = damn;
}

function result()
{ 
   let vq = screen1.value;
   console.log(vq);
   console.log(typeof(vq));
   console.log(vq[2]);
   let pluse = "+";
   let minus = "-";
   let mul = "x";
   let div = "/";
   let per = "%"
   if(vq.includes(pluse))
   {
      let symbol = vq.indexOf("+");
      let v1 = vq.slice(0,symbol);
      let v2 = vq.slice(symbol+1,vq.length);
      console.log(v1);
      console.log(v2);
      screen2.value = parseFloat(v1)+parseFloat(v2);
   }else if (vq.includes(minus))
   {
    let symbol = vq.indexOf("-");
    let v1 = vq.slice(0,symbol);
    let v2 = vq.slice(symbol+1,vq.length);
    console.log(v1);
    console.log(v2);
    screen2.value = parseFloat(v1)-parseFloat(v2);
   }else if (vq.includes(mul))
   {
    let symbol = vq.indexOf("x");
    let v1 = vq.slice(0,symbol);
    let v2 = vq.slice(symbol+1,vq.length);
    console.log(v1);
    console.log(v2);
    screen2.value = parseFloat(v1)*parseFloat(v2);
   }else if (vq.includes(div))
   {
    let symbol = vq.indexOf("/");
    let v1 = vq.slice(0,symbol);
    let v2 = vq.slice(symbol+1,vq.length);
    console.log(v1);
    console.log(v2);
    screen2.value = parseFloat(v1)/parseFloat(v2);
   }else if (vq.includes(per))
   {
    let symbol = vq.indexOf("%");
    let v1 = vq.slice(0,symbol);
    let v2 = vq.slice(symbol+1,vq.length);
    console.log(v1);
    console.log(v2);
    screen2.value = parseInt(v1)/100;
   }
}