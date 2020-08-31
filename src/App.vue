<template>
  <div>
    <body>
      <div class="wrapper top_60 container">
        <div class="row">
          <!-- Profile Section ================================================== -->
          <div class="col-lg-3 col-md-4">
            <div class="profile">
              <div class="profile-name">
                <span class="name">Dima Dziubenko</span><br>
                <span class="job">Web developer</span>
              </div>
              <figure class="profile-image">
                <img src="@/assets/images/my-images/myPhoto.jpg" alt="">
              </figure>
              <ul class="profile-information">
                <li></li>
                <li>
                  <p><span>Name:</span> Dima Dziubenko</p>
                </li>
                <li>
                  <p><span>Birthday:</span> 02 November 1987</p>
                </li>
                <li>
                  <p><span>Job:</span> Freelancer</p>
                </li>
                <li>
                  <p><span>Email:</span> dima.dziubenko1@gmail.com</p>
                </li>
                <li>
                  <p><span>Skype:</span> NON</p>
                </li>
              </ul>
              <div class="col-md-12">                
                <button class="site-btn icon">
                  Download Cv 
                  <font-awesome-icon icon="download" aria-hidden="true"/>
                </button>
              </div>
            </div>
          </div>
          <!-- Page Tab Container Div -->
          <div id="ajax-tab-container" class="col-lg-9 col-md-8 tab-container">
            <!-- Header ================================================== -->
            <Header/>
            <!-- Footer ================================================== -->
            <Footer/>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
