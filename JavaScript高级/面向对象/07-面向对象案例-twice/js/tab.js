var that;
class Tab {
    constructor(id) {
        that = this;
        //用this标明属性！！
        this.box = document.getElementById(id);
        this.lis = this.box.querySelectorAll('li');
        this.sections = this.box.querySelectorAll('.tabscon section');
        this.tabadd = this.box.querySelector('.tabadd');
        this.ul = this.box.querySelector('ul')
        this.tabscon = this.box.querySelector('.tabscon')

        this.init();


    }
    init() {
        that.update();
        this.tabadd.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            //属性命名和方法名字不能重名
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    update() {
        this.lis = this.box.querySelectorAll('li');
        this.sections = this.box.querySelectorAll('.tabscon section');
        this.remove = this.box.querySelectorAll('.icon-guanbi');
        this.spans = this.box.querySelectorAll('li span:first-child');
    }
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (var i = 0; i < that.lis.length; i++) {
            that.lis[i].className = '';
            that.sections[i].className = '';
        }
    }
    addTab() {
        var num = Math.random();
        var li = '<li class="liactive"><span>新选项</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试' + num + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section);
        that.clearClass();
        that.init();

    }

    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (this.parentNode.className.indexOf('liactive') != -1) {
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
        };
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }
}
var tab = new Tab('tab');
// console.log(that.clearClass);
// console.log(this.lis[0].children[0]);