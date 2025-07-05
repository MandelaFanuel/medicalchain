import json
from channels.generic.websocket import AsyncWebsocketConsumer


class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.group_name = f"user_{self.scope['user'].id}"  # Utilisation de l'ID de l'utilisateur pour le groupe

        # Ajouter ce consommateur au groupe correspondant
        await self.channel_layer.group_add(self.group_name, self.channel_name)

        # Accepter la connexion WebSocket
        await self.accept()

    async def disconnect(self, close_code):
        # Supprimer ce consommateur du groupe lorsque la connexion est fermée

        await self.channel_layer.group_discard(self.group_name, self.channel_name)

    # Méthode pour envoyer une notification au WebSocket
    async def send_notification(self, event):

        message = event["message"]  # Extraire le message de l'événement

        await self.send(text_data=json.dumps({"message": message}))
