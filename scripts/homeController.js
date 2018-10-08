angular
    .module('ngHomes')
    .controller('homeController', function ($scope, homeFactory) {
        $scope.homes;

        $scope.priceInfo = {
            min: 0,
            max: 1000000
        }


        $scope.newListing = {};

        $scope.addHome = function (newListing) {
            // Photo by rawpixel on Unsplash
            newListing.image = 'default-home';
            $scope.homes.push(newListing);
            $scope.newListing = {};
        }

        $scope.editHome = function (home) {
            $scope.editListing = true;
            $scope.existingListing = home;
        }

        $scope.saveHomeEdit = function () {
            $scope.existingListing = {};
            $scope.editListing = false;
        }

        $scope.deleteHome = function (listing) {
            var index = $scope.homes.indexOf(listing);
            $scope.homes.splice(index, 1);
            $scope.existingListing = {};
            $scope.editListing = false;
        }

        homeFactory.getHomes().success(function (data) {
            $scope.homes = data;
        }).error(function (error) {
            console.log(error);
        });

    });
