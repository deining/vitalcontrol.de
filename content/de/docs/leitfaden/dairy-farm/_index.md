---
title: Milchviehbetrieb
slug: dairy-farm
weight: 5
no_list: true
---

Wählen Sie aus unterschiedlichen Anwendungsfällen aus: 

<button onclick="calfDead()">Kalb geboren</button>
</br>
</br>
<button onclick="animalLoss()">Verlust eines Tieren</button>
</br>
</br>
<button onclick="animalDead()">Abgang eines Tieres</button>

<div id="response"></div>

<script>

function calfDead() {
  window.location.href = "calf-born";
}
function animalLoss() {
  window.location.href = "dairy-farm";
}
function animalDead() {
  window.location.href = "dairy-farm";
}

</script>
