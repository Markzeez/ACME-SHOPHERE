
async function ImagetoBase64(file){
    const reader = new FileReader
    reader.readAsDataURL(file)

    const data = new Promise((resole,reject)=>{
        reader.onload = ()=> resolveBaseUrl(reader.result)
        reader.onerror = err => reject(err)
    })

    return data

}

export {ImagetoBase64}