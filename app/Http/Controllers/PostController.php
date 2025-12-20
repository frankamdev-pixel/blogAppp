<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index()
    {
        if (! Auth::check()) {
            abort(403);
        }

        return Inertia::render('Posts/Create');
    }

    public function store(Request $request)
    {
        if (! Auth::check()) {
            abort(403);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        $post = new Post;

        $post->title = $validated['title'];
        $post->description = $validated['description'];

        $post->user_id = Auth::id();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('posts', 'public');
            $post->image = $path;
        }

        $post->save();

        return redirect()->route('dashboard')->with('success', 'Post created successfully!');
    }
    public function create()
    {
        return Inertia::render('Posts/Create', [
            'create' => 'je suis juste le test'
        ]);
    }
    public function show(Post $post): Response
    {

        return Inertia::render('Posts/Show', [
            'post' => $post,
        ]);
    }

    public function edit(Post $post): Response
    {

        return Inertia::render('Posts/Edit', [
            'post' => $post,
        ]);
    }

    public function update(Request $request, Post $post)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        $post->title = $validated['title'];
        $post->description = $validated['description'];

        if ($request->hasFile('image')) {
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }
            $path = $request->file('image')->store('posts', 'public');
            $post->image = $path;
        }

        $post->save();

        return redirect()->route('dashboard')->with('success', 'Post modified successfully!');
    }

    public function destroy(Post $post)
    {
        if ($post->image) {
            Storage::disk('public')->delete($post->image);
        }
        $post->delete();

        return redirect()->back()->with('success', 'Post deleted successfully!');
    }

    public function like(Post $post)
    {
        $user = Auth::user();
        if ($post->likedBy()->where('user_ id', $user->id)->exists()) {
            $post->likedBy()->detach($user->id);
            $message = 'Tu as retire ton like!';
        } else {
            $post->likedBy()->attach($user->id);
            $message = 'Tu as ajoute ton like!';
        }

        return redirect()->back()->with('success', $message);
    }
}
