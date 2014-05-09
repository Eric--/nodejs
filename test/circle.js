/**
 * 圆形模块
 */

var PI = Math.PI;

exports.area = function(r)
{
	return PI * r * r;
};

exports.circumference = function(r)
{
	return 2 * PI * r;
};