$(document).ready(function() {
  videoWidth = 640;
  videoHeight = 480;

  $('[data-role="play-video-en"]').on('click', function() {
    $.fancybox('<iframe src="//player.vimeo.com/video/' + $(this).data('videoid') + '" width="' + videoWidth +'" height="' + videoHeight + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });
});
