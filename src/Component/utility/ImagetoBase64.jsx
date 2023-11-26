

async function ImagetoBase64(file){
    const reader = new FileReader()
    reader.readAsDataURL(file)

    const data = new Promise((resolve,reject)=>{
        reader.onload = ()=> resolve(reader.result)
        reader.onerror = err => reject(err)
    })

    return data
}

export {ImagetoBase64}


// function resolveBase64(base64String) {
//     // Your logic to handle the base64String
//     console.log(base64String);
//   }

//   const file = /* your file here */;

//   ImagetoBase64(file)
//     .then((result) => {
//       // Handle the result, which is the resolved value from resolveBase64
//       console.log(result);
//     })
//     .catch((error) => {
//       // Handle errors
//       console.error(error);
//     });
  