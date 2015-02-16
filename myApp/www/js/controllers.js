var cats = [
    { title: 'Category1', id: "Category1" },
    { title: 'Category2', id: "Category2" },
    { title: 'Category3', id: "Category3" },
    { title: 'Category4', id: "Category4" }];
var imgs = [
    { user: 'User1', src: "img/foto1.jpg", category: "Category1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { user: 'User2', src: "img/foto2.jpg", category: "Category1", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { user: 'User3', src: "img/foto3.jpg", category: "Category2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { user: 'User4', src: "img/foto4.jpg", category: "Category2", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { user: 'User5', src: "img/foto5.jpg", category: "Category3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { user: 'User6', src: "img/foto6.jpg", category: "Category3", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { user: 'User4', src: "img/foto4.jpg", category: "Category4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { user: 'User5', src: "img/foto5.jpg", category: "Category4", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { user: 'User3', src: "img/foto6.jpg", category: "Category3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { user: 'User4', src: "img/foto4.jpg", category: "Category4", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { user: 'User5', src: "img/foto5.jpg", category: "Category1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { user: 'User5', src: "img/foto5.jpg", category: "Category2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { user: 'User1', src: "img/foto6.jpg", category: "Category1", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }];

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $stateParams) {
  // Form data for the login
  $scope.loginData = {};
  // Form data for the register
  $scope.registerData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalr = modal;
  });
  // Create the info modal that we will use later
  $ionicModal.fromTemplateUrl('templates/info.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modali = modal;
  });

  //detail
  $ionicModal.fromTemplateUrl('templates/detail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modald = modal;
  });


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modalr.hide();
  };
  // Triggered in the info modal to close it
  $scope.closeInfo = function() {
    $scope.modali.hide();
  };

  // Triggered in the detail modal to close it
  $scope.closeDetail = function() {
    $scope.modald.hide();
  };
  // Triggered in the details modal to close it
  $scope.closeDetails = function() {
    $scope.modalds.hide();

  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  // Open the login modal
  $scope.register = function() {
    $scope.modalr.show();
  };
  // Open the login modal
  $scope.info = function() {
    $scope.modali.show();
  };

  //Open detail modal mine
  $scope.det = function(userd, srcd, catd, desd) {
    $scope.modald.show();
    $scope.details = {"use": userd, "src": srcd, "cat": catd, "des": desd };
  };
  //Open detail modal REST
  $scope.detRest = function(itemId, itemName, itemDesc) {
  //details
  $ionicModal.fromTemplateUrl('templates/details.html', {
    scope: $scope
    }).then(function(modal) {
      $scope.modalds = modal;
      $scope.item =  {"id": itemId, "name": itemName, "desc": itemDesc };
      $scope.modalds.show();    
    });
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //console.log('User', $scope.loginData.username);
    //console.log('Password', $scope.loginData.password);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
      $stateParams.user = $scope.loginData.username;
      console.log($stateParams.user);
    }, 1000);
  };
  // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    console.log('Usuario', $scope.registerData.username);
    console.log('Password1', $scope.registerData.password1);
    console.log('Password2', $scope.registerData.password2);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };
})

//Test category
.controller('PlaylistsCtrl', function($scope) {
  console.log("prueba")
  $scope.playlists = cats;
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
  //console.log($stateParams.playlistTitle);
  var imgD = [];
  for (var i = imgs.length - 1; i >= 0; i--) {
    if(imgs[i].category == $stateParams.playlistTitle){
      imgD.push(imgs[i]);
      //console.log(imgs[i]);
    }
  };
  $scope.idCtrl = $stateParams;
  $scope.details = imgD;
})

//Up Image and Camera controller
.controller('PictureCtrl', function($scope, $cordovaCamera, $location, Items, Images) {
    Items.query(function(data){
      $scope.items = data;
      console.log($scope.items);
    });

  $scope.upImage = function(data) {
    console.log(data);
    Images.add({}, data);
    $location.path('/home');
  }
  
  $scope.getPicture = function () {
    //var image = document.getElementById('myImage');
    //image.src = "http://www.sobreseguros.com/images/2009/08/perro-cachorro.jpg";
    var options = {
      quality: 70,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
  };
});