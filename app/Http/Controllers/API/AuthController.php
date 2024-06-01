<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request) {

        $validation = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required'
        ]);

        if($validation->fails()) {
            return response()->json(['message' => 'Required fields missing', 'status' => false]);
        }

        if(Auth::attempt(['email' => $request->username, 'password' => $request->password])) {
            
            $user = Auth::user();

            $response['token'] = $user->createToken('MyApp')->plainTextToken;
            $response['name']  = $user->name;
            $response['message'] = 'User loggedin successfully.';  
            $response['status'] = true; 

            return response()->json($response);

        }

        return response()->json([
            'message' => 'Invalid credentials provided.',
            'status' => false
        ]);

    }
}
