let currentTrip = 0;

document.addEventListener("DOMContentLoaded", () => {
  createTripSelector();
  showTrip(0);
  setupTabs();
});

function createTripSelector() {
  const selector = document.getElementById("trip-selector");
  if (!selector) return;

  selector.innerHTML = tripsData.map((trip, index) => `
    <button class="trip-card ${index === 0 ? "active" : ""}" data-index="${index}">
      <div class="mini-title">${escapeHtml(trip.title)}</div>
      <div class="mini-date">📅 ${escapeHtml(trip.dates)}</div>
      <div class="mini-location">📍 ${escapeHtml(trip.location || "")}</div>
    </button>
  `).join("");

  selector.querySelectorAll(".trip-card").forEach(button => {
    button.addEventListener("click", () => {
      showTrip(Number(button.dataset.index));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function showTrip(index) {
  if (!tripsData[index]) return;
  currentTrip = index;
  const trip = tripsData[index];

  document.getElementById("trip-title").textContent = trip.title;
  document.getElementById("trip-dates").textContent = `📅 ${trip.dates}`;
  document.getElementById("trip-location").textContent = `📍 ${trip.location || ""}`;

  renderTimeline(trip);
  renderGallery(trip);
  renderStamps(trip);

  document.querySelectorAll(".trip-card").forEach((button, i) => {
    button.classList.toggle("active", i === index);
  });
}

function renderTimeline(trip) {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  let html = "";

  trip.timeline.forEach(day => {
    html += `<div class="timeline-day-title">${escapeHtml(day.day)} · ${escapeHtml(day.date)}</div>`;

    day.spots.forEach(spot => {
      html += `
        <div class="timeline-item">
          <div class="time">${escapeHtml(spot.time)}</div>
          <div class="spot-content">
            <div class="spot-title">${escapeHtml(spot.title)}</div>
            <div class="spot-note">${escapeHtml(spot.note || "")}</div>
            ${spot.image ? `<img src="${encodeURI(spot.image)}" class="spot-img" alt="${escapeHtml(spot.title)}" loading="lazy" onerror="this.style.display='none'">` : ""}
            ${spot.familyImage ? `<img src="${encodeURI(spot.familyImage)}" class="spot-img" alt="家族写真" loading="lazy" onerror="this.style.display='none'">` : ""}
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html || `<div class="empty-state">タイムラインはありません。</div>`;
}

function renderGallery(trip) {
  const container = document.getElementById("gallery-container");
  if (!container) return;

  const photos = [];

  trip.timeline.forEach(day => {
    day.spots.forEach(spot => {
      if (spot.image) photos.push({ src: spot.image, caption: spot.title });
      if (spot.familyImage) photos.push({ src: spot.familyImage, caption: `${spot.title}・家族写真` });
    });
  });

  if (!photos.length) {
    container.innerHTML = `<div class="empty-state">写真はまだ登録されていません。<br>旅行写真を <code>images</code> フォルダに追加すると表示できます。</div>`;
    return;
  }

  container.innerHTML = photos.map(photo => `
    <div class="gallery-card">
      <img src="${encodeURI(photo.src)}" alt="${escapeHtml(photo.caption)}" loading="lazy"
           onerror="this.closest('.gallery-card').remove()">
      <div class="gallery-caption">${escapeHtml(photo.caption)}</div>
    </div>
  `).join("");
}

function renderStamps(trip) {
  const container = document.getElementById("stamps-container");
  if (!container) return;

  const stamps = [];
  const seen = new Set();

  trip.timeline.forEach(day => {
    day.spots.forEach(spot => {
      const title = spot.title;
      const stampKey = `${title}`;
      if (!seen.has(stampKey) && ["spot", "hotel", "food"].includes(spot.type)) {
        seen.add(stampKey);
        stamps.push({ mark: title.slice(0, 8), title });
      }
    });
  });

  container.innerHTML = stamps.slice(0, 12).map(stamp => `
    <div class="stamp-card unlocked">
      <div class="stamp-mark">${escapeHtml(stamp.mark)}</div>
      <p>${escapeHtml(stamp.title)}</p>
    </div>
  `).join("");
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;
      buttons.forEach(b => b.classList.toggle("active", b === button));
      contents.forEach(content => content.classList.toggle("active", content.id === `tab-${target}`));
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
