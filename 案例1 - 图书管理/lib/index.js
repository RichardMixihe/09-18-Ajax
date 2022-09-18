 function fn(){
    axios({
        method:'GET',
        url:'http://www.itcbc.com:3006/api/getbooks',
        params:{
            appkey:'Richard1'
        }
    }).then(({data:res})=>{
        const arr = res.data.map(item => {
            return `
            <tr>
          <th scope="row">${item.id}</th>
          <td>${item.bookname}</td>
          <td>${item.author}</td>
          <td>${item.publisher}</td>
          <td>
            <button type="button" class="btn btn-link btn-sm btn-delete">删除</button>
            <button type="button" class="btn btn-link btn-sm btn-update">编辑</button>
          </td>
        </tr>`
        })
        document.querySelector('tbody').innerHTML= arr.join('');//返回文档中匹配指定 CSS选择器的一个元素。!!注意仅仅返回匹配指定选择器的第一个元素
    })
}
fn();

// -------------------让模态框显示-----------------------
const myModal = new bootstrap.Modal(document.querySelector('#addModal'));

document.querySelector('#add-btn'). addEventListener('click',function () {
    myModal.show()
})//绑定事件;//返回文档中匹配指定 CSS选择器的一个元素。!!注意仅仅返回匹配指定选择器的第一个元素
document.querySelector('#addBtn'). addEventListener('click',function () {
    // 最终目标：把输入框的值，提交给接口
    const bookname = document.querySelector('#addForm [name = bookname]').value;//返回文档中匹配指定 CSS选择器的一个元素。!!注意仅仅返回匹配指定选择器的第一个元素
    const author = document.querySelector('#addForm [name = author]').value;//返回文档中匹配指定 CSS选择器的一个元素。!!注意仅仅返回匹配指定选择器的第一个元素
    const publisher = document.querySelector('#addForm [name = publisher]').value;//返回文档中匹配指定 CSS选择器的一个元素。!!注意仅仅返回匹配指定选择器的第一个元素
    console.log(bookname, author, publisher);
    myModal.hide();
    axios({
        method:'POST',
        url:'http://www.itcbc.com:3006/api/addbook',
        data:{
            bookname:bookname,
            author:author,
            publisher:publisher,
            appkey:'Richard1'
        }
    }).then(({data:res})=>{
        console.log(res);
        myModal.hide();
        fn();

    })  

})//绑定事件;//返回文档中匹配指定 CSS选择器的一个元素。!!注意仅仅返回匹配指定选择器的第一个元素
