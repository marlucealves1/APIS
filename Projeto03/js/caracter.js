const urlParam = new URLSearchParams(window.location.search)
document.write(urlParam)
const idParam = urlParam.get('id')
document.write('<br>', idParam)

function descryptId(id){
    return parseInt(id, 36)
}