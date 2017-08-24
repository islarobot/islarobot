


//funciones 
 

 
 
function request_project_file(url){

var request = require('sync-request');
var config = require('./config');
var uri = config.jsonurl + url;



var res = request('GET', uri, {
  'headers': {
    'user-agent': 'example-user-agent'
  }
});



if (res.statusCode == 404) {
	

		return 'noencontrada'
		
	}else{
	

return res.getBody('utf8')

}

}


function select_project(id)
{





}
 
    
function parse_json_projects()
{

//recupero index
indexjson = request_project_file('index.json');
index_object = JSON.parse(indexjson);

return index_object

}
    
function return_project_json_file(id,po)
{
var code_1
for(var i = 0; i < po.length; i++) {
for(var j = 0; j < po[i].projects.length; j++) {
if(po[i].projects[j].id == id){
var url_1 = po[i].projects[j].file

return url_1
//var value1 = {code:code_1, name:projects_object[i].projects[j].name}

//return JSON.stringify(value1)

}


}
}
}   

function return_project_info(id,po)
{
var url_1 = 'None'
for(var i = 0; i < po.length; i++) {
for(var j = 0; j < po[i].projects.length; j++) {
if(po[i].projects[j].id == id){
url_1 = po[i].projects[j].name


//var value1 = {code:code_1, name:projects_object[i].projects[j].name}

//return JSON.stringify(value1)

}
return url_1

}
}
}  
    
    
    
function decode_to_socket(type_code){
	
var answer = {type_code_local, destination_local}	

switch(type_code) {
    case 'request usb':
        type_code_local = 2;
        destination_local = 'c5_usb';
        return answer;
        break;
    
    //default:
      
}

}

function decode_to_web_client(type_code){
	
	
switch(type_code) {

    case '9':
        return 'usb_list'
        
        break;
    case '20':
        return 'state'
     case '21':
        return 'state_data'
        break;
    case '100':
        return 'stream'
        break;
    //default:
      
}

}
  
  
function update_arduino(text){
	
create_ino_file(text)

var spawn = require('child_process').spawn,
    ino    = spawn('ino', ['build'],{cwd: 'projects/source/'});

ino.on('exit', function (code) {
  upload_ino()
});



}  

function create_ino_file(text){
	

	
var fs = require('fs');
var config = require('./config');
fs.writeFile(config.src_ino_file, text)


}  







function upload_ino()
{

var spawn = require('child_process').spawn,
    ino    = spawn('ino', ['upload'],{cwd: 'projects/source/'});

}

function return_project_documentation(json)
{

if (json == 'noencontrada') { 

io.emit('active_project_tutorial', {okcode:"jsonnoencontrada", text:""});

return 0;

}





}
    
exports.return_project_documentation = return_project_documentation;
exports.select_project = select_project;
exports.request_project_file = request_project_file;
exports.parse_json_projects = parse_json_projects;
exports.return_project_json_file = return_project_json_file;

exports.return_project_info = return_project_info;

exports.decode_to_socket = decode_to_socket;

exports.update_arduino = update_arduino;

exports.decode_to_web_client = decode_to_web_client;

