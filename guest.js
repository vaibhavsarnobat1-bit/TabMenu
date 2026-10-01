var currentRoom = 101;

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('splash').classList.add('hide');
    document.getElementById('app').classList.remove('hidden');
    setTimeout(function() {
      document.getElementById('roomModal').classList.add('open');
    }, 400);
  }, 2000);
});

var hour = new Date().getHours();
var greet = hour < 12 ? 'Good Morning!' : hour < 17 ? 'Good Afternoon!' : hour < 21 ? 'Good Evening!' : 'Good Night!';
document.getElementById('heroGreeting').textContent = greet;

function changeRoom(d) {
  currentRoom = Math.max(100, Math.min(999, currentRoom + d));
  document.getElementById('roomVal').textContent = currentRoom;
}

function confirmRoom() {
  document.getElementById('roomModal').classList.remove('open');
  document.getElementById('headerRoom').textContent = 'Room ' + currentRoom;
  document.getElementById('infoBannerRoom').textContent = currentRoom;
  showToast('Room ' + currentRoom + ' confirmed!');
}

function openPage(name) {
  var el = document.getElementById('page-' + name);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closePage(name) {
  var el = document.getElementById('page-' + name);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}

function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3000);
}

function requestService(name) {
  showToast('Request sent: ' + name + ' - Room ' + currentRoom);
  sendToStaff('Guest Service: ' + name, currentRoom);
}

function addMinibar(item, price) {
  showToast(item + ' (Rs. ' + price + ') added to bill');
  sendToStaff('Mini Bar: ' + item + ' Rs. ' + price, currentRoom);
}

function bookSpa(name) {
  showToast(name + ' booked! Staff will confirm shortly.');
  sendToStaff('Spa Booking: ' + name, currentRoom);
}

function sendToStaff(message, room) {
  var orders = JSON.parse(localStorage.getItem('anemos_orders') || '[]');
  orders.unshift({
    id: Date.now(),
    room: room,
    message: message,
    time: new Date().toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'}),
    status: 'pending'
  });
  localStorage.setItem('anemos_orders', JSON.stringify(orders));
}

var autoReplies = {
  'order breakfast': 'Our breakfast is served 7-10:30 AM. What would you like to order?',
  'book spa': 'Our spa is open 10 AM - 9 PM. Which treatment interests you? We have Swedish Massage, Aromatherapy, Deep Tissue and more!',
  'extra towels': 'Extra towels on their way to Room ' + currentRoom + '! Should arrive in 10-15 min.',
  'room cleaning': 'Housekeeping dispatched to Room ' + currentRoom + '! Should arrive in 15-20 minutes.',
  'wi-fi password': 'Network: ANEMOS_Guest / Password: Anemos@2024 / Enjoy browsing!',
  'late check-out': 'Late check-out request noted for Room ' + currentRoom + '. We will confirm by 9 AM on checkout day.',
  'checkout': 'Your checkout time is 11:00 AM. Need a late checkout? We can arrange it subject to availability.',
  'pool': 'Our pool is open 7 AM - 8 PM. Located at the Ground Floor Rear Garden. Enjoy your swim!'
};

function sendQuick(text) {
  document.getElementById('chatInput').value = text;
  sendChatMsg();
}

function handleChatKey(e) {
  if (e.key === 'Enter') sendChatMsg();
}

function sendChatMsg() {
  var input = document.getElementById('chatInput');
  var text = input.value.trim();
  if (!text) return;
  input.value = '';
  var chatBody = document.getElementById('chatBody');

  var userMsg = document.createElement('div');
  userMsg.className = 'msg sent';
  userMsg.innerHTML = '<div class="msg-bubble">' + text + '</div><div class="msg-time">You - Now</div>';
  chatBody.appendChild(userMsg);
  sendToStaff('Chat: ' + text, currentRoom);

  setTimeout(function() {
    var key = text.toLowerCase();
    var reply = 'Request received for Room ' + currentRoom + '! Our team will attend to you shortly.';
    for (var k in autoReplies) {
      if (key.indexOf(k) >= 0) { reply = autoReplies[k]; break; }
    }
    var botMsg = document.createElement('div');
    botMsg.className = 'msg received';
    botMsg.innerHTML = '<div class="msg-bubble">' + reply + '</div><div class="msg-time">Concierge - Now</div>';
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);

  chatBody.scrollTop = chatBody.scrollHeight;
}
