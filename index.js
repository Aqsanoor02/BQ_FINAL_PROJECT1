// function top_bars(){
//     var x =document.getElementById("links");
//     if (x.style.display==="block"){
//         x.style.display="none";
//     } else{x.style.display="block";
// }
// }
// document.addEventListener('DOMContentLoaded', function() {
//     var bars = document.querySelector('.bars');
//     var links = document.getElementById('links');

//     bars.addEventListener('click', function() {
//         links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
//     });
// });

function toggle_menu(){
    var links = document.querySelector('limks');
    links.computedStyleMap.display=links.computedStyleMap.display ==='flex'? 'none': 'flex';
    
}