$(document).ready(function () {
  $("#addcake").click(function () {
    $("#cakediv").append(
      '<div class="card"><img class="card-img-top" src="../assets/images/cake2.jpg" alt="Card image cap"/><div class="card-body"><h5 class="card-title">Added Card title</h5><p class="card-text">This is an added card.</p><a class="btn btn-warning">Add to added cart</a></div><div class="card-footer"><small class="text-muted">Last updated 3 mins ago</small></div></div>'
    );
  });
});

function addRecipe() {
  var title = $("#title").val();
  var body = $("#body").val();
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "POST",
    data: { title, body },
    success: function (response) {
      console.log(response);
      $("#title").val("");
      $("#body").val("");
      loadRecipies();
      $("#addModal").modal("hide");
    },
  });
}
