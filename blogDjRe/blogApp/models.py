from django.db import models
import datetime
# Create your models here.

class Product(models.Model):
 name = models.CharField(max_length=150, blank=True, null=True)
 price = models.DecimalField(max_digits=7, decimal_places=2)
 description = models.TextField()
 category = models.CharField(max_length=50, blank=True, null=True)
 image = models.ImageField(upload_to='uploads/images')

 def __str__(self):
  return self.name