<?php

namespace Radermacher\NovaCurrentEnvironmentCard\Http\Controllers;

class ResourcesController
{
    public function __invoke()
    {
        return config('app.env', 'unknown');
    }
}
