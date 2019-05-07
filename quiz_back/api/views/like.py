from django.contrib.auth.models import User
from api.serializers import UserSerializer, PostSerializer2
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from api.models import Post
import json


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
def LikePost(request, pk):
    Postl = Post.objects.get(id=pk)
    data = json.loads(request.body)
    serializer = PostSerializer2(instance=Postl, data=data)
    serializer.is_valid(raise_exception=True)
    return Response({'liked': 'yes'})
