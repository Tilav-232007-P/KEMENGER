let html = document.documentElement
let img1 = document.querySelector('footer .container_footer .img1').addEventListener('click', jack)
function jack(event0) {
    event0.preventDefault()
    html.scrollIntoView({
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
    })
}
//Якорь
let ss1 = document.querySelector('.ss1').addEventListener('click', jacor1)
let ss2 = document.querySelector('.ss2').addEventListener('click', jacor2)
let ss3 = document.querySelector('.ss3').addEventListener('click', jacor3)
let ss4 = document.querySelector('.ss4').addEventListener('click', jacor4)
let ss5 = document.querySelector('.ss5').addEventListener('click', jacor5)
//footer
let sss1 = document.querySelector('footer .container_footer .ssilki .ss1').addEventListener('click', jacor1)
let sss2 = document.querySelector('footer .container_footer .ssilki .ss2').addEventListener('click', jacor2)
let sss3 = document.querySelector('footer .container_footer .ssilki .ss3').addEventListener('click', jacor3)
let sss4 = document.querySelector('footer .container_footer .ssilki .ss4').addEventListener('click', jacor4)
let sss5 = document.querySelector('footer .container_footer .ssilki .ss5').addEventListener('click', jacor5)
//блок из бургер меню
let ssss1 = document.querySelector('.container .big_box .header_adaptiv .ss1').addEventListener('click', jacor1)
let ssss2 = document.querySelector('.container .big_box .header_adaptiv .ss2').addEventListener('click', jacor2)
let ssss3 = document.querySelector('.container .big_box .header_adaptiv .ss3').addEventListener('click', jacor3)
let ssss4 = document.querySelector('.container .big_box .header_adaptiv .ss4').addEventListener('click', jacor4)
let ssss5 = document.querySelector('.container .big_box .header_adaptiv .ss5').addEventListener('click', jacor5)
//блоки
let mini_box = document.querySelector('.container .mini_box')
let katalog = document.querySelector('.container .katalog ')
let sertificat = document.querySelector('.container .sertificat')
let otzivi = document.querySelector('.container .otzivi')
let contact = document.querySelector('.container .kontact')
//функции
//1
function jacor1(event) {
    event.preventDefault()
    mini_box.scrollIntoView({
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
    })
}
//2
function jacor2(event2) {
    event2.preventDefault()
    katalog.scrollIntoView({
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
    })
}
//3
function jacor3(event3) {
    event3.preventDefault()
    sertificat.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
    })
}
//4
function jacor4(event4) {
    event4.preventDefault()
    otzivi.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
    })
}
//5
function jacor5(event) {
    event.preventDefault()
    contact.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
    })
}

//Слайдер
let left = document.querySelector('.container .katalog .victor1')
let right = document.querySelector('.container .katalog .victor2')
let slider_line = document.querySelector('.container .katalog .slider .slider_line')
let offset = 0
let i1 = 400
let i2 = 1200
right.onclick = () => {
    offset = offset + i1
    if (offset > i2) {
        offset = 0
    }
    slider_line.style.left = -offset + 'px'
}
left.onclick = () => {
    offset = offset - i1
    if (offset < 0) {
        offset = i2
    }
    slider_line.style.left = -offset + 'px'
}
if (html.offsetWidth < 1421) {
    i1 = 333
    i2 = 999
    offset = -67
}
if (html.offsetWidth < 1201) {
    i1 = 326
    i2 = i1 * 4
    offset = -74
}
if (html.offsetWidth < 826) {
    i2 = i1 * 5
}
if (html.offsetWidth <= 422) {
    offset = -150
    i1 = 250
    i2 = i1 * 5
}


//Слайдер 2
let left2 = document.querySelector('.container .otzivi .arrow_otziv_left')
let right2 = document.querySelector('.container .otzivi .arrow_otziv_right')
let slider_line2 = document.querySelector('.container .otzivi .slider2 .slider_line2')
let off = 0
let i12 = 400
let i22 = 1200
right2.onclick = () => {
    off = off + i12
    if (off > i22) {
        off = 0
    }
    slider_line2.style.left = -off + 'px'
}
left2.onclick = () => {
    off = off - i12
    if (off < 0) {
        off = i22
    }
    slider_line2.style.left = -off + 'px'
}
if (html.offsetWidth < 1426) {
    off = -80
    i12 = 320
    i22 = 960
}
if (html.offsetWidth < 1201) {
    i12 = 326
    off = -72
    i22 = 1304
}
if (html.offsetWidth < 826) {
    i22 = 1630
}
if (html.offsetWidth < 611) {
    off = -129
    i12 = 217
    i22 = i12 * 5
}


//Подробнее
let bir = document.querySelector('.bir')
let ikki = document.querySelector('.ikki')
let uch2 = document.querySelector('.uch2')
let turt = document.querySelector('.turt')
let besh = document.querySelector('.besh')
//Блоки
let block1 = document.querySelector('.od')
let block2 = document.querySelector('.od1')
let block3 = document.querySelector('.od2')
let block4 = document.querySelector('.od3')
let block5 = document.querySelector('.od4')
//Cами брашуры
let igg = document.querySelector('.igg')
let igg2 = document.querySelector('.igg2')
let igg3 = document.querySelector('.igg3')
let igg4 = document.querySelector('.igg4')
let igg5 = document.querySelector('.igg5')
//Собития 
//1 Брашура
bir.onclick = () => {
    bir.style.display = 'none'
    katalog.classList.add('sm')
    igg.classList.add('sm1')
    block1.classList.remove('not_active')
}
//назад
block1.onclick = () => {
    bir.style.display = 'block'
    katalog.classList.remove('sm')
    igg.classList.remove('sm1')
    block1.classList.add('not_active')
    //2
    ikki.style.display = 'block'
    katalog.classList.remove('sm')
    igg2.classList.remove('sm1')
    block2.classList.add('not_active')
    //3
    uch2.style.display = 'block'
    katalog.classList.remove('sm')
    igg3.classList.remove('sm1')
    block3.classList.add('not_active')
    //4
    turt.style.display = 'block'
    katalog.classList.remove('sm')
    igg4.classList.remove('sm1')
    block4.classList.add('not_active')
    //5
    besh.style.display = 'block'
    katalog.classList.remove('sm')
    igg5.classList.remove('sm1')
    block5.classList.add('not_active')
}
//2 Брашура
ikki.onclick = () => {
    ikki.style.display = 'none'
    katalog.classList.add('sm')
    igg2.classList.add('sm1')
    block2.classList.remove('not_active')
}
//назад
block2.onclick = () => {
    ikki.style.display = 'block'
    katalog.classList.remove('sm')
    igg2.classList.remove('sm1')
    block2.classList.add('not_active')
    //1
    bir.style.display = 'block'
    katalog.classList.remove('sm')
    igg.classList.remove('sm1')
    block1.classList.add('not_active')
    //3
    uch2.style.display = 'block'
    katalog.classList.remove('sm')
    igg3.classList.remove('sm1')
    block3.classList.add('not_active')
    //4
    turt.style.display = 'block'
    katalog.classList.remove('sm')
    igg4.classList.remove('sm1')
    block4.classList.add('not_active')
    //5
    besh.style.display = 'block'
    katalog.classList.remove('sm')
    igg5.classList.remove('sm1')
    block5.classList.add('not_active')

}
//3 Брашура
uch2.onclick = () => {
    uch2.style.display = 'none'
    katalog.classList.add('sm')
    igg3.classList.add('sm1')
    block3.classList.remove('not_active')
}
block3.onclick = () => {
    uch2.style.display = 'block'
    katalog.classList.remove('sm')
    igg3.classList.remove('sm1')
    block3.classList.add('not_active')
    //1
    bir.style.display = 'block'
    katalog.classList.remove('sm')
    igg.classList.remove('sm1')
    block1.classList.add('not_active')
    //2
    ikki.style.display = 'block'
    katalog.classList.remove('sm')
    igg2.classList.remove('sm1')
    block2.classList.add('not_active')
    //4
    turt.style.display = 'block'
    katalog.classList.remove('sm')
    igg4.classList.remove('sm1')
    block4.classList.add('not_active')
    //5
    besh.style.display = 'block'
    katalog.classList.remove('sm')
    igg5.classList.remove('sm1')
    block5.classList.add('not_active')

}
//4 Брашура
turt.onclick = () => {
    turt.style.display = 'none'
    katalog.classList.add('sm')
    igg4.classList.add('sm1')
    block4.classList.remove('not_active')
}
block4.onclick = () => {
    turt.style.display = 'block'
    katalog.classList.remove('sm')
    igg4.classList.remove('sm1')
    block4.classList.add('not_active')
    //1
    bir.style.display = 'block'
    katalog.classList.remove('sm')
    igg.classList.remove('sm1')
    block1.classList.add('not_active')
    //2
    ikki.style.display = 'block'
    katalog.classList.remove('sm')
    igg2.classList.remove('sm1')
    block2.classList.add('not_active')
    //3
    uch2.style.display = 'block'
    katalog.classList.remove('sm')
    igg3.classList.remove('sm1')
    block3.classList.add('not_active')
    //5
    besh.style.display = 'block'
    katalog.classList.remove('sm')
    igg5.classList.remove('sm1')
    block5.classList.add('not_active')
}
//5 Брашура
besh.onclick = () => {
    besh.style.display = 'none'
    katalog.classList.add('sm')
    igg5.classList.add('sm1')
    block5.classList.remove('not_active')
}
block5.onclick = () => {
    besh.style.display = 'block'
    katalog.classList.remove('sm')
    igg5.classList.remove('sm1')
    block5.classList.add('not_active')
    //1
    bir.style.display = 'block'
    katalog.classList.remove('sm')
    igg.classList.remove('sm1')
    block1.classList.add('not_active')
    //2
    ikki.style.display = 'block'
    katalog.classList.remove('sm')
    igg2.classList.remove('sm1')
    block2.classList.add('not_active')
    //3
    uch2.style.display = 'block'
    katalog.classList.remove('sm')
    igg3.classList.remove('sm1')
    block3.classList.add('not_active')
    //4
    turt.style.display = 'block'
    katalog.classList.remove('sm')
    igg4.classList.remove('sm1')
    block4.classList.add('not_active')
}
//Бургер меню
let burger_menu = document.querySelector('.container .big_box header .burger_menu')
let burger_menu2 = document.querySelector('.container .big_box header .nn')
let header_adaptiv = document.querySelector('.header_adaptiv')
let menu1 = document.querySelector('.container .big_box header .burger_menu .menu1')
let menu2 = document.querySelector('.container .big_box header .burger_menu .menu2')
let menu3 = document.querySelector('.container .big_box header .burger_menu .menu3')
let black_box = document.querySelector('.black_box')
burger_menu.onclick = () => {
    burger_menu2.classList.toggle('nu')
    header_adaptiv.classList.toggle('top1')
    header_adaptiv.style.display = 'flex'
    menu1.classList.toggle('menu_1')
    menu2.classList.toggle('menu_2')
    menu3.classList.toggle('menu_3')
    black_box.classList.toggle('op')
    black_box.classList.remove('not_active')
}
let zayav = document.querySelector('.container .big_box .blockk .zayav').addEventListener('click', zayav1)
let but = document.querySelector('.container .katalog .slider .slider_line .hh .item .but').addEventListener('click', zayav1)
let black2 = document.querySelector('.black2')
let zyav = document.querySelector('.zyav')
let whote = document.querySelector('.whote')
function zayav1() {
    burger_menu.classList.add('z')
    black2.classList.toggle('op2')
    black2.classList.remove('not_active')
    setTimeout(() => {
        whote.classList.add('bdt')
        zyav.classList.add('bdt1')
    }, 500)
}
let btn = document.querySelector('.zyav .inputi .btn').addEventListener('click', hpt)
let gotovo = document.querySelector('.gotovo')
let htp = document.querySelector('.htp')
function hpt(event) {
    event.preventDefault()
    gotovo.classList.add('bdt2')
    setTimeout(() => {
        gotovo.classList.toggle('bdt2')
        whote.classList.remove('bdt')
        zyav.classList.remove('bdt1')
    }, 4000)
    setTimeout(()=>{
        burger_menu.classList.remove('z')
        black2.classList.add('not_active')
        black2.classList.toggle('op2')
    },4700)
}

