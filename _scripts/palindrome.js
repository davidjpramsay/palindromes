function palin_btn(x1) {
	d3.select("#finalstatement").remove();
	d3.select("#textConatiner").html("");

	var numString = String(x1);
	var n = numString.length;

	var i = 0;
	var nstr = numString;

	if (nstr !== reverseString(nstr)) {
		d3.select("#textConatiner").append("p").text(nstr);
	};

	while (nstr !== reverseString(nstr)) {
		d3.select("#textConatiner").append("p").text("+ " + reverseString(nstr)).style("text-decoration", "underline");
		nstr = String(parseInt(nstr) + parseInt(reverseString(nstr)));
		d3.select("#textConatiner").append("p").text(nstr);
		i++;
	}
	
	d3.select("#buildArea").append("p").text(numString + " is a " + i + " step palindrome.").attr("id", "finalstatement");

// 	Make the contents of build area visible
    d3.select("#buildArea").style("display", "block");
}


//	This is function reverses a string
	function reverseString(str) {
	    return str.split("").reverse().join("");
	}