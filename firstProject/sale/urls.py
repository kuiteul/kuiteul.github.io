from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.index, name="index"),
    path('<int:customer_id>', views.customer, name="customer"),
    path('order/', views.order, name="order"),
    path('purchase/<int:customer_id>', views.order, name="order"),
   
]