from django.urls import path
from django.conf.urls import url, include
from .views import team, binarysearch, dijkstra, home, bubblesort, insertionsort, kruskal, linearsearch, prim, selectionsort, mergesort, quicksort, traveller
urlpatterns = [
    path('', home, name='home'),
    path('bubblesort/', bubblesort, name='bubblesort'),
    path('selectionsort/', selectionsort, name='selectionsort'),
    path('insertionsort/', insertionsort, name='insertionsort'),
    path('mergesort/', mergesort, name='mergesort'),
    path('quicksort/', quicksort, name='quicksort'),
    path('linearsearch/', linearsearch, name='linearsearch'),
    path('binarysearch/', binarysearch, name='binarysearch'),
    path('kruskal/',kruskal,name='kruskal'),
    path('dijkstra/',dijkstra,name='dijkstra'),
    path('traveller/',traveller,name='traveller'),
    path('prim/',prim,name='prim'),
    path('team',team,name='team'),
]
