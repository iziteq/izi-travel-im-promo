$(document).ready(function() {
  videoWidth = 640;
  videoHeight = 480;

  $('[data-role="play-video-en"]').on('click', function() {
    $.fancybox('<iframe src="//player.vimeo.com/video/86396711" width="' + videoWidth +'" height="' + videoHeight + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });
  $('[data-role="play-video-it"]').on('click', function() {
    $.fancybox('<iframe src="//player.vimeo.com/video/86396712" width="' + videoWidth +'" height="' + videoHeight + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });
});
