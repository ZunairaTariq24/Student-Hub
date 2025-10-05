document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper
  const swiper = new Swiper(".service-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  });

  // --- Login Modal ---
  const loginModal = document.getElementById('loginModal');
  const loginBtn = document.getElementById('loginBtn');
  const closeLogin = document.getElementById('closeLogin');
  const loginForm = document.getElementById('loginForm');

  if (loginBtn && loginModal && closeLogin) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal.style.display = 'block';
    });

    closeLogin.addEventListener('click', () => {
      loginModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = loginForm.phone.value.trim();
      const email = loginForm.email.value.trim();
      const password = loginForm.password.value;

      if (!phone || !email || !password) {
        alert('Please fill all fields.');
        return;
      }
      alert(`Logging in with Phone: ${phone} and Email: ${email}`);
      loginModal.style.display = 'none';
      loginForm.reset();
    });
  }

  // --- Signup Modal ---
  const signupModal = document.getElementById('signupModal');
  const signupBtn = document.getElementById('signupBtn'); // if you have one in navbar
  const signupLink = document.getElementById('signupLink'); // inside login modal
  const closeSignup = document.getElementById('closeSignup');
  const signupForm = document.getElementById('signupForm');

  if (signupBtn && signupModal) {
    signupBtn.addEventListener('click', (e) => {
      e.preventDefault();
      signupModal.style.display = 'block';
    });
  }

  if (signupLink && signupModal && loginModal) {
    signupLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal.style.display = 'none';
      signupModal.style.display = 'block';
    });
  }

  if (closeSignup && signupModal) {
    closeSignup.addEventListener('click', () => {
      signupModal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === signupModal) {
      signupModal.style.display = 'none';
    }
  });

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = signupForm.name.value.trim();
      const department = signupForm.department.value.trim();
      const email = signupForm.email.value.trim();
      const password = signupForm.password.value;
      const phone = signupForm.phone.value.trim();

      if (!name || !department || !email || !password || !phone) {
        alert('Please fill all fields.');
        return;
      }

      alert(`Signing up:\nName: ${name}\nDepartment: ${department}\nEmail: ${email}\nPhone: ${phone}`);
      signupModal.style.display = 'none';
      signupForm.reset();
    });
  }
});
