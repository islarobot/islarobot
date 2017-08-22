//FUNCIONES list_ports.html


function select_usb_port(puerto){
			
socket.emit('select_usb',puerto);
			
}

function print_list_of_ports(ports){

var tr;
var table = $('<table border = 1>');
for(var i = 0;i < ports.length;i++){
	tr = $('<tr/>');
	var texto = "<a onclick=\"select_usb_port('"+ports[i].comName+"')\" href=\"#\">"+ports[i].comName;
	tr.append("<td>" + texto + "</td>");           		          		
	table.append(tr);			
} 

$('#content').append(table); /*appending the data on the page using Jquery */
}


function print_one_port_connect(){



}                	



function print_no_ports_message(){

}                	
		
//funciones projects.html

function print_list_of_projects(projects_object){

var tr;
var table = $('<table border = 1>');
for(var i = 0;i < projects_object.length;i++){
	tr = $('<tr/>');
	var texto1 = projects_object[i].title;
	tr.append("<td><b>" + texto1 + "</td>");           		          		
	table.append(tr);		
	for(var j = 0;j < projects_object[i].projects.length;j++){
	tr = $('<tr/>');
	var texto = "<a onclick=\"select_project('"+projects_object[i].projects[j].id+"')\" href=\"#\">"+projects_object[i].projects[j].name;
	tr.append("<td></td><td columnspan=\"2\">" + texto + "</td><td>" + projects_object[i].projects[j].id + "</td>");           		          		
	table.append(tr);		
		
		
}	
		
} 

$('#project_lists').append(table); /*appending the data on the page using Jquery */
}


function select_project(id){
			
//socket.emit('select_project',id);

var url = 'project?id='+id;

document.getElementsByName('iFrameCode')[0].src = url;
			
}


function open_editor(file){




}


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}



	function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}  
