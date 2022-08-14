# html-simple-frontend-framework

```javascript
var element = html(`<div>
<input data="title">
<button child="submit">submit</button>
</div>`).ext((data,child)=>{
var {submit} = child
  submit.on('click',()=>{
    console.log(data)
  })
})

```
