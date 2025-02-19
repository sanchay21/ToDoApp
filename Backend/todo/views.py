from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Todolist
# from django.core import serializers
from rest_framework.decorators import api_view 
from rest_framework.response import Response

# Create your views here.
def homepage(request):
    return HttpResponse("Hello")

def getTodoList(request):
    # todolist = Todolist.objects.all()
    # data = serializers.serialize('json', todolist)
    # return HttpResponse(data, content_type='application/json')  ## Using Serializers
    todolist = Todolist.objects.all().values("priority", "task", "status") 
    return JsonResponse(list(todolist), safe=False)  ## Directly using json response

@api_view(["POST"])
def createTodo(request):
    data = request.data
    print("Recieved Data = ", data)
    newTodo = Todolist(priority = data["priority"], task = data["task"], status = 0)
    newTodo.save()
    return Response({"message": "Data received", "data": data})