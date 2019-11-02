$(function() {
    $("input.checkall").change(function() {
        $(".j-checkbox, input.checkall").prop("checked", $(this).prop("checked"));
    });
    $(".j-checkbox").change(function() {
        var flag = $(".j-checkbox").length === $(".j-checkbox:checked").length;
        $(".checkall").prop("checked", flag);
    });
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        var p = $(this).parents(".p-num").siblings('.p-price').html().substr(1);
        $(this).parents(".p-num").siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    });
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();

        if (n > 1) {
            n--;
            $(this).siblings('.itxt').val(n);
        } else {
            return false;
        }
        var p = $(this).parents(".p-num").siblings('.p-price').html().substr(1);

        $(this).parents(".p-num").siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    });
    $('.itxt').change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        // p = p.substr(1);
        $(this).parents(".p-num").siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    })
    getSum();

    function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    };

    $('.clear-all').click(function() {
        $('.cart-item').remove();
    })
    $(".p-action a").click(function() {
        $(this).parents('.cart-item').remove();
    })
    $('.remove-batch').click(function() {
        $('.cart-item .j-checkbox:checked').parents('.cart-item').remove();
    })
})