import React from 'react'

function main() {
  return (
    <div>
        <main>
            <div>
                {/* <!-- Word input --> */}
                <header className="search-holder">
                    <form id="form" action="" className="form-input">
                        <input type="text" className="search-input" id="input" value="" required/>
                        <button type="submit" className="search-icon" id="submit"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg></button>
                    </form>
                </header>
                {/* <!-- Error message case word was not found (or request get any error) --> */}
                <div className="error-msg remove-display">
                    <span className="emoji">😕</span>
                    <p><strong>No Definitions Found</strong></p>
                    <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
                </div>
                {/* <!-- Main content == Searched word + play audio button --> */}
                <div id="content">
                    <section className="word-title">
                        <div>
                        <h1 id="searched-word">Keyboard</h1>
                        <p id="pronounce">/ˈkiːbɔːd/</p>
                        </div>
                        <button id="play-audio"><i><svg className="play-icon" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z" /></g></svg></i></button>
                    </section>
                {/* <!-- code inside below section is inserted dynamically with JS --> */}
                    <section className="word-type-wrapper" id="meaning-section">
                        {/* <!-- <h2 class="word-type">noun</h2>
                        <div class="meaning-wrapper">
                        <p>Meaning</p>
                        <ul>
                            <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                            <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                            <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
                        </ul>
                        </div>
                        <div class="synonums">
                        <p>Synonums <span>eletronic keyboard</span></p>
                        </div> --> */}
                    </section>
                    {/* <!-- <section class="ﬂ-section">
                    </div>
                    <h2>verb</h2>
                    <div class="meaning-wrapper">
                        <p>Meaning</p>
                        <ul>
                        <li>To type on a coputer keyboard</li>
                        <span>"Keyboarding is the part of this job i hate the most"</span>
                        </ul>
                        <hr>
                    </div> 
                    </section> --> */}
                </div>
            </div>
        </main>
    </div>
  )
}

export default main
