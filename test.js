var Segmenter = require('./lib/Segmenter');
var segmenter = new Segmenter();

var txt = '���������꣱���£������з�̽�����ں��ˡ��촬��������Ŀ�����;����';
console.log('txt: ', txt);

var result = segmenter.analyze(txt);
console.log('result: ', result);