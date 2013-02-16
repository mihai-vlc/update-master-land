/*
* ionutvmi
* master-land.net
* Feb 2013
*/



function get_data(){
var request = new XMLHttpRequest();

if (request == null){
        alert("Unable to create request");
    }else{

        var url = "http://master-land.net/services/updates.php";

        request.onreadystatechange = function()
            {
            if(request.readyState == 4)
            {
                LDResponse(request.responseText);
            }
        }

        request.open("GET", url, true);
        request.send(null);
    }
}
function LDResponse(response)
{
	dat = JSON.parse(response);
	if(dat != ''){
		var chck = 0;
		chck = dat[0] + dat[1] + dat[2];
		
		if(chck != 0)
			chrome.browserAction.setBadgeText({ text: chck.toString() });
		else
			chrome.browserAction.setBadgeText({text:""});
	}
}

get_data();
setInterval(get_data,300000);