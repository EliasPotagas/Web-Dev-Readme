<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
          </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
    </div>
    <div id="primaryMenu" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io">
                Home
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                    Docs
                </a>
                <div class="navbar-dropdown">
                    <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">Overview</a>
                    <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">Modifier</a>
                    <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">Columns</a>
                    <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">Layout</a>
                    <a class="navbar-item" href="https://bulma.io/documentation/form/general/">Forms</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">Elements</a>
                    <a class="navbar-item" href="https://bulma.io/documentation/components/breadcrumb/">Components</a>
                </div>
            </div>
        </div>
        <div class="navbar-end">
                <div class="field">   
                        <div class="navbar-item">
                            <p class="control"> 
                            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                <span class="icon">
                                    <i class="fa-brands fa-twitter"></i> <!-- ICON NOT WORKING I DONT UNDERSTAND WHY -->
                                </span>
                                <span>
                                Tweet
                                </span>
                              </a>
                            </p>
                    </div>
                </div>
                <div class="field">
                    <div class="navbar-item">
                        <p class="control">
                            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                                <span class="icon">
                                    <i class="fas fa-download"></i> <!-- ICON NOT WORKING I DONT UNDERSTAND WHY -->
                                </span>
                                <span>
                                Download
                                </span>
                              </a>
                        </p>
                    </div> 
                </div>
        </div>
    </div>
    </div>
</nav>
</template>