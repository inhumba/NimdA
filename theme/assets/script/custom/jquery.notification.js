// Notification
function noti(type,word){
	noty({
		text : word,
		type : type,
		animation: {
			open: 'animated fadeInRight',
			close: 'animated fadeOutRight',
			easing: 'easeInOutExpo',
			speed: 0
		},
		dismissQueue : true,
		force: false,
		layout : 'bottomRight',
		timeout : 3000
	});
}
// Notification Confirm
function noticlick(type,word){
	noty({
		text : word,
		type : type,
		animation: {
			open: 'animated fadeInRight',
			close: 'animated fadeOutRight',
			easing: 'easeInOutExpo',
			speed: 0
		},
		dismissQueue : true,
		force: true,
		killer: true,
		layout : 'topRight',
		timeout : 3000
	});
}
// Confirmation
function noticonfirm(type,word){
	noty({
		text : word,
		type : type,
		animation: {
			open: 'animated fadeInRight',
			close: 'animated fadeOutRight',
			easing: 'easeInOutExpo',
			speed: 0
		},
		buttons: [
			{
				addClass: 'btn btn-primary', text: 'OK', onClick: function($noty) {
					$noty.close();
					noticlick('success','You clicked "OK" button');
				}
			}, {
				addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
					$noty.close();
					noticlick('error','You clicked "Cancel" button');
				}
			}
		],
		dismissQueue : false,
		force: true,
		layout : 'topRight',
		timeout : false
	});
}