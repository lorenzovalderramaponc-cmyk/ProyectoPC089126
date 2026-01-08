window.onload = () => {
  const modal = document.getElementById("modal");
  const close = document.getElementById("closeModal");

  close.onclick = () => {
    modal.style.display = "none";
  };
};
