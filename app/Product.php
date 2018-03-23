<?php

namespace App;
use App\Seller;
use App\Category; 
use App\Transaction;
use Illuminate\Database\Eloquent\Model;
use App\Transformers\ProductTransformer;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public $transformer = ProductTransformer::class;
    
    const PRODUCTO_DISPONIBLE = 'Disponible';
    const PRODUCTO_NO_DISPONIBLE = 'No disponible';

    protected $fillable = [
        'name',
        'description',
        'quantity',
        'status',
        'image',
        'seller_id'
    ];

    protected $hidden = [
        'pivot'
    ];

    public function estaDisponible() 
    {
        return $this->status == Product::PRODUCTO_DISPONIBLE;
    }

    public function seller()
    {
        return $this->belongsTo(Seller::class); // Un producto pertenece a un vendedor Product tiene el id de seller (seller_id)
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
