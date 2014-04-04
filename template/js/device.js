(function(){
		  var UA=window.navigator.userAgent,
		  		detectStyle='<style type="text/css">@media (max-width: 640px) {#MobileDetect {color: rgb(12, 34, 56)}}</style>',
		  		detectDiv='<div id="MobileDetect"></div>';
		  
		  if(/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile/.test(UA)){
			  //判断device width是否小于640
			  var style=createElement(detectStyle),
			  	div=createElement(detectDiv);
				document.head.appendChild(style);
				document.head.appendChild(div);
				
				//判断是否匹配
				init(getStyle(div,"color")==='rgb(12, 34, 56)');
				
				style.remove();
				div.remove();
				}
				else{init(false);}

function init(flag){
	if(!window.zDevice)window.zDevice={};
	if(flag){
		window.isMobile=true;
		window.zDevice.isSmallScreen=true;
			}
		}

//get element style
function getStyle(oElm, strCssRule){
                var strValue = "";
                if(document.defaultView && document.defaultView.getComputedStyle){
                        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
                }
                else if(oElm.currentStyle){
                        strCssRule = strCssRule.replace(/-(w)/g, function (strMatch, p1){
                                return p1.toUpperCase();
                        });
                        strValue = oElm.currentStyle[strCssRule];
                }
                return strValue;
        }

//createElement
function createElement(string) {
        　　 var elem = document.createElement("div");
        　　 elem.innerHTML = string;
        　　 return elem.childNodes[0];
        }
})();


