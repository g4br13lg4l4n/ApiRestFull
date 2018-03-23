@component('mail::message')
  Hola {{$user->name}}

Gracias por crear una cuenta por favor verifique su cuenta en este enlace:

@component('mail::button', ['url' => route('verify', $user->verification_token)])
  Confirmar mi cuenta
@endcomponent

Gracias, <br>
{{ config('app.name') }}
@endcomponent
