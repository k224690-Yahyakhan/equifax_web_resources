/*1762909976000*/
function sendPost(n, t) {
    $.ajax({
        type: "POST",
        url: n,
        data: t,
        success: function(n) {},
        error: function(n) {}
    })
}