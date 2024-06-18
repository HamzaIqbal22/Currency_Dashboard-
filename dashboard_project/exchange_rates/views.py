import requests
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import render
from .models import ExchangeRate
from .serializers import ExchangeRateSerializer

# Create your views here.
class ExchangeRateViewSet(viewsets.ModelViewSet):
    queryset = ExchangeRate.objects.all()
    serializer_class = ExchangeRateSerializer

    def fetch_exchange_rates(self, request):
        response = requests.get('https://api.frankfurter.app/latest?from=USD&to=EUR')
        # Process the response and save to the database
        data = response.json()
        for date, rate in data['rates'].items():
            for target_currency, exchange_rate in rate.items():
                ExchangeRate.objects.create(
                    date=date,
                    base_currency='USD',
                    target_currency=target_currency,
                    rate=exchange_rate
                )
        return Response(data)