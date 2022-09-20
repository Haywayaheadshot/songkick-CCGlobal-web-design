// Declaration of variables
const body = document.querySelector('#body');
const hamburger = document.querySelector('.hamburger');
const hamburgerPopUpNav = document.querySelectorAll('.pop-up-ul-text');

// Footer of page

let footer = document.createElement('footer');
footer.innerHTML = 
`<section class='footer for-phone'>
<h3 class="footer-head font">Featured Artists</h3>
<div class="red-line-2 font">_______</div>
<section class="featured-artists-container">
    <div class="featured-artists-item-div">
        <img class="background-top" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
        <img class="featured-artists-image" src="images/haywaya.jpg" alt="Picture of Haywaya">
        <div class="featured-artists-body-div">
            <h4 class="font">Haywaya</h4>
            <h5 class="font"> <i>Hybrid Rekords recording artist.</i></h5>
            <div>__</div>
            <h6 class="font">
                Haywaya just release a new EP titled "All That I Am".
            </h6>
        </div>

    </div>
    <div class="featured-artists-item-div">
        <img class="background-top" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
        <img class="featured-artists-image" src="images/drvmroll.jpg" alt="Picture of drvmroll">
        <div class="featured-artists-body-div">
            <h4 class="font">Drvmroll</h4>
            <h5 class="font"> <i>Independent recording artist.</i></h5>
            <div>__</div>
            <h6 class="font">
                Drvmroll is currently one of the best producers in the country. 
                He has produced for A-list artists like Sarkodie, Manifest etc
            </h6>
        </div>
    </div>
</section>
<button class="font">MORE<span> v </span> </button>
</section>
<section class="footer-desk for-desktop">
        <h3 class="footer-head-desk for-desktop font">Featured Artists</h3>
        <div class="red-line-2-desk for-desktop font">_______</div>
        <section class="desk-featured-artists-container">
            <div class="desk-featured-artists-item-div">
                <div class="desk-featured-artist-item-child">
                    <img class="background-top-desk" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
                    <img class="featured-artists-image-desk" src="images/haywaya.jpg" alt="Picture of Haywaya">
                    <div class="desk-featured-artists-body-div">
                        <h4 class=" font">Haywaya</h4>
                        <h5 class="margin padding font"> <i>Hybrid Rekords recording artist.</i></h5>
                        <div>__</div>
                       <h6 class="margin padding font">
                          Haywaya just released a new EP titled "All That I Am".
                      </h6>
                    </div>
                </div>
                <div class="desk-featured-artist-item-child">
                    <img class="background-top-desk" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
                    <img class="featured-artists-image-desk" src="images/drvmroll.jpg" alt="Picture of Haywaya">
                    <div class="desk-featured-artists-body-div">
                        <h4 class=" font">Drvmroll</h4>
                        <h5 class="margin padding font"> <i>Independent recording artist.</i></h5>
                        <div>__</div>
                       <h6 class="margin padding font">
                        Drvmroll has produced for A-list artist like Sarkodie.
                      </h6>
                    </div>

                </div>
            </div>
            <div class="desk-featured-artists-item-div">
                <div class="desk-featured-artist-item-child">
                    <img class="background-top-desk" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
                    <img class="featured-artists-image-desk" src="images/Akwesi-Orlando.jpg" alt="Picture of Haywaya">
                    <div class="desk-featured-artists-body-div">
                        <h4 class=" font">Akwesi Orland0</h4>
                        <h5 class="margin padding font"> <i>Hybrid Rekords recording artist.</i></h5>
                        <div>__</div>
                       <h6 class="margin padding font">
                         Akwesi Orlando just released an EP titled "Midnite".
                      </h6>
                    </div>

                </div>
                <div class="desk-featured-artist-item-child">
                    <img class="background-top-desk" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
                    <img class="featured-artists-image-desk" src="images/Kirani-Ayat.jpg" alt="Picture of Haywaya">
                    <div class="desk-featured-artists-body-div">
                        <h4 class=" font">Ayat</h4>
                        <h5 class="margin padding font"> <i>Independent recording artist.</i></h5>
                        <div>__</div>
                       <h6 class="margin padding font">
                          Ayat just released his debut Album titled "Aishas Sun".
                      </h6>
                    </div>

                </div>

            </div>
            <div class="desk-featured-artists-item-div">
                <div class="desk-featured-artist-item-child">
                    <img class="background-top-desk" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
                    <img class="featured-artists-image-desk" src="images/Burna-boy.jpg" alt="Picture of Haywaya">
                    <div class="desk-featured-artists-body-div">
                        <h4 class=" font">Burna Boy</h4>
                        <h5 class="margin padding font"> <i>Atlantic Records recording artist.</i></h5>
                        <div>__</div>
                       <h6 class="margin padding font">
                          Burna boy is a grammy winning afrobeats/rap artist.
                      </h6>
                    </div>

                </div>
                <div class="desk-featured-artist-item-child">
                    <img class="background-top-desk" src="images/icons/Picture-top.png" alt="Picture background" role="presentation">
                    <img class="featured-artists-image-desk" src="images/sarkodie.jpg" alt="Picture of Haywaya">
                    <div class="desk-featured-artists-body-div">
                        <h4 class=" font">Haywaya</h4>
                        <h5 class="margin padding font"> <i>Independent recording artist.</i></h5>
                        <div>__</div>
                       <h6 class="margin padding font">
                          BET winner and the most decorated Ghanaian rapper.
                      </h6>
                    </div>
                </div>
            </div>
        </section>
        <section >
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
    </section>`
body.appendChild(footer);

// Hamburger event
hamburger.addEventListener('click', () => {
    document.getElementsByClassName('hamburger')[0].style.display = 'none';
    document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'block';
})


function closePopUp() {
    document.getElementsByClassName('hamburger')[0].style.display = 'block';
    document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'none';
}

hamburgerPopUpNav.forEach((link) => link.addEventListener('click', () => {
    document.getElementsByClassName('hamburger')[0].style.display = 'block';
    document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'none';
}))
