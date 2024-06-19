fetch('https://fakestoreapi.com/products').then((myDataResponse)=>{
  // console.log(myDataResponse.json);
  return myDataResponse.json(); //converted Json format to an Object
}).then((objectData)=>{
  // console.log(objectData[0].title);
  let myTableData = "";
  objectData.map((values)=>{
    myTableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
  });
  document.getElementById('myTable_Body').innerHTML = myTableData;
}).catch((error)=>{
  // console.log('Idowu');
})




fetch('https://fakestoreapi.com/products').then((res)=>{
  // console.log(data);
return res.json();
}).then((data)=>{
  console.log(data);
})
