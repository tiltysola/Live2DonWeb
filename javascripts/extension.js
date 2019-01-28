var l2dLandlord = document.getElementById('landlord')
var l2dDrag = document.getElementById('l2d-drag')
var l2dSetting = document.getElementById('l2d-setting')
var l2dSettingBox = document.getElementById('l2d-setting-box')
var l2dHide = document.getElementById('l2d-hide')
var l2dHideBox = document.getElementById('l2d-hide-box')
var l2dHideYes = document.getElementById('l2d-hide-yes')
var l2dHideNo = document.getElementById('l2d-hide-no')
var l2dAbout = document.getElementById('l2d-about')
var l2dAboutBox = document.getElementById('l2d-about-box')
var l2dAboutYes = document.getElementById('l2d-about-yes')

l2dDrag.onmousedown = function(ev){
	removeClass(l2dLandlord, 'lock')
	l2dLandlord.style.bottom = '0'
	var oevent = ev || event
	var distanceX = oevent.clientX - l2dLandlord.offsetLeft
	var distanceY = oevent.clientY - l2dLandlord.offsetTop
	document.onmousemove = function(ev){
		var oevent = ev || event
		l2dLandlord.style.right = document.documentElement.clientWidth - (oevent.clientX - distanceX + 280) + 'px'
		l2dLandlord.style.bottom = document.documentElement.clientHeight - (oevent.clientY - distanceY + 250) + 'px' 
	}
	document.onmouseup = function(){
		addClass(l2dLandlord, 'lock')
		document.onmousemove = null
		document.onmouseup = null
	}
}
l2dSetting.onclick = function () {
	addClass(l2dSettingBox, 'show')
	setTimeout(function  () {
		removeClass(l2dSettingBox, 'show')
	}, 3000)
}
l2dHide.onclick = function () {
	addClass(l2dHideBox, 'show')
}
l2dHideYes.onclick = function () {
	l2dLandlord.style.display = 'none'
}
l2dHideNo.onclick = function () {
	removeClass(l2dHideBox, 'show')
}
l2dAbout.onclick = function () {
	addClass(l2dAboutBox, 'show')
}
l2dAboutYes.onclick = function () {
	removeClass(l2dAboutBox, 'show')
}

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}
function addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += ' ' + cls
}
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        ele.className = ele.className.replace(reg, ' ')
    }
}