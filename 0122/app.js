(function($) {

	var Applicant  = Backbone.Model.extend({
		defaults: {
			name: 'some',
	    		job: 'thing',
	    		sex: 'M'
		}
	});

	var Applications = Backbone.Collection.extend({
		model: Applicant
	});



})(jQuery);

