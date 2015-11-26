var dropdowns = [];

document.addEventListener('click', function(event) {
  dropdowns.forEach(function(dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el) return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.onDocumentClick && dropdown.onDocumentClick(event);
  });
});

export default {
  open(instance) {
    if (instance) {
      dropdowns.push(instance);
    }
  },

  close(instance) {
    var index = dropdowns.indexOf(instance);
    if (index !== -1) {
      dropdowns.splice(instance, 1);
    }
  }
};
