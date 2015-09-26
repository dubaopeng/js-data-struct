/***************************************************************************
 > File Name        : index.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-18 10:44
 ***************************************************************************/

var LinkedList = require('./LinkedList');
var DList = require('./DoubleLinkedList');
var Dictionary = require('./Dictionary');
var Hashtable = require('./hashtable');
var llist = new LinkedList();
var dlist = new DList();
var dic = new Dictionary();
var ht = new Hashtable();

ht.put("marry","13301028044");
ht.put("john","13901028044");
ht.put("marry","13361028044");
ht.display();


/*
dic.add("Mike","123");
dic.add("David","345");
dic.add("John","678");
console.log(dic.length);
dic.remove("David");
console.log(dic.length);
dic.clear();
console.log(dic.length);

dic.showAll();
llist.insert("5");
llist.insert("6","5");
llist.add("7");
llist.remove("6");

llist.display();


dlist.add("4");
dlist.insert("8");
dlist.add("5");
dlist.insert("6","4");

dlist.dispReverse();
*/



