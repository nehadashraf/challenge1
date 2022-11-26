$(document).ready(function(){
})
wow = new WOW(
    {
    boxClass:     'animate__animated'
}
)
wow.init();
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500
});
jQuery("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });