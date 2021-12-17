from django.shortcuts import render
from .models import Flight, Passenger
# Create your views here.

def index(request):
    return render(request, "flights/index.html",{
         "flights": Flight.objects.all()
    })

def flight(request, flight_id):
     flights = Flight.objects.get(pk=flight_id)         
     return render(request, "flights/flight.html", {
          "flight": flights,
          "passengers": flights.passenger.all()
     })