from django.shortcuts import render
from django import forms 

class NewTaskForm(forms.Form):
    add = forms.CharField(label="Add a task:", max_length=15)

tasks = ["kitchen", "Dishes", "Laundry", "Swipping"]

def index(request):
    return render(request, "tasks/index.html", {
        "task": tasks
    })

def add(request):
    if request.method == "POST":
        form = NewTaskForm(request.POST)
        if form.is_valid():
            add = form.cleaned_data["add"]
            tasks.append(add)
        else:
            return render(request, "tasks/add.html", {
                "form": form
            })
    return render(request, "tasks/add.html", {
        "form": NewTaskForm()
    })