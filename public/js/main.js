let upload_btn = document.getElementById('upload_file_btn');
let upload_box = document.getElementById('upload_box')

upload_btn.addEventListener('click', () => {
    upload_box.style.display = "flex"
});

const getBinary = () => {
    const f = document.getElementById("file").files[0]; 
    const reader = new FileReader();
    reader.onload = function(evt) { 
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/upload');

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(data);
        }};
        const data = `{"name": "${f.name}", "type": "${f.type}", "size": "${f.size}", "file": "${evt.target.result}"}`;

        xhr.send(data);
    };
    reader.readAsDataURL(f)
    setTimeout(()=>{
        window.location.reload(true)
    },400)
}

const binary = (e) => {
    console.log(e)
}

const get_file = (id) =>{
    window.location.replace(`/download/${id}`)
}