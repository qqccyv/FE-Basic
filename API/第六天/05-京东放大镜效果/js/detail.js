window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft - mask.offsetWidth / 2;
        var y = e.pageY - this.offsetTop - mask.offsetHeight / 2;
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        x = x <= 0 ? 0 : x;
        x = x >= maskMax ? 97 : x;
        y = y <= 0 ? 0 : y;
        y = y >= maskMax ? 97 : y;
        mask.style.left = x + 'px';
        mask.style.top = y + 'px';
        var bigImg = document.querySelector('.bigImg');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        bigImg.style.left = -x / maskMax * bigMax + 'px';
        bigImg.style.top = -y / maskMax * bigMax + 'px';
    })

})