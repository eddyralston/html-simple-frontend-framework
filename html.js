function _methods_(parent){
    parent.on=function(event,callback){
        parent.addEventListener(event,callback)
        return parent;
    }
    parent.attr=function(name){
        return parent.getAttribute(name)
    }
    return parent;
}

function html(string){

    const html_to_dom = str => {
        const el = document.createElement('div');
        el.innerHTML = str;
        return el.firstChild;
    }

    const queryAll = (host, sel, cb) => {
        const nodes = host.querySelectorAll('['+sel+']');
        for (let i = 0; i < nodes.length; i++) {
            _methods_(nodes[i]);
            cb(nodes[i], nodes[i].attr(sel));
        }
    }

    function queryChildren(host){
        var data = {}; var child = {};

        queryAll(host,'data', (el,attr) => {
            el.on('input',()=>data[attr] = el.value)
        })

        queryAll(host,'name', (el,attr) => {
            child[attr] = el
        })
        return {child,data}
    }

    var self = html_to_dom(string);

    self.ext = function(callback){
        var {child,data} = queryChildren(self);
        callback({child,data})
        return self;
    }

    return self
}