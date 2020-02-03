
function voltarIndex() {
    url = 'index.html';
    window.open(url, "_self");
}


function setDocumentCookie(path) {
    document.cookie = "paginaAnterior=" + path + "expires=Wed, 18 Dec 2023 12:00:00 GMT";
}