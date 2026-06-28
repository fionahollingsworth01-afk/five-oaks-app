fetch('family-data.json').then(r=>r.json()).then(d=>{
const div=document.getElementById('tree');
function node(n){
 const li=document.createElement('li');
 li.textContent=n.name;
 if(n.children){const ul=document.createElement('ul');n.children.forEach(c=>ul.appendChild(node(c)));li.appendChild(ul);}
 return li;
}
const ul=document.createElement('ul');d.families.forEach(f=>ul.appendChild(node(f)));div.appendChild(ul);
});