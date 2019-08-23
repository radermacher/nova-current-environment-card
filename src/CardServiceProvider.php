<?php

namespace Radermacher\NovaCurrentEnvironmentCard;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class CardServiceProvider extends ServiceProvider
{
    /**
     * Component identifier name.
     *
     * @var string
     */
    public static $name = 'nova-current-environment-card';

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        $this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/'.static::$name),
        ]);

        Nova::serving(function (ServingNova $event) {
            Nova::script(static::$name, __DIR__.'/../dist/js/card.js');
            Nova::style(static::$name, __DIR__.'/../dist/css/card.css');
            Nova::translations(static::getTranslations());
        });
    }

    /**
     * Get the translation keys from file.
     *
     * @return array
     */
    private static function getTranslations(): array
    {
        $translationFile = resource_path('lang/vendor/'.static::$name.'/'.app()->getLocale().'.json');

        if (!is_readable($translationFile)) {
            $translationFile = __DIR__.'/../resources/lang/'.app()->getLocale().'.json';

            if (!is_readable($translationFile)) {
                return [];
            }
        }

        return json_decode(file_get_contents($translationFile), true);
    }

    /**
     * Register the card's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
                ->prefix('nova-vendor/'.static::$name)
                ->group(__DIR__.'/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
