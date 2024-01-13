
function chatFacebook() {
  return `
  <!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "110639638188498");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
  `;
}

document.querySelector(".chatFacebook").innerHTML = chatFacebook();
document.querySelector(".grid-container").innerHTML = renderProduct();
document
  .getElementById("root")
  .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));

document.getElementById("root").insertAdjacentHTML("beforeend", renderFooter());



//-------------------Animations------------------------
function changeBackgroundGradient() {
  var background = document.querySelector(".grid-container");
  var colors = [
    "#ff6b6b",
    "#ffa07a",
    "#ffd700",
    "#90ee90",
    "#87ceeb",
    "#c0c0c0",
    "#dda0dd",
  ];
  var currentIndex = 0;

  function animateGradient() {
    background.style.backgroundPosition =
      "0% " + (100 - currentIndex * 14) + "%";
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(animateGradient, 500);
  }

  animateGradient();
}

changeBackgroundGradient();

