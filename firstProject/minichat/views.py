from django.shortcuts import render
from django import forms 
from django.http import HttpResponseRedirect
from django.urls import reverse
# Create your views here.

class NewChatForm(forms.Form):
    input = forms.CharField(label="nom")
    message = forms.CharField(max_length = 150)
    
def index(request):
    return render(request, "minichat/index.html")

def chat(request):
    if "chats" not in request.session:
        request.session['chats'] = {}

    if request.method == "POST":
        form = NewChatForm(request.POST)
        if form.is_valid():
            inputs = form.cleaned_data["input"]
            messages = form.cleaned_data["message"]
            request.session[inputs] += "\n"+messages
            return HttpResponseRedirect(reverse('minichat:chat'))
            
        else:
            return render(request, "minichat/chat.html", {
                "form": form
            })
    
    return render(request, "minichat/chat.html", {
        "input": request.session,
        "form": NewChatForm()
    })
