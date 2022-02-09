<?php

namespace Tests\Unit\Http\Controllers;

use Tests\Unit\Http\AbstractHttpTest;

class AuthControllerTest extends AbstractHttpTest
{
    /**
     * user login invalid data
     */
    public function testUserLoginInvalidData()
    {
        $requestBody = [];

        $route = route('auth.login');

        $response = $this
            ->json('POST', $route, $requestBody);

        $response
            ->assertStatus(422)
            ->assertJson(require __DIR__ . '/responses/auth/auth-login-invalid-response.php');
    }

    /*
     * test user login wrong credentials
     */
    public function testUserLoginWrongCredentials()
    {
        $requestBody = [
            'email' => 'admin@blogger.test',
            'password' => 'wrongpass'
        ];

        $route = route('auth.login');

        $response = $this
            ->json('POST', $route, $requestBody);

        $response
            ->assertStatus(422)
            ->assertJsonFragment(["message" => "Invalid credentials, please try again!"]);
    }

    /**
     * test user login success
     */
    public function testUserLoginSuccess()
    {
        $requestBody = [
            'email' => 'admin@blogger.test',
            'password' => '123Secret'
        ];

        $route = route('auth.login');

        $response = $this
            ->json('POST', $route, $requestBody);

        $response->assertStatus(200)
            ->assertJsonStructure(require __DIR__ . '/responses/auth/auth-login-success-response.php');
    }

    /**
     * test user register invalid
     */
    public function testUserRegisterInvalid()
    {
        $requestBody = [];

        $route = route('auth.register');

        $response = $this
            ->json('POST', $route, $requestBody);

        $response
            ->assertStatus(422)
            ->assertJson(require __DIR__ . '/responses/auth/auth-register-invalid-response.php');
    }

    /**
     * test user register successful
     */
    public function testUserRegisterSuccess()
    {
        $requestBody = [
            'name' => 'James Blogger',
            'username' => 'coolBlogger',
            'email' => 'james@blogger.test',
            'password' => '123Secret',
        ];

        $route = route('auth.register');

        $response = $this
            ->json('POST', $route, $requestBody);

        $response->assertStatus(200)
            ->assertJsonStructure(require __DIR__ . '/responses/auth/auth-login-success-response.php');
    }

    /**
     * test email taken error response
     */
    public function testEmailUsernameTaken()
    {
        $requestBody = [
            'name' => 'System Admin',
            'username' => 'admin',
            'email' => 'admin@blogger.test',
            'password' => '123Secret',
        ];

        $route = route('auth.register');

        $response = $this
            ->json('POST', $route, $requestBody);

        $response
            ->assertStatus(422)
            ->assertJson(require __DIR__ . '/responses/auth/auth-register-email-username-taken-response.php');
    }
}
