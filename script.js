document.getElementById("title").textContent="Hi👋";
document.querySelector('h1').style.color="red";

let p= document.createElement('p');
p.textContent="New Paragraph";
document.body.append(p);
document.querySelector('p').style.fontSize="90px";document.querySelector('p').style.color="blue";
document.querySelector('p').style.textAlign="center";
document.querySelector('p').style.fontFamily="Arial, sans-serif";
document.querySelector('p').style.fontWeight="bold";
document.querySelector('p').style.textShadow="2px 2px 4px #000000";

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

doocument.getElementById