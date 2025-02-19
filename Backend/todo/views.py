from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Todolist
from django.core import serializers

# Create your views here.
def homepage(request):
    return HttpResponse("Hello")

def getTodoList(request):
    # todolist = Todolist.objects.all()
    # data = serializers.serialize('json', todolist)
    # return HttpResponse(data, content_type='application/json')  ## Using Serializers
    todolist = Todolist.objects.all().values("priority", "task", "status") 
    return JsonResponse(list(todolist), safe=False)  ## Directly using json response
    