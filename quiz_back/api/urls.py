from django.urls import path
from api import views

urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('posts/<int:pk>/like', views.LikePost),
    path('users/', views.UserList.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    # path('categories/<int:pk>/products/', views.category_product)
]