from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import json
import random

def home(request):
    return render(request,'Algorithms/pbl.html')

def bubblesort(request):
    if request.POST:
        context = {}
        if 'submit_rn' in request.POST:
            context["data_not_present"] = False
            size = request.POST.get('rsize')
            speed = int(request.POST.get('rspeed'))
            context["data"] = json.dumps({
                "type": "r",
                "size": size,
                "speed": speed
            })
        elif 'submit_cu' in request.POST:
            context["data_not_present"] = False
            speed = int(request.POST.get('cspeed'))
            array = list(map(int,request.POST.get('array').split(' ')))
            max_ele = max(array)
            scale = 400/max_ele
            scaled_array = [round(i*scale,0) for i in array]
            context["data"] = json.dumps({
                "type":"c",
                "array": array,
                "scaled_array":scaled_array,
                "speed": speed
            })
        return render(request, 'Algorithms/bubblesort.html', context)
    context={}
    context["data_not_present"]=True
    return render(request,'Algorithms/bubblesort.html',context)

def selectionsort(request):
    if request.POST:
        context = {}
        if 'submit_rn' in request.POST:
            context["data_not_present"] = False
            size = request.POST.get('rsize')
            speed = int(request.POST.get('rspeed'))
            context["data"] = json.dumps({
                "type": "r",
                "size": size,
                "speed": speed
            })
        elif 'submit_cu' in request.POST:
            context["data_not_present"] = False
            speed = int(request.POST.get('cspeed'))
            array = list(map(int, request.POST.get('array').split(' ')))
            max_ele = max(array)
            scale = 400/max_ele
            scaled_array = [round(i*scale, 0) for i in array]
            context["data"] = json.dumps({
                "type": "c",
                "array": array,
                "scaled_array": scaled_array,
                "speed": speed
            })
        return render(request, 'Algorithms/selectionsort.html', context)
    context = {}
    context["data_not_present"] = True
    return render(request, 'Algorithms/selectionsort.html', context)

def insertionsort(request):
    if request.POST:
        context = {}
        if 'submit_rn' in request.POST:
            context["data_not_present"] = False
            size = request.POST.get('rsize')
            speed = int(request.POST.get('rspeed'))
            context["data"] = json.dumps({
                "type": "r",
                "size": size,
                "speed": speed
            })
        elif 'submit_cu' in request.POST:
            context["data_not_present"] = False
            speed = int(request.POST.get('cspeed'))
            array = list(map(int, request.POST.get('array').split(' ')))
            max_ele = max(array)
            scale = 400/max_ele
            scaled_array = [round(i*scale, 0) for i in array]
            context["data"] = json.dumps({
                "type": "c",
                "array": array,
                "scaled_array": scaled_array,
                "speed": speed
            })
        return render(request, 'Algorithms/insertionsort.html', context)
    context = {}
    context["data_not_present"] = True
    return render(request, 'Algorithms/insertionsort.html', context)

def mergesort(request):
    if request.POST:
        context = {}
        if 'submit_rn' in request.POST:
            context["data_not_present"] = False
            size = request.POST.get('rsize')
            speed = int(request.POST.get('rspeed'))
            context["data"] = json.dumps({
                "type": "r",
                "size": size,
                "speed": speed
            })
        elif 'submit_cu' in request.POST:
            context["data_not_present"] = False
            speed = int(request.POST.get('cspeed'))
            array = list(map(int, request.POST.get('array').split(' ')))
            max_ele = max(array)
            scale = 400/max_ele
            scaled_array = [round(i*scale, 0) for i in array]
            context["data"] = json.dumps({
                "type": "c",
                "array": array,
                "scaled_array": scaled_array,
                "speed": speed
            })
        return render(request, 'Algorithms/mergesort.html', context)
    context = {}
    context["data_not_present"] = True
    return render(request, 'Algorithms/mergesort.html', context)


def quicksort(request):
    if request.POST:
        context = {}
        if 'submit_rn' in request.POST:
            context["data_not_present"] = False
            size = request.POST.get('rsize')
            speed = int(request.POST.get('rspeed'))
            context["data"] = json.dumps({
                "type": "r",
                "size": size,
                "speed": speed,
            })
        elif 'submit_cu' in request.POST:
            context["data_not_present"] = False
            speed = int(request.POST.get('cspeed'))
            array = list(map(int, request.POST.get('array').split(' ')))
            max_ele = max(array)
            scale = 400/max_ele
            scaled_array = [round(i*scale, 0) for i in array]
            context["data"] = json.dumps({
                "type": "c",
                "array": array,
                "scaled_array": scaled_array,
                "speed": speed
            })
        return render(request, 'Algorithms/quicksort.html', context)
    context = {}
    context["data_not_present"] = True
    return render(request, 'Algorithms/quicksort.html', context)
    

def linearsearch(request):
    if request.POST:
        context = {}
        if 'submit_rn' in request.POST:
            context["data_not_present"] = False
            size = request.POST.get('rsize')
            array = []
            for i in range(int(size)):
                array.append(random.randint(0, 400))
            context["data"] = json.dumps({
                "type": "r",
                "size": size,
                "array": array,
                "value": random.randint(0, 400)
            })
        elif 'submit_cu' in request.POST:
            context["data_not_present"] = False
            key = int(request.POST.get('key'))
            array = list(map(int, request.POST.get('array').split(' ')))
            max_ele = max(array)
            scale = 400/max_ele
            scaled_array = [round(i*scale, 0) for i in array]
            context["data"] = json.dumps({
                "type": "c",
                "array": array,
                "scaled_values": scaled_array,
                "value": key,
                "scaled_value": round(key*scale, 0)
            })
        return render(request, 'Algorithms/linearsearch.html', context)
    context = {}
    context["data_not_present"] = True
    return render(request, 'Algorithms/linearsearch.html', context)

def binarysearch(request):
    if request.POST:
        context = {}
        if 'submit_rn' in request.POST:
            context["data_not_present"] = False
            size = request.POST.get('rsize')
            array=[]
            for i in range(int(size)):
                array.append(random.randint(0, 400))
            array = sorted(array)
            context["data"] = json.dumps({
                "type": "r",
                "size": size,
                "array": array,
                "value":random.randint(0,400)
            })
        elif 'submit_cu' in request.POST:
            context["data_not_present"] = False
            key = int(request.POST.get('key'))
            array = list(map(int, request.POST.get('array').split(' ')))
            array = sorted(array)
            max_ele = max(array)
            scale = 400/max_ele
            scaled_array = [round(i*scale, 0) for i in array]
            context["data"] = json.dumps({
                "type": "c",
                "array": array,
                "scaled_values": scaled_array,
                "value": key,
                "scaled_value": round(key*scale,0)
            })
        return render(request, 'Algorithms/binarysearch.html', context)
    context = {}
    context["data_not_present"] = True
    return render(request, 'Algorithms/binarysearch.html', context)

def traveller(request):
    return render(request,'Algorithms/traveller.html')
def prim(request):
    return render(request,'Algorithms/prims.html')
def kruskal(request):
    return render(request,'Algorithms/kruskal.html')
def dijkstra(request):
    return render(request,'Algorithms/dijkstra.html')

def team(request):
    return render(request,'Algorithms/Team.html')
