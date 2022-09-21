// Declaration of variables
const body = document.querySelector("#body");
const hamburger = document.querySelector(".hamburger");
const hamburgerPopUpNav = document.querySelectorAll(".pop-up-ul-text");

// Footer of page
// Store Artist information in object

const featuredArtists = [
  {
    id: `1`,
    artistImage: `./images/haywaya.jpg`,
    artistName: `Haywaya`,
    imageAlt: `Picture of Haywaya`,
    artistLabel: `Hybrid Rekords recording artist.`,
    latestRelease: `Haywaya just release a new EP titled "All That I Am".`,
  },

  {
    id: `2`,
    artistImage: `./images/drvmroll.jpg`,
    artistName: `Drvmroll`,
    imageAlt: `Picture of Drvmroll`,
    artistLabel: `Independent recording artist.`,
    latestRelease: `Drvmroll has produced for A-list artist like Sarkodie.`,
  },

  {
    id: `3`,
    artistImage: `./images/Akwesi-Orlando.jpg`,
    artistName: `Akwesi Orlando`,
    imageAlt: `Picture of Akwesi Orlando`,
    artistLabel: `Hybrid Rekords recording artist.`,
    latestRelease: `Akwesi Orlando just released an EP titled "Midnite".`,
  },
  
  {
    id: `4`,
    artistImage: `./images/Kirani-Ayat.jpg`,
    artistName: `Kirani Ayat`,
    imageAlt: `Picture of Kirani Ayat`,
    artistLabel: `Independent recording artist.`,
    latestRelease: `Ayat just released his debut Album titled "Aishas Sun"`,
  },

  {
    id: `5`,
    artistImage: `./images/Burna-boy.jpg`,
    artistName: `Burna Boy`,
    imageAlt: `Picture of Burna Boy`,
    artistLabel: `Atlantic Records recording artist.`,
    latestRelease: `Burna boy is a grammy winning afrobeats/rap artist.`,
  },
  {
    id: `6`,
    artistImage: `./images/sarkodie.jpg`,
    artistName: `Sarkodie`,
    imageAlt: `Picture of Sarkodie`,
    artistLabel: `Independent recording artist.`,
    latestRelease: `BET winner and the most decorated Ghanaian rapper.`,
  },
];

// Create the constant header of the page
let footer = document.createElement("footer");
footer.className= 'whole-footer-display'
footer.innerHTML = `
<section class='footer'>
  <h3 class="footer-head font">Featured Artists</h3>
  <div class="red-line-2 font">_______</div>
</section>`;
body.appendChild(footer);

// Create a function and create the element for mobile display
function showFeaturedArtistsMobile(info) {
  let shownArtistMobile = document.createElement('section')
  shownArtistMobile.className = 'featured-artists-container';
  shownArtistMobile.innerHTML = 
  `<section class="featured-artists-container for-phone">
  <div class="featured-artists-item-div for-phone">
      <img class="background-top for-phone" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
      <img class="featured-artists-image for-phone" src='${featuredArtists[info].artistImage}' alt="Picture of Haywaya">
      <div class="featured-artists-body-div for-phone">
          <h4 class="font for-phone">${featuredArtists[info].artistName}</h4>
          <h5 class="font for-phone"> <i>${featuredArtists[info].artistLabel}</i></h5>
          <div class=" for-phone">__</div>
          <h6 class="font for-phone">
              ${featuredArtists[info].latestRelease}
          </h6>
      </div>
  </div>
</section>`,
footer.appendChild(shownArtistMobile)
}

let shownArtistDeskContainer = document.createElement('section');
shownArtistDeskContainer.className = 'desk-featured-artists-container for-desktop';
// shownArtistDeskContainer.innerHTML = 
// `<div class="desk-featured-artists-item-div for-desktop">
// </div>`,
footer.appendChild(shownArtistDeskContainer);

// Create a function and create the element for desktop display
function showFeaturedArtistsDesk (info) {
  let shownArtistDesk = document.createElement('section');
  shownArtistDesk.className = 'desk-featured-artist-item-child for-desktop';
  shownArtistDesk.innerHTML = 
`<img class="background-top-desk for-desktop" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
<img class="featured-artists-image-desk for-desktop" src='${featuredArtists[info].artistImage}' alt='${featuredArtists[info].imageAlt}'>
<div class="desk-featured-artists-body-div for-desktop">
  <h4 class=" for-desktop font">${featuredArtists[info].artistName}</h4>
  <h5 class="margin padding for-desktop font"> <i>${featuredArtists[info].artistLabel}</i></h5>
  <div class=" for-desktop">__</div>
  <h6 class=" for-desktop margin padding font">
    ${featuredArtists[info].latestRelease}
  </h6>
</div>`,
shownArtistDeskContainer.appendChild(shownArtistDesk)
}

// Write a condition for screen width under which the mobile and desktop elements created would be called
for(let i=0; i < featuredArtists.length; i++) {
    if ((window.innerWidth < 760)) {
      featuredArtists.length = 2;
      showFeaturedArtistsMobile(i);
    } else {
      showFeaturedArtistsDesk (i);
    }
}

// Anytime the screen is resized the function does get called untill page is refreshed. Write an event listener to reload page
addEventListener('resize', () => {
  window.location.reload();
});

// Create and append footer end elements
let moreButton = document.createElement('div');
moreButton.innerHTML = `<button class="font end-more-button for-phone">MORE<span> v </span> </button>`
footer.appendChild(moreButton);

let desktopFooterEnd = document.createElement('section')
desktopFooterEnd.innerHTML = `
<section>
    <section class="partners padding-left-right">
        <h3 class="partner-head font">Partner</h3>
        <div class="partner-head-red-line font">________</div>
        <ul class="partners-logo-ul">
            <li>
                 <img class="partner-logo" src="images/icons/apple-pay-logo.png" alt="Apple Pay Logo" role="presentation">
            </li>
            <li>
                <img class="partner-logo" src="images/icons/samsung-logo.png" alt="Samsung Logo" role="presentation">
            </li>
            <li>
                <img class="partner-logo" src="images/icons/sony-logo.png" alt="Sony Loge" role="presentation">
            </li>
        </ul>
    </section>
    <div class="footer-end padding-left-right">
        <div class="footer-end-items">
            <h1 class="footer-end-items-logo font">©️Songkick</h1>
        </div>
        <div class="footer-end-items">
            <h4 class="footer-end-items-rights font">2022 Rights Reserved</h4>
        </div>
    </div> 
</section>
`
footer.appendChild(desktopFooterEnd);

// Footer page end


// Hamburger event
// Open Hamburger
hamburger.addEventListener("click", () => {
  document.getElementsByClassName("hamburger")[0].style.display = "none";
  document.getElementsByClassName("hamburger-pop-up")[0].style.display = "block";
});

// Close Hamburger
function closePopUp() {
  document.getElementsByClassName("hamburger")[0].style.display = "block";
  document.getElementsByClassName("hamburger-pop-up")[0].style.display = "none";
}

// Close hamburger when ul's li is clicked
hamburgerPopUpNav.forEach((link) =>
  link.addEventListener("click", () => {
    document.getElementsByClassName("hamburger")[0].style.display = "block";
    document.getElementsByClassName("hamburger-pop-up")[0].style.display = "none";
  })
);
