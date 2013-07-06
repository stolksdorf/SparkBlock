Check out the demo [here](http://stolksdorf.github.io/SparkBlock)

# What is SparkBlock?
SparkBlock is a Javascript library that turns series of data into little ASCII bar graphs. It was inspired from this [post](http://www.datadrivenconsulting.com/2010/06/twitter-sparkline-generator/).

	var barChart = sparkblock([66, 61, 26, 76, 17, 84, 44,76, 79, 73, 80]);

	$(example).html(barChart);

SparkBlocks are useful for generating visulazations of data for tweets.

	var popOfTurk = [4952081,5042920,5097028,5179571,4884887,4940916,4997503,5054828];
	var tweetText = "Population changes in Turkmenistan: " +
		sparkblock(popOfTurk) +
		"SparkBlocks are neat! http://stolksdorf.github.io/SparkBlock";

	$(example).find('.sparkblock_box').html(tweetText);

	//Create a tweet button with the sparkblock graph
	$(example).find('.tweet_box').html(
		'<a href="https://twitter.com/share" class="twitter-share-button" ' +
		'data-lang="en" data-size="large" data-count="none" ' +
		'data-text="'+ tweetText +'">Tweet</a>'
	);
	twttr.widgets.load();


