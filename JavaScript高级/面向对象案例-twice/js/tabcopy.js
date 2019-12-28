var that
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);

        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('ul');
        this.fsection = this.main.querySelector('.tabscon')
        this.init();
    }
    init() {
        that.updateNode();
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.aditTab
            this.sections[i].ondblclick = this.aditTab
        }
    }
    updateNode() {
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive'
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    addTab() {
        that.clearClass();
        var li = '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>'
        var section = ' <section class="conactive">测试1</section>'
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init()

    }
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index
            // console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return
        index--;
        that.lis[index] && that.lis[index].click();

    }
    aditTab() {
        var str = this.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(1)
        this.innerHTML = '<input type="text">'
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
};
new Tab('#tab');