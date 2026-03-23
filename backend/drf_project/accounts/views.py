from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] # Allowing the view to be accessed by Anyone


class DashboardView(APIView):
    permission_classes = [IsAuthenticated] # This allows the View to accessed only when the user is Logged in (authenticated)

    def get(self, request):
        return Response({"message": "Welcome to the dashboard"})
