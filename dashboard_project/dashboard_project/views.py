from django.shortcuts import redirect

def redirect_to_api(request):
    return redirect('/api/exchange_rates/')