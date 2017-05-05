$(document).ready(function(){
	getQuote();
	
	function getQuote(){

		var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

		$.getJSON(url,function(data){
			$(".quote").html(data.quoteText);

			if(data.quoteAuthor === "")
			{
				data.quoteAuthor = "unknown"
			}
			$(".author").html(data.quoteAuthor);
		});

		
	}

	$("#quote-btn").click(function(){
		getQuote();
		})
});