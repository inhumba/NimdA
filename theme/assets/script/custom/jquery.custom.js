$(function(){

	// Open dropdown when mouseover
	$('ul.dropdown-menu [data-toggle=dropdown]').on('mouseover', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parents().find('ul.dropdown-menu').find('li.dropdown').removeClass('open hover');
		$(this).parent().addClass('open hover');
	});
	// Close other dropdown when mouseout
	$('ul.dropdown-menu > li > a').on('mouseover', function() {
		$(this).parent().prev('li').removeClass('open hover');
	});

	// Header Scrolled
	var scrolled = false;
	var topOffset = 85;
	$(window).scroll(function(){
		if($(window).width() >= 992){
			if(topOffset < $(window).scrollTop() && !scrolled){
				var cloneMenu = $('nav.horizontalnav').html();
				cloneMenu = cloneMenu.replace("button_form_save", "button_form_save2");
				cloneMenu = cloneMenu.replace("button_form_save_new", "button_form_save_new2");
				cloneMenu = cloneMenu.replace("button_form_save_exit", "button_form_save_exit2");
				$('.header-sticky nav.horizontalnav-sticky').append(cloneMenu);
				$('li.dropdown').removeClass('open hover');
				var cloneTopic = $('.main .topbar').html();
				$('.header-sticky .topbar').append(cloneTopic);
				// $('.header-sticky').addClass('sticky');
				scrolled = true;
			}
			if(topOffset >= $(window).scrollTop() && scrolled){
				// $('.header-sticky').removeClass('sticky');
				$('.header-sticky nav.horizontalnav-sticky').empty();
				$('.header-sticky .topbar').empty();
				scrolled = false;
			}
		} else {
			// $('.header-sticky').removeClass('sticky');
			$('.header-sticky nav.horizontalnav-sticky').empty();
			$('.header-sticky .topbar').empty();
			scrolled = false;
		}
	});

	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Popover
	$('[data-toggle="popover"]').popover();

	// Screen Loading
	// $('.screen-loading').on('click', function() {
	// 	// $(this).attr('disabled');
	// 	var buttonText = $(this).html();
	// 	console.log(buttonText);
	// 	// var hide;
	// 	// screenLoading(hide);
	// 	Pace.start();
	// 	console.log('start');
	// });

	// var screenLoading = function(stage) {
	// 	console.log(stage);
	// 	if (stage === 'hide') {
	// 		$('body').addClass('pace-running').removeClass('pace-done');
	// 		$('body').find('.pace').addClass('pace-active').removeClass('pace-inactive');
	// 	} else if (stage === 'show') {
	// 		$('body').addClass('pace-done').removeClass('pace-running');
	// 		$('body').find('.pace').addClass('pace-inactive').removeClass('pace-active');
	// 	}
	// };

	// Range Slider
	// var stepRange = document.getElementById('captcha-range');
	// noUiSlider.create(stepRange, {
	// 	start: [3],
	// 	step: 1,
	// 	range: {
	// 		'min': [2],
	// 		'max': [4]
	// 	},
	// 	tooltips: [true],
	// 	format: wNumb({
	// 		decimals: 0
	// 	})
	// });
	// var stepRangeValue = document.getElementById('captcha-range-value');
	// stepRange.noUiSlider.on('update', function(values, handle){
	// 	stepRangeValue.innerHTML = values[handle];
	// });
	// stepRangeValue.addEventListener('change', function(){
	// 	stepRange.noUiSlider.set(this.value);
	// });

	$('.noti.noti-alert').click(function(){
		noti('alert','Alert text');
	});
	$('.noti.noti-success').click(function(){
		noti('success','Success text');
	});
	$('.noti.noti-information').click(function(){
		noti('information','Information text');
	});
	$('.noti.noti-warning').click(function(){
		noti('warning','Warning text');
	});
	$('.noti.noti-error').click(function(){
		noti('error','Error text');
	});
	$('.noti.noti-confirm').click(function(){
		noticonfirm('confirm','Confirm box');
	});

	// Mask Input
	if(jQuery().inputmask){
		$('.mask-date').inputmask('d/m/9999');
		$('.mask-time').inputmask('hh:mm:ss');
		$('.mask-time-noseconds').inputmask('hh:mm');
		$('.mask-datetime-noseconds').inputmask('d/m/9999 99:99');
		$('.mask-phone').inputmask('02-999-9999');
		$('.mask-mobile').inputmask('099-999-9999');
		$('.mask-url').inputmask('url');
		$('.mask-email').inputmask('email');
		$('.mask-decimal').inputmask('decimal', {rightAlign: true, autoGroup: true, groupSeparator: ',', groupSize: 3});
		$('.mask-ip').inputmask('ip');
		$('.mask-mac').inputmask('mac');
		$('.mask-pin').inputmask('9{6}', {'placeholder': '*'});
	}

	// Date Time Picker
	if(jQuery().datetimepicker){
		$('.datetime-picker').datetimepicker({
			weekStart: 0,
			autoclose: true,
			startView: 2,
			minView: 0,
			todayBtn: true,
			todayHighlight: false,
			forceParse: true,
			showMeridian: false,
			fontAwesome: true
		});
		$('.date-picker').datetimepicker({
			weekStart: 0,
			autoclose: true,
			startView: 2,
			minView: 2,
			todayBtn: true,
			todayHighlight: false,
			forceParse: true,
			showMeridian: false,
			fontAwesome: true
		});
		$('.time-picker').datetimepicker({
			autoclose: true,
			startView: 0,
			minView: 0,
			maxView: 0,
			todayBtn: true,
			todayHighlight: false,
			forceParse: true,
			showMeridian: false,
			fontAwesome: true
		});
		$('.time-picker-ampm').datetimepicker({
			autoclose: true,
			startView: 0,
			minView: 0,
			maxView: 1,
			todayBtn: true,
			todayHighlight: false,
			forceParse: true,
			showMeridian: true,
			fontAwesome: true,
			pickerPosition: "top-right"
		});
		$('.datetime-picker-inline').datetimepicker({
			weekStart: 0,
			autoclose: false,
			startView: 2,
			minView: 0,
			todayBtn: true,
			todayHighlight: false,
			forceParse: true,
			showMeridian: false,
			linkField: "datetime-mirror",
			linkFormat: "dd/mm/yyyy hh:ii",
			fontAwesome: true
		});
	}

	// Copy to Clipboard
	var clipboard = new Clipboard('.copy-to-clipboard');

	// clipboard.on('success', function() {
	// 	$('#copied').text('คัดลอกแล้ว');
	// });

	// $('#modal-share').on('hide', function() {
	// 	$('#copied').text('');
	// });


	// Magnific Popup
	if(jQuery().magnificPopup){
		$('.magnify').magnificPopup({
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	}

	// Editor
	if(jQuery().ckeditor){
		// Full
		$('textarea.editor-full').ckeditor({
			height: '400',
			toolbarGroups: [
				{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
				{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
				{ name: 'forms', groups: [ 'forms' ] },
				{ name: 'paragraph', groups: [ 'align', 'list', 'indent', 'blocks', 'bidi', 'paragraph' ] },
				{ name: 'links', groups: [ 'links' ] },
				{ name: 'insert', groups: [ 'insert' ] },
				'/',
				{ name: 'colors', groups: [ 'colors' ] },
				{ name: 'styles', groups: [ 'styles' ] },
				{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
				{ name: 'tools', groups: [ 'tools' ] },
				{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
				{ name: 'others', groups: [ 'others' ] },
				{ name: 'about', groups: [ 'about' ] }
			],
			removeButtons: 'CopyFormatting,RemoveFormat,Save,NewPage,Preview,Print,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,BidiLtr,BidiRtl,Language,Smiley,Flash,Iframe,PageBreak,About,Font,Styles'
		});

		// Standard
		$('textarea.editor').ckeditor({
			height: '400',
			toolbarGroups: [
				{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
				{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
				{ name: 'forms', groups: [ 'forms' ] },
				{ name: 'paragraph', groups: [ 'align', 'list', 'indent', 'blocks', 'bidi', 'paragraph' ] },
				{ name: 'links', groups: [ 'links' ] },
				{ name: 'insert', groups: [ 'insert' ] },
				'/',
				{ name: 'colors', groups: [ 'colors' ] },
				{ name: 'styles', groups: [ 'styles' ] },
				{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
				{ name: 'tools', groups: [ 'tools' ] },
				{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
				{ name: 'others', groups: [ 'others' ] },
				{ name: 'about', groups: [ 'about' ] }
			],
			removeButtons: 'CopyFormatting,RemoveFormat,Save,Templates,NewPage,Preview,Print,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,BidiLtr,BidiRtl,Language,Smiley,Flash,Iframe,PageBreak,About,Font,Styles,Outdent,Indent,Undo,Redo,PasteFromWord'
		});

		//
		$('textarea.editor-mini').ckeditor({
			height: '100',
			toolbarGroups: [
				{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
				{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
				{ name: 'forms', groups: [ 'forms' ] },
				{ name: 'paragraph', groups: [ 'align', 'list', 'indent', 'blocks', 'bidi', 'paragraph' ] },
				{ name: 'colors', groups: [ 'colors' ] },
				{ name: 'styles', groups: [ 'styles' ] },
				'/',
				{ name: 'links', groups: [ 'links' ] },
				{ name: 'insert', groups: [ 'insert' ] },
				{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
				'/',
				{ name: 'tools', groups: [ 'tools' ] },
				{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
				{ name: 'others', groups: [ 'others' ] },
				{ name: 'about', groups: [ 'about' ] }
			],
			removeButtons: 'CopyFormatting,RemoveFormat,Save,Templates,NewPage,Preview,Print,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,BidiLtr,BidiRtl,Language,Smiley,Flash,Iframe,PageBreak,About,Font,Styles,Strike,Subscript,Superscript,Outdent,Indent,CreateDiv,Blockquote,Anchor,Image,Cut,Undo,Redo,Copy,Paste,HorizontalRule,SpecialChar,Maximize,Source,ShowBlocks,FontSize,JustifyBlock,JustifyRight,JustifyCenter,JustifyLeft',
		});

		// Finder
		CKFinder.setupCKEditor();
	}

	// Toggle switch
	var swToggle = Array.prototype.slice.call(document.querySelectorAll('.sw-toggle'));
	swToggle.forEach(function(html) {
		var switchery = new Switchery(html);
	});
	var swToggleSmall = Array.prototype.slice.call(document.querySelectorAll('.sw-toggle-small'));
	swToggleSmall.forEach(function(html) {
		var switchery = new Switchery(html, {size: 'small'});
	});
	var swToggleLarge = Array.prototype.slice.call(document.querySelectorAll('.sw-toggle-large'));
	swToggleLarge.forEach(function(html) {
		var switchery = new Switchery(html, {size: 'large'});
	});
	var swToggleSquare = Array.prototype.slice.call(document.querySelectorAll('.sw-toggle-square'));
	swToggleSquare.forEach(function(html) {
		var switchery = new Switchery(html, {className: 'switchery switchery-square'});
	});
	var swToggleSquareSmall = Array.prototype.slice.call(document.querySelectorAll('.sw-toggle-square-small'));
	swToggleSquareSmall.forEach(function(html) {
		var switchery = new Switchery(html, {className: 'switchery switchery-square switchery-small'});
	});
	var swToggleSquareLarge = Array.prototype.slice.call(document.querySelectorAll('.sw-toggle-square-large'));
	swToggleSquareLarge.forEach(function(html) {
		var switchery = new Switchery(html, {className: 'switchery switchery-square switchery-large'});
	});

	// Toggle with text
	var onText = $('.sw-toggle-status').attr('data-on-text');
	var offText = $('.sw-toggle-status').attr('data-off-text');
	var statusDisplay = function() {
		if ($('.sw-toggle-status').prop('checked')) {
			$('.sw-status-field').html(onText);
		} else {
			$('.sw-status-field').html(offText);
		}
	};

	statusDisplay();

	$('.sw-toggle-status').on('change', function() {
		statusDisplay();
	});

	//Checked all
	$('#bulk-checkedall').on('click', function() {
		var checked_status = this.checked;
		$('input.bulk-checkbox').each(function() {
			this.checked = checked_status;
		});
	});

	// Smooth Anchor Scroll
	var posAnchor = function() {
		$('.anchor-pin').each(function() {

			var pos = $(this).offset().top;
			var posFloor = Math.floor(pos);
			var winOffset = $('.main').scrollTop();

			$(this).attr('data-pos',posFloor + winOffset);

		});
	};

	$(function() {
		$('.anchor > li > a').click(function(e) {

				posAnchor();

				var target = $(this).attr('href');
				var targetPos = $(target).attr('data-pos');
				var targetOffset = 200;

				$('.main').animate({
					scrollTop: targetPos - targetOffset
				}, 700);

				e.preventDefault();

		});
	});

	// // Notification
	// function noti(type,word){
	// 	noty({
	// 		text : word,
	// 		type : type,
	// 		animation: {
	// 			open: 'animated fadeInRight',
	// 			close: 'animated fadeOutRight',
	// 			easing: 'easeInOutExpo',
	// 			speed: 0
	// 		},
	// 		dismissQueue : true,
	// 		force: false,
	// 		layout : 'bottomRight',
	// 		timeout : 3000
	// 	});
	// }
	// // Notification Confirm
	// function noticlick(type,word){
	// 	noty({
	// 		text : word,
	// 		type : type,
	// 		animation: {
	// 			open: 'animated fadeInRight',
	// 			close: 'animated fadeOutRight',
	// 			easing: 'easeInOutExpo',
	// 			speed: 0
	// 		},
	// 		dismissQueue : true,
	// 		force: true,
	// 		killer: true,
	// 		layout : 'topRight',
	// 		timeout : 3000
	// 	});
	// }
	// // Confirmation
	// function noticonfirm(type,word){
	// 	noty({
	// 		text : word,
	// 		type : type,
	// 		animation: {
	// 			open: 'animated fadeInRight',
	// 			close: 'animated fadeOutRight',
	// 			easing: 'easeInOutExpo',
	// 			speed: 0
	// 		},
	// 		buttons: [
	// 			{
	// 				addClass: 'btn btn-primary', text: 'OK', onClick: function($noty) {
	// 					$noty.close();
	// 					noticlick('success','You clicked "OK" button');
	// 				}
	// 			}, {
	// 				addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
	// 					$noty.close();
	// 					noticlick('error','You clicked "Cancel" button');
	// 				}
	// 			}
	// 		],
	// 		dismissQueue : false,
	// 		force: true,
	// 		layout : 'topRight',
	// 		timeout : false
	// 	});
	// }

});
