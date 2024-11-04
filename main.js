let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.pagination-dot');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentTestimonial = index;
}

function nextTestimonial() {
  const nextIndex = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(nextIndex);
}

function prevTestimonial() {
  const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(prevIndex);
}

function goToTestimonial(index) {
  showTestimonial(index);
}

// Automatic transition every 3 seconds
setInterval(nextTestimonial, 3000);