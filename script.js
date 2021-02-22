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
				"Fasten Tools is an android app that helps students with various mathematical calculations, unit conversion, algebra and <br> much more. <br> Fasten Tools is one of the first projects I've done. It started out in 2015 as an experiment in Android development and over time grew into a full-fledged application, capable of helping students with various mathematical problems. <br> Currently the app has more than 10,000 downloads on Google Play Store and an average rating of 4.1/5."
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
			"Socker Physics is an unordinary Android game. At a first glance it may look like a simple football game, but in reality it is more like a fighting, with no regard for rules and a violent gameplay. <br> The game is meant to be played with friends on one device with a maximum of 8 players at the same time. Socker Physics features many different locations and bonuses that keep the game fun and enjoyable."
			,"Android","C#, Unity");	
}

function openDialogSH(){
	openDialog("Home Automation","Automate your life!",[
			"images/projects/kl/1.png",
			"images/projects/kl/2.png"
	],
			"The home automation project is a massive integration of various IoT devices such as Raspberry PI, Arduino and Espressif boards. Together they allow control over home lights, water heating, camera recording and a door lock. The system monitors room's temperatures, power usage and allows users to create custom schedules. All of the above features are accessible via an Android app."
			,"Android, Linux","C++, Python, Java");	
}

function openDialogKL(){
	openDialog("Sublime Key-logger","Monitor PC usage",[
			"images/projects/kl/1.jpg",
			"images/projects/kl/2.jpg",
			"images/projects/kl/3.jpg",
			"images/projects/kl/4.jpg"
	],
			"Sublime Key-Logger allows administrators to monitor users. It can monitor clipboard, programs, record keystrokes and take screenshots at a desired interval. <br> The program is a result of a coursework project in the University. The Key-Logger is written in C++ and uses Windows Forms as a UI framework."
			,"Windows","C++");	
}

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

var age = calculate_age(new Date(2000,10,26));
$("#age").text(age + " Years");

