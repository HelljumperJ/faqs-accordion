function toggleImagen(iconId) {
    var icon = document.getElementById(iconId);
  
    if (icon.src.includes('icon-plus.svg')) {
      icon.src = '../assets/images/icon-minus.svg';
    } else {
      icon.src = '../assets/images/icon-plus.svg'; 
    }
  }