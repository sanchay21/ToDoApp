from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage),
    path('todo-list', views.getTodoList),
    path('create-todo', views.createTodo),
]