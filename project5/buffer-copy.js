/*
Node 缓冲区拷贝语法如下所示：

buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
*/
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);

console.log(buf1.toString());