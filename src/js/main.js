import './lib/lib';

$('div.active').addAttribute('disabled', 'disabled');


$('button').on('click', function () {
    $(this).toggleClass('active');
    $('div').eq(2).toggleAttribute('disabled');
})
$('div').click(function () {
    console.log($(this).index());
})

console.log($('.more').eq(0).siblings());
//console.log($('.findme').siblings());

//console.log($('.some').closest('.findme').addClass('asdasd'));








function sayHello() {
    console.log('sayHello');
}