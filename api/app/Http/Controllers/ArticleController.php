<?php

/**
 * Created by PhpStorm.
 * User: shu920921
 * Date: 2017/06/12
 * Time: 21:58
 */

namespace App\Http\Controllers;

use App\Models\Article;

class ArticleController extends Controller
{
    public function get()
    {
        $articles = Article::all();
        return response()->json($articles);
    }

    public function getById($id)
    {
        $article = Article::find($id);
        return response()->json($article);
    }
}
