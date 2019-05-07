# from rest_framework import generics
# from rest_framework.permissions import IsAuthenticated
from django.http import Http404
from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from api.models import Post
from api.serializers import PostSerializer2

class PostList(generics.ListCreateAPIView):
    serializer_class = PostSerializer2
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Post.objects.for_user(self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer2


