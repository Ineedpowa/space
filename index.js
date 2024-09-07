//点击菜单栏切换不同的模块
//核心思想是，点击菜单，给对应的模块加一个active类，active内写display:block

const navs = document.querySelectorAll('.nav')
        console.log(navs);
        for (let i = 0 ; i < navs.length ; i++){
            console.log(navs.length)
            navs[i].addEventListener('click',function(){
                document.querySelector('.active').classList.remove('active')
                document.querySelector(`.contents .content:nth-child(${i+1})`).classList.add('active')
            })
        }