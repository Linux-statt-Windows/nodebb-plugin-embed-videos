(function(module) {
	"use strict";

	var EmbedVideo = {},

	  embed_vimeo            = '<div class="embed-container"><iframe src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
	  embed_youtube          = '<div class="embed-container"><iframe src="//www.youtube.com/embed/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',
      embed_facebook         = '<div class="embed-container"><iframe src="https://www.facebook.com/video/embed?video_id=$1" width="640" height="360" frameborder="0" allowfullscreen ></iframe></div>',
      embed_dailymotion      = '<div class="embed-container"><iframe src="http://www.dailymotion.com/embed/video/$1" width="640" height="360" frameborder="0" allowfullscreen></iframe></div>',
      embed_vine             = '<div class="video" style="width: 500px; height: 500px; overflow: hidden; position: relative;"><iframe frameborder="0" scrolling="no" seamless="seamless" webkitallowfullscreen="webkitAllowFullScreen" mozallowfullscreen="mozallowfullscreen" allowfullscreen="allowfullscreen" id="okplayer" width="500" height="500" src="https://vine.co/v/$1/card?mute=0" style="position: absolute; top: 0px; left: 0px; width: 500px; height: 500px;"></iframe></div>',
      embed_mixcloud         = '<iframe src="https://www.mixcloud.com/widget/iframe/?embed_type=widget_standard&amp;embed_uuid=ecd38451-4abc-4c37-85a9-065b45fd8850&amp;feed=https%3A%2F%2Fwww.mixcloud.com%2F$1%2F$2%2F&amp;hide_artwork=1&amp;hide_cover=1&amp;hide_tracklist=1&amp;replace=0" width="" height="180" frameborder="0"></iframe>',  	  
      embed_spotify          = '<iframe src="https://embed.spotify.com/?uri=spotify:artist:$1" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>',
      embed_spotify_track    = '<iframe src="https://embed.spotify.com/?uri=spotify:track:$1" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>',
      embed_spotify_album    = '<iframe src="https://embed.spotify.com/?uri=spotify:user:erebore:playlist:$1&theme=white&view=coverart" frameborder="0" allowtransparency="true"></iframe>',
      embed_pinterest_pin    = '<a data-pin-do="embedPin" href="http://de.pinterest.com/pin/$1/"></a><script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script>',	  

      	  
       embedUrl_vimeo         = /<a href="(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)(?:\D*|).*(\w{9})<\/a>/g,
	   embedUrl_youtube       = /<a href="http.?:.*(?:youtube.com\/|youtu.be\/)(?!channel)(?:watch\?v=|watch\?t=.*v=|embed\/|)(.*)<\/a>/g,
	   embedUrl_facebook      = /<a href="http.?:\/\/.+facebook.com\/\w+\.?\w+\/videos\/(\w+).*<\/a>/ig,
	   embedUrl_dailymotion   = /<a href="(?:https?:\/\/)?(?:www\.)dailymotion\.com\/video\/(.*)" .*<\/a>/g,
	   embedUrl_vine          = /<a href="(?:https?:\/\/)?(?:vine\.co)\/\w*\/(\w*).*<\/a>/g,
	   embedUrl_mixcloud      = /<a href="http.?:\/\/?.*\.mixcloud\.com\/(\w*)\/(.*)?\/<\/a>/g,
	   embedUrl_spotify       = /<a href="http.?:.*play.spotify.com\/artist\/(.*)<\/a>/g,
	   embedUrl_spotify_track = /<a href="http.?:.*play.spotify.com\/track\/(.*)<\/a>/g,
	   embedUrl_spotify_album = /<a href="http.?:.*play.spotify.com\/album\/(.*)<\/a>/g,
       embedUrl_pinterest_pin = /<a href="http.?:.*pinterest.com\/pin\/(\w*).*<\/a>/g;
     	  
     	  
	EmbedVideo.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }


        if (data.postData.content.match(embedUrl_vimeo)) {        
            data.postData.content = data.postData.content.replace(embedUrl_vimeo, embed_vimeo);
        } else if (data.postData.content.match(embedUrl_youtube)) {        
            data.postData.content = data.postData.content.replace(embedUrl_youtube, embed_youtube);
        } else if (data.postData.content.match(embedUrl_facebook)) {        
            data.postData.content = data.postData.content.replace(embedUrl_facebook, embed_facebook);
        } else if (data.postData.content.match(embedUrl_dailymotion)) {        
            data.postData.content = data.postData.content.replace(embedUrl_dailymotion, embed_dailymotion);
        } else if (data.postData.content.match(embedUrl_vine)) {        
            data.postData.content = data.postData.content.replace(embedUrl_vine, embed_vine);
        } else if (data.postData.content.match(embedUrl_mixcloud)) {        
            data.postData.content = data.postData.content.replace(embedUrl_mixcloud, embed_mixcloud);
        } else if (data.postData.content.match(embedUrl_spotify)) {        
            data.postData.content = data.postData.content.replace(embedUrl_spotify, embed_spotify);
        } else if (data.postData.content.match(embedUrl_spotify_track)) {        
            data.postData.content = data.postData.content.replace(embedUrl_spotify_track, embed_spotify_track);
        } else if (data.postData.content.match(embedUrl_spotify_album)) {        
            data.postData.content = data.postData.content.replace(embedUrl_spotify_album, embed_spotify_album);
        } else if (data.postData.content.match(embedUrl_pinterest_pin)) {        
            data.postData.content = data.postData.content.replace(embedUrl_pinterest_pin, embed_pinterest_pin);
        }
       
        callback(null, data);
    };

	module.exports = EmbedVideo;
}(module));
