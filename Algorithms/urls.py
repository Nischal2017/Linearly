from django.urls import path
from django.conf.urls import url, include
from .views import home,bubblesort
urlpatterns = [
    path('',home,name='home'),
    path('bubblesort/',bubblesort,name='bubblesort'),
]