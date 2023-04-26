// document.getElementById('img').onmousemove = function(e) {

// }
// const btu = document.getElementById('btu');
// btu.addEventListener('click', e => {
//     document.querySelector('.rend').style.height = '90%';
//     document.querySelector('.rend').style.width = '90%';
// });
// const btd = document.getElementById('btd');
// btd.addEventListener('click', e => {
//     document.querySelector('.rend').style.height = '50%';
//     document.querySelector('.rend').style.width = '50%';
// });


start();
window.addEventListener('resize', start);

function start(){

    let standartW = 1920;
    let standartH = 1080;

    console.log(standartW);

    let newW = (document.documentElement.clientWidth * 100) / standartW ;
    let newH = (document.documentElement.clientHeight * 100) / standartH ;

    let stg1W = 1100;
    let stg1H = 500;
    let stg2W = 600;
    let stg2H = 500;
    let stg2L = 1100;
    let stoW = 1700;
    let stoH = 350;
    let stoT = 500;


    let g1NewW = ( Math.round(newW)  * stg1W ) / 100;
    let g1NewH = ( Math.round(newH)  * stg1H ) / 100;

    let g2NewW = ( Math.round(newW)  * stg2W ) / 100;
    let g2NewH = ( Math.round(newH)  * stg2H ) / 100;
    let g2NewL = ( Math.round(newW)  * stg2L ) / 100;

    let oNewW = ( Math.round(newW)  * stoW ) / 100;
    let oNewH = ( Math.round(newH)  * stoH ) / 100;
    let oNewT = ( Math.round(newH)  * stoT ) / 100;

    console.log( Math.round(g1NewW) + " " + Math.round(g1NewH) );

    document.querySelector('.g1').style.width = Math.round(g1NewW) + 'px';
    document.querySelector('.g1').style.height = Math.round(g1NewH) + 'px';

    document.querySelector('.g2').style.width = Math.round(g2NewW) + 'px';
    document.querySelector('.g2').style.height = Math.round(g2NewH) + 'px';
    document.querySelector('.g2').style.left = Math.round(g2NewL) + 'px';

    document.querySelector('.o').style.width = Math.round(oNewW) + 'px';
    document.querySelector('.o').style.height = Math.round(oNewH) + 'px';
    document.querySelector('.o').style.top = Math.round(oNewT) + 'px';


}