document.getElementById('createStory').onclick = function() {
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  document.getElementById('story').textContent = "The " + noun + " decided to " + verb + "!";
};
