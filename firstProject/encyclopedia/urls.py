from django.urls import path
from . import views


app_name = "encyclopedia"
urlpatterns = [
    path("", views.index, name="index"),
    path("<str:title>", views.title, name="title"),
    path("newEntry/", views.newEntry, name="newEntry"),
    path("edit/<str:title>", views.edit, name="edit"),
    path("random/", views.random, name="random"),
]
