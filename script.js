function openDialog(title, subtitle, pictures, description, os, languages){
	$('#dialog-title').text(title);
	$('#dialog-subtitle').text(subtitle);

	$('#dialog-text').html(description);
	$('#dialog-os').text(os);
	$('#dialog-languages').text(languages);

	var carousel = $('#carousel-pictures');
	carousel.html("");
	
	pictures.forEach((path) => {
			carousel.append('<div class="carousel-item"><img src="'+path+'" class="d-block w-100" alt="slide-img-1"></div>');
	});

	$(carousel.children()[0]).addClass('active');

	$('#info-modal').modal('show');
}

function openDialogFT(){
	openDialog("Fasten Tools","Simplify your calculations",[
			"images/projects/ft/1.jpg",
			"images/projects/ft/2.jpg",
			"images/projects/ft/3.jpg",
			"images/projects/ft/4.jpg",
			"images/projects/ft/5.jpg",
			"images/projects/ft/6.jpg"
	],
				"Fasten Tools is an android app that helps students with various mathematical calculations, unit conversion, algebra and much more. <br> Fasten Tools is one of the first projects I've done. It started out in 2015 as an experiment in Android development and over time grew into a full-fledged application, capable of helping students with various mathematical problems. <br> Currently, the app has more than 10,000 downloads on Google Play Store and an average rating of 4.1/5."
			,"Android","Java");	
}

function openDialogSF(){
	openDialog("Socker Physics","Soccer without rules",[
			"images/projects/sf/1.jpg",
			"images/projects/sf/2.jpg",
			"images/projects/sf/3.jpg",
			"images/projects/sf/4.jpg",
			"images/projects/sf/5.jpg",
			"images/projects/sf/6.jpg"
	],
			"Socker Physics is an unordinary Android game. At a first glance, it may look like a simple football game, but in reality it is more like a silly fighting simulator, with violent gameplay and no regard for rules. <br> The game is meant to be played with friends on a single device with a maximum of 8 players at a time. Socker Physics features many locations and bonuses that keep the game fun and enjoyable."
			,"Android","C#, Unity");	
}

function openDialogSH(){
	openDialog("Home Automation","Automate your life!",[
			"images/projects/sh/1.jpg",
			"images/projects/sh/2.jpg",
			"images/projects/sh/3.jpg",
			"images/projects/sh/4.jpg"
	],
			"The home automation project is a massive integration of multiple different IoT devices such as Raspberry Pi, Arduino and Espressif boards. Together they provide control over house lighting, water heating, camera recording and a door lock. The system monitors room's temperatures, power usage and allows its users to create custom schedules. All the above features are accessible via an Android app."
			,"Android, Linux","C++, Python, Java");	
}

function openDialogKL(){
	openDialog("Sublime Key logger","Monitor computer usage",[
			"images/projects/kl/1.jpg",
			"images/projects/kl/2.jpg",
			"images/projects/kl/3.jpg",
			"images/projects/kl/4.jpg"
	],
			"Sublime Key Logger is an easy-to-use user monitoring tool with rich functionality. It can do the following: monitor clipboard and programs, record keystrokes and take screenshots at a desired interval. <br> The program is a result of a coursework project at the University. It is written in C++ and uses Windows Forms as a UI framework."
			,"Windows","C++");	
}

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function experiences_add_section(name) {
	$('#experiences-rows').append('<h3>'+name+'</h3>');
}

function experiences_add_experience(name, date, speciality, text, place) {
	$('#experiences-rows').append(' <div class=\"experience row\"> <div class=\"col-md-4\"> <h4>'+name+'</h4> <p class=\"experience-period\">'+date+'</p> </div> <div class=\"col-md-8\"> <p><strong>'+speciality+'</strong> <span class=\"hidden-phone\">'+text+'</span> <span class=\"experience-details\"><span class=\"location\"><i class=\"bi-geo-alt-fill\"></i> '+place+'</span></span></p> </div> </div> ');
}

function abilities_add_section(name) {
	$('#abilities').append('<hr><h3>'+name+'</h3><div class="row"></div>');
}

function abilities_get_list_item(name, rating){
	var out = '<li> <span class="ability-title">'+name+'</span> <span class="ability-score"> ';
	
	for (var i=0; i<5; i++) {
		if (i<rating)
			out+='<i class="bi-star-fill filled"></i>';
		else
			out+='<i class="bi-star-fill"></i>';
	}
	
	out+='</span> </li>';

	return out;
}

function abilities_add_abilities(list) {
	
	var lines = '<div class="col-md-6"> <ul class="no-bullets">';
	list.forEach( (item) => {
		lines+=abilities_get_list_item(item[0], item[1]);
	});

	lines+='</ul></div>';

	$('#abilities').children().last().append(lines);
}

function jump_to_projects(){
	console.log("jump");
}

/* START */

var age = calculate_age(new Date(2000,10,26));
$("#age").text(age + " Years");

experiences_add_section('Educations');
experiences_add_experience('Polotsk State University','Sep 2018 — Current', 'Higher education', 'While studying in the university, I\'ve worked on many complicated software projects. Also, I\'ve gained a good amount of knowledge in mathematics, modern programming paradigms, operating systems and network technologies. ','Polotsk, Belarus');
experiences_add_experience('Foreign Languages Center - Universum','Sep 2018 — May 2019', 'Course - English (B2)', 'During this course, I\'ve improved my English writing skills as well as reading and verbal comprehension.','Polotsk, Belarus');
experiences_add_experience('Middle School №8','Sep 2007 — May 2018', 'Primary and secondary education', 'I graduated from high school, where I discovered my true passion for programming and found some good friends. I also participated in coding and math Olympiads.','Polotsk, Belarus');

function abilities_add(name, arr){
abilities_add_section(name);


var indexToSplit = Math.ceil(arr.length/2);
var first = arr.slice(0, indexToSplit);
var second = arr.slice(indexToSplit);

abilities_add_abilities(first);
abilities_add_abilities(second);
}

abilities_add('Skills',[
		['Java',4],
		['C#',4],
		['Android',4],
		['Unity Engine',4],
		['Arduino',4],
		['C/C++',3],
		['Python',2],
		['JavaScript',2],
		['HTML',2],
		['CSS',2],
		['Bootstrap Framework',1],
]);

abilities_add('Languages',[
		['Russian (native)',5],
		['English (B2)',4],
]);

abilities_add('Tools',[
		['JetBrains IDEs',5],
		['GNU/Linux',4],
		['Windows',4],
		['Vim',4],
		['Git',3],
		['Notepad++',3],
		['Geany',2],
]);

