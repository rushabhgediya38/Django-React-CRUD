from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from blogApp.views import ProductView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("", ProductView, basename='productview')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)