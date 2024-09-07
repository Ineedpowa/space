export function goals(){
    //从本地存储获取数据
    const items = JSON.parse(localStorage.getItem("items")) || []

    //获取要写入新事项的位置
    const notes = document.querySelector('ul')
goals
    //把从本地存储获取到的数据写入页面
    function render(){
        const newItems = items.map(function(ele,index){
            return`
                <li>
                    ${index+1}.&nbsp;
                    <input type="checkbox">
                    ${ele}
                    <button class = "delete" data-id = "${index}">删除</button>
                </li>
            `})
        notes.innerHTML = newItems.join('')
    }

    //运行render，在打开页面时渲染一次
    render()

    //获取新输入的数据
    const newItem = document.querySelector('.newItem')
    //获取表单域
    const form = document.querySelector('form')

    //设置"添加"按钮的功能
    form.addEventListener('submit',function(e){
        //阻止默认提交事件
        e.preventDefault()
        //向items写入新事项
        if (newItem.value){
            items.push(newItem.value)
            //运行render，向页面写入内容
            render()
            //清除表单域内容
            this.reset()
            //写入本地存储进行保存
            localStorage.setItem("items" , JSON.stringify(items))
        }else{
            alert('请输入待办')
        }
        
    })

    //设置删除按钮的功能
    //给包含所有删除按钮的父级元素ul注册点击事件
    notes.addEventListener('click',function(e){
        //判断点击的是不是删除按钮
        if (e.target.className === "delete"){
            //先弹出一个判断框，让用户确认
            if (confirm('真的要删除吗？')){
                //删除对应的文字
                items.splice(e.target.dataset.id,1)
                //重新渲染
                render()
                //更新本地存储
                localStorage.setItem("items" , JSON.stringify(items))
            }
        }
    })
}

export function works(){
    const books = [
        {title : "《还未诞生的作品1》" , cover : "materal/半身人.jpg" , url : "./books/ysjdmsq.html"},
        {title : "《还未诞生的作品2》" , cover : "materal/半身人.jpg" },
        {title : "《还未诞生的作品3》" , cover : "materal/半身人.jpg" },
    ]
    const bookshelf = document.querySelector("#works")
    function renderBooks(){
        const newItems = books.map(function(ele){
            return`
                <div class="book">
                    <div class="cover">
                        <a href=${ele.url} target="_self">
                            <img src="${ele.cover}" alt="${ele.title}">
                        </a>
                    </div>
                    <div class="title">${ele.title}</div>
                </div>
            `})
            bookshelf.innerHTML = newItems.join('')
    }
    renderBooks()
}