function getQueryVariable(variable) {
    var firstindex =variable.indexOf("?")
    var query =variable.slice(firstindex+1)
    var vars = query.split('&');
    var newobj={}
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        newobj[pair[0]]=+pair[1]
    }
    console.log(newobj);
}

getQueryVariable("https://www.digikala.com/best-selling?id=1&_page=7")
