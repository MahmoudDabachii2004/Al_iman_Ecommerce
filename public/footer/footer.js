





export const footer = () => {
    let footer = document.createElement("footer");

    footer.innerHTML = `
        <div class="leFooter">
            <div class="basFooter">
                <h2 class="BoiteLettre">
                    💌
                </h2>
                <div>
                    <p>
                    Soyez le premier à connaître les nouvelles collections et les offres exclusives.
                    </p>
                </div>
                <div>
                    <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8">
                    <input type="hidden" name="form_type" value="customer">
                    <input type="hidden" name="utf8" value="✓">
                    <input type="hidden" name="contact[tags]" value="newsletter">
                    <div>
                        <div class="userInput">
                            <input id="NewsletterFormInput" type="email" name="contact[email]" value="" aria-required="true" autocorrect="off" autocapitalize="off" autocomplete="email" placeholder="E-mail" required="">
                            <label for="NewsletterFormInput" id="NewsletterFormLabel">
                                E-mail
                            </label>
                            <button type="submit" name="commit" id="Subscribe" aria-label="S'inscrire">
                                <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="leFooter">
            <div class="footer__content-bottom-wrapper page-width">
                <div class="footer__copyright caption">
                    <small class="copyright__content">© 2024, <a href="/" title="">Al Iman</a></small>
                </div>
            </div>
        </div>

        `;

  
    document.body.insertBefore(footer, document.body.lastChild);

}