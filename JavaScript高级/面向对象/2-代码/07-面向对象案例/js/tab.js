var that;
class Tap {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id)
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.tabadd = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('ul')
        this.tabscon = this.main.querySelector('.tabscon')
        this.init();
    }
    init() {
        this.update();
        this.tabadd.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    update() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('li span:first-child')
    }
    toggleTab() {
        that.clearClass();
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'

    }
    clearClass() {
        for (var i = 0; i < that.lis.length; i++) {
            that.lis[i].className = ''
            that.sections[i].className = ''
        }
    }
    addTab() {
        that.clearClass();
        var num = Math.random();

        var li = '<li class="liactive"><span>新选项</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">测试' + num + '</section>'
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section);
        that.init();

    }
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        // console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // if (index == (that.lis.length - 1)) {
        //     index--;
        //     that.lis[index] && that.lis[index].click();
        // }
        if (this.parentNode.className.indexOf('liactive') > -1) {
            index--;
            that.lis[index] && that.lis[index].click();
        }

    }
    editTab() {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }
}
var tap = new Tap('#tab');
// tap.init();