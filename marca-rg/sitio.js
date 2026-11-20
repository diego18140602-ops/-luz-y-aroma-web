/* RAQUEL GUTIÉRREZ — comportamiento común: WhatsApp, menú móvil, año y selector de tono */
(function(){
  var WA_NUMBER = "526241198718";
  window.WA_NUMBER = WA_NUMBER;
  window.rgWaUrl = function(t){ return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(t); };
  document.querySelectorAll("[data-wa]").forEach(function(a){ a.href = window.rgWaUrl(a.getAttribute("data-wa")); });

  /* Menú móvil */
  var menu = document.getElementById("sg-menu"), burger = document.getElementById("sg-burger"), cerrar = document.getElementById("sg-menu-close");
  if (menu && burger && cerrar) {
    var toggle = function(open){ menu.classList.toggle("is-open", open); burger.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : ""; };
    burger.addEventListener("click", function(){ toggle(true); });
    cerrar.addEventListener("click", function(){ toggle(false); });
    menu.querySelectorAll("nav a").forEach(function(a){ a.addEventListener("click", function(){ toggle(false); }); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") toggle(false); });
  }

  var y = document.getElementById("sg-year"); if (y) y.textContent = new Date().getFullYear();

  /* El WhatsApp flotante se oculta sobre el pie */
  var fl = document.getElementById("sg-wa"), pie = document.querySelector(".sg-ft");
  if (fl && pie && "IntersectionObserver" in window) {
    new IntersectionObserver(function(es){ es.forEach(function(e){ fl.classList.toggle("is-hidden", e.isIntersecting); }); }).observe(pie);
  }

  /* Selector de tono: aparece si la dirección trae ?tema= o si ya se eligió en esta visita */
  var tono = document.getElementById("sg-tono");
  var mostrar = false;
  try { mostrar = new URLSearchParams(location.search).has("tema") || !!sessionStorage.getItem("rg-tema"); } catch (e) {}
  if (tono && mostrar) {
    tono.classList.add("is-on");
    var actual = document.documentElement.getAttribute("data-tema") || "crema";
    tono.querySelectorAll("button").forEach(function(b){
      b.setAttribute("aria-pressed", b.getAttribute("data-tema") === actual ? "true" : "false");
      b.addEventListener("click", function(){
        var t = b.getAttribute("data-tema");
        document.documentElement.setAttribute("data-tema", t);
        try { sessionStorage.setItem("rg-tema", t); } catch (e) {}
        tono.querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        try { var u = new URL(location.href); u.searchParams.set("tema", t); history.replaceState(null, "", u); } catch (e) {}
      });
    });
  }
})();
