import React from 'react'
const Loading = () => {
    return (

        <div id="js-preloader" class="js-preloader">
            <div class="preloader-inner">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <script src="vendor/jquery/jquery.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

          <script src="assets/js/isotope.min.js"></script>
          <script src="assets/js/owl-carousel.js"></script>
          <script src="assets/js/tabs.js"></script>
          <script src="assets/js/popup.js"></script>
          <script src="assets/js/custom.js"></script>
        </div>
    )
}
export default Loading