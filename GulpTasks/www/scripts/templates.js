angular.module("gulpTasksApp.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/about/index.html","<div class=\"jumbotron text-center\">\r\n    <h1>About Page</h1>\r\n\r\n    <p>{{ message }}</p>\r\n</div>");
$templateCache.put("components/contact/index.html","<div class=\"jumbotron text-center\">\r\n    <h1>Contact Page</h1>\r\n\r\n    <p>{{ message }}</p>\r\n</div>");
$templateCache.put("components/home/index.html","<div class=\"jumbotron text-center\">\r\n    <h1>Home Page</h1>\r\n\r\n    <p>{{ message }}</p>\r\n</div>");}]);