// About Section Play Video

// const openBtn = document.getElementById("open-video");
//   const modal = document.getElementById("videoModal");
//   const iframe = document.getElementById("youtubeIframe");
//   const closeBtn = document.getElementById("close-video");

//   const youtubeURL = "https://www.youtube.com/watch?v=p-AvPg5vB10";

//   openBtn.addEventListener("click", () => {
//     iframe.src = youtubeURL;
//     modal.style.display = "flex";
//   });

//   closeBtn.addEventListener("click", () => {
//     iframe.src = "";
//     modal.style.display = "none";
//   });

//   // Optional: Close modal on outside click
//   window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       iframe.src = "";
//       modal.style.display = "none";
//     }
//   });

let currentIndex = 0;

function updateSlidePosition() {
  const track = document.getElementById("sliderTrack");
  const cardWidth =
    document.querySelector(".testimonial-card").offsetWidth + 20;
  const container = document.querySelector(".slider-container");
  const containerWidth = container.offsetWidth;

  const slides = document.querySelectorAll(".testimonial-card");
  const maxIndex = Math.max(
    0,
    slides.length - Math.floor(containerWidth / cardWidth)
  );

  // Clamp the currentIndex if it's out of bounds after resize
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextSlide() {
  const cardWidth =
    document.querySelector(".testimonial-card").offsetWidth + 20;
  const container = document.querySelector(".slider-container");
  const containerWidth = container.offsetWidth;

  const slides = document.querySelectorAll(".testimonial-card");
  const maxIndex = Math.max(
    0,
    slides.length - Math.floor(containerWidth / cardWidth)
  );

  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlidePosition();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
}

setInterval(() => {
  const slides = document.querySelectorAll(".testimonial-card");
  const cardWidth =
    document.querySelector(".testimonial-card").offsetWidth + 20;
  const container = document.querySelector(".slider-container");
  const containerWidth = container.offsetWidth;

  const maxIndex = Math.max(
    0,
    slides.length - Math.floor(containerWidth / cardWidth)
  );

  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0; // loop back to the beginning
  }

  updateSlidePosition();
}, 3000);

window.addEventListener("resize", updateSlidePosition);





// =================== Nav Bar ======================

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const overlayMenu = document.getElementById("overlayMenu");
  const overlayMenuContent = document.getElementById("overlayMenuContent");
  const servicesMenuItem = document.getElementById("servicesMenuItem");
  const fleetMenuItem = document.getElementById("fleetMenuItem");
  const industriesMenuItem = document.getElementById("industriesMenuItem");

  const subMenus = {
    services: {
      parent: servicesMenuItem,
      items: servicesMenuItem.querySelectorAll("ul li"),
    },
    fleet: {
      parent: fleetMenuItem,
      items: fleetMenuItem.querySelectorAll("ul li"),
    },
    industries: {
      parent: industriesMenuItem,
      items: industriesMenuItem.querySelectorAll("ul li"),
    },
  };

  const allSubMenuItems = overlayMenuContent.querySelectorAll("ul li");
  const allParentMenuItems =
    overlayMenuContent.querySelectorAll("li.has-submenu");
  const allMainMenuItemsAndParents = overlayMenuContent.querySelectorAll("li"); // All top-level list items

  const body = document.body;

  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("open");
    overlayMenu.classList.toggle("open");

    if (overlayMenu.classList.contains("open")) {
      body.style.overflow = "hidden";
      // Animate top-level menu items one by one
      allMainMenuItemsAndParents.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate-in");
        }, index * 100); // Stagger delay
      });
    } else {
      body.style.overflow = "";
      // Reset all menu items immediately when closing
      allMainMenuItemsAndParents.forEach((item) => {
        item.classList.remove("animate-in");
        if (item.classList.contains("has-submenu")) {
          item.classList.remove("open-submenu");
          item
            .querySelectorAll("ul li")
            .forEach((subItem) => subItem.classList.remove("animate-in"));
        }
      });
    }
  });

  // Function to toggle sub-menus
  const toggleSubMenu = (menuItem, subItems) => {
    // Close any other open submenus first
    allParentMenuItems.forEach((parentItem) => {
      if (
        parentItem !== menuItem &&
        parentItem.classList.contains("open-submenu")
      ) {
        parentItem.classList.remove("open-submenu");
        parentItem
          .querySelectorAll("ul li")
          .forEach((subItem) => subItem.classList.remove("animate-in"));
      }
    });

    menuItem.classList.toggle("open-submenu");

    if (menuItem.classList.contains("open-submenu")) {
      subItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate-in");
        }, index * 80); // Stagger sub-menu items
      });
    } else {
      subItems.forEach((item) => {
        item.classList.remove("animate-in");
      });
    }
  };

  // Event listeners for each sub-menu parent
  servicesMenuItem.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSubMenu(subMenus.services.parent, subMenus.services.items);
  });

  fleetMenuItem.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSubMenu(subMenus.fleet.parent, subMenus.fleet.items);
  });

  industriesMenuItem.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleSubMenu(subMenus.industries.parent, subMenus.industries.items);
  });

  // Close menu when any main menu item (that doesn't have a submenu) is clicked
  // or when a sub-menu item is clicked
  overlayMenuContent.querySelectorAll("li a").forEach((link) => {
    link.addEventListener("click", (event) => {
      // Only close if it's not a submenu toggle (i.e., it's a direct link or a submenu link)
      if (
        !event.currentTarget.parentElement.classList.contains("has-submenu")
      ) {
        hamburgerIcon.classList.remove("open");
        overlayMenu.classList.remove("open");
        body.style.overflow = "";
        allMainMenuItemsAndParents.forEach((mi) =>
          mi.classList.remove("animate-in")
        );
        allParentMenuItems.forEach((parentItem) =>
          parentItem.classList.remove("open-submenu")
        );
        allSubMenuItems.forEach((si) => si.classList.remove("animate-in"));
      } else if (
        event.currentTarget.parentElement.parentElement.classList.contains(
          "overlay-menu-content"
        )
      ) {
        // This handles clicks on the parent item (e.g., "SERVICES") itself,
        // allowing the submenu to open/close without closing the main menu.
        // We do nothing here as the toggleSubMenu function handles it.
      } else {
        // This is a submenu link being clicked
        hamburgerIcon.classList.remove("open");
        overlayMenu.classList.remove("open");
        body.style.overflow = "";
        allMainMenuItemsAndParents.forEach((mi) =>
          mi.classList.remove("animate-in")
        );
        allParentMenuItems.forEach((parentItem) =>
          parentItem.classList.remove("open-submenu")
        );
        allSubMenuItems.forEach((si) => si.classList.remove("animate-in"));
      }
    });
  });
});
