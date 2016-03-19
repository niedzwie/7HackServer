window.logtext = array();


window.onload = function () {
    // TODO:: Do your initialization job

	
	

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
    
    document.addEventListener('keydown', function(e) {
    	// Down Arrow
    	if(e.keyCode == 40)
    		debug();
        break;
    });

    // Sample code
    //var url = 'http://vod-level3-psd-progressive.p7s1digital.de/notice/new/not_available_de_640x360.mp4?token=01~~~31343538333936363930~3836343030~0-562304853786eb86d47478dde&ts=1458396690&access_token=s2s_7hack&video=';
    
    var url = 'http://vod-level3-psd-progressive.p7s1digital.de/clips/08/a8/88772-n961ez-tp06.mp4?token=00~400e~15ac4~56ed7478~15180~0-8d24888d1ffc97d87ff78aac8&ts=1458402424&access_token=s2s_7hack&video=1296000';
    var video = webapis.avplay.open(url);
    // 1920*1080 fullsize 10.100.105.199
    webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
    webapis.avplay.setListener(onerror, listError);    
    webapis.avplay.prepareAsync(play, error);
    
    //$('video').html(video);
    
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#textbox');
    	box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
    });
    window.logtext.push('done');
};

function debug() {
	console.log(window.logtext);
}

function play() {
	//webapis.avplay.prepare();
    webapis.avplay.play();
    //console.log('play prepare successfully');
    window.logtext.push('play prepare successfully');
}

function listError() {
	//webapis.avplay.prepare();
    //webapis.avplay.play();
    //console.log('play prepare failed');
    window.logtext.push('play prepare failed');
}

function error() {
	webapis.avplay.prepare();
    webapis.avplay.play();
    //console.log('gneral error');
    window.logtext.push('general error');
}