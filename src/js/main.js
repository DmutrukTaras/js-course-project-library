import './lib/lib';

$('#first').click(() => {
    $('div.w-500').eq(0).fadeOut(800);
});

$('[data-count="second"]').click(() => {
    $('div.w-500').eq(1).fadeOut(800);
});


$('button').eq(2).click(() => {
    $('div.w-500').fadeOut(800);
});