<<<<<<< HEAD
﻿/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
* @fileOverview
*/

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ug'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'rtl',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : 'Rich text editor, %1', // MISSING
	editorHelp : 'Press ALT 0 for help', // MISSING

	// ARIA descriptions.
	toolbars	: 'قورال بالداق',
	editor		: 'تەھرىرلىگۈچ',

	// Toolbar buttons without dialogs.
	source			: 'مەنبە',
	newPage			: 'يېڭى بەت',
	save			: 'ساقلا',
	preview			: 'ئالدىن كۆزەت',
	cut				: 'كەس',
	copy			: 'نەشر ھوقۇقىغا ئىگە بەلگىسى',
	paste			: 'چاپلا',
	print			: 'باس ',
	underline		: 'ئاستى سىزىق',
	bold			: 'توم',
	italic			: 'يانتۇ',
	selectAll		: 'ھەممىنى تاللا',
	removeFormat	: 'پىچىمنى چىقىرىۋەت',
	strike			: 'ئۆچۈرۈش سىزىقى',
	subscript		: 'تۆۋەن ئىندېكس',
	superscript		: 'يۇقىرى ئىندېكس',
	horizontalrule	: 'توغرا سىزىق قىستۇر',
	pagebreak		: 'بەت ئايرىغۇچ قىستۇر',
	pagebreakAlt		: 'بەت ئايرىغۇچ',
	unlink			: 'ئۇلانما بىكار قىل',
	undo			: 'يېنىۋال',
	redo			: 'قايتىلا ',

	// Common messages and labels.
	common :
	{
		browseServer	: 'كۆرسىتىش مۇلازىمېتىر',
		url				: 'ئەسلى ھۆججەت',
		protocol		: 'كېلىشىم',
		upload			: 'يۈكلە',
		uploadSubmit	: 'مۇلازىمېتىرغا يۈكلە',
		image			: 'سۈرەت',
		flash			: 'Flash',
		form			: 'جەدۋەل',
		checkbox		: 'كۆپ تاللاش رامكىسى',
		radio			: 'يەككە تاللاش توپچىسى',
		textField		: 'يەككە قۇر تېكىست',
		textarea		: 'كۆپ قۇر تېكىست',
		hiddenField		: 'يوشۇرۇن دائىرە',
		button			: 'توپچا',
		select			: 'تىزىم/تىزىملىك',
		imageButton		: 'سۈرەت دائىرە',
		notSet			: '‹تەڭشەلمىگەن›',
		id				: 'ID',
		name			: 'ئات',
		langDir			: 'تىل يۆنىلىشى',
		langDirLtr		: 'سولدىن ئوڭغا (LTR)',
		langDirRtl		: 'ئوڭدىن سولغا (RTL)',
		langCode		: 'تىل كودى',
		longDescr		: 'تەپسىلىي چۈشەندۈرۈش ئادرېسى',
		cssClass		: 'ئۇسلۇب خىلىنىڭ ئاتى',
		advisoryTitle	: 'ماۋزۇ',
		cssStyle		: 'قۇر ئىچىدىكى ئۇسلۇبى',
		ok				: 'جەزملە',
		cancel			: 'ۋاز كەچ',
		close			: 'تاقا',
		preview			: 'ئالدىن كۆزەت',
		generalTab		: 'ئادەتتىكى',
		advancedTab		: 'ئالىي',
		validateNumberFailed : 'سان پىچىمىدا كىرگۈزۈش زۆرۈر',
		confirmNewPage	: 'نۆۋەتتىكى پۈتۈك مەزمۇنى ساقلانمىدى، يېڭى پۈتۈك قۇرامسىز؟',
		confirmCancel	: 'قىسمەن ئۆزگەرتىش ساقلانمىدى، بۇ سۆزلەشكۈنى تاقامسىز؟',
		options			: 'تاللانما',
		target			: 'نىشان كۆزنەك',
		targetNew		: 'يېڭى كۆزنەك (_blank)',
		targetTop		: 'پۈتۈن بەت (_top)',
		targetSelf		: 'مەزكۇر كۆزنەك (_self)',
		targetParent	: 'ئاتا كۆزنەك (_parent)',
		langDirLTR		: 'سولدىن ئوڭغا (LTR)',
		langDirRTL		: 'ئوڭدىن سولغا (RTL)',
		styles			: 'ئۇسلۇبلار',
		cssClasses		: 'ئۇسلۇب خىللىرى',
		width			: 'كەڭلىك',
		height			: 'ئېگىزلىك',
		align			: 'توغرىلىنىشى',
		alignLeft		: 'سول',
		alignRight		: 'ئوڭ',
		alignCenter		: 'ئوتتۇرا',
		alignTop		: 'ئۈستى',
		alignMiddle		: 'ئوتتۇرا',
		alignBottom		: 'ئاستى',
		invalidHeight	: 'ئېگىزلىك چوقۇم رەقەم پىچىمىدا بولۇشى زۆرۈر',
		invalidWidth	: 'كەڭلىك چوقۇم رەقەم پىچىمىدا بولۇشى زۆرۈر',
		invalidCssLength	: 'بۇ سۆز بۆلىكى چوقۇم مۇۋاپىق بولغان CSS ئۇزۇنلۇق قىممىتى بولۇشى زۆرۈر، بىرلىكى (px, %, in, cm, mm, em, ex, pt ياكى pc)',
		invalidHtmlLength	: 'بۇ سۆز بۆلىكى چوقۇم بىرىكمە HTML ئۇزۇنلۇق قىممىتى بولۇشى كېرەك. ئۆز ئىچىگە ئالىدىغان بىرلىك (px ياكى %)',
		invalidInlineStyle	: 'ئىچكى باغلانما ئۇسلۇبى چوقۇم چېكىتلىك پەش بىلەن ئايرىلغان بىر ياكى كۆپ «خاسلىق ئاتى:خاسلىق قىممىتى» پىچىمىدا بولۇشى لازىم',
		cssLengthTooltip	: 'بۇ سۆز بۆلىكى بىرىكمە CSS ئۇزۇنلۇق قىممىتى بولۇشى كېرەك. ئۆز ئىچىگە ئالىدىغان بىرلىك (px, %, in, cm, mm, em, ex, pt ياكى pc)',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class=\\\\"cke_accessibility\\\\">، ئىشلەتكىلى بولمايدۇ</span>'
	},

	contextmenu :
	{
		options : 'قىسقا يول تىزىملىك تاللانمىسى'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'ئالاھىدە ھەرپ قىستۇر',
		title		: 'ئالاھىدە ھەرپ تاللاڭ',
		options : 'ئالاھىدە ھەرپ تاللانمىسى'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'ئۇلانما قىستۇر/تەھرىرلە',
		other 		: '‹باشقا›',
		menu		: 'ئۇلانما تەھرىر',
		title		: 'ئۇلانما',
		info		: 'ئۇلانما ئۇچۇرى',
		target		: 'نىشان',
		upload		: 'يۈكلە',
		advanced	: 'ئالىي',
		type		: 'ئۇلانما تىپى',
		toUrl		: 'ئادرېس',
		toAnchor	: 'بەت ئىچىدىكى لەڭگەرلىك نۇقتا ئۇلانمىسى',
		toEmail		: 'ئېلخەت',
		targetFrame		: '‹كاندۇك›',
		targetPopup		: '‹قاڭقىش كۆزنەك›',
		targetFrameName	: 'نىشان كاندۇك ئاتى',
		targetPopupName	: 'قاڭقىش كۆزنەك ئاتى',
		popupFeatures	: 'قاڭقىش كۆزنەك خاسلىقى',
		popupResizable	: 'چوڭلۇقى ئۆزگەرتىشچان',
		popupStatusBar	: 'ھالەت بالداق',
		popupLocationBar: 'ئادرېس بالداق',
		popupToolbar	: 'قورال بالداق',
		popupMenuBar	: 'تىزىملىك بالداق',
		popupFullScreen	: 'پۈتۈن ئېكران (IE)',
		popupScrollBars	: 'دومىلىما سۈرگۈچ',
		popupDependent	: 'تەۋە (NS)',
		popupLeft		: 'سول',
		popupTop		: 'ئوڭ',
		id				: 'ID',
		langDir			: 'تىل يۆنىلىشى',
		langDirLTR		: 'سولدىن ئوڭغا (LTR)',
		langDirRTL		: 'ئوڭدىن سولغا (RTL)',
		acccessKey		: 'زىيارەت كۇنۇپكا',
		name			: 'ئات',
		langCode			: 'تىل كودى',
		tabIndex			: 'Tab تەرتىپى',
		advisoryTitle		: 'ماۋزۇ',
		advisoryContentType	: 'مەزمۇن تىپى',
		cssClasses		: 'ئۇسلۇب خىلى ئاتى',
		charset			: 'ھەرپ كودلىنىشى',
		styles			: 'قۇر ئىچىدىكى ئۇسلۇبى',
		rel			: 'باغلىنىش',
		selectAnchor		: 'بىر لەڭگەرلىك نۇقتا تاللاڭ',
		anchorName		: 'لەڭگەرلىك نۇقتا ئاتى بويىچە',
		anchorId			: 'لەڭگەرلىك نۇقتا ID سى بويىچە',
		emailAddress		: 'ئادرېس',
		emailSubject		: 'ماۋزۇ',
		emailBody		: 'مەزمۇن',
		noAnchors		: '(بۇ پۈتۈكتە ئىشلەتكىلى بولىدىغان لەڭگەرلىك نۇقتا يوق)',
		noUrl			: 'ئۇلانما ئادرېسىنى كىرگۈزۈڭ',
		noEmail			: 'ئېلخەت ئادرېسىنى كىرگۈزۈڭ'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'لەڭگەرلىك نۇقتا ئۇلانمىسى قىستۇر/تەھرىرلە',
		menu		: 'لەڭگەرلىك نۇقتا ئۇلانما خاسلىقى',
		title		: 'لەڭگەرلىك نۇقتا ئۇلانما خاسلىقى',
		name		: 'لەڭگەرلىك نۇقتا ئاتى',
		errorName	: 'لەڭگەرلىك نۇقتا ئاتىنى كىرگۈزۈڭ',
		remove		: 'لەڭگەرلىك نۇقتا ئۆچۈر'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'تەرتىپ نومۇر تىزىم خاسلىقى',
		bulletedTitle		: 'تۈر بەلگە تىزىم خاسلىقى',
		type				: 'بەلگە تىپى',
		start				: 'باشلىنىش نومۇرى',
		validateStartNumber				:'تىزىم باشلىنىش تەرتىپ نومۇرى چوقۇم پۈتۈن سان پىچىمىدا بولۇشى لازىم',
		circle				: 'بوش چەمبەر',
		disc				: 'تولدۇرۇلغان چەمبەر',
		square				: 'تولدۇرۇلغان تۆت چاسا',
		none				: 'بەلگە يوق',
		notset				: '‹تەڭشەلمىگەن›',
		armenian			: 'قەدىمكى ئەرمىنىيە تەرتىپ نومۇرى شەكلى',
		georgian			: 'قەدىمكى جورجىيە تەرتىپ نومۇرى شەكلى (an, ban, gan قاتارلىق)',
		lowerRoman			: 'كىچىك ھەرپلىك رىم رەقىمى (i, ii, iii, iv, v قاتارلىق)',
		upperRoman			: 'چوڭ ھەرپلىك رىم رەقىمى (I, II, III, IV, V قاتارلىق)',
		lowerAlpha			: 'ئىنگلىزچە كىچىك ھەرپ (a, b, c, d, e قاتارلىق)',
		upperAlpha			: 'ئىنگلىزچە چوڭ ھەرپ (A, B, C, D, E قاتارلىق)',
		lowerGreek			: 'گرېكچە كىچىك ھەرپ (alpha, beta, gamma قاتارلىق)',
		decimal				: 'سان (1, 2, 3 قاتارلىق)',
		decimalLeadingZero	: 'نۆلدىن باشلانغان سان بەلگە (01, 02, 03 قاتارلىق)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'ئىزدەپ ئالماشتۇر',
		find				: 'ئىزدە',
		replace				: 'ئالماشتۇر',
		findWhat			: 'ئىزدە:',
		replaceWith			: 'ئالماشتۇر:',
		notFoundMsg			: 'بەلگىلەنگەن تېكىستنى تاپالمىدى',
		findOptions			: 'ئىزدەش تاللانمىسى',
		matchCase			: 'چوڭ كىچىك ھەرپنى پەرقلەندۈر',
		matchWord			: 'پۈتۈن سۆز ماسلىشىش',
		matchCyclic			: 'ئايلانما ماسلىشىش',
		replaceAll			: 'ھەممىنى ئالماشتۇر',
		replaceSuccessMsg	: 'جەمئى %1 جايدىكى ئالماشتۇرۇش تاماملاندى'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'جەدۋەل',
		title		: 'جەدۋەل خاسلىقى',
		menu		: 'جەدۋەل خاسلىقى',
		deleteTable	: 'جەدۋەل ئۆچۈر',
		rows		: 'قۇر سانى',
		columns		: 'ئىستون سانى',
		border		: 'گىرۋەك',
		widthPx		: 'پىكسېل',
		widthPc		: 'پىرسەنت',
		widthUnit	: 'كەڭلىك بىرلىكى',
		cellSpace	: 'ئارىلىق',
		cellPad		: 'يان ئارىلىق',
		caption		: 'ماۋزۇ',
		summary		: 'ئۈزۈندە',
		headers		: 'ماۋزۇ كاتەكچە',
		headersNone		: 'يوق',
		headersColumn	: 'بىرىنچى ئىستون',
		headersRow		: 'بىرىنچى قۇر',
		headersBoth		: 'بىرىنچى ئىستون ۋە بىرىنچى قۇر',
		invalidRows		: 'بەلگىلەنگەن ئىستون سانى چوقۇم نۆلدىن چوڭ بولىدۇ',
		invalidCols		: 'بەلگىلەنگەن قۇر سانى چوقۇم نۆلدىن چوڭ بولىدۇ',
		invalidBorder	: 'گىرۋەك توملۇقى چوقۇم سان بولىدۇ',
		invalidWidth	: 'جەدۋەل كەڭلىكى چوقۇم سان بولىدۇ',
		invalidHeight	: 'جەدۋەل ئېگىزلىكى چوقۇم سان بولىدۇ',
		invalidCellSpacing	: 'كاتەكچە ئارىلىقى چوقۇم سان بولىدۇ',
		invalidCellPadding	: 'كاتەكچىگە چوقۇم سان تولدۇرۇلىدۇ',

		cell :
		{
			menu			: 'كاتەكچە',
			insertBefore	: 'سولغا كاتەكچە قىستۇر',
			insertAfter		: 'ئوڭغا كاتەكچە قىستۇر',
			deleteCell		: 'كەتەكچە ئۆچۈر',
			merge			: 'كاتەكچە بىرلەشتۈر',
			mergeRight		: 'كاتەكچىنى ئوڭغا بىرلەشتۈر',
			mergeDown		: 'كاتەكچىنى ئاستىغا بىرلەشتۈر',
			splitHorizontal	: 'كاتەكچىنى توغرىسىغا بىرلەشتۈر',
			splitVertical	: 'كاتەكچىنى بويىغا بىرلەشتۈر',
			title			: 'كاتەكچە خاسلىقى',
			cellType		: 'كاتەكچە تىپى',
			rowSpan			: 'بويىغا چات ئارىسى قۇر سانى',
			colSpan			: 'توغرىسىغا چات ئارىسى ئىستون سانى',
			wordWrap		: 'ئۆزلۈكىدىن قۇر قاتلا',
			hAlign			: 'توغرىسىغا توغرىلا',
			vAlign			: 'بويىغا توغرىلا',
			alignBaseline	: 'ئاساسىي سىزىق',
			bgColor			: 'تەگلىك رەڭگى',
			borderColor		: 'گىرۋەك رەڭگى',
			data			: 'سانلىق مەلۇمات',
			header			: 'جەدۋەل باشى',
			yes				: 'ھەئە',
			no				: 'ياق',
			invalidWidth	: 'كاتەكچە كەڭلىكى چوقۇم سان بولىدۇ',
			invalidHeight	: 'كاتەكچە ئېگىزلىكى چوقۇم سان بولىدۇ',
			invalidRowSpan	: 'قۇر چات ئارىسى چوقۇم پۈتۈن سان بولىدۇ ',
			invalidColSpan	: 'ئىستون چات ئارىسى چوقۇم پۈتۈن سان بولىدۇ',
			chooseColor		: 'تاللاڭ'
		},

		row :
		{
			menu			: 'قۇر',
			insertBefore	: 'ئۈستىگە قۇر قىستۇر',
			insertAfter		: 'ئاستىغا قۇر قىستۇر',
			deleteRow		: 'قۇر ئۆچۈر'
		},

		column :
		{
			menu			: 'ئىستون',
			insertBefore	: 'سولغا ئىستون قىستۇر',
			insertAfter		: 'ئوڭغا ئىستون قىستۇر',
			deleteColumn	: 'ئىستون ئۆچۈر'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'توپچا خاسلىقى',
		text		: 'بەلگە (قىممەت)',
		type		: 'تىپى',
		typeBtn		: 'توپچا',
		typeSbm		: 'تاپشۇر',
		typeRst		: 'ئەسلىگە قايتۇر'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'كۆپ تاللاش خاسلىقى',
		radioTitle	: 'تاق تاللاش توپچا خاسلىقى',
		value		: 'تاللىغان قىممەت',
		selected	: 'تاللانغان'
	},

	// Form Dialog.
	form :
	{
		title		: 'جەدۋەل خاسلىقى',
		menu		: 'جەدۋەل خاسلىقى',
		action		: 'مەشغۇلات',
		method		: 'ئۇسۇل',
		encoding	: 'جەدۋەل كودلىنىشى'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'جەدۋەل/تىزىم خاسلىقى',
		selectInfo	: 'ئۇچۇر تاللاڭ',
		opAvail		: 'تاللاش تۈرلىرى',
		value		: 'قىممەت',
		size		: 'ئېگىزلىكى',
		lines		: 'قۇر',
		chkMulti	: 'كۆپ تاللاشچان',
		opText		: 'تاللانما تېكىستى',
		opValue		: 'تاللانما قىممىتى',
		btnAdd		: 'قوش',
		btnModify	: 'ئۆزگەرت',
		btnUp		: 'ئۈستىگە',
		btnDown		: 'ئاستىغا',
		btnSetValue : 'دەسلەپكى تاللانما قىممىتىگە تەڭشە',
		btnDelete	: 'ئۆچۈر'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: ' كۆپ قۇرلۇق تېكىست خاسلىقى',
		cols		: 'ھەرپ كەڭلىكى',
		rows		: 'قۇر سانى'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'تاق قۇرلۇق تېكىست خاسلىقى',
		name		: 'ئات',
		value		: 'دەسلەپكى قىممىتى',
		charWidth	: 'ھەرپ كەڭلىكى',
		maxChars	: 'ئەڭ كۆپ ھەرپ سانى',
		type		: 'تىپى',
		typeText	: 'تېكىست',
		typePass	: 'ئىم'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'يوشۇرۇن دائىرە خاسلىقى',
		name	: 'ئات',
		value	: 'دەسلەپكى قىممىتى'
	},

	// Image Dialog.
	image :
	{
		title		: 'سۈرەت خاسلىقى',
		titleButton	: 'سۈرەت دائىرە خاسلىقى',
		menu		: 'سۈرەت خاسلىقى',
		infoTab		: 'سۈرەت',
		btnUpload	: 'مۇلازىمېتىرغا يۈكلە',
		upload		: 'يۈكلە',
		alt			: 'تېكىست ئالماشتۇر',
		lockRatio	: 'نىسبەتنى قۇلۇپلا',
		resetSize	: 'ئەسلى چوڭلۇق',
		border		: 'گىرۋەك چوڭلۇقى',
		hSpace		: 'توغرىسىغا ئارىلىقى',
		vSpace		: 'بويىغا ئارىلىقى',
		alertUrl	: 'سۈرەت ئادرېسىنى كىرگۈزۈڭ',
		linkTab		: 'ئۇلانما',
		button2Img	: 'نۆۋەتتىكى توپچىنى سۈرەتكە ئۆزگەرتەمسىز؟',
		img2Button	: 'نۆۋەتتىكى سۈرەتنى توپچىغا ئۆزگەرتەمسىز؟',
		urlMissing	: 'سۈرەتنىڭ ئەسلى ھۆججەت ئادرېسى كەم',
		validateBorder	: 'گىرۋەك چوڭلۇقى چوقۇم سان بولىدۇ',
		validateHSpace	: 'توغرىسىغا ئارىلىق چوقۇم پۈتۈن سان بولىدۇ',
		validateVSpace	: 'بويىغا ئارىلىق چوقۇم پۈتۈن سان بولىدۇ'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash خاسلىق',
		propertiesTab	: 'خاسلىق',
		title			: 'ماۋزۇ',
		chkPlay			: 'ئۆزلۈكىدىن چال',
		chkLoop			: 'دەۋرىي',
		chkMenu			: 'Flash تىزىملىكنى قوزغات',
		chkFull			: 'پۈتۈن ئېكراننى قوزغات',
 		scale			: 'نىسبىتى',
		scaleAll		: 'ھەممىنى كۆرسەت',
		scaleNoBorder	: 'گىرۋەك يوق',
		scaleFit		: 'قەتئىي ماسلىشىش',
		access			: 'قوليازما زىيارەتكە يول قوي',
		accessAlways	: 'ھەمىشە',
		accessSameDomain: 'ئوخشاش دائىرىدە',
		accessNever		: 'ھەرگىز',
		alignAbsBottom	: 'مۇتلەق ئاستى',
		alignAbsMiddle	: 'مۇتلەق ئوتتۇرا',
		alignBaseline	: 'ئاساسىي سىزىق',
		alignTextTop	: 'تېكىست ئۈستىدە',
		quality			: 'سۈپەت',
		qualityBest		: 'ئەڭ ياخشى',
		qualityHigh		: 'يۇقىرى',
		qualityAutoHigh	: 'يۇقىرى (ئاپتوماتىك)',
		qualityMedium	: 'ئوتتۇرا (ئاپتوماتىك)',
		qualityAutoLow	: 'تۆۋەن (ئاپتوماتىك)',
		qualityLow		: 'تۆۋەن',
		windowModeWindow: 'كۆزنەك گەۋدىسى',
		windowModeOpaque: 'خىرە',
		windowModeTransparent : 'سۈزۈك',
		windowMode		: 'كۆزنەك ھالىتى',
		flashvars		: 'Flash  ئۆزگەرگۈچى',
		bgcolor			: 'تەگلىك رەڭگى',
		hSpace			: 'توغرىسىغا ئارىلىق',
		vSpace			: 'بويىغا ئارىلىق',
		validateSrc		: 'ئەسلى ھۆججەت ئادرېسىنى كىرگۈزۈڭ',
		validateHSpace	: 'توغرىسىغا ئارىلىق چوقۇم سان بولىدۇ',
		validateVSpace	: 'بويىغا ئارىلىق چوقۇم سان بولىدۇ'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'ئىملا تەكشۈر',
		title			: 'ئىملا تەكشۈر',
		notAvailable	: 'كەچۈرۈڭ، مۇلازىمېتىرنى ۋاقتىنچە ئىشلەتكىلى بولمايدۇ',
		errorLoading	: 'لازىملىق مۇلازىمېتىرنى يۈكلىگەندە خاتالىق كۆرۈلدى: %s.',
		notInDic		: 'لۇغەتتە يوق',
		changeTo		: 'ئۆزگەرت',
		btnIgnore		: 'پەرۋا قىلما',
		btnIgnoreAll	: 'ھەممىگە پەرۋا قىلما',
		btnReplace		: 'ئالماشتۇر',
		btnReplaceAll	: 'ھەممىنى ئالماشتۇر',
		btnUndo			: 'يېنىۋال',
		noSuggestions	: '-تەكلىپ يوق-',
		progress		: 'ئىملا تەكشۈرۈۋاتىدۇ…',
		noMispell		: 'ئىملا تەكشۈرۈش تامام: ئىملا خاتالىقى بايقالمىدى',
		noChanges		: 'ئىملا تەكشۈرۈش تامام: ھېچقانداق سۆزنى ئۆزگەرتمىدى',
		oneChange		: 'ئىملا تەكشۈرۈش تامام: بىر سۆزنى ئۆزگەرتتى',
		manyChanges		: 'ئىملا تەكشۈرۈش تامام: %1  سۆزنى ئۆزگەرتتى',
		ieSpellDownload	: 'ئىملا تەكشۈرۈش قىستۇرمىسى تېخى ئورنىتىلمىغان، ھازىرلا چۈشۈرەمسىز؟'
	},

	smiley :
	{
		toolbar	: 'چىراي ئىپادە',
		title	: 'چىراي ئىپادە سىنبەلگە قىستۇر',
		options : 'چىراي ئىپادە سىنبەلگە تاللانمىسى'
	},

	elementsPath :
	{
		eleLabel : 'ئېلېمېنت يولى',
		eleTitle : '%1 ئېلېمېنت'
	},

	numberedlist	: 'تەرتىپ نومۇر تىزىمى',
	bulletedlist	: 'تۈر بەلگە تىزىمى',
	indent			: 'تارايت',
	outdent			: 'كەڭەيت',

	justify :
	{
		left	: 'سولغا توغرىلا',
		center	: 'ئوتتۇرىغا توغرىلا',
		right	: 'ئوڭغا توغرىلا',
		block	: 'ئىككى تەرەپتىن توغرىلا'
	},

	blockquote : 'بۆلەك نەقىل',

	clipboard :
	{
		title		: 'چاپلا',
		cutError	: 'تور كۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى تەھرىرلىگۈچنىڭ كەس مەشغۇلاتىنى ئۆزلۈكىدىن ئىجرا قىلىشىغا يول قويمايدۇ، ھەرپتاختا تېز كۇنۇپكا (Ctrl/Cmd+X) ئارقىلىق تاماملاڭ',
		copyError	: 'تور كۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى تەھرىرلىگۈچنىڭ كۆچۈر مەشغۇلاتىنى ئۆزلۈكىدىن ئىجرا قىلىشىغا يول قويمايدۇ، ھەرپتاختا تېز كۇنۇپكا (Ctrl/Cmd+C) ئارقىلىق تاماملاڭ',
		pasteMsg	: 'ھەرپتاختا تېز كۇنۇپكا (<STRONG>Ctrl/Cmd+V</STRONG>) نى ئىشلىتىپ مەزمۇننى تۆۋەندىكى رامكىغا كۆچۈرۈڭ، ئاندىن <STRONG>جەزملە</STRONG>نى بېسىڭ',
		securityMsg	: 'توركۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى سەۋەبىدىن بۇ تەھرىرلىگۈچ چاپلاش تاختىسىدىكى مەزمۇننى بىۋاستە زىيارەت قىلالمايدۇ، بۇ كۆزنەكتە قايتا بىر قېتىم چاپلىشىڭىز كېرەك.',
		pasteArea	: 'چاپلاش دائىرىسى'
	},

	pastefromword :
	{
		confirmCleanup	: 'سىز چاپلىماقچى بولغان مەزمۇن MS Word تىن كەلگەندەك قىلىدۇ، MS Word پىچىمىنى تازىلىۋەتكەندىن كېيىن ئاندىن چاپلامدۇ؟',
		toolbar			: 'MS Word تىن چاپلا',
		title			: 'MS Word تىن چاپلا',
		error			: 'ئىچكى خاتالىق سەۋەبىدىن چاپلايدىغان سانلىق مەلۇماتنى تازىلىيالمايدۇ'
	},

	pasteText :
	{
		button	: 'پىچىمى يوق تېكىست سۈپىتىدە چاپلا',
		title	: 'پىچىمى يوق تېكىست سۈپىتىدە چاپلا'
	},

	templates :
	{
		button			: 'قېلىپ',
		title			: 'مەزمۇن قېلىپى',
		options : 'قېلىپ تاللانمىسى',
		insertOption	: 'نۆۋەتتىكى مەزمۇننى ئالماشتۇر',
		selectPromptMsg	: 'تەھرىرلىگۈچنىڭ مەزمۇن قېلىپىنى تاللاڭ:',
		emptyListMsg	: '(قېلىپ يوق)'
	},

	showBlocks : 'بۆلەكنى كۆرسەت',

	stylesCombo :
	{
		label		: 'ئۇسلۇب',
		panelTitle	: 'ئۇسلۇب',
		panelTitle1	: 'بۆلەك دەرىجىسىدىكى ئېلېمېنت ئۇسلۇبى',
		panelTitle2	: 'ئىچكى باغلانما ئېلېمېنت ئۇسلۇبى',
		panelTitle3	: 'نەڭ (Object) ئېلېمېنت ئۇسلۇبى'
	},

	format :
	{
		label		: 'پىچىم',
		panelTitle	: 'پىچىم',

		tag_p		: 'ئادەتتىكى',
		tag_pre		: 'تىزىلغان پىچىم',
		tag_address	: 'ئادرېس',
		tag_h1		: 'ماۋزۇ 1',
		tag_h2		: 'ماۋزۇ 2',
		tag_h3		: 'ماۋزۇ 3',
		tag_h4		: 'ماۋزۇ 4',
		tag_h5		: 'ماۋزۇ 5',
		tag_h6		: 'ماۋزۇ 6',
		tag_div		: 'ئابزاس (DIV)'
	},

	div :
	{
		title				: 'DIV قاچا قۇر',
		toolbar				: 'DIV قاچا قۇر',
		cssClassInputLabel	: 'ئۇسلۇب تىپىنىڭ ئاتى',
		styleSelectLabel	: 'ئۇسلۇب',
		IdInputLabel		: 'ID',
		languageCodeInputLabel	: 'تىل كودى',
		inlineStyleInputLabel	: 'قۇر ئىچىدىكى ئۇسلۇبى',
		advisoryTitleInputLabel	: 'ماۋزۇ',
		langDirLabel		: 'تىل يۆنىلىشى',
		langDirLTRLabel		: 'سولدىن ئوڭغا (LTR)',
		langDirRTLLabel		: 'ئوڭدىن سولغا (RTL)',
		edit				: 'DIV تەھرىر',
		remove				: 'DIV چىقىرىۋەت'
  	},

	iframe :
	{
		title		: 'IFrame خاسلىق',
		toolbar		: 'IFrame ',
		noUrl		: 'كاندۇكنىڭ ئادرېسى(Url)نى كىرگۈزۈڭ',
		scrolling	: 'دومىلىما سۈرگۈچكە يول قوي',
		border		: 'كاندۇك گىرۋەكلىرىنى كۆرسەت'
	},

	font :
	{
		label		: 'خەت نۇسخا',
		voiceLabel	: 'خەت نۇسخا',
		panelTitle	: 'خەت نۇسخا'
	},

	fontSize :
	{
		label		: 'چوڭلۇقى',
		voiceLabel	: 'خەت چوڭلۇقى',
		panelTitle	: 'چوڭلۇقى'
	},

	colorButton :
	{
		textColorTitle	: 'تېكىست رەڭگى',
		bgColorTitle	: 'تەگلىك رەڭگى',
		panelTitle		: 'رەڭ',
		auto			: 'ئۆزلۈكىدىن',
		more			: 'باشقا رەڭ'
	},

	colors :
	{
		'000' : 'قارا',
		'800000' : 'قىزغۇچ سېرىق',
		'8B4513' : 'توق قوڭۇر',
		'2F4F4F' : 'قارامتۇل يېشىل',
		'008080' : 'كۆكۈش يېشىل',
		'000080' : 'قارامتۇل كۆك',
		'4B0082' : 'كۆكۈش كۈلرەڭ',
		'696969' : 'قارامتۇل كۈلرەڭ',
		'B22222' : 'خىش قىزىل',
		'A52A2A' : 'قوڭۇر',
		'DAA520' : 'ئالتۇن سېرىق',
		'006400' : 'توق يېشىل',
		'40E0D0' : 'كۆكۈچ يېشىل',
		'0000CD' : 'ئوتتۇراھال كۆك',
		'800080' : 'بىنەپشە',
		'808080' : 'كۈلرەڭ',
		'F00' : 'قىزىل',
		'FF8C00' : 'توق قىزغۇچ سېرىق',
		'FFD700' : 'ئالتۇن',
		'008000' : 'يېشىل',
		'0FF' : 'يېشىل كۆك',
		'00F' : 'كۆك',
		'EE82EE' : 'قىزغۇچ بىنەپشە',
		'A9A9A9' : 'توق كۈلرەڭ',
		'FFA07A' : 'كاۋا چېچىكى سېرىق',
		'FFA500' : 'قىزغۇچ سېرىق',
		'FFFF00' : 'سېرىق',
		'00FF00' : 'Lime', // MISSING
		'AFEEEE' : 'سۇس ھاۋا رەڭ',
		'ADD8E6' : 'ئوچۇق كۆك',
		'DDA0DD' : 'قىزغۇچ بىنەپشە',
		'D3D3D3' : 'سۇس كۆكۈچ كۈلرەڭ',
		'FFF0F5' : 'سۇس قىزغۇچ بىنەپشە',
		'FAEBD7' : 'Antique White', // MISSING
		'FFFFE0' : 'سۇس سېرىق',
		'F0FFF0' : 'Honeydew', // MISSING
		'F0FFFF' : 'ئاسمان كۆكى',
		'F0F8FF' : 'سۇس كۆك',
		'E6E6FA' : 'سۇس بىنەپشە',
		'FFF' : 'ئاق'
	},

	scayt :
	{
		title			: 'شۇئان ئىملا تەكشۈر',
		opera_title		: 'Opera توركۆرگۈنى قوللىمايدۇ',
		enable			: 'شۇئان ئىملا تەكشۈرۈشنى قوزغات',
		disable			: 'شۇئان ئىملا تەكشۈرۈشنى چەكلە',
		about			: 'شۇئان ئىملا تەكشۈرۈش ھەققىدە',
		toggle			: 'شۇئان ئىملا تەكشۈرۈشنى ۋاقىتلىق توختات/قوزغات',
		options			: 'تاللانما',
		langs			: 'تىل',
		moreSuggestions	: 'تېخىمۇ كۆپ ئىملا تەۋسىيەسى',
		ignore			: 'پەرۋا قىلما',
		ignoreAll		: 'ھەممىسىگە پەرۋا قىلما',
		addWord			: 'سۆز قوش',
		emptyDic		: 'لۇغەت ئاتى بوش قالمايدۇ',

		optionsTab		: 'تاللانما',
		allCaps			: 'چوڭ ھەرپتە يېزىلغان ھەممە سۆزگە پەرۋا قىلما',
		ignoreDomainNames : 'دائىرە ئاتىغا پەرۋا قىلما',
		mixedCase		: 'چوڭ كىچىك ھەرپ بىلەن ئارىلاش يېزىلغان سۆزگە پەرۋا قىلما',
		mixedWithDigits	: 'سان بار سۆزگە پەرۋا قىلما',

		languagesTab	: 'تىل',

		dictionariesTab	: 'لۇغەت',
		dic_field_name	: 'لۇغەت ئاتى',
		dic_create		: 'قۇر',
		dic_restore		: 'ئەسلىگە كەلتۈر',
		dic_delete		: 'ئۆچۈر',
		dic_rename		: 'ئات ئۆزگەرت',
		dic_info		: 'باشلىنىشتا ئىشلەتكۈچى لۇغىتى Cookie  غا ساقلىنىدۇ ئەمما Cookie نىڭ سىغىمى چەكلىك بولغاچقا، ئىشلەتكۈچى لۇغىتى كۆپىيىپ Cookie  چەكلىمىسىدىن ئېشىپ كەتكەندە ساقلىغىلى بولمايدۇ، بۇ چاغدا لۇغىتىڭىزنى مۇلازىمېتىرىمىزغا ساقلىسىڭىز بولىدۇ. شەخسىي لۇغىتىڭىزنى مۇلازىمېتىرىمىزغا ساقلىماقچى بولسىڭىز لۇغىتىڭىزگە ئاتتىن بىرنى قويۇڭ، ئەگەر مۇلازىمتېرىمىزدا سىزنىڭ لۇغىتىڭىزدىن بىرسى بولسا لۇغەت ئاتىنى كىرگۈزۈپ ئەسلىگە قايتۇر توپچىسىنى بېسىڭ.',

		aboutTab		: 'ھەققىدە'
	},

	about :
	{
		title		: 'CKEditor ھەققىدە',
		dlgTitle	: 'CKEditor ھەققىدە',
		help	: '$1 نى زىيارەت قىلىپ ياردەمگە ئېرىشىڭ',
		userGuide : 'CKEditor ئىشلەتكۈچى قوللانمىسى',
		moreInfo	: 'تور تۇرايىمىزنى زىيارەت قىلىپ كېلىشىمگە ئائىت تېخىمۇ كۆپ ئۇچۇرغا ئېرىشىڭ',
		copy		: 'Copyright &copy; $1. نەشر ھوقۇقىغا ئىگە'
	},

	maximize : 'چوڭايت',
	minimize : 'كىچىكلەت',

	fakeobjects :
	{
		anchor		: 'لەڭگەرلىك نۇقتا',
		flash		: 'Flash جانلاندۇرۇم',
		iframe		: 'IFrame',
		hiddenfield	: 'يوشۇرۇن دائىرە',
		unknown		: 'يوچۇن نەڭ'
	},

	resize : 'چوڭلۇقىنى ئۆزگەرت',

	colordialog :
	{
		title		: 'رەڭ تاللاڭ',
		options	:	'رەڭ تاللانمىسى',
		highlight	: 'يورۇت',
		selected	: 'رەڭ تاللاڭ',
		clear		: 'تازىلا'
	},

	toolbarCollapse	: 'قورال بالداقنى قاتلا',
	toolbarExpand	: 'قورال بالداقنى ياي',

	toolbarGroups :
	{
		document : 'پۈتۈك',
		clipboard : 'چاپلاش تاختىسى/يېنىۋال',
		editing : 'تەھرىر',
		forms : 'جەدۋەل',
		basicstyles : 'ئاساسىي ئۇسلۇب',
		paragraph : 'ئابزاس',
		links : 'ئۇلانما',
		insert : 'قىستۇر',
		styles : 'ئۇسلۇب',
		colors : 'رەڭ',
		tools : 'قورال'
	},

	bidi :
	{
		ltr : 'تېكىست يۆنىلىشى سولدىن ئوڭغا',
		rtl : 'تېكىست يۆنىلىشى ئوڭدىن سولغا'
	},

	docprops :
	{
		label : 'بەت خاسلىقى',
		title : 'بەت خاسلىقى',
		design : 'لايىھە',
		meta : 'مېتا سانلىق مەلۇمات',
		chooseColor : 'تاللاڭ',
		other : 'باشقا',
		docTitle :	'بەت ماۋزۇسى',
		charset : 	'ھەرپ كودلىنىشى',
		charsetOther : 'باشقا ھەرپ كودلىنىشى',
		charsetASCII : 'ASCII',
		charsetCE : 'ئوتتۇرا ياۋرۇپا',
		charsetCT : 'مۇرەككەپ خەنزۇچە (Big5)',
		charsetCR : 'سىلاۋيانچە',
		charsetGR : 'گىرېكچە',
		charsetJP : 'ياپونچە',
		charsetKR : 'كۆرىيەچە',
		charsetTR : 'تۈركچە',
		charsetUN : 'يۇنىكود (UTF-8)',
		charsetWE : 'غەربىي ياۋرۇپا',
		docType : 'پۈتۈك تىپى',
		docTypeOther : 'باشقا پۈتۈك تىپى',
		xhtmlDec : 'XHTML ئېنىقلىمىسىنى ئۆز ئىچىگە ئالىدۇ',
		bgColor : 'تەگلىك رەڭگى',
		bgImage : 'تەگلىك سۈرەت',
		bgFixed : 'تەگلىك سۈرەتنى دومىلاتما',
		txtColor : 'تېكىست رەڭگى',
		margin : 'بەت گىرۋەك',
		marginTop : 'ئۈستى',
		marginLeft : 'سول',
		marginRight : 'ئوڭ',
		marginBottom : 'ئاستى',
		metaKeywords : 'بەت يۈزى ئىندېكىس ھالقىلىق سۆزى (ئىنگلىزچە پەش [,] بىلەن ئايرىلىدۇ)',
		metaDescription : 'بەت يۈزى چۈشەندۈرۈشى',
		metaAuthor : 'يازغۇچى',
		metaCopyright : 'نەشر ھوقۇقى',
		previewHtml : '<p>بۇ بىر قىسىم <strong>كۆرسەتمىگە ئىشلىتىدىغان تېكىست </strong>سىز نۆۋەتتە <a href=\\\\"javascript:void(0)\\\\">CKEditor</a>.نى ئىشلىتىۋاتىسىز.</p>'
	}
};
=======
﻿/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
* @fileOverview
*/

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['ug'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'rtl',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : 'Rich text editor, %1', // MISSING
	editorHelp : 'Press ALT 0 for help', // MISSING

	// ARIA descriptions.
	toolbars	: 'قورال بالداق',
	editor		: 'تەھرىرلىگۈچ',

	// Toolbar buttons without dialogs.
	source			: 'مەنبە',
	newPage			: 'يېڭى بەت',
	save			: 'ساقلا',
	preview			: 'ئالدىن كۆزەت',
	cut				: 'كەس',
	copy			: 'نەشر ھوقۇقىغا ئىگە بەلگىسى',
	paste			: 'چاپلا',
	print			: 'باس ',
	underline		: 'ئاستى سىزىق',
	bold			: 'توم',
	italic			: 'يانتۇ',
	selectAll		: 'ھەممىنى تاللا',
	removeFormat	: 'پىچىمنى چىقىرىۋەت',
	strike			: 'ئۆچۈرۈش سىزىقى',
	subscript		: 'تۆۋەن ئىندېكس',
	superscript		: 'يۇقىرى ئىندېكس',
	horizontalrule	: 'توغرا سىزىق قىستۇر',
	pagebreak		: 'بەت ئايرىغۇچ قىستۇر',
	pagebreakAlt		: 'بەت ئايرىغۇچ',
	unlink			: 'ئۇلانما بىكار قىل',
	undo			: 'يېنىۋال',
	redo			: 'قايتىلا ',

	// Common messages and labels.
	common :
	{
		browseServer	: 'كۆرسىتىش مۇلازىمېتىر',
		url				: 'ئەسلى ھۆججەت',
		protocol		: 'كېلىشىم',
		upload			: 'يۈكلە',
		uploadSubmit	: 'مۇلازىمېتىرغا يۈكلە',
		image			: 'سۈرەت',
		flash			: 'Flash',
		form			: 'جەدۋەل',
		checkbox		: 'كۆپ تاللاش رامكىسى',
		radio			: 'يەككە تاللاش توپچىسى',
		textField		: 'يەككە قۇر تېكىست',
		textarea		: 'كۆپ قۇر تېكىست',
		hiddenField		: 'يوشۇرۇن دائىرە',
		button			: 'توپچا',
		select			: 'تىزىم/تىزىملىك',
		imageButton		: 'سۈرەت دائىرە',
		notSet			: '‹تەڭشەلمىگەن›',
		id				: 'ID',
		name			: 'ئات',
		langDir			: 'تىل يۆنىلىشى',
		langDirLtr		: 'سولدىن ئوڭغا (LTR)',
		langDirRtl		: 'ئوڭدىن سولغا (RTL)',
		langCode		: 'تىل كودى',
		longDescr		: 'تەپسىلىي چۈشەندۈرۈش ئادرېسى',
		cssClass		: 'ئۇسلۇب خىلىنىڭ ئاتى',
		advisoryTitle	: 'ماۋزۇ',
		cssStyle		: 'قۇر ئىچىدىكى ئۇسلۇبى',
		ok				: 'جەزملە',
		cancel			: 'ۋاز كەچ',
		close			: 'تاقا',
		preview			: 'ئالدىن كۆزەت',
		generalTab		: 'ئادەتتىكى',
		advancedTab		: 'ئالىي',
		validateNumberFailed : 'سان پىچىمىدا كىرگۈزۈش زۆرۈر',
		confirmNewPage	: 'نۆۋەتتىكى پۈتۈك مەزمۇنى ساقلانمىدى، يېڭى پۈتۈك قۇرامسىز؟',
		confirmCancel	: 'قىسمەن ئۆزگەرتىش ساقلانمىدى، بۇ سۆزلەشكۈنى تاقامسىز؟',
		options			: 'تاللانما',
		target			: 'نىشان كۆزنەك',
		targetNew		: 'يېڭى كۆزنەك (_blank)',
		targetTop		: 'پۈتۈن بەت (_top)',
		targetSelf		: 'مەزكۇر كۆزنەك (_self)',
		targetParent	: 'ئاتا كۆزنەك (_parent)',
		langDirLTR		: 'سولدىن ئوڭغا (LTR)',
		langDirRTL		: 'ئوڭدىن سولغا (RTL)',
		styles			: 'ئۇسلۇبلار',
		cssClasses		: 'ئۇسلۇب خىللىرى',
		width			: 'كەڭلىك',
		height			: 'ئېگىزلىك',
		align			: 'توغرىلىنىشى',
		alignLeft		: 'سول',
		alignRight		: 'ئوڭ',
		alignCenter		: 'ئوتتۇرا',
		alignTop		: 'ئۈستى',
		alignMiddle		: 'ئوتتۇرا',
		alignBottom		: 'ئاستى',
		invalidHeight	: 'ئېگىزلىك چوقۇم رەقەم پىچىمىدا بولۇشى زۆرۈر',
		invalidWidth	: 'كەڭلىك چوقۇم رەقەم پىچىمىدا بولۇشى زۆرۈر',
		invalidCssLength	: 'بۇ سۆز بۆلىكى چوقۇم مۇۋاپىق بولغان CSS ئۇزۇنلۇق قىممىتى بولۇشى زۆرۈر، بىرلىكى (px, %, in, cm, mm, em, ex, pt ياكى pc)',
		invalidHtmlLength	: 'بۇ سۆز بۆلىكى چوقۇم بىرىكمە HTML ئۇزۇنلۇق قىممىتى بولۇشى كېرەك. ئۆز ئىچىگە ئالىدىغان بىرلىك (px ياكى %)',
		invalidInlineStyle	: 'ئىچكى باغلانما ئۇسلۇبى چوقۇم چېكىتلىك پەش بىلەن ئايرىلغان بىر ياكى كۆپ «خاسلىق ئاتى:خاسلىق قىممىتى» پىچىمىدا بولۇشى لازىم',
		cssLengthTooltip	: 'بۇ سۆز بۆلىكى بىرىكمە CSS ئۇزۇنلۇق قىممىتى بولۇشى كېرەك. ئۆز ئىچىگە ئالىدىغان بىرلىك (px, %, in, cm, mm, em, ex, pt ياكى pc)',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class=\\\\"cke_accessibility\\\\">، ئىشلەتكىلى بولمايدۇ</span>'
	},

	contextmenu :
	{
		options : 'قىسقا يول تىزىملىك تاللانمىسى'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'ئالاھىدە ھەرپ قىستۇر',
		title		: 'ئالاھىدە ھەرپ تاللاڭ',
		options : 'ئالاھىدە ھەرپ تاللانمىسى'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'ئۇلانما قىستۇر/تەھرىرلە',
		other 		: '‹باشقا›',
		menu		: 'ئۇلانما تەھرىر',
		title		: 'ئۇلانما',
		info		: 'ئۇلانما ئۇچۇرى',
		target		: 'نىشان',
		upload		: 'يۈكلە',
		advanced	: 'ئالىي',
		type		: 'ئۇلانما تىپى',
		toUrl		: 'ئادرېس',
		toAnchor	: 'بەت ئىچىدىكى لەڭگەرلىك نۇقتا ئۇلانمىسى',
		toEmail		: 'ئېلخەت',
		targetFrame		: '‹كاندۇك›',
		targetPopup		: '‹قاڭقىش كۆزنەك›',
		targetFrameName	: 'نىشان كاندۇك ئاتى',
		targetPopupName	: 'قاڭقىش كۆزنەك ئاتى',
		popupFeatures	: 'قاڭقىش كۆزنەك خاسلىقى',
		popupResizable	: 'چوڭلۇقى ئۆزگەرتىشچان',
		popupStatusBar	: 'ھالەت بالداق',
		popupLocationBar: 'ئادرېس بالداق',
		popupToolbar	: 'قورال بالداق',
		popupMenuBar	: 'تىزىملىك بالداق',
		popupFullScreen	: 'پۈتۈن ئېكران (IE)',
		popupScrollBars	: 'دومىلىما سۈرگۈچ',
		popupDependent	: 'تەۋە (NS)',
		popupLeft		: 'سول',
		popupTop		: 'ئوڭ',
		id				: 'ID',
		langDir			: 'تىل يۆنىلىشى',
		langDirLTR		: 'سولدىن ئوڭغا (LTR)',
		langDirRTL		: 'ئوڭدىن سولغا (RTL)',
		acccessKey		: 'زىيارەت كۇنۇپكا',
		name			: 'ئات',
		langCode			: 'تىل كودى',
		tabIndex			: 'Tab تەرتىپى',
		advisoryTitle		: 'ماۋزۇ',
		advisoryContentType	: 'مەزمۇن تىپى',
		cssClasses		: 'ئۇسلۇب خىلى ئاتى',
		charset			: 'ھەرپ كودلىنىشى',
		styles			: 'قۇر ئىچىدىكى ئۇسلۇبى',
		rel			: 'باغلىنىش',
		selectAnchor		: 'بىر لەڭگەرلىك نۇقتا تاللاڭ',
		anchorName		: 'لەڭگەرلىك نۇقتا ئاتى بويىچە',
		anchorId			: 'لەڭگەرلىك نۇقتا ID سى بويىچە',
		emailAddress		: 'ئادرېس',
		emailSubject		: 'ماۋزۇ',
		emailBody		: 'مەزمۇن',
		noAnchors		: '(بۇ پۈتۈكتە ئىشلەتكىلى بولىدىغان لەڭگەرلىك نۇقتا يوق)',
		noUrl			: 'ئۇلانما ئادرېسىنى كىرگۈزۈڭ',
		noEmail			: 'ئېلخەت ئادرېسىنى كىرگۈزۈڭ'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'لەڭگەرلىك نۇقتا ئۇلانمىسى قىستۇر/تەھرىرلە',
		menu		: 'لەڭگەرلىك نۇقتا ئۇلانما خاسلىقى',
		title		: 'لەڭگەرلىك نۇقتا ئۇلانما خاسلىقى',
		name		: 'لەڭگەرلىك نۇقتا ئاتى',
		errorName	: 'لەڭگەرلىك نۇقتا ئاتىنى كىرگۈزۈڭ',
		remove		: 'لەڭگەرلىك نۇقتا ئۆچۈر'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'تەرتىپ نومۇر تىزىم خاسلىقى',
		bulletedTitle		: 'تۈر بەلگە تىزىم خاسلىقى',
		type				: 'بەلگە تىپى',
		start				: 'باشلىنىش نومۇرى',
		validateStartNumber				:'تىزىم باشلىنىش تەرتىپ نومۇرى چوقۇم پۈتۈن سان پىچىمىدا بولۇشى لازىم',
		circle				: 'بوش چەمبەر',
		disc				: 'تولدۇرۇلغان چەمبەر',
		square				: 'تولدۇرۇلغان تۆت چاسا',
		none				: 'بەلگە يوق',
		notset				: '‹تەڭشەلمىگەن›',
		armenian			: 'قەدىمكى ئەرمىنىيە تەرتىپ نومۇرى شەكلى',
		georgian			: 'قەدىمكى جورجىيە تەرتىپ نومۇرى شەكلى (an, ban, gan قاتارلىق)',
		lowerRoman			: 'كىچىك ھەرپلىك رىم رەقىمى (i, ii, iii, iv, v قاتارلىق)',
		upperRoman			: 'چوڭ ھەرپلىك رىم رەقىمى (I, II, III, IV, V قاتارلىق)',
		lowerAlpha			: 'ئىنگلىزچە كىچىك ھەرپ (a, b, c, d, e قاتارلىق)',
		upperAlpha			: 'ئىنگلىزچە چوڭ ھەرپ (A, B, C, D, E قاتارلىق)',
		lowerGreek			: 'گرېكچە كىچىك ھەرپ (alpha, beta, gamma قاتارلىق)',
		decimal				: 'سان (1, 2, 3 قاتارلىق)',
		decimalLeadingZero	: 'نۆلدىن باشلانغان سان بەلگە (01, 02, 03 قاتارلىق)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'ئىزدەپ ئالماشتۇر',
		find				: 'ئىزدە',
		replace				: 'ئالماشتۇر',
		findWhat			: 'ئىزدە:',
		replaceWith			: 'ئالماشتۇر:',
		notFoundMsg			: 'بەلگىلەنگەن تېكىستنى تاپالمىدى',
		findOptions			: 'ئىزدەش تاللانمىسى',
		matchCase			: 'چوڭ كىچىك ھەرپنى پەرقلەندۈر',
		matchWord			: 'پۈتۈن سۆز ماسلىشىش',
		matchCyclic			: 'ئايلانما ماسلىشىش',
		replaceAll			: 'ھەممىنى ئالماشتۇر',
		replaceSuccessMsg	: 'جەمئى %1 جايدىكى ئالماشتۇرۇش تاماملاندى'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'جەدۋەل',
		title		: 'جەدۋەل خاسلىقى',
		menu		: 'جەدۋەل خاسلىقى',
		deleteTable	: 'جەدۋەل ئۆچۈر',
		rows		: 'قۇر سانى',
		columns		: 'ئىستون سانى',
		border		: 'گىرۋەك',
		widthPx		: 'پىكسېل',
		widthPc		: 'پىرسەنت',
		widthUnit	: 'كەڭلىك بىرلىكى',
		cellSpace	: 'ئارىلىق',
		cellPad		: 'يان ئارىلىق',
		caption		: 'ماۋزۇ',
		summary		: 'ئۈزۈندە',
		headers		: 'ماۋزۇ كاتەكچە',
		headersNone		: 'يوق',
		headersColumn	: 'بىرىنچى ئىستون',
		headersRow		: 'بىرىنچى قۇر',
		headersBoth		: 'بىرىنچى ئىستون ۋە بىرىنچى قۇر',
		invalidRows		: 'بەلگىلەنگەن ئىستون سانى چوقۇم نۆلدىن چوڭ بولىدۇ',
		invalidCols		: 'بەلگىلەنگەن قۇر سانى چوقۇم نۆلدىن چوڭ بولىدۇ',
		invalidBorder	: 'گىرۋەك توملۇقى چوقۇم سان بولىدۇ',
		invalidWidth	: 'جەدۋەل كەڭلىكى چوقۇم سان بولىدۇ',
		invalidHeight	: 'جەدۋەل ئېگىزلىكى چوقۇم سان بولىدۇ',
		invalidCellSpacing	: 'كاتەكچە ئارىلىقى چوقۇم سان بولىدۇ',
		invalidCellPadding	: 'كاتەكچىگە چوقۇم سان تولدۇرۇلىدۇ',

		cell :
		{
			menu			: 'كاتەكچە',
			insertBefore	: 'سولغا كاتەكچە قىستۇر',
			insertAfter		: 'ئوڭغا كاتەكچە قىستۇر',
			deleteCell		: 'كەتەكچە ئۆچۈر',
			merge			: 'كاتەكچە بىرلەشتۈر',
			mergeRight		: 'كاتەكچىنى ئوڭغا بىرلەشتۈر',
			mergeDown		: 'كاتەكچىنى ئاستىغا بىرلەشتۈر',
			splitHorizontal	: 'كاتەكچىنى توغرىسىغا بىرلەشتۈر',
			splitVertical	: 'كاتەكچىنى بويىغا بىرلەشتۈر',
			title			: 'كاتەكچە خاسلىقى',
			cellType		: 'كاتەكچە تىپى',
			rowSpan			: 'بويىغا چات ئارىسى قۇر سانى',
			colSpan			: 'توغرىسىغا چات ئارىسى ئىستون سانى',
			wordWrap		: 'ئۆزلۈكىدىن قۇر قاتلا',
			hAlign			: 'توغرىسىغا توغرىلا',
			vAlign			: 'بويىغا توغرىلا',
			alignBaseline	: 'ئاساسىي سىزىق',
			bgColor			: 'تەگلىك رەڭگى',
			borderColor		: 'گىرۋەك رەڭگى',
			data			: 'سانلىق مەلۇمات',
			header			: 'جەدۋەل باشى',
			yes				: 'ھەئە',
			no				: 'ياق',
			invalidWidth	: 'كاتەكچە كەڭلىكى چوقۇم سان بولىدۇ',
			invalidHeight	: 'كاتەكچە ئېگىزلىكى چوقۇم سان بولىدۇ',
			invalidRowSpan	: 'قۇر چات ئارىسى چوقۇم پۈتۈن سان بولىدۇ ',
			invalidColSpan	: 'ئىستون چات ئارىسى چوقۇم پۈتۈن سان بولىدۇ',
			chooseColor		: 'تاللاڭ'
		},

		row :
		{
			menu			: 'قۇر',
			insertBefore	: 'ئۈستىگە قۇر قىستۇر',
			insertAfter		: 'ئاستىغا قۇر قىستۇر',
			deleteRow		: 'قۇر ئۆچۈر'
		},

		column :
		{
			menu			: 'ئىستون',
			insertBefore	: 'سولغا ئىستون قىستۇر',
			insertAfter		: 'ئوڭغا ئىستون قىستۇر',
			deleteColumn	: 'ئىستون ئۆچۈر'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'توپچا خاسلىقى',
		text		: 'بەلگە (قىممەت)',
		type		: 'تىپى',
		typeBtn		: 'توپچا',
		typeSbm		: 'تاپشۇر',
		typeRst		: 'ئەسلىگە قايتۇر'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'كۆپ تاللاش خاسلىقى',
		radioTitle	: 'تاق تاللاش توپچا خاسلىقى',
		value		: 'تاللىغان قىممەت',
		selected	: 'تاللانغان'
	},

	// Form Dialog.
	form :
	{
		title		: 'جەدۋەل خاسلىقى',
		menu		: 'جەدۋەل خاسلىقى',
		action		: 'مەشغۇلات',
		method		: 'ئۇسۇل',
		encoding	: 'جەدۋەل كودلىنىشى'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'جەدۋەل/تىزىم خاسلىقى',
		selectInfo	: 'ئۇچۇر تاللاڭ',
		opAvail		: 'تاللاش تۈرلىرى',
		value		: 'قىممەت',
		size		: 'ئېگىزلىكى',
		lines		: 'قۇر',
		chkMulti	: 'كۆپ تاللاشچان',
		opText		: 'تاللانما تېكىستى',
		opValue		: 'تاللانما قىممىتى',
		btnAdd		: 'قوش',
		btnModify	: 'ئۆزگەرت',
		btnUp		: 'ئۈستىگە',
		btnDown		: 'ئاستىغا',
		btnSetValue : 'دەسلەپكى تاللانما قىممىتىگە تەڭشە',
		btnDelete	: 'ئۆچۈر'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: ' كۆپ قۇرلۇق تېكىست خاسلىقى',
		cols		: 'ھەرپ كەڭلىكى',
		rows		: 'قۇر سانى'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'تاق قۇرلۇق تېكىست خاسلىقى',
		name		: 'ئات',
		value		: 'دەسلەپكى قىممىتى',
		charWidth	: 'ھەرپ كەڭلىكى',
		maxChars	: 'ئەڭ كۆپ ھەرپ سانى',
		type		: 'تىپى',
		typeText	: 'تېكىست',
		typePass	: 'ئىم'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'يوشۇرۇن دائىرە خاسلىقى',
		name	: 'ئات',
		value	: 'دەسلەپكى قىممىتى'
	},

	// Image Dialog.
	image :
	{
		title		: 'سۈرەت خاسلىقى',
		titleButton	: 'سۈرەت دائىرە خاسلىقى',
		menu		: 'سۈرەت خاسلىقى',
		infoTab		: 'سۈرەت',
		btnUpload	: 'مۇلازىمېتىرغا يۈكلە',
		upload		: 'يۈكلە',
		alt			: 'تېكىست ئالماشتۇر',
		lockRatio	: 'نىسبەتنى قۇلۇپلا',
		resetSize	: 'ئەسلى چوڭلۇق',
		border		: 'گىرۋەك چوڭلۇقى',
		hSpace		: 'توغرىسىغا ئارىلىقى',
		vSpace		: 'بويىغا ئارىلىقى',
		alertUrl	: 'سۈرەت ئادرېسىنى كىرگۈزۈڭ',
		linkTab		: 'ئۇلانما',
		button2Img	: 'نۆۋەتتىكى توپچىنى سۈرەتكە ئۆزگەرتەمسىز؟',
		img2Button	: 'نۆۋەتتىكى سۈرەتنى توپچىغا ئۆزگەرتەمسىز؟',
		urlMissing	: 'سۈرەتنىڭ ئەسلى ھۆججەت ئادرېسى كەم',
		validateBorder	: 'گىرۋەك چوڭلۇقى چوقۇم سان بولىدۇ',
		validateHSpace	: 'توغرىسىغا ئارىلىق چوقۇم پۈتۈن سان بولىدۇ',
		validateVSpace	: 'بويىغا ئارىلىق چوقۇم پۈتۈن سان بولىدۇ'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash خاسلىق',
		propertiesTab	: 'خاسلىق',
		title			: 'ماۋزۇ',
		chkPlay			: 'ئۆزلۈكىدىن چال',
		chkLoop			: 'دەۋرىي',
		chkMenu			: 'Flash تىزىملىكنى قوزغات',
		chkFull			: 'پۈتۈن ئېكراننى قوزغات',
 		scale			: 'نىسبىتى',
		scaleAll		: 'ھەممىنى كۆرسەت',
		scaleNoBorder	: 'گىرۋەك يوق',
		scaleFit		: 'قەتئىي ماسلىشىش',
		access			: 'قوليازما زىيارەتكە يول قوي',
		accessAlways	: 'ھەمىشە',
		accessSameDomain: 'ئوخشاش دائىرىدە',
		accessNever		: 'ھەرگىز',
		alignAbsBottom	: 'مۇتلەق ئاستى',
		alignAbsMiddle	: 'مۇتلەق ئوتتۇرا',
		alignBaseline	: 'ئاساسىي سىزىق',
		alignTextTop	: 'تېكىست ئۈستىدە',
		quality			: 'سۈپەت',
		qualityBest		: 'ئەڭ ياخشى',
		qualityHigh		: 'يۇقىرى',
		qualityAutoHigh	: 'يۇقىرى (ئاپتوماتىك)',
		qualityMedium	: 'ئوتتۇرا (ئاپتوماتىك)',
		qualityAutoLow	: 'تۆۋەن (ئاپتوماتىك)',
		qualityLow		: 'تۆۋەن',
		windowModeWindow: 'كۆزنەك گەۋدىسى',
		windowModeOpaque: 'خىرە',
		windowModeTransparent : 'سۈزۈك',
		windowMode		: 'كۆزنەك ھالىتى',
		flashvars		: 'Flash  ئۆزگەرگۈچى',
		bgcolor			: 'تەگلىك رەڭگى',
		hSpace			: 'توغرىسىغا ئارىلىق',
		vSpace			: 'بويىغا ئارىلىق',
		validateSrc		: 'ئەسلى ھۆججەت ئادرېسىنى كىرگۈزۈڭ',
		validateHSpace	: 'توغرىسىغا ئارىلىق چوقۇم سان بولىدۇ',
		validateVSpace	: 'بويىغا ئارىلىق چوقۇم سان بولىدۇ'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'ئىملا تەكشۈر',
		title			: 'ئىملا تەكشۈر',
		notAvailable	: 'كەچۈرۈڭ، مۇلازىمېتىرنى ۋاقتىنچە ئىشلەتكىلى بولمايدۇ',
		errorLoading	: 'لازىملىق مۇلازىمېتىرنى يۈكلىگەندە خاتالىق كۆرۈلدى: %s.',
		notInDic		: 'لۇغەتتە يوق',
		changeTo		: 'ئۆزگەرت',
		btnIgnore		: 'پەرۋا قىلما',
		btnIgnoreAll	: 'ھەممىگە پەرۋا قىلما',
		btnReplace		: 'ئالماشتۇر',
		btnReplaceAll	: 'ھەممىنى ئالماشتۇر',
		btnUndo			: 'يېنىۋال',
		noSuggestions	: '-تەكلىپ يوق-',
		progress		: 'ئىملا تەكشۈرۈۋاتىدۇ…',
		noMispell		: 'ئىملا تەكشۈرۈش تامام: ئىملا خاتالىقى بايقالمىدى',
		noChanges		: 'ئىملا تەكشۈرۈش تامام: ھېچقانداق سۆزنى ئۆزگەرتمىدى',
		oneChange		: 'ئىملا تەكشۈرۈش تامام: بىر سۆزنى ئۆزگەرتتى',
		manyChanges		: 'ئىملا تەكشۈرۈش تامام: %1  سۆزنى ئۆزگەرتتى',
		ieSpellDownload	: 'ئىملا تەكشۈرۈش قىستۇرمىسى تېخى ئورنىتىلمىغان، ھازىرلا چۈشۈرەمسىز؟'
	},

	smiley :
	{
		toolbar	: 'چىراي ئىپادە',
		title	: 'چىراي ئىپادە سىنبەلگە قىستۇر',
		options : 'چىراي ئىپادە سىنبەلگە تاللانمىسى'
	},

	elementsPath :
	{
		eleLabel : 'ئېلېمېنت يولى',
		eleTitle : '%1 ئېلېمېنت'
	},

	numberedlist	: 'تەرتىپ نومۇر تىزىمى',
	bulletedlist	: 'تۈر بەلگە تىزىمى',
	indent			: 'تارايت',
	outdent			: 'كەڭەيت',

	justify :
	{
		left	: 'سولغا توغرىلا',
		center	: 'ئوتتۇرىغا توغرىلا',
		right	: 'ئوڭغا توغرىلا',
		block	: 'ئىككى تەرەپتىن توغرىلا'
	},

	blockquote : 'بۆلەك نەقىل',

	clipboard :
	{
		title		: 'چاپلا',
		cutError	: 'تور كۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى تەھرىرلىگۈچنىڭ كەس مەشغۇلاتىنى ئۆزلۈكىدىن ئىجرا قىلىشىغا يول قويمايدۇ، ھەرپتاختا تېز كۇنۇپكا (Ctrl/Cmd+X) ئارقىلىق تاماملاڭ',
		copyError	: 'تور كۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى تەھرىرلىگۈچنىڭ كۆچۈر مەشغۇلاتىنى ئۆزلۈكىدىن ئىجرا قىلىشىغا يول قويمايدۇ، ھەرپتاختا تېز كۇنۇپكا (Ctrl/Cmd+C) ئارقىلىق تاماملاڭ',
		pasteMsg	: 'ھەرپتاختا تېز كۇنۇپكا (<STRONG>Ctrl/Cmd+V</STRONG>) نى ئىشلىتىپ مەزمۇننى تۆۋەندىكى رامكىغا كۆچۈرۈڭ، ئاندىن <STRONG>جەزملە</STRONG>نى بېسىڭ',
		securityMsg	: 'توركۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى سەۋەبىدىن بۇ تەھرىرلىگۈچ چاپلاش تاختىسىدىكى مەزمۇننى بىۋاستە زىيارەت قىلالمايدۇ، بۇ كۆزنەكتە قايتا بىر قېتىم چاپلىشىڭىز كېرەك.',
		pasteArea	: 'چاپلاش دائىرىسى'
	},

	pastefromword :
	{
		confirmCleanup	: 'سىز چاپلىماقچى بولغان مەزمۇن MS Word تىن كەلگەندەك قىلىدۇ، MS Word پىچىمىنى تازىلىۋەتكەندىن كېيىن ئاندىن چاپلامدۇ؟',
		toolbar			: 'MS Word تىن چاپلا',
		title			: 'MS Word تىن چاپلا',
		error			: 'ئىچكى خاتالىق سەۋەبىدىن چاپلايدىغان سانلىق مەلۇماتنى تازىلىيالمايدۇ'
	},

	pasteText :
	{
		button	: 'پىچىمى يوق تېكىست سۈپىتىدە چاپلا',
		title	: 'پىچىمى يوق تېكىست سۈپىتىدە چاپلا'
	},

	templates :
	{
		button			: 'قېلىپ',
		title			: 'مەزمۇن قېلىپى',
		options : 'قېلىپ تاللانمىسى',
		insertOption	: 'نۆۋەتتىكى مەزمۇننى ئالماشتۇر',
		selectPromptMsg	: 'تەھرىرلىگۈچنىڭ مەزمۇن قېلىپىنى تاللاڭ:',
		emptyListMsg	: '(قېلىپ يوق)'
	},

	showBlocks : 'بۆلەكنى كۆرسەت',

	stylesCombo :
	{
		label		: 'ئۇسلۇب',
		panelTitle	: 'ئۇسلۇب',
		panelTitle1	: 'بۆلەك دەرىجىسىدىكى ئېلېمېنت ئۇسلۇبى',
		panelTitle2	: 'ئىچكى باغلانما ئېلېمېنت ئۇسلۇبى',
		panelTitle3	: 'نەڭ (Object) ئېلېمېنت ئۇسلۇبى'
	},

	format :
	{
		label		: 'پىچىم',
		panelTitle	: 'پىچىم',

		tag_p		: 'ئادەتتىكى',
		tag_pre		: 'تىزىلغان پىچىم',
		tag_address	: 'ئادرېس',
		tag_h1		: 'ماۋزۇ 1',
		tag_h2		: 'ماۋزۇ 2',
		tag_h3		: 'ماۋزۇ 3',
		tag_h4		: 'ماۋزۇ 4',
		tag_h5		: 'ماۋزۇ 5',
		tag_h6		: 'ماۋزۇ 6',
		tag_div		: 'ئابزاس (DIV)'
	},

	div :
	{
		title				: 'DIV قاچا قۇر',
		toolbar				: 'DIV قاچا قۇر',
		cssClassInputLabel	: 'ئۇسلۇب تىپىنىڭ ئاتى',
		styleSelectLabel	: 'ئۇسلۇب',
		IdInputLabel		: 'ID',
		languageCodeInputLabel	: 'تىل كودى',
		inlineStyleInputLabel	: 'قۇر ئىچىدىكى ئۇسلۇبى',
		advisoryTitleInputLabel	: 'ماۋزۇ',
		langDirLabel		: 'تىل يۆنىلىشى',
		langDirLTRLabel		: 'سولدىن ئوڭغا (LTR)',
		langDirRTLLabel		: 'ئوڭدىن سولغا (RTL)',
		edit				: 'DIV تەھرىر',
		remove				: 'DIV چىقىرىۋەت'
  	},

	iframe :
	{
		title		: 'IFrame خاسلىق',
		toolbar		: 'IFrame ',
		noUrl		: 'كاندۇكنىڭ ئادرېسى(Url)نى كىرگۈزۈڭ',
		scrolling	: 'دومىلىما سۈرگۈچكە يول قوي',
		border		: 'كاندۇك گىرۋەكلىرىنى كۆرسەت'
	},

	font :
	{
		label		: 'خەت نۇسخا',
		voiceLabel	: 'خەت نۇسخا',
		panelTitle	: 'خەت نۇسخا'
	},

	fontSize :
	{
		label		: 'چوڭلۇقى',
		voiceLabel	: 'خەت چوڭلۇقى',
		panelTitle	: 'چوڭلۇقى'
	},

	colorButton :
	{
		textColorTitle	: 'تېكىست رەڭگى',
		bgColorTitle	: 'تەگلىك رەڭگى',
		panelTitle		: 'رەڭ',
		auto			: 'ئۆزلۈكىدىن',
		more			: 'باشقا رەڭ'
	},

	colors :
	{
		'000' : 'قارا',
		'800000' : 'قىزغۇچ سېرىق',
		'8B4513' : 'توق قوڭۇر',
		'2F4F4F' : 'قارامتۇل يېشىل',
		'008080' : 'كۆكۈش يېشىل',
		'000080' : 'قارامتۇل كۆك',
		'4B0082' : 'كۆكۈش كۈلرەڭ',
		'696969' : 'قارامتۇل كۈلرەڭ',
		'B22222' : 'خىش قىزىل',
		'A52A2A' : 'قوڭۇر',
		'DAA520' : 'ئالتۇن سېرىق',
		'006400' : 'توق يېشىل',
		'40E0D0' : 'كۆكۈچ يېشىل',
		'0000CD' : 'ئوتتۇراھال كۆك',
		'800080' : 'بىنەپشە',
		'808080' : 'كۈلرەڭ',
		'F00' : 'قىزىل',
		'FF8C00' : 'توق قىزغۇچ سېرىق',
		'FFD700' : 'ئالتۇن',
		'008000' : 'يېشىل',
		'0FF' : 'يېشىل كۆك',
		'00F' : 'كۆك',
		'EE82EE' : 'قىزغۇچ بىنەپشە',
		'A9A9A9' : 'توق كۈلرەڭ',
		'FFA07A' : 'كاۋا چېچىكى سېرىق',
		'FFA500' : 'قىزغۇچ سېرىق',
		'FFFF00' : 'سېرىق',
		'00FF00' : 'Lime', // MISSING
		'AFEEEE' : 'سۇس ھاۋا رەڭ',
		'ADD8E6' : 'ئوچۇق كۆك',
		'DDA0DD' : 'قىزغۇچ بىنەپشە',
		'D3D3D3' : 'سۇس كۆكۈچ كۈلرەڭ',
		'FFF0F5' : 'سۇس قىزغۇچ بىنەپشە',
		'FAEBD7' : 'Antique White', // MISSING
		'FFFFE0' : 'سۇس سېرىق',
		'F0FFF0' : 'Honeydew', // MISSING
		'F0FFFF' : 'ئاسمان كۆكى',
		'F0F8FF' : 'سۇس كۆك',
		'E6E6FA' : 'سۇس بىنەپشە',
		'FFF' : 'ئاق'
	},

	scayt :
	{
		title			: 'شۇئان ئىملا تەكشۈر',
		opera_title		: 'Opera توركۆرگۈنى قوللىمايدۇ',
		enable			: 'شۇئان ئىملا تەكشۈرۈشنى قوزغات',
		disable			: 'شۇئان ئىملا تەكشۈرۈشنى چەكلە',
		about			: 'شۇئان ئىملا تەكشۈرۈش ھەققىدە',
		toggle			: 'شۇئان ئىملا تەكشۈرۈشنى ۋاقىتلىق توختات/قوزغات',
		options			: 'تاللانما',
		langs			: 'تىل',
		moreSuggestions	: 'تېخىمۇ كۆپ ئىملا تەۋسىيەسى',
		ignore			: 'پەرۋا قىلما',
		ignoreAll		: 'ھەممىسىگە پەرۋا قىلما',
		addWord			: 'سۆز قوش',
		emptyDic		: 'لۇغەت ئاتى بوش قالمايدۇ',

		optionsTab		: 'تاللانما',
		allCaps			: 'چوڭ ھەرپتە يېزىلغان ھەممە سۆزگە پەرۋا قىلما',
		ignoreDomainNames : 'دائىرە ئاتىغا پەرۋا قىلما',
		mixedCase		: 'چوڭ كىچىك ھەرپ بىلەن ئارىلاش يېزىلغان سۆزگە پەرۋا قىلما',
		mixedWithDigits	: 'سان بار سۆزگە پەرۋا قىلما',

		languagesTab	: 'تىل',

		dictionariesTab	: 'لۇغەت',
		dic_field_name	: 'لۇغەت ئاتى',
		dic_create		: 'قۇر',
		dic_restore		: 'ئەسلىگە كەلتۈر',
		dic_delete		: 'ئۆچۈر',
		dic_rename		: 'ئات ئۆزگەرت',
		dic_info		: 'باشلىنىشتا ئىشلەتكۈچى لۇغىتى Cookie  غا ساقلىنىدۇ ئەمما Cookie نىڭ سىغىمى چەكلىك بولغاچقا، ئىشلەتكۈچى لۇغىتى كۆپىيىپ Cookie  چەكلىمىسىدىن ئېشىپ كەتكەندە ساقلىغىلى بولمايدۇ، بۇ چاغدا لۇغىتىڭىزنى مۇلازىمېتىرىمىزغا ساقلىسىڭىز بولىدۇ. شەخسىي لۇغىتىڭىزنى مۇلازىمېتىرىمىزغا ساقلىماقچى بولسىڭىز لۇغىتىڭىزگە ئاتتىن بىرنى قويۇڭ، ئەگەر مۇلازىمتېرىمىزدا سىزنىڭ لۇغىتىڭىزدىن بىرسى بولسا لۇغەت ئاتىنى كىرگۈزۈپ ئەسلىگە قايتۇر توپچىسىنى بېسىڭ.',

		aboutTab		: 'ھەققىدە'
	},

	about :
	{
		title		: 'CKEditor ھەققىدە',
		dlgTitle	: 'CKEditor ھەققىدە',
		help	: '$1 نى زىيارەت قىلىپ ياردەمگە ئېرىشىڭ',
		userGuide : 'CKEditor ئىشلەتكۈچى قوللانمىسى',
		moreInfo	: 'تور تۇرايىمىزنى زىيارەت قىلىپ كېلىشىمگە ئائىت تېخىمۇ كۆپ ئۇچۇرغا ئېرىشىڭ',
		copy		: 'Copyright &copy; $1. نەشر ھوقۇقىغا ئىگە'
	},

	maximize : 'چوڭايت',
	minimize : 'كىچىكلەت',

	fakeobjects :
	{
		anchor		: 'لەڭگەرلىك نۇقتا',
		flash		: 'Flash جانلاندۇرۇم',
		iframe		: 'IFrame',
		hiddenfield	: 'يوشۇرۇن دائىرە',
		unknown		: 'يوچۇن نەڭ'
	},

	resize : 'چوڭلۇقىنى ئۆزگەرت',

	colordialog :
	{
		title		: 'رەڭ تاللاڭ',
		options	:	'رەڭ تاللانمىسى',
		highlight	: 'يورۇت',
		selected	: 'رەڭ تاللاڭ',
		clear		: 'تازىلا'
	},

	toolbarCollapse	: 'قورال بالداقنى قاتلا',
	toolbarExpand	: 'قورال بالداقنى ياي',

	toolbarGroups :
	{
		document : 'پۈتۈك',
		clipboard : 'چاپلاش تاختىسى/يېنىۋال',
		editing : 'تەھرىر',
		forms : 'جەدۋەل',
		basicstyles : 'ئاساسىي ئۇسلۇب',
		paragraph : 'ئابزاس',
		links : 'ئۇلانما',
		insert : 'قىستۇر',
		styles : 'ئۇسلۇب',
		colors : 'رەڭ',
		tools : 'قورال'
	},

	bidi :
	{
		ltr : 'تېكىست يۆنىلىشى سولدىن ئوڭغا',
		rtl : 'تېكىست يۆنىلىشى ئوڭدىن سولغا'
	},

	docprops :
	{
		label : 'بەت خاسلىقى',
		title : 'بەت خاسلىقى',
		design : 'لايىھە',
		meta : 'مېتا سانلىق مەلۇمات',
		chooseColor : 'تاللاڭ',
		other : 'باشقا',
		docTitle :	'بەت ماۋزۇسى',
		charset : 	'ھەرپ كودلىنىشى',
		charsetOther : 'باشقا ھەرپ كودلىنىشى',
		charsetASCII : 'ASCII',
		charsetCE : 'ئوتتۇرا ياۋرۇپا',
		charsetCT : 'مۇرەككەپ خەنزۇچە (Big5)',
		charsetCR : 'سىلاۋيانچە',
		charsetGR : 'گىرېكچە',
		charsetJP : 'ياپونچە',
		charsetKR : 'كۆرىيەچە',
		charsetTR : 'تۈركچە',
		charsetUN : 'يۇنىكود (UTF-8)',
		charsetWE : 'غەربىي ياۋرۇپا',
		docType : 'پۈتۈك تىپى',
		docTypeOther : 'باشقا پۈتۈك تىپى',
		xhtmlDec : 'XHTML ئېنىقلىمىسىنى ئۆز ئىچىگە ئالىدۇ',
		bgColor : 'تەگلىك رەڭگى',
		bgImage : 'تەگلىك سۈرەت',
		bgFixed : 'تەگلىك سۈرەتنى دومىلاتما',
		txtColor : 'تېكىست رەڭگى',
		margin : 'بەت گىرۋەك',
		marginTop : 'ئۈستى',
		marginLeft : 'سول',
		marginRight : 'ئوڭ',
		marginBottom : 'ئاستى',
		metaKeywords : 'بەت يۈزى ئىندېكىس ھالقىلىق سۆزى (ئىنگلىزچە پەش [,] بىلەن ئايرىلىدۇ)',
		metaDescription : 'بەت يۈزى چۈشەندۈرۈشى',
		metaAuthor : 'يازغۇچى',
		metaCopyright : 'نەشر ھوقۇقى',
		previewHtml : '<p>بۇ بىر قىسىم <strong>كۆرسەتمىگە ئىشلىتىدىغان تېكىست </strong>سىز نۆۋەتتە <a href=\\\\"javascript:void(0)\\\\">CKEditor</a>.نى ئىشلىتىۋاتىسىز.</p>'
	}
};
>>>>>>> origin/master
