from django.db import models

# Create your models here.
class Todolist(models.Model):
    priority = models.IntegerField()
    task = models.CharField(max_length=100)
    status = models.IntegerField()

    def __str__(self):
        return self.task
    