window.onload = function() {

	console.log("LET'S GO")

	var paras = document.getElementsByTagName("p");
	var len = paras.length;
	var multi = (255.0 / (len-1));

function RGB2HTML(c)
{
    var rgb = c | (c << 8) | (c << 16);
    rgb = rgb.toString(16).toUpperCase();
    return "#"+rgb;
}



	for (var i=0; i<paras.length; i++) {
			console.log(multi*i)
			console.log(RGB2HTML(multi*i));
			paras[i].style.color = RGB2HTML((multi*i));
    }
}