// function serializeToJSON(form) {
//     let o = {}
//     let $form = $(form)
//     let a = $form.serializeArray()
//     a.forEach((t) => {
//         o[t.name] = t.value
//     })
//     return o
// }
function serializeToJson(form) {
    var result = {};
    // [{name: 'email', value: '用户输入的内容'}]
    var f = form.serializeArray();
    f.forEach(function(item) {
        // result.email
        result[item.name] = item.value;
    });
    return result;
}