<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\OClient;
use App\Models\User;
use App\Utils\LogHelper;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class AuthController extends AbstractController
{
    public function userLogin()
    {
        $data = request()->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $data['email'] = trim($data['email']);

        // only active users can login
        $user = User::query()
            ->where(['email' => $data['email']])
            ->with(['roles'])
            ->first();

        if (!$user) {
            throw new NotFoundHttpException('User with that email does not exist!');
        }

        if (Hash::check($data['password'], $user->password)) {
            $oClient = OClient::query()->where(['password_client' => 1, 'revoked' => 0])->first();
            if (!$oClient) {
                throw new UnprocessableEntityHttpException('Server error. Please try again later');
            }

            // oauth 2 token creation data
            $tokenData = [
                'username' => $data['email'],
                'password' => $data['password'],
                'client_id' => $oClient->id,
                'client_secret' => $oClient->secret,
                'grant_type' => 'password',
            ];

            // use passport oauth server
            return $this->generateAuthenticationToken($tokenData, $user);
        }
        throw new UnprocessableEntityHttpException('Invalid credentials, please try again!');
    }

    public function userRegister()
    {
        $data = request()->validate([
            'name' => 'required|string',
            'username' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6'
        ]);

        $data['email'] = trim($data['email']);

        $pass = $data['password'];

        // hash password
        $data['password'] = bcrypt($data['password']);

        $user = User::query()->create($data);

        $oClient = OClient::query()->where(['password_client' => 1, 'revoked' => 0])->first();
        if (!$oClient) {
            LogHelper::error(['Token generation' => 'Oauth server error' ]);

            // skip token creation, user will have to try to login
            return response()->json(['user' => new UserResource($user)]);
        }

        // oauth 2 token creation data
        $tokenData = [
            'username' => $data['email'],
            'password' => $pass,
            'client_id' => $oClient->id,
            'client_secret' => $oClient->secret,
            'grant_type' => 'password',
            'permissions' => 'all',
        ];

        return $this->generateAuthenticationToken($tokenData, $user);
    }

    public function userLogout()
    {
        request()->user()->token()->revoke();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function authenticatedUser()
    {
        $user = User::query()->with('roles')->find(request()->user()->id);

        return $this->transformResponse(new UserResource($user));
    }

    /**
     * @param array $tokenData
     * @param $user
     * @return JsonResponse
     * @throws \Exception
     */
    public function generateAuthenticationToken(array $tokenData, $user): JsonResponse
    {
        $tokenRequest = Request::create('/oauth/token', 'POST', $tokenData);
        $tokenResult = app()->handle($tokenRequest);

        $tokenContent = json_decode($tokenResult->getContent(), true);

        // return response with authentication token and user object
        $response = [
            'access_token' => $tokenContent['access_token'],
            'refresh_token' => $tokenContent['refresh_token'],
            'token_type' => $tokenContent['token_type'],
            'expires_at' => Carbon::parse($tokenContent['expires_in'])->toDateTimeString(),
            'user' => new UserResource($user)
        ];

        return response()->json($response);
    }

    public function refreshAuthToken()
    {
        $data = request()->validate([
            'refresh_token' => 'required'
        ]);

        $oClient = OClient::query()->where(['password_client' => 1, 'revoked' => 0])->first();
        if (!$oClient) {
            throw new UnprocessableEntityHttpException('Server error. Please try again later');
        }

        // oath 2 token creation data
        $refreshTokenData = [
            'refresh_token' => $data['refresh_token'],
            'client_id' => $oClient->id,
            'client_secret' => $oClient->secret,
            'grant_type' => 'refresh_token',
            'scope' => '',
        ];

        $tokenRequest = Request::create('/oauth/token', 'POST', $refreshTokenData);
        $tokenResult = app()->handle($tokenRequest);

        $tokenContent = json_decode($tokenResult->getContent(), true);

        $response = [
            'access_token' => $tokenContent['access_token'],
            'refresh_token' => $tokenContent['refresh_token'],
            'token_type' => $tokenContent['token_type'],
            'expires_at' => Carbon::parse($tokenContent['expires_in'])->toDateTimeString(),
        ];

        return response()->json($response);
    }

    public function verifyEmail()
    {
        // todo
    }

    public function sendPasswordResetEmail()
    {
        // todo
    }

    public function resetUserPassword()
    {
        // todo
    }
}
