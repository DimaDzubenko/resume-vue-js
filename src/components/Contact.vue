<template>
    <!-- Contact Page ================================================== -->
    <div id="contact">
        <div class="row">
            <!-- Contact Form -->
            <section class="contact-form col-md-6 padding_30 padbot_45">
                <div class="section-title top_15 bottom_30"><span></span>
                    <h2>Contact Form</h2>
                </div>
                <form class="site-form">
                    <div class="row">
                        <div class="col-md-6">
                            <input class="site-input" placeholder="Name">
                        </div>
                        <div class="col-md-6">
                            <input class="site-input" placeholder="E-mail">
                        </div>
                        <div class="col-md-12">
                            <textarea class="site-area" placeholder="Message"></textarea>
                        </div>
                        <div class="col-md-12 top_15 bottom_30">
                            <button class="site-btn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </section>
            <!-- Contact Informations -->
            <section class="contact-info col-md-6 padding_30 padbot_45">
                <div class="section-title top_15 bottom_30"><span></span>
                    <h2>Contact Informations</h2>
                </div>
                <ul>
                    <li><span>Address:</span> Ukraine, Kyiv.</li>
                    <li><span>Phone:</span> +380631620725</li>
                    <li><span>Job:</span> Freelancer</li>
                    <li><span>E-mail:</span> dima.dziubenko1@gmail.com</li>
                    <li><span>Skype:</span> NON</li>
                    <li>
                        <div class="social-icons top_15">                            
                            <a class="fb" href="#"><font-awesome-icon :icon="['fab', 'facebook']" aria-hidden="true"/></a>
                            <a class="tw" href="#"><font-awesome-icon :icon="['fab', 'twitter']" aria-hidden="true"/></a>
                            <a class="ins" href="#"><font-awesome-icon :icon="['fab', 'instagram']" aria-hidden="true"/></a>
                            <a class="ins" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true"/></a>   
                            <a class="ins" href="#"><font-awesome-icon :icon="['fab', 'github']" aria-hidden="true"/></a>
                        </div>
                    </li>
                </ul>
            </section>
            <!-- Contact Map -->
            <section class="contact-map col-md-12 top_15 bottom_15">
                <div class="section-title bottom_30"><span></span>
                    <h2>Contact Map.</h2>
                </div>
                <!-- Здесь настроить гугл карту -->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24396.455763004884!2d-115.13108354428735!3d36.18912977254862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+Kaliforniya%2C+Birle%C5%9Fik+Devletler!5e0!3m2!1str!2str!4v1509525039851" height="350" style="border:0" allowfullscreen></iframe>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name:'Contact'

}
</script>

<style>

</style>