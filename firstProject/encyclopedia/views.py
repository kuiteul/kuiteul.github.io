from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django import forms
import random
from . import util



class NewEntryWiki(forms.Form):
    title = forms.CharField(label="Title ", max_length=50)
    text = forms.CharField(label="", widget=forms.Textarea(attrs={"cols":60, "rows": 15}), initial="moi")

class Edit(forms.Form):
    forms.CharField(label="", widget=forms.Textarea(attrs={"cols":60, "rows": 15}),
    initial="")

formular = NewEntryWiki()
content = ""

def index(request):
    return render(request, "encyclopedia/index.html", {
        "list": util.list_entries()
    })

def title(request, title):
    return render(request, "encyclopedia/title.html",{
        "title_entry": title,
        "title_found": util.get_entry(title)
        
    })

def newEntry(request):
    if request.method == "POST":
        form = NewEntryWiki(request.POST)
        if form.is_valid():
            title = form.cleaned_data["title"]
            text = form.cleaned_data["text"]
            util.save_entry(title, text)
            return HttpResponseRedirect(reverse('encyclopedia:index'))
            
        else:
            return render(request, "encyclopedia/newEntry.html",{
                "form": form
            })
    
    return render(request, "encyclopedia/newEntry.html", {
        "form": formular.as_p()
    })

def edit(request, title):
    if request.method == "POST":
        update = request.POST.get("edit")
        if update:
            util.save_entry(title, update) 
            return HttpResponseRedirect(f"../{title}")
            
        else:
            return render(request, "encyclopedia/edit.html")
    return render(request, "encyclopedia/edit.html", {
        "content": util.get_entry(title),
        "title": title
    
    })

def random(request):
    content = len(util.list_entries())
    content = content * random.randint()
    return render(request, "encyclopedia/random.html", {
        "content": content
    })
