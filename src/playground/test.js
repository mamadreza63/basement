// $(document).ready(function() {
//     $("#btn1").click(function () {
//         $("#test").text(function (i, origText) {
//             return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
//         });
//     });
//     $("#btn2").click(function () {
//     alert("HTML: " + $("#test").html());
//     })

    
// })

// function b() {}

// function a() {};
// a.prototype.test = 'hi';
// a.prototype.__porto__ = b;
// console.log(a.prototype);

// var courses  = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'},
//     {id: 3, name: 'course3'}
// ];
// var index = courses.indexOf(course);
// console.log(index);


// function a(resolve) {
//     setTimeout(function() {
//         console.log('a');
//         resolve();
//     }, 3000);
// }

// function b() {
//     console.log('b')
// }


// var promis = new Promise( function(resolve, reject) {
//     a(resolve);
// });

// promis.then(function() {b()});


$(document).ready(function(){
    $('#btn').on('click', function() {
        $('label').text($('input').val())
    })
});
