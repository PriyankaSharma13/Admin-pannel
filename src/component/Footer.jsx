import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer" className=" text-white py-4 mt-8 border-t-2 border-[#e5e7eb]">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="copyright text-sm text-[#012970]">
            &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
          </div>
          <div className="credits text-sm text-[#012970]">
            Designed by{' '}
            <p  className="text-blue-400 hover:text-blue-600">
              TailwindCss
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a
        href="#"
        className="back-to-top fixed bottom-8 right-8 bg-blue-500 p-3 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Vendor JS Files - You can add these to a public folder or a separate JS file */}
      <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/chart.js/chart.umd.js"></script>
      <script src="assets/vendor/echarts/echarts.min.js"></script>
      <script src="assets/vendor/quill/quill.js"></script>
      <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
      <script src="assets/vendor/tinymce/tinymce.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* Template Main JS File */}
      <script src="assets/js/main.js"></script>
    </>
  );
};

export default Footer;
