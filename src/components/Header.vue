<template>
    <div class="row">
        <header class="col-md-12">
            <nav>
                <div class="row">
                    <!-- navigation bar -->
                    <div class="col-md-8 col-sm-8 col-xs-4">
                        <ul class="tabs">
                            <li class="tab">
                                <router-link class="home-btn nav-link" active-class="active" exact to="/">
                                    <font-awesome-icon icon="home" aria-hidden="true"/>                                        
                                </router-link>
                            </li>
                            <li class="tab">
                                <router-link class="nav-link" active-class="active" to="/resume">RESUME</router-link>
                            </li>
                            <li class="tab">
                                <router-link class="nav-link" active-class="active" to="/portfolio">PORTFOLIO</router-link>
                            </li>
                            <li class="tab">
                                <router-link class="nav-link" active-class="active" to="/blog">BLOG</router-link>
                            </li>
                            <li class="tab">
                                <router-link class="nav-link" active-class="active" to="/contact">CONTACT</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-8 dynamic">
                        <button class="pull-right site-btn icon hidden-xs">
                            Hire Me 
                            <font-awesome-icon icon="paper-plane" aria-hidden="true"/>                                
                        </button>
                        <div class="hamburger pull-right hidden-lg hidden-md">
                            <font-awesome-icon icon="bars" aria-hidden="true"/>                                
                        </div>
                        <div class="hidden-md social-icons pull-right">
                            <a class="fb" href="#"><font-awesome-icon :icon="['fab', 'facebook']" aria-hidden="true"/></a>
                            <a class="tw" href="#"><font-awesome-icon :icon="['fab', 'twitter']" aria-hidden="true"/></a>
                            <a class="ins" href="#"><font-awesome-icon :icon="['fab', 'instagram']" aria-hidden="true"/></a>
                            <a class="ins" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true"/></a>   
                            <a class="ins" href="#"><font-awesome-icon :icon="['fab', 'github']" aria-hidden="true"/></a>                             
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <!-- Page Content ================================================== -->
        <div class="col-md-12">
            <div id="content" class="panel-container">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header'

}
</script>

<style>

</style>