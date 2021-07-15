from django.urls import path
from django.conf.urls import url, include
from .views import binarysearch, home, bubblesort, insertionsort, linearsearch, selectionsort, mergesort, quicksort
urlpatterns = [
    path('', home, name='home'),
    path('bubblesort/', bubblesort, name='bubblesort'),
    path('selectionsort/', selectionsort, name='selectionsort'),
    path('insertionsort/', insertionsort, name='insertionsort'),
    path('mergesort/', mergesort, name='mergesort'),
    path('quicksort/', quicksort, name='quicksort'),
    path('linearsearch/', linearsearch, name='linearsearch'),
    path('binarysearch/', binarysearch, name='binarysearch'),
]
