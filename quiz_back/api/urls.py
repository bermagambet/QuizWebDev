from django.urls import path
from api import views

urlpatterns = [
    path('/', ),
    path('/<int:pk>/',),
    path('users/', views.UserList.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    # path('categories/<int:pk>/products/', views.category_product)
]   