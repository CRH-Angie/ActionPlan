@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-3 p-5">
            <img src="/img/person.svg" alt="Profile Picture" class="w-100 border rounded-circle">
        </div>
        <div class="col-9 p-5">
            <div class="d-flex align-items-center pb-4"><h1>Action Plan Test</h1></div>        
            <div class="d-flex">
                <div class="pe-5"><strong>127k</strong> posts</div>
                <div class="pe-5"><strong>24k</strong> followers</div>
                <div class="pe-5"><strong>300</strong> following</div>
            </div>  
            <div class="pt-4 font-weight-bold">Action Plan Test</div>
            <div>This is sample description</div>
            <div><a href="#">actionplan.com/laravel/test</a></div>
        </div>
    </div>
    <div class="row">
        <div class="col-4 d-flex">
            <img src="/img/posts/post1.jpeg" alt="Post 1: Writing in notebook" class="w-100">
        </div>
        <div class="col-4 d-flex">
            <img src="/img/posts/post2.jpeg" alt="Post 2: Writing in notebook" class="w-100">
        </div>
        <div class="col-4 d-flex">
            <img src="/img/posts/post3.jpeg" alt="Post 3: Writing in notebook" class="w-100">
        </div>
    </div>
</div>
@endsection
