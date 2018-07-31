layui.define(function(exports){
	var logic = {
		logic: function(){
			window.onload = function(){
				//显示home页
				this.location.hash = '#home';
				document.getElementById('home').style.display = 'block';
				//播放音乐
				document.getElementsByClassName('musicControl')[0].onclick = function(){
					var name = this.innerHTML;
					if(name == 'Play Music'){
						var audio = document.createElement('audio');
						audio.setAttribute('src', './res/audio/Silence.mp3');
						var length = document.getElementsByTagName('audio').length;
						if(length == 0){
							document.body.appendChild(audio);
							audio.play();
						}else{
							document.getElementsByTagName('audio')[0].play();
						}
						this.innerHTML = 'Stop';
					}else{
						document.getElementsByTagName('audio')[0].pause();
						this.innerHTML = 'Play Music';
					}
					var that = this;
					document.getElementsByTagName('audio')[0].onended = function(){
						that.innerHTML = 'Play Music';
					}
				}

				//导航切换
				var header_nav = document.getElementsByClassName('header_nav_ul')[0];
				var li = header_nav.getElementsByTagName('li');
				for(let i = 0; i < li.length; i++){
					li[i].onclick = function(){
						var name = this.getElementsByTagName('a')[0].getAttribute('href');
						location.href = name;
						name = name.substr(1);
						for(let k = 0; k < document.getElementsByClassName('nav_content').length; k++){
							document.getElementsByClassName('nav_content')[k].style.display = 'none';
						}
						for(let j = 0; j < li.length; j++){
							li[j].getElementsByTagName('a')[0].style.color = '#fff';
						}
						this.getElementsByTagName('a')[0].style.color = 'lightgreen';
						document.getElementById(name).style.display = 'block';
					}
				}
			}
		}
	}
	exports('logic', logic);
})
