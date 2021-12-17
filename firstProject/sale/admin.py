from django.contrib import admin
from .models import Customer, Orders
# Register your models here.

class CustomerConf(admin.ModelAdmin):
    list_display = ("id", "name", "city", "age")

class OrderConf(admin.ModelAdmin):
    list_display = ("id", "name", "amount", "customer_id")

admin.site.register(Customer, CustomerConf)
admin.site.register(Orders, OrderConf)
