@extends('base')

@section('title', 'Notifications')

@section('content')
<div class="container pt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow">
                <div class="card-header bg-primary text-white mb-3">
                    <h4 class="mb-0 text-center">My Notifications</h4>
                </div>

                <div class="card-body">
                    <!-- Filtres de navigation -->
                    <div class="nav nav-pills mb-4 d-flex justify-content-center gap-3">
                        <a href="{{ route('notifications.index') }}" 
                           class="btn {{ request()->is('notifications') ? 'btn-primary' : 'btn-outline-primary' }}">
                            All
                        </a>
                        <a href="{{ route('notifications.index', ['type' => 'message']) }}" 
                           class="btn {{ request('type') === 'message' ? 'btn-primary' : 'btn-outline-primary' }}">
                            Messages
                        </a>
                        <a href="{{ route('notifications.index', ['type' => 'email']) }}" 
                           class="btn {{ request('type') === 'email' ? 'btn-primary' : 'btn-outline-primary' }}">
                            Emails
                        </a>
                    </div>

                    <!-- Liste des notifications -->
                    <div class="notifications-list">
                        @forelse($notifications as $notification)
                            <div class="notification-item p-3 mb-3 rounded {{ $notification->read_at ? 'bg-light' : 'bg-primary bg-opacity-10' }} position-relative">
                                <div class="d-flex align-items-center">
                                    @if(!$notification->read_at)
                                        <span class="position-absolute top-0 start-0 translate-middle p-2 bg-primary border border-light rounded-circle">
                                            <span class="visually-hidden">New</span>
                                        </span>
                                    @endif
                                    
                                    <div class="flex-grow-1">
                                        <h5 class="mb-1">{{ $notification->title }}</h5>
                                        <p class="mb-1">{{ $notification->data['message'] ?? '' }}</p>
                                        <small class="text-muted">
                                            {{ $notification->created_at->diffForHumans() }}
                                            @if($notification->sender)
                                                • De: {{ $notification->sender->name }}
                                            @endif
                                        </small>
                                    </div>

                                    <!-- Actions -->
                                    <div class="ms-3">
                                        @if(!$notification->read_at)
                                            <form action="{{ route('notifications.markAsRead', $notification) }}" 
                                                  method="POST" 
                                                  class="d-inline">
                                                @csrf
                                                <button type="submit" class="btn btn-sm btn-success">
                                                    <i class="fas fa-check"></i> Mark as read
                                                </button>
                                            </form>
                                        @endif
                                        <form action="{{ route('notifications.destroy', $notification) }}" 
                                              method="POST" 
                                              class="d-inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-sm btn-danger">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <div class="text-center py-5">
                                <i class="fas fa-bell-slash fa-3x text-muted mb-3"></i>
                                <p class="h5 text-muted">ANo notification found</p>
                            </div>
                        @endforelse

                        <!-- Pagination -->
                        @if($notifications->count() > 0)
                            <div class="d-flex justify-content-center mt-4">
                                {{ $notifications->appends(request()->query())->links() }}
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@push('styles')
<style>
    .notification-item {
        transition: all 0.3s ease;
        border: 1px solid rgba(0,0,0,0.1);
    }

    .notification-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .nav-pills .btn {
        transition: all 0.3s ease;
    }

    .nav-pills .btn:hover {
        transform: translateY(-1px);
    }
</style>
@endpush
@endsection
