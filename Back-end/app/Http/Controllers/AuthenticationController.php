<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;

            return response(['user' => $user, 'token' => $token, 'message' => 'Login successful']);
        }

        return response(['message' => 'Invalid credentials'], 401);
    }

    public function register(RegisterationRequest $request)
    {
        $request->merge([
            'password' => $request->input('password')
        ]);

        $user = $this->createUser($request->all());
        $token = $user->createToken('authToken')->plainTextToken;

        return response(['user' => $user, 'token' => $token, 'message' => 'Registeration successful']);
    }

    private function createUser($userData)
    {
        // Create and save user in the database
        return User::create($userData);
    }
}
