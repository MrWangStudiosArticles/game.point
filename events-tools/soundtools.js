var gdjs;(function(c){let s;(function(i){let r;(function(o){o.getGlobalVolume=function(e){return e.getSoundManager().getGlobalVolume()},o.setGlobalVolume=function(e,t){e.getSoundManager().setGlobalVolume(t)},o.unloadAllAudio=function(e){e.getSoundManager().unloadAll()},o.playSound=function(e,t,n,u,a){e.getSoundManager().playSound(t,n,u,a)},o.playSoundOnChannel=function(e,t,n,u,a,g){e.getSoundManager().playSoundOnChannel(t,n,u,a,g)},o.stopSoundOnChannel=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);n&&n.stop()},o.pauseSoundOnChannel=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);n&&n.pause()},o.continueSoundOnChannel=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);n&&!n.playing()&&n.play()},o.isSoundOnChannelPlaying=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);return n?n.playing():!1},o.isSoundOnChannelPaused=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);return n?n.paused():!1},o.isSoundOnChannelStopped=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);return n?n.stopped():!0},o.getSoundOnChannelVolume=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);return n?n.getVolume()*100:100},o.setSoundOnChannelVolume=function(e,t,n){const u=e.getSoundManager().getSoundOnChannel(t);u&&u.setVolume(n/100)},o.getSoundOnChannelPlayingOffset=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);return n?n.getSeek():0},o.setSoundOnChannelPlayingOffset=function(e,t,n){const u=e.getSoundManager().getSoundOnChannel(t);u&&u.setSeek(n)},o.getSoundOnChannelPitch=function(e,t){const n=e.getSoundManager().getSoundOnChannel(t);return n?n.getRate():1},o.setSoundOnChannelPitch=function(e,t,n){const u=e.getSoundManager().getSoundOnChannel(t);u&&u.setRate(n)},o.preloadSound=(e,t)=>e.getSoundManager().loadAudio(t,!1),o.unloadSound=(e,t)=>e.getSoundManager().unloadAudio(t,!1),o.playMusic=function(e,t,n,u,a){e.getSoundManager().playMusic(t,n,u,a)},o.playMusicOnChannel=function(e,t,n,u,a,g){e.getSoundManager().playMusicOnChannel(t,n,u,a,g)},o.stopMusicOnChannel=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);n&&n.stop()},o.pauseMusicOnChannel=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);n&&n.pause()},o.continueMusicOnChannel=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);n&&!n.playing()&&n.play()},o.isMusicOnChannelPlaying=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);return n?n.playing():!1},o.isMusicOnChannelPaused=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);return n?n.paused():!1},o.isMusicOnChannelStopped=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);return n?n.stopped():!0},o.getMusicOnChannelVolume=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);return n?n.getVolume()*100:100},o.setMusicOnChannelVolume=function(e,t,n){const u=e.getSoundManager().getMusicOnChannel(t);u&&u.setVolume(n/100)},o.getMusicOnChannelPlayingOffset=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);return n?n.getSeek():0},o.setMusicOnChannelPlayingOffset=function(e,t,n){const u=e.getSoundManager().getMusicOnChannel(t);u&&u.setSeek(n)},o.getMusicOnChannelPitch=function(e,t){const n=e.getSoundManager().getMusicOnChannel(t);return n?n.getRate():1},o.setMusicOnChannelPitch=function(e,t,n){const u=e.getSoundManager().getMusicOnChannel(t);u&&u.setRate(n)},o.preloadMusic=(e,t)=>e.getSoundManager().loadAudio(t,!0),o.unloadMusic=(e,t)=>e.getSoundManager().unloadAudio(t,!0)})(r=i.sound||(i.sound={}))})(s=c.evtTools||(c.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=soundtools.js.map
