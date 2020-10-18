console.log("madeit")

var ent = document.createEvent('Events');
ent.initEvent('keydown', true, false);
ent.keyCode = 13;
ent.which = 13;
ent.charCode = 13;
ent.key = 'Enter';
ent.code = 'Enter';

var ta = document.createEvent('Events');
ta.initEvent('keydown', true, false);
ta.keyCode = 9;
ta.which = 9;
ta.charCode = 9;
ta.key = 'Tab';
ta.code = 'Tab';


for (let i = 0; i < 18; i++) {
    document.dispatchEvent(ta)
}
document.dispatchEvent(ent)