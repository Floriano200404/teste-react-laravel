<?php namespace App\Http\Controllers;

use Inertia\Inertia;

class MainController extends Controller {
  public function cadastro() {
    return Inertia::render('Aluno/Cadastro');
  }
}
