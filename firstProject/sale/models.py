from django.db import models
from django.db.models.fields.reverse_related import ManyToOneRel

# Create your models here.

class Customer(models.Model):
    name = models.CharField(max_length=64)
    city = models.CharField(max_length=64)
    age = models.IntegerField()

    def __str__(self):
        return f"{self.id}: {self.name}  {self.city} {self.age}"

class Orders(models.Model):
    name = models.CharField(max_length = 64)
    amount = models.FloatField()
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="customer")
    
    def __str__(self) -> str:
        return f"{self.id}: {self.name}, price: {self.amount}."