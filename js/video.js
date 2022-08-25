$(function () {
  var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      //  возвращаем постер
      $video.load();
    }
  });
});

function changeItem() {
  document.getElementById('video').classList.add("blackout");
  document.getElementById('header').classList.add("blackout");

}// функция, которая сработает при наведении.
//она означает - выбрать элемент к Id у которого надо что-то изменить.
// когда в скобки где написано one-two добавите Id своего элемента
function rechangeItem() {
  document.getElementById('video').classList.remove("blackout");
  document.getElementById('header').classList.remove("blackout");

}// тут всё также. но наобарот. протсес происходящий про отводе курсора.
