---
title: Fresseraufzüchter
weight: 10
---

Wählen Sie aus unterschiedlichen Anwendungsfällen aus: 

<button onclick="showMilk()">Milchviehbetrieb</button>
</br>
</br>
<button onclick="showCalfs()">Fresseraufzüchter</button>
</br>
</br>
<button onclick="showBeef()">Endmast</button>

<script>
let sprache = "de"
let fileName = "/markdown/firstQuestionMilk_de.md"

function showMilk(fileName) {
  window.location.href = "dairy-farm";
}

function showCalfs(fileName) {
  window.location.href = "beef";
}

</script>
