"use strict";

const bookingPatterns = {
  name: /^[A-Za-z]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  seats: /^(?:[1-9]|10)$/
};

function validateBooking(name, email, seats) {
  const errors = [];
  if (!bookingPatterns.name.test(name)) errors.push("Name must contain letters only.");
  if (!bookingPatterns.email.test(email)) errors.push("Enter a valid email address.");
  if (!bookingPatterns.seats.test(String(seats))) errors.push("Seats must be a whole number from 1 to 10.");
  return errors;
}

function buildBookingForm() {
  const form = document.createElement("form");
  form.innerHTML = `
    <h2>Movie Ticket Booking</h2>
    <label>Name <input name="name" required></label>
    <label>Email <input name="email" type="email" required></label>
    <label>Seats <input name="seats" type="number" min="1" max="10" required></label>
    <button type="submit">Book tickets</button>
    <p aria-live="polite"></p>`;
  form.style.cssText = "display:grid;gap:8px;max-width:360px;font:16px sans-serif";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const booking = Object.fromEntries(new FormData(form).entries());
    const errors = validateBooking(booking.name, booking.email, booking.seats);
    const message = form.querySelector("p");
    if (errors.length > 0) {
      message.textContent = errors.join(" ");
      console.log("Booking rejected:", errors);
      return;
    }

    booking.seats = Number(booking.seats);
    message.textContent = `Ticket confirmed: ${booking.name}, ${booking.seats} seat(s), ${booking.email}`;
    console.log("Booking confirmed:", booking);
  });
  document.body.append(form);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildBookingForm, { once: true });
  } else {
    buildBookingForm();
  }
} else {
  const sampleErrors = validateBooking("Ravi", "ravi@example.com", 2);
  console.log("Sample booking:", sampleErrors.length === 0 ? "valid" : sampleErrors.join(" "));
  console.log("Open this file in a browser to use the booking form.");
}
