<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');
    $router->resource('users', UserController::class);
    $router->resource('first-level-categories', FirstLevelCategoryController::class);
    $router->resource('categories', CategoryController::class);
    $router->resource('certificates', CertificateController::class);
    $router->resource('documentations', DocumentationController::class);
    $router->resource('stacks', StackController::class);
    $router->resource('technologies', TechnologyController::class);
    $router->resource('templates', TemplateController::class);
    $router->resource('tracks', TrackController::class);
    $router->resource('videos', VideoController::class);
    $router->resource('websites', WebsiteController::class);
    $router->resource('programs', ProgramController::class);
    $router->resource('quizzes', QuizController::class);
    $router->resource('quiz-results', QuizResultController::class);




});
