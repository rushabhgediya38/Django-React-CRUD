from django.shortcuts import render

# Create your views here.
from .serializers import ProductSerializer
from .models import Product
from rest_framework import viewsets

class ProductView(viewsets.ModelViewSet):
 queryset = Product.objects.all()
 print(queryset)
 serializer_class = ProductSerializer