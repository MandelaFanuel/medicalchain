

<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    @csrf
</form>
<button type="button" class="dropdown-item" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</button>

