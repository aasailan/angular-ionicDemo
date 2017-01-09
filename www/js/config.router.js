'use strict';

/**
 * Config for the router
 */
angular.module('app')
.run(['$rootScope', '$state', '$stateParams',
	function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
])

.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/tab/ionic');
	  $stateProvider
	  .state('tab', {
		  url: '/tab',
		  abstract: true,
		  templateUrl: "/templates/tabs.html"
	  })
	  .state('tab.ionic', {
		  url: '/ionic',
		  views: {
			  'tab-ionic': {
				  templateUrl: 'templates/ionic/tab-ionic.html',
				  controller: 'tabIonicCtrl'
			  }
		  },
		  resolve: {
			  deps: ['$ocLazyLoad',
				  function ($ocLazyLoad) {
					  return $ocLazyLoad.load([
						  'js/controllers/tabIonicCtrl.js'
					  ])
				  }
			  ]
		  }
	  })
	  .state('tab.angular', {
		  url: '/angular',
		  views: {
			  'tab-angular': {
				  templateUrl: 'templates/angular/tab-angular.html',
				  controller: 'tabAngularCtrl'
			  }
		  },
		  resolve: {
			  deps: ['$ocLazyLoad',
				  function ($ocLazyLoad) {
					  return $ocLazyLoad.load([
						  'js/controllers/tabAngularCtrl.js'
					  ])
				  }
			  ]
		  }
	  })
  }]);
