$(document).ready(function () {
  // Podium 2 et 3 classement M2000 avec rvt
  $.getJSON("/data/classement_M2000_rvt.json",
    function (data) {
      var player_M2000_rvt = '';

      player_M2000_rvt += '<tbody>';

      if (data[1]) {
        player_M2000_rvt += '<tr class="text-center align-middle">';
        player_M2000_rvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_M2000_rvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_M2000_rvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_M2000_rvt += '</tr>';
      }

      if (data[2]) {
        player_M2000_rvt += '<tr class="text-center align-middle">';
        player_M2000_rvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_M2000_rvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_M2000_rvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_M2000_rvt += '</tr>';
      }

      player_M2000_rvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_M2000_rvt').append(player_M2000_rvt);
  });

  // Podium 2 et 3 classement F18 avec rvt
  $.getJSON("/data/classement_F18_rvt.json",
    function (data) {
      var player_F18_rvt = '';

      player_F18_rvt += '<tbody>';

      if (data[1]) {
        player_F18_rvt += '<tr class="text-center align-middle">';
        player_F18_rvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F18_rvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F18_rvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F18_rvt += '</tr>';
      }

      if (data[2]) {
        player_F18_rvt += '<tr class="text-center align-middle">';
        player_F18_rvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F18_rvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F18_rvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F18_rvt += '</tr>';
      }

      player_F18_rvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F18_rvt').append(player_F18_rvt);
  });

  // Podium 2 et 3 classement F14 avec rvt
  $.getJSON("/data/classement_F14_rvt.json",
    function (data) {
      var player_F14_rvt = '';

      player_F14_rvt += '<tbody>';

      if (data[1]) {
        player_F14_rvt += '<tr class="text-center align-middle">';
        player_F14_rvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F14_rvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F14_rvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F14_rvt += '</tr>';
      }

      if (data[2]) {
        player_F14_rvt += '<tr class="text-center align-middle">';
        player_F14_rvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F14_rvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F14_rvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F14_rvt += '</tr>';
      }

      player_F14_rvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F14_rvt').append(player_F14_rvt);
  });

  // Podium 2 et 3 classement F16 avec rvt
  $.getJSON("/data/classement_F16_rvt.json",
    function (data) {
      var player_F16_rvt = '';

      player_F16_rvt += '<tbody>';

      if (data[1]) {
        player_F16_rvt += '<tr class="text-center align-middle">';
        player_F16_rvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F16_rvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F16_rvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F16_rvt += '</tr>';
      }

      if (data[2]) {
        player_F16_rvt += '<tr class="text-center align-middle">';
        player_F16_rvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F16_rvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F16_rvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F16_rvt += '</tr>';
      }

      player_F16_rvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F16_rvt').append(player_F16_rvt);
  });

  // Podium 2 et 3 classement JF17 avec rvt
  $.getJSON("/data/classement_JF17_rvt.json",
    function (data) {
      var player_JF17_rvt = '';

      player_JF17_rvt += '<tbody>';

      if (data[1]) {
        player_JF17_rvt += '<tr class="text-center align-middle">';
        player_JF17_rvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_JF17_rvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_JF17_rvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_JF17_rvt += '</tr>';
      }

      if (data[2]) {
        player_JF17_rvt += '<tr class="text-center align-middle">';
        player_JF17_rvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_JF17_rvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_JF17_rvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_JF17_rvt += '</tr>';
      }

      player_JF17_rvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_JF17_rvt').append(player_JF17_rvt);
  });

// ---------------------------------------------------------------

  // Podium 2 et 3 classement M2000 avec norvt
  $.getJSON("/data/classement_M2000_norvt.json",
    function (data) {
      var player_M2000_norvt = '';

      player_M2000_norvt += '<tbody>';

      if (data[0]) {
        player_M2000_norvt += '<tr class="text-center fw-bold">';
        player_M2000_norvt += '<td>#1</td>';

        player_M2000_norvt += '<td>' +
            data[0]["Nom du joueur"] + '</td>';

        player_M2000_norvt += '<td>' +
            data[0]["Temps"] + '</td>';
        player_M2000_norvt += '</tr>';
      }

      if (data[1]) {
        player_M2000_norvt += '<tr class="text-center align-middle">';
        player_M2000_norvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_M2000_norvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_M2000_norvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_M2000_norvt += '</tr>';
      }

      if (data[2]) {
        player_M2000_norvt += '<tr class="text-center align-middle">';
        player_M2000_norvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_M2000_norvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_M2000_norvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_M2000_norvt += '</tr>';
      }

      player_M2000_norvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_M2000_norvt').append(player_M2000_norvt);
  });

  // Podium 2 et 3 classement F18 avec norvt
  $.getJSON("/data/classement_F18_norvt.json",
    function (data) {
      var player_F18_norvt = '';

      player_F18_norvt += '<tbody>';

      if (data[0]) {
        player_F18_norvt += '<tr class="text-center fw-bold">';
        player_F18_norvt += '<td>#1</td>';

        player_F18_norvt += '<td>' +
            data[0]["Nom du joueur"] + '</td>';

        player_F18_norvt += '<td>' +
            data[0]["Temps"] + '</td>';
        player_F18_norvt += '</tr>';
      }

      if (data[1]) {
        player_F18_norvt += '<tr class="text-center align-middle">';
        player_F18_norvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F18_norvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F18_norvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F18_norvt += '</tr>';
      }

      if (data[2]) {
        player_F18_norvt += '<tr class="text-center align-middle">';
        player_F18_norvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F18_norvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F18_norvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F18_norvt += '</tr>';
      }

      player_F18_norvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F18_norvt').append(player_F18_norvt);
  });

  // Podium 2 et 3 classement F14 avec norvt
  $.getJSON("/data/classement_F14_norvt.json",
    function (data) {
      var player_F14_norvt = '';

      player_F14_norvt += '<tbody>';

      if (data[0]) {
        player_F14_norvt += '<tr class="text-center fw-bold">';
        player_F14_norvt += '<td>#1</td>';

        player_F14_norvt += '<td>' +
            data[0]["Nom du joueur"] + '</td>';

        player_F14_norvt += '<td>' +
            data[0]["Temps"] + '</td>';
        player_F14_norvt += '</tr>';
      }

      if (data[1]) {
        player_F14_norvt += '<tr class="text-center align-middle">';
        player_F14_norvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F14_norvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F14_norvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F14_norvt += '</tr>';
      }

      if (data[2]) {
        player_F14_norvt += '<tr class="text-center align-middle">';
        player_F14_norvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F14_norvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F14_norvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F14_norvt += '</tr>';
      }

      player_F14_norvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F14_norvt').append(player_F14_norvt);
  });

  // Podium 2 et 3 classement F16 avec norvt
  $.getJSON("/data/classement_F16_norvt.json",
    function (data) {
      var player_F16_norvt = '';

      player_F16_norvt += '<tbody>';

      if (data[0]) {
        player_F16_norvt += '<tr class="text-center fw-bold">';
        player_F16_norvt += '<td>#1</td>';

        player_F16_norvt += '<td>' +
            data[0]["Nom du joueur"] + '</td>';

        player_F16_norvt += '<td>' +
            data[0]["Temps"] + '</td>';
        player_F16_norvt += '</tr>';
      }

      if (data[1]) {
        player_F16_norvt += '<tr class="text-center align-middle">';
        player_F16_norvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_F16_norvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_F16_norvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_F16_norvt += '</tr>';
      }

      if (data[2]) {
        player_F16_norvt += '<tr class="text-center align-middle">';
        player_F16_norvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_F16_norvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_F16_norvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_F16_norvt += '</tr>';
      }

      player_F16_norvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_F16_norvt').append(player_F16_norvt);
  });

  // Podium 2 et 3 classement JF17 avec norvt
  $.getJSON("/data/classement_JF17_norvt.json",
    function (data) {
      var player_JF17_norvt = '';

      player_JF17_norvt += '<tbody>';

      if (data[0]) {
        player_JF17_norvt += '<tr class="text-center fw-bold">';
        player_JF17_norvt += '<td>#1</td>';

        player_JF17_norvt += '<td>' +
            data[0]["Nom du joueur"] + '</td>';

        player_JF17_norvt += '<td>' +
            data[0]["Temps"] + '</td>';
        player_JF17_norvt += '</tr>';
      }

      if (data[1]) {
        player_JF17_norvt += '<tr class="text-center align-middle">';
        player_JF17_norvt += '<td><img src="/images/medal_silver.png" alt=""></td>';

        player_JF17_norvt += '<td>' +
            data[1]["Nom du joueur"] + '</td>';

        player_JF17_norvt += '<td>' +
            data[1]["Temps"] + '</td>';
        player_JF17_norvt += '</tr>';
      }

      if (data[2]) {
        player_JF17_norvt += '<tr class="text-center align-middle">';
        player_JF17_norvt += '<td><img src="/images/medal_bronz.png" alt=""></td>';

        player_JF17_norvt += '<td>' +
            data[2]["Nom du joueur"] + '</td>';

        player_JF17_norvt += '<td>' +
            data[2]["Temps"] + '</td>';
        player_JF17_norvt += '</tr>';
      }

      player_JF17_norvt += '</tbody>';

      //INSERTING ROWS INTO TABLE
      $('#table_JF17_norvt').append(player_JF17_norvt);
  });
});
