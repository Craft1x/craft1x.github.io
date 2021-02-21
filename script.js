function openDialog(title, subtitle, pictures, description, os, languages){
	$('#dialog-title').text(title);
	$('#dialog-subtitle').text(subtitle);

	$('#dialog-text').text(description);
	$('#dialog-os').text(os);
	$('#dialog-languages').text(languages);

	var carousel = $('#carousel-pictures');
	var carousel_indicators = $('#carousel-indicators');
	carousel.html("");
	carousel_indicators.html("");
	
	var i = 0;
	pictures.forEach((path) => {
			i++;
			carousel.append('<div class="carousel-item"><img src="'+path+'" class="d-block w-100" alt="slide-img-1"></div>');
			carousel_indicators.append('<li data-target="#carousel-example" data-slide-to="'+i+'">&nbsp;</li>');
	});

	$(carousel.children()[0]).addClass('active');
	$(carousel_indicators.children()[0]).addClass('active');

	$('#info-modal').modal('show');
}

function openDialogFT(){
	openDialog("Fasten Tools","Simplify your calculations",["images/projects/kl/1.png","images/projects/kl/2.png"],
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis ligula quis erat ultrices, sed posuere libero ultricies. Fusce massa orci, auctor et turpis sit amet, luctus imperdiet lacus. Morbi a ex cursus, interdum erat in, consectetur mi. Suspendisse tortor enim, egestas eu fermentum sed, lobortis quis purus. Vivamus non malesuada est, nec ultricies lacus. Nam in hendrerit sapien. Etiam cursus pharetra enim, vitae rutrum tortor interdum in. Maecenas a nunc eget risus euismod porta. Praesent volutpat vitae massa nec eleifend. Phasellus rhoncus commodo iaculis. Suspendisse semper mauris vel eros varius egestas. Ut imperdiet eros in tellus auctor maximus. Donec commodo urna ac sem suscipit, vitae ornare mi rhoncus. "
			,"Android","Java");	
}

function openDialogSF(){
	openDialog("Socker Physics","Soccer without rules",["images/projects/kl/1.png","images/projects/kl/2.png"],
			"Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis ligula quis erat ultrices, sed posuere libero ultricies. Fusce massa orci, auctor et turpis sit amet, luctus imperdiet lacus. Morbi a ex cursus, interdum erat in, consectetur mi. Suspendisse tortor enim, egestas eu fermentum sed, lobortis quis purus. Vivamus non malesuada est, nec ultricies lacus. Nam in hendrerit sapien. Etiam cursus pharetra enim, vitae rutrum tortor interdum in. Maecenas a nunc eget risus euismod porta. Praesent volutpat vitae massa nec eleifend. Phasellus rhoncus commodo iaculis. Suspendisse semper mauris vel eros varius egestas. Ut imperdiet eros in tellus auctor maximus. Donec commodo urna ac sem suscipit, vitae ornare mi rhoncus. "
			,"Android","C#");	
}

function openDialogSH(){
	openDialog("Home Automation","Automate your life!",["images/projects/kl/1.png","images/projects/kl/2.png"],
			"Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis ligula quis erat ultrices, sed posuere libero ultricies. Fusce massa orci, auctor et turpis sit amet, luctus imperdiet lacus. Morbi a ex cursus, interdum erat in, consectetur mi. Suspendisse tortor enim, egestas eu fermentum sed, lobortis quis purus. Vivamus non malesuada est, nec ultricies lacus. Nam in hendrerit sapien. Etiam cursus pharetra enim, vitae rutrum tortor interdum in. Maecenas a nunc eget risus euismod porta. Praesent volutpat vitae massa nec eleifend. Phasellus rhoncus commodo iaculis. Suspendisse semper mauris vel eros varius egestas. Ut imperdiet eros in tellus auctor maximus. Donec commodo urna ac sem suscipit, vitae ornare mi rhoncus. "
			,"Android, Linux","C++, Python, Java");	
}

function openDialogKL(){
	openDialog("Sublime Key-logger","Monitor PC usage",["images/projects/kl/1.png","images/projects/kl/2.png"],
			"Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis ligula quis erat ultrices, sed posuere libero ultricies. Fusce massa orci, auctor et turpis sit amet, luctus imperdiet lacus. Morbi a ex cursus, interdum erat in, consectetur mi. Suspendisse tortor enim, egestas eu fermentum sed, lobortis quis purus. Vivamus non malesuada est, nec ultricies lacus. Nam in hendrerit sapien. Etiam cursus pharetra enim, vitae rutrum tortor interdum in. Maecenas a nunc eget risus euismod porta. Praesent volutpat vitae massa nec eleifend. Phasellus rhoncus commodo iaculis. Suspendisse semper mauris vel eros varius egestas. Ut imperdiet eros in tellus auctor maximus. Donec commodo urna ac sem suscipit, vitae ornare mi rhoncus. "
			,"Windows","C++");	
}

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

var age = calculate_age(new Date(2000,10,26));
$("#age").text(age + " Years");

