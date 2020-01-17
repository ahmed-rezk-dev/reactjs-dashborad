import { createGlobalStyle } from 'styled-components';
import './Styles/Animation.css';

const GlobalStyle = createGlobalStyle`
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  pre {
	position:relative;
	font-size:100%;
	width:70%;
	max-width:400px;
	background:#00405d;
	border-radius:6px;
	margin:40px auto;
	font-family: "Open Sans", serif;
	color:#fff;
	padding:20px;
	border:10px solid rgba(0,0,0,.1);
	overflow:hidden;
	box-shadow:0px 0px 0px 5px #fff;
	line-height:1.4em;
}
@keyframes ldio-skf0o8p3xge-1 {
  0% { top: 36px; height: 128px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
@keyframes ldio-skf0o8p3xge-2 {
  0% { top: 41.99999999999999px; height: 116.00000000000001px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
@keyframes ldio-skf0o8p3xge-3 {
  0% { top: 48px; height: 104px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
.ldio-skf0o8p3xge div { position: absolute; width: 30px }.ldio-skf0o8p3xge div:nth-child(1) {
  left: 35px;
  background: #e15b64;
  animation: ldio-skf0o8p3xge-1 1s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.2s
}
.ldio-skf0o8p3xge div:nth-child(2) {
  left: 85px;
  background: #f8b26a;
  animation: ldio-skf0o8p3xge-2 1s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.1s
}
.ldio-skf0o8p3xge div:nth-child(3) {
  left: 135px;
  background: #abbd81;
  animation: ldio-skf0o8p3xge-3 1s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: undefineds
}

.loadingio-spinner-pulse-xgu8iqz45jn {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}
.ldio-skf0o8p3xge {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-skf0o8p3xge div { box-sizing: content-box; }

`;

export default GlobalStyle;
