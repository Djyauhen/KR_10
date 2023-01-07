//Срабатывание Меню на адаптиве

$('#burger').click(function () {
    $('#menu').addClass('open');
});

$('#menu').click(function () {
    $('#menu').each(function () {
        $('#menu').removeClass('open')
    })
});


// Loader и Валидация

(() => {
    let order = $('#order');
    let name = $('#name');
    let phone = $('#phone-number');
    let orderSuccess = $('#order-success');

    function resetForm() {
        $('#form').remove();
        orderSuccess.css('display', 'flex');
    }

    let loader = $('.loader');

    $('#submit').click(function () {

        let hasError = false;
        loader.css('display', 'flex');
        order.css({
            "border": "1px solid rgb(130, 19, 40)"
        });
        name.css({
            "border": "1px solid rgb(130, 19, 40)"
        });
        phone.css({
            "border": "1px solid rgb(130, 19, 40)"
        });

        $('.error-input').hide();

        if (!order.val()) {
            order.next().show();
            order.css({
                "border": "1px solid rgb(255, 0, 0)"
            });
            hasError = true;
            loader.hide();
        }
        if (!name.val()) {
            name.next().show();
            name.css({
                "border": "1px solid rgb(255, 0, 0)"
            });
            hasError = true;
            loader.hide();
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css({
                "border": "1px solid rgb(255, 0, 0)"
            });
            hasError = true;
            loader.hide();
        }

        if (!hasError) {

            // ajax

            $.ajax({
                method: "POST",
                url: 'http://testologia.site/checkout',
                data: {product: order.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('#submit').prop('click', resetForm);
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                    console.log(msg);
                });
        }
    })
})()
