from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Post


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)


class PostSerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    body = serializers.CharField()
    like_count = serializers.IntegerField()
    created_at = serializers.DateTimeField()
    created_by = UserSerializer(read_only=True)
    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'like_count', 'created_at', 'created_by')

    def create(self, validated_data):
        task1 = Post.objects.create(**validated_data)
        # arr = [Product(category=category, **product) for product in products]
        # Product.objects.bulk_create(arr)

        # for i in range(0, len(arr), 100):
        #     # 0 100 200 300 400
        #     Product.objects.bulk_create(arr[i:i+100])

        return task1

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.body = validated_data.get('body', instance.body)
        instance.like_count = validated_data.get('like_count', instance.like_count)
        instance.created_at = validated_data.get('created_at', instance.created_at)
        instance.save()
        return instance