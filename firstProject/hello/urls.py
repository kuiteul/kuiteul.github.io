from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('<str:name>', views.greet, name="greet"),
    path('greetfile/<str:name>', views.greetfile, name="greetfile")
]
