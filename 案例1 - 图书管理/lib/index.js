let fn = ()=>{
    axios({
        method:'GET',
        url:'http://www.itcbc.com:3006/api/getbooks',
        params:{
            appkey:'laotang110022'
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