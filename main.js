// إضافة هوفر احترافي بالـ JavaScript
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('hovered');
    });
});


      function toggleCart() {
    const cart = document.getElementById("cartSidebar");
    cart.style.width = cart.style.width === "300px" ? "0" : "300px";
}




  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.backgroundColor = '#d1b7239f'; // أصفر ذهبي
      link.style.transform = 'scale(1.05)';   // تكبير بسيط
    });

    link.addEventListener('mouseleave', () => {
      link.style.backgroundColor = ''; // يرجع للخلفية الأصلية
      link.style.transform = 'scale(1)'; // يرجع للحجم الطبيعي
    });
  });



  // let age = 20;

  // if ( age >= 18 ) {
  //   console.log("رجل");
  // } else{
  //   // console.log("طفل")
  // }