from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet
from .serializers import CardSerializer, ListSerializer
from .models import Card, List


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

# class ListApi(ListAPIView):
#     queryset = List.objects.all()
#     serializer_class = ListSerializer
#
#
# class CardApi(ListAPIView):
#     queryset = Card.objects.all()
#     serializer_class = CardSerializer
#
