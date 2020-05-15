var pass = 50;
var score = 75;
var msg;

if (score >= pass) {
  msg = 'Congratulations, you passed!';

}else {
  msg = 'Have anather go!';
}



var startItem = document.getElementById('two');
var prevItem = startItem.firstChild;
var nextItem = startItem.lastChild;

prevItem.setAttribute('class', 'complete');
nextItem.setAttribute('class', 'cool');


/*
ACCESS AND UPDATE A TEXT NODE WITH NODEVALUE

WHEN YOU SELECT A TEXT NODE, YOU CAN RETRIEVE OR AMEND THE CONTENT USING THE NODEVALUE PROPERTY

e.g.
<li id = "one"><em>fresh</em>figs</li>

document.getElementById('one').firstChild.nextSibling.nodeValue;

    //The <li> element node is selected using thr getElementByid method.
    //The first child of <li> is the <em>element
    //The text node is the next sibling of that <em> element.
    //You have the next node and can access its contets using nodeValue

in order to use nodeValue, you must be on a text node, not the element that contains the text.

the example shows that navigating from the element node to a text node can be complicated




*/
