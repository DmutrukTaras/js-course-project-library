import './lib/lib';

$('#first').click(() => {
    $('div.w-500').eq(0).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div.w-500').eq(1).fadeToggle(800);
});


$('button').eq(2).click(() => {
    $('div.w-500').fadeToggle(800);
});


$('#modalTriger').click(() => {
    $('#modalTriger').createModal({
        text: {
            title: 'Modal title',
            body: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ab
            consequatur delectus aliquam dolorem sunt nemo ad, nobis doloremque at necessitatibus officiis
            voluptatibus et! Voluptatum optio sequi beatae!`
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mb-10', 'w-50'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success', 'mb-10', 'w-50'],
                    false,
                    () => {
                        console.log('btn-success');
                    }
                ],
                [
                    'One more btn',
                    ['btn-warning', 'mt-20', 'd-block', 'w-100'],
                    false,
                    () => {
                        console.log('btn-warning');
                    }
                ]
            ]
        }
    });
});