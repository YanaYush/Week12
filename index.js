function checkName() {
    input_wrapper__name.value = capitalizeFirstLetter(input_wrapper__name.value)
}

function capitalizeFirstLetter(str) {
    str = str.toLowerCase()
    str = str.replace(/  +/g, ' ');
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2
}

function showComment() {

    const censored = Censurator(comment.value)
    let output = document.querySelector('.chat_wrapper');
    let html = output.innerHTML;
    html = html + '<p>' + input_wrapper__name.value + '</p>'
    html = html + '<img src="' + input_wrapper__picture.value + '"></img>'
    html = html + '<p>' + censored + '</p>'
    html = html + '<p>---------------</p><br>'
    console.log(html)
    output.innerHTML = html
}

function Censurator(str) {
    var blockedwords = ['viagra', "xxx", "chmo"]

    for (var i = 0; i < blockedwords.length; i++) {
        str = str.toLowerCase().replace(blockedwords[i], '***');
    }
    return str
}

