/***************************************************************************
 > File Name        : Node.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-27 14:43
 ***************************************************************************/

(function(){
    "use strict";

    function Node(element){
        this.element = element;
        this.next = null;
    }

    module.exports = Node;
})();
