$(function(){

	$('#myModal').on('hidden.bs.modal', function (e) {
	  $(this).find("iframe")[0].src += "";
	});

	$('#mc-embedded-subscribe').click(function(){

		// Qué contiene el formulario
		if($('#mce-EMAIL').val() == '')
		{
			// el campo de email está vacio
			$('#alert-error').removeClass('hidden').addClass('show');
		}else{
			// el campo de email no está vacio
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#mce-EMAIL').val())){
				// esconder mensaje de error
				$('#alert-error').removeClass('show').addClass('hidden');
				// mostrar mensaje de éxito
				$('#alert-exito').removeClass('hidden').addClass('show');
				// esconder el formulario
				$('#first-to-try').removeClass('show').addClass('hidden');
				$('#mc-embedded-subscribe-form').removeClass('show').addClass('hidden');

			}else{
				// no está vacío pero es incorrecto
				$('#alert-error').removeClass('hidden').addClass('show');
			}
		}

	});


});