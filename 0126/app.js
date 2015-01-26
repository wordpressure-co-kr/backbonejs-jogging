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

	var ApplicantView = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, 'render', 'post', 'cancel', 'edit', 'view');
		},

		events: { 
			'click span.post': 'post',
	    		'click span.cancel': 'cancel',
	    		'click span.edit': 'edit',
	    		'click span.view': 'view'
		},

	    	post: function() {

		};

		
	});

})(jQuery);

