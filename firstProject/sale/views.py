from django.shortcuts import render

# Create your views here.
from .models import Customer, Orders
from django.db.models import Sum

def index(request):
    customers = Customer.objects.all()
    return render(request, "sale/index.html", {
        "customer": customers
    })

def customer(request, customer_id):
    custom = Customer.objects.get(pk=customer_id)
    order = Orders.objects.filter(customer_id = custom.id) 
    number = len(order)
    return render(request, "sale/customer.html", {
        "customer_i": custom,
        "order": order,
        "number": number,
        "sum": order.aggregate(Sum('amount'))
    })

def order(request):
    
    return render(request, "sale/order.html", {
        "customers": Customer.objects.all(),
        "orders": Orders.objects.all()
    })

def purchase(request, customer_id):
    if request.method == "POST":
        customer_name = request.POST["customer_name"]
        order_name = request.POST["order_name"]
        amount = request.POST["amount"]
        id_customer = Orders.objects.filter(customer_id = customer.id)


    return render(request, "sale/index.html")