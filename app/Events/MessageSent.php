<?php

namespace App\Events;

use App\Models\Message;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;

class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    /**
     * Create a new event instance.
     */
    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        // Broadcasting on a private channel named after the receiver's ID
        return [
            new PrivateChannel('chat.' . $this->message->receiver_id)
        ];
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith(): array
    {
        // Les données à diffuser pour chaque message
        return [
            'message' => [
                'id' => $this->message->id,
                'body' => $this->message->body,
                'sender_id' => $this->message->sender_id,
                'receiver_id' => $this->message->receiver_id,
                'sent_date' => $this->message->sent_date,
            ]
        ];
    }
}
