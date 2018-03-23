<?php

namespace App;

use App\Transformers\UserTransformer;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

    const USUARIO_VARIFICADO = '1';
    const USUARIO_NO_VERIFICADO = '0';

    const USUARIO_ADMINISTRADOR = 'true';
    const USUARIO_REGULAR = 'false';

    protected $table = 'users'; 
    protected $dates = ['deleted_at'];

    public $transformer = UserTransformer::class;

    protected $fillable = [
        'name',
        'email', 
        'password',
        'verified',
        'verification_token',
        'admin',
    ];

    /* conmutadores para setear valores antes de guardarlos en la BD
    ** creamos un conmutador para guradar el campo name (nombre) en minúsculas 
    **/
/*    public function setNameAttribute($valor)  
    {
        $this->attributes['name'] = strtolower($valor);
    } 
*/
    protected $hidden = [
        'password', 
        'remember_token',
        'verification_token'
    ];

    public function esVerificado() 
    {
        return $this->verified == User::USUARIO_VARIFICADO;
    }

    public function esAdministrador() 
    {
        return $this->admin == User::USUARIO_ADMINISTRADOR;
    }

    public static function generarVerificacionToken() 
    {
        return str_random(40);
    }
}
