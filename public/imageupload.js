document.getElementById('imageUpload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var previewImg = document.getElementById('preview');
      previewImg.src = e.target.result;
      console.log(e.target.result)
    }

    reader.readAsDataURL(file);

   
  });