import './lib/lib';

$('div.active').addAttribute('disabled', 'disabled');


$('button').on('click', function () {
    $(this).toggleClass('active');
    $('div').toggleAttribute('disabled');
})





function sayHello() {
    console.log('sayHello');
}