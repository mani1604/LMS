from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from accounts.views import RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register('students', views.StudentsView)

urlpatterns = [
    path("teachers/", views.teachers_api_view),
    path("teacher/<int:pk>/", views.teacher_detail),
    path("", include(router.urls)),
    path("mentors/", views.MentorsView.as_view()),
    path("mentors/<str:pk>", views.MentorDetails.as_view()),
    path("register/", RegisterView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]