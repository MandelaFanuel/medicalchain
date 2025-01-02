<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use App\Http\Middleware\AdminMiddleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )

    ->withMiddleware(function ($middleware) {
        // Ajout de l'alias pour le middleware admin
        $middleware->alias([
            'admin' => AdminMiddleware::class,
        ]);

        // Ajout des middlewares pour les routes API
        $middleware->group('api', [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,  // Middleware pour Sanctum
            'throttle:api',  // Limitation du débit pour l'API
            \Illuminate\Routing\Middleware\SubstituteBindings::class,  // Gestion des paramètres liés aux routes
        ]);
    })

    ->withExceptions(function (Exceptions $exceptions) {
        // Configuration des exceptions (si nécessaire)
    })
    
    ->create();
