
$(document).ready(function() {
	//$('ul li')[i].css("display","none");
	console.log("-- hide li value --");
	$('a').each(function(index){
		console.log(user.page);
		console.log(index);
		var i = 1;
		var a = $("li#"+index).html();
		console.log(a);
		//b = $("li").html(a);
		var b = a.replace(" ","_");
		var c = req.user.page;
		if (b == c){
			$('li#'+i).hide();
		}
		i++;
	});
});