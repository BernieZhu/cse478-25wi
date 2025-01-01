(() => {
  // <stdin>
  var anchorForId = function(id) {
    var anchor = document.createElement("a");
    anchor.className = "header-link text-decoration-none";
    anchor.href = "#" + id;
    anchor.innerHTML = "# ";
    return anchor;
  };
  var linkify = function(headers) {
    for (var h = 0; h < headers.length; h++) {
      var header = headers[h];
      if (typeof header.id !== "undefined" && header.id !== "") {
        header.insertBefore(anchorForId(header.id), header.firstChild);
      }
    }
  };
  var linkifyHeaderLevel = function(level, containingElement) {
    linkify(containingElement.getElementsByTagName("h" + level));
    linkify(containingElement.getElementsByClassName("h" + level));
  };
  document.onreadystatechange = function() {
    if (this.readyState === "complete") {
      var bodyBlock = document.getElementsByTagName("body")[0];
      var levels = [2, 3, 4];
      for (var i = 0; i < levels.length; i++) {
        linkifyHeaderLevel(levels[i], bodyBlock);
      }
    }
  };
})();
