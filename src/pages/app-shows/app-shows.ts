import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './shows-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-shows')
export class AppShows extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  constructor() {
    super();
  }

  render() {
    return html`
        <style>
        body{
            margin:0
          }
          nav{
            display:block
          }
          a:active,a:hover{
            outline:0
          }
          b{
            font-weight:700
          }
          img{
            border:0
          }
          button,input{
            color:inherit;
            font:inherit;
            margin:0
          }
          button{
            cursor:pointer;
            overflow:visible;
            text-transform:none
          }
          button[disabled],html input[disabled]{
            cursor:default
          }
          th{
            padding:0
          }
          .glyphicon{
            position:relative;
            top:2px;
            display:inline-block;
            font-family:"Glyphicons Halflings";
            font-style:normal;
            font-weight:400;
            line-height:1;
            -webkit-font-smoothing:auto;
            -moz-osx-font-smoothing:auto
          }
          .glyphicon-music:before{
            content:"\e002"
          }
          .glyphicon-search:before{
            content:"\e003"
          }
          .glyphicon-user:before{
            content:"\e008"
          }
          .glyphicon-th:before{
            content:"\e011"
          }
          .glyphicon-th-list:before{
            content:"\e012"
          }
          .glyphicon-ok:before{
            content:"\e013"
          }
          .glyphicon-remove:before{
            content:"\e014"
          }
          .glyphicon-off:before{
            content:"\e017"
          }
          .glyphicon-home:before{
            content:"\e021"
          }
          .glyphicon-time:before{
            content:"\e023"
          }
          .glyphicon-download-alt:before{
            content:"\e025"
          }
          .glyphicon-download:before{
            content:"\e026"
          }
          .glyphicon-list-alt:before{
            content:"\e032"
          }
          .glyphicon-lock:before{
            content:"\e033"
          }
          .glyphicon-flag:before{
            content:"\e034"
          }
          .glyphicon-tag:before{
            content:"\e041"
          }
          .glyphicon-font:before{
            content:"\e047"
          }
          .glyphicon-text-width:before{
            content:"\e051"
          }
          .glyphicon-align-center:before{
            content:"\e053"
          }
          .glyphicon-list:before{
            content:"\e056"
          }
          .glyphicon-share:before{
            content:"\e066"
          }
          .glyphicon-check:before{
            content:"\e067"
          }
          .glyphicon-forward:before{
            content:"\e075"
          }
          .glyphicon-remove-sign:before{
            content:"\e083"
          }
          .glyphicon-ok-sign:before{
            content:"\e084"
          }
          .glyphicon-info-sign:before{
            content:"\e086"
          }
          .glyphicon-share-alt:before{
            content:"\e095"
          }
          .glyphicon-eye-open:before{
            content:"\e105"
          }
          .glyphicon-comment:before{
            content:"\e111"
          }
          .glyphicon-link:before{
            content:"\e144"
          }
          .glyphicon-flash:before{
            content:"\e162"
          }
          .glyphicon-open:before{
            content:"\e167"
          }
          .glyphicon-transfer:before{
            content:"\e178"
          }
          .glyphicon-sd-video:before{
            content:"\e186"
          }
          .glyphicon-hd-video:before{
            content:"\e187"
          }
          .glyphicon-cd:before{
            content:"\e201"
          }
          .glyphicon-king:before{
            content:"\e211"
          }
          .glyphicon-queen:before{
            content:"\e212"
          }
          .glyphicon-apple:before{
            content:"\f8ff"
          }
          .glyphicon-scale:before{
            content:"\e230"
          }
          .glyphicon-text-color:before{
            content:"\e242"
          }
          .glyphicon-text-background:before{
            content:"\e243"
          }
          .glyphicon-menu-down:before{
            content:"\e259"
          }
          *{
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box
          }
          :after,:before{
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box
          }
          html{
            font-size:10px;
            -webkit-tap-highlight-color:transparent
          }
          button,input{
            font-family:inherit;
            font-size:inherit;
            line-height:inherit
          }
          a:focus{
            outline:5px auto -webkit-focus-ring-color;
            outline-offset:-2px
          }
          img{
            vertical-align:middle
          }
          p{
            margin:0 0 10px
          }
          .mark,mark{
            padding:.2em;
            background-color:#fcf8e3
          }
          ul{
            margin-top:0;
            margin-bottom:10px
          }
          ul ul{
            margin-bottom:0
          }
          th{
            text-align:left
          }
          label{
            display:inline-block;
            max-width:100%;
            margin-bottom:5px
          }
          input[type=search]{
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box;
            -webkit-appearance:none;
            -moz-appearance:none;
            appearance:none
          }
          input[type=checkbox],input[type=radio]{
            margin:4px 0 0;
            line-height:normal
          }
          input[type=checkbox][disabled],input[type=radio][disabled]{
            cursor:not-allowed
          }
          input[type=file]{
            display:block
          }
          input[type=range]{
            display:block;
            width:100%
          }
          input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus{
            outline:5px auto -webkit-focus-ring-color;
            outline-offset:-2px
          }
          .form-control{
            display:block;
            width:100%;
            height:34px;
            padding:6px 12px;
            font-size:14px;
            line-height:1.42857143
          }
          .form-control::-moz-placeholder{
            color:#999;
            opacity:1
          }
          .form-control:-ms-input-placeholder{
            color:#999
          }
          .form-control::-webkit-input-placeholder{
            color:#999
          }
          .form-control::-ms-expand{
            background-color:transparent;
            border:0
          }
          .form-control[disabled],.form-control[readonly]{
            background-color:#eee;
            opacity:1
          }
          .form-control[disabled]{
            cursor:not-allowed
          }
          .btn{
            display:inline-block;
            margin-bottom:0;
            font-weight:400;
            text-align:center;
            white-space:nowrap;
            vertical-align:middle;
            -ms-touch-action:manipulation;
            touch-action:manipulation;
            cursor:pointer;
            background-image:none;
            border:1px solid transparent;
            padding:6px 4px;
            font-size:14px;
            line-height:1.42857143;
            -webkit-user-select:none;
            -moz-user-select:none;
            -ms-user-select:none;
            user-select:none
          }
          .btn.active:focus,.btn:active:focus,.btn:focus{
            outline:0
          }
          .btn:focus,.btn:hover{
            color:#333;
            text-decoration:none
          }
          .btn.active,.btn:active{
            background-image:none;
            outline:0;
            -webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);
            box-shadow:inset 0 3px 5px rgba(0,0,0,.125)
          }
          .btn[disabled]{
            cursor:not-allowed;
            opacity:.65;
            -webkit-box-shadow:none;
            box-shadow:none
          }
          .btn-info{
            color:#fff;
            background-color:#5bc0de;
            border-color:#46b8da
          }
          .btn-info:focus{
            color:#fff;
            background-color:#31b0d5;
            border-color:#1b6d85
          }
          .btn-info:hover{
            color:#fff;
            background-color:#31b0d5;
            border-color:#269abc
          }
          .btn-info.active,.btn-info:active{
            color:#fff;
            background-color:#31b0d5;
            background-image:none;
            border-color:#269abc
          }
          .btn-info.active:focus,.btn-info.active:hover,.btn-info:active:focus,.btn-info:active:hover{
            color:#fff;
            background-color:#269abc;
            border-color:#1b6d85
          }
          .btn-info[disabled]:focus,.btn-info[disabled]:hover{
            background-color:#5bc0de;
            border-color:#46b8da
          }
          .btn-link{
            font-weight:400;
            color:#337ab7;
            border-radius:0
          }
          .btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled]{
            background-color:transparent;
            -webkit-box-shadow:none;
            box-shadow:none
          }
          .btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{
            border-color:transparent
          }
          .btn-link:focus,.btn-link:hover{
            color:#23527c;
            text-decoration:underline;
            background-color:transparent
          }
          .btn-link[disabled]:focus,.btn-link[disabled]:hover{
            color:#777;
            text-decoration:none
          }
          .btn-lg{
            padding:10px 16px;
            font-size:18px;
            line-height:1.3333333;
            border-radius:6px
          }
          .btn-sm{
            padding:5px 10px;
            font-size:12px;
            line-height:1.5;
            border-radius:3px
          }
          .btn-block{
            display:block;
            width:100%
          }
          .btn-block+.btn-block{
            margin-top:5px
          }
          input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{
            width:100%
          }
          .open>a{
            outline:0
          }
          [data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio]{
            position:absolute;
            clip:rect(0,0,0,0);
            pointer-events:none
          }
          .nav{
            padding-left:0;
            margin-bottom:0;
            list-style:none
          }
          .nav>li{
            position:relative;
            display:block
          }
          .nav .open>a,.nav .open>a:focus,.nav .open>a:hover{
            background-color:#eee;
            border-color:#336ab7
          }
          .nav>li>a>img{
            max-width:none
          }
          .nav-tabs{
            border-bottom:1px solid #ddd
          }
          .nav-tabs>li{
            float:left
          }
          .tab-content>.active{
            display:block
          }
          .label{
            display:inline;
            padding:.2em .6em .3em;
            font-size:75%;
            font-weight:700;
            line-height:1;
            color:#fff;
            text-align:center;
            white-space:nowrap;
            vertical-align:baseline;
            border-radius:.25em
          }
          a.label:focus,a.label:hover{
            color:#fff;
            text-decoration:none;
            cursor:pointer
          }
          .label:empty{
            display:none
          }
          .btn .label{
            position:relative;
            top:-1px
          }
          .nav:after,.nav:before{
            display:table;
            content:" "
          }
          .nav:after{
            clear:both
          }
          .hidden{
            display:none!important
          }
          .btn-success{
            color:#fff;
            background-color:#438643;
            border-color:#346834
          }
          .btn-success.focus,.btn-success:focus{
            color:#fff;
            background-color:#449d44;
            border-color:#255625
          }
          .btn-success:hover{
            color:#fff;
            background-color:#317031;
            border-color:#2a5a2a
          }
          .btn-success.active,.btn-success:active{
            color:#fff;
            background-color:#2c582c;
            background-image:none;
            border-color:#204720
          }
          .btn-danger{
            color:#fff;
            background-color:#d9534f;
            border-color:#d43f3a
          }
          .btn-danger.focus,.btn-danger:focus{
            color:#fff;
            background-color:#c9302c;
            border-color:#761c19
          }
          .btn-danger:hover{
            color:#fff;
            background-color:#c9302c;
            border-color:#ac2925
          }
          .btn-danger.active,.btn-danger:active{
            color:#fff;
            background-color:#c9302c;
            background-image:none;
            border-color:#ac2925
          }
          .btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.focus{
            color:#fff;
            background-color:#ac2925;
            border-color:#761c19
          }
          .btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover,fieldset[disabled].btn-danger.focus{
            background-color:#d9534f;
            border-color:#d43f3a
          }
          .btn-danger .badge{
            color:#d9534f;
            background-color:#fff
          }
          .btn-primary{
            color:#fff;
            background-color:#3d698c;
            border-color:#28455e
          }
          .btn-primary:focus{
            color:#fff;
            background-color:#3c709c;
            border-color:#19405f
          }
          .btn-primary:hover{
            color:#fff;
            background-color:#26435b;
            border-color:#1d3346
          }
          .btn-primary.active,.btn-primary:active{
            color:#fff;
            background-color:#286090;
            background-image:none;
            border-color:#204d74
          }
          .btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active:focus,.btn-primary:active:hover{
            color:#fff;
            background-color:#1f4260;
            border-color:#132a3e
          }
          a:hover{
            color:#d9eeff;
            text-decoration:none
          }
          a{
            background-color:transparent;
            color:#a7ccea;
            text-decoration:none
          }
          img{
            image-rendering:-webkit-optimize-contrast
          }
          .glyphicon-sunglasses:before{
            content:"\e240"
          }
          .glyphicon-transfer:before{
            content:"\e178"
          }
          .glyphicon-random:before{
            content:"\e110"
          }
          .glyphicon-menu-hamburger:before{
            content:"\e236"
          }
          .glyphicon-menu-up:before{
            content:"\e260"
          }
          .glyphicon-time:before{
            content:"\e023"
          }
          .glyphicon-save:before{
            content:"\e166"
          }
          .glyphicon-arrow-left:before{
            content:"\e091"
          }
          .glyphicon-star:before{
            content:"\e006"
          }
          .glyphicon-wrench:before{
            content:"\e136"
          }
          .glyphicon-subtitles:before{
            content:"\e188"
          }
          .glyphicon-floppy-save:before{
            content:"\e175"
          }
          .glyphicon-question-sign:before{
            content:"\e085"
          }
          .glyphicon-exclamation-sign:before{
            content:"\e101"
          }
          .glyphicon-play:before{
            content:"\e072"
          }
          .glyphicon-chevron-left:before{
            content:"\e079"
          }
          .glyphicon-repeat:before{
            content:"\e030"
          }
          .glyphicon-calendar:before{
            content:"\e109"
          }
          .glyphicon-chevron-right:before{
            content:"\e080"
          }
          .glyphicon-bell:before{
            content:"\e123"
          }
          .glyphicon-plus:before{
            content:"\002b"
          }
          .glyphicon-cog:before{
            content:"\e019"
          }
          .glyphicon-camera:before{
            content:"\e046"
          }
          .glyphicon-refresh:before{
            content:"\e031"
          }
          .glyphicon-pencil:before{
            content:"\270f"
          }
          .glyphicon-fullscreen:before{
            content:"\e140"
          }
          .glyphicon-stats:before{
            content:"\e185"
          }
          .glyphicon-globe:before{
            content:"\e135"
          }
          .glyphicon-bullhorn:before{
            content:"\e122"
          }
          .glyphicon-stats{
            transform:translateY(-1px)
          }
          @keyframes notifin{
            from{
                transform:translateY(20px);
                opacity:0;
            }
            to{
                transform:translateY(0);
                opacity:1;
            }
          }
          @keyframes notifout{
            from{
                transform:translateY(0);
                opacity:1
            }
            to{
                transform:translateY(-20px);
                opacity:0
            }
          }
          @keyframes moveout2{
            from{
                transform:translateX(-350px)
            }
            to{
                transform:translateX(0)
            }
          }
          @keyframes movein2{
            from{
                transform:translateX(0)
            }
            to{
                transform:translateX(-350px)
            }
          }
          @keyframes moveout2mobile{
            from{
                transform:translateX(-100%)
            }
            to{
                transform:translateX(0)
            }
          }
          @keyframes movein2mobile{
            from{
                transform:translateX(0)
            }
            to{
                transform:translateX(-100%)
            }
          }
          @keyframes moveout2recomend{
            from{
                transform:translateX(370px)
            }
            to{
                transform:translateX(0)
            }
          }
          @keyframes movein2recomend{
            from{
                transform:translateX(0)
            }
            to{
                transform:translateX(370px)
            }
          }
          @keyframes moveout2mobilerecomend{
            from{
                transform:translateX(100%)
            }
            to{
                transform:translateX(0)
            }
          }
          @keyframes movein2mobilerecomend{
            from{
                transform:translateX(0)
            }
            to{
                transform:translateX(100%)
            }
          }
          @keyframes lastwatchspawn{
            from{
                transform:translateX(0)
            }
            to{
                transform:translateX(45px)
            }
          }
          @keyframes lastwatchout{
            from{
                transform:translateX(370px)
            }
            to{
                transform:translateX(45px)
            }
          }
          @keyframes lastwatchin{
            from{
                transform:translateX(45px)
            }
            to{
                transform:translateX(370px)
            }
          }
          @keyframes lastwatchoutmobile{
            from{
                transform:translateX(100%)
            }
            to{
                transform:translateX(35px)
            }
          }
          @keyframes lastwatchinmobile{
            from{
                transform:translateX(35px)
            }
            to{
                transform:translateX(100%)
            }
          }
          @keyframes fadein{
            from{
                opacity:0
            }
            to{
                opacity:1
            }
          }
          .spinner{
            animation:rotator 1.4s linear infinite;
            margin-top:20px
          }
          @keyframes rotator{
            0%{
                transform:rotate(0deg)
            }
            100%{
                transform:rotate(270deg)
            }
          }
          .path{
            stroke-dasharray:187;
            stroke-dashoffset:0;
            stroke:#98bfff;
            transform-origin:center;
            animation:dash 1.4s ease-in-out infinite
          }
          @keyframes dash{
            0%{
                stroke-dashoffset:187
            }
            50%{
                stroke-dashoffset:46.75;
                transform:rotate(135deg)
            }
            100%{
                stroke-dashoffset:187;
                transform:rotate(450deg)
            }
          }
          @keyframes zoomout{
            from{
                transform:scale(.94)
            }
            to{
                transform:scale(1)
            }
          }
          #loadcontainer{
            position:fixed;
            top:0;
            z-index:22;
            width:100%;
            overflow:hidden;
            display:none
          }
          #loadcontainer2{
            margin-top:-2px;
            overflow:hidden;
            display:none
          }
          .loadindicator{
            height:2px;
            background-color:#43caff;
            position:relative;
            animation-name:infiniteload;
            animation-duration:1.5s;
            animation-iteration-count:infinite;
            animation-timing-function:linear
          }
          @keyframes infiniteload{
            0%{
                left:-100%;
                width:100%
            }
            50%{
                left:40%;
                width:45%
            }
            100%{
                left:calc(100% + 35%);
                width:35%
            }
          }
          #homeicon,#homeicon2,#backiconhome,#backicon{
            float:left;
            margin-top:5px;
            cursor:pointer;
            margin-left:calc(50% - 550px);
            font-size:19px;
            margin-right:10px;
            color:#b7b7b7
          }
          #homeicon:hover,#homeicon2:hover,#backiconhome:hover,#backicon:hover{
            color:white
          }
          #homeicon{
            margin-left:0
          }
          #backiconhome{
            margin-left:calc(50% - 620px)
          }
          #personalisttitle{
            text-align:center;
            font-size:17px
          }
          .topmenubtn{
            margin-left:5px;
            margin-right:5px;
            color:#b7b7b7;
            padding-top:10px;
            display:inline;
            font-size:15px;
            text-decoration:none;
            padding-bottom:15px;
            cursor:pointer
          }
          .topmenubtn:hover{
            color:white
          }
          .topmenubtn .glyphicon{
            margin-right:8px
          }
          #q::-webkit-search-cancel-button,#azsearch::-webkit-search-cancel-button{
            display:none
          }
          #q,#azsearch{
            color:white!important;
            background-color:rgba(0,0,0,.2)!important;
            border:1px solid rgba(255,255,255,.08);
            border-radius:4px;
            text-transform:capitalize
          }
          #q:focus,#azsearch:focus{
            border-radius:3px
          }
          .form-control:focus,.manualEditInput:focus{
            border:1px solid rgba(73,203,255,.521)!important;
            outline:0
          }
          #epslistplace{
            margin-top:5px;
            max-height:140px;
            margin-bottom:10px;
            overflow-y:auto;
            display:none;
            opacity:.9;
            gap:4px;
            grid-template-columns:repeat(auto-fill,minmax(47px,1fr))
          }
          #loadmorebtn,.loadmorebtn{
            grid-column:span 4 / auto
          }
          .playbtn{
            padding:6px 0
          }
          #notice{
            color:rgba(255,255,255,.5);
            font-size:14px
          }
          #flexstreambottom{
            width:1100px;
            margin:0 auto;
            display:flex;
            transition:all .5s ease-in-out
          }
          #belowbox{
            width:1100px;
            margin:0 auto;
            transition:all .5s ease-in-out;
            display:none;
            overflow:hidden
          }
          #anibottomplace{
            display:flex
          }
          #anicommentplace{
            margin-top:20px
          }
          #streambottomright,#anibottomright{
            flex:0 315px;
            padding-left:15px;
            margin-top:25px;
            display:none;
            margin-bottom:20px
          }
          #disquscomment,#disquscommentnew{
            display:none;
            text-align:center;
            opacity:.9;
            width:1100px;
            margin:25px auto 15px auto;
            background-color:rgb(35,35,35);
            padding:5px 15px;
            border-radius:3px;
            transition:all .5s ease-in-out
          }
          #disquscommentnew{
            width:unset
          }
          #disqus_thread{
            width:calc(100% - 10px);
            margin-left:5px
          }
          #showcommentbtn{
            width:280px;
            height:35px;
            color:rgba(255,255,255,.9);
            background-color:rgb(53 61 72);
            border:1px solid #4b7283;
            border-radius:3px;
            font-size:15px;
            margin:10px;
            outline:none
          }
          .rating{
            position:absolute;
            top:0;
            left:0;
            background-color:#171717b3;
            padding:0 5px 2px 7px;
            font-size:12px;
            color:white;
            border-radius:0 0 5px 0
          }
          .rating .glyphicon{
            color:#ffcb00c7
          }
          #recomendedlist{
            margin-right:10px;
            margin-bottom:15px;
            padding-top:55px
          }
          #recomendedlist .resultimg{
            height:unset!important;
            min-height:190px
          }
          #gconnectbtn{
            margin-bottom:0;
            width:100%;
            text-align:center
          }
          #gconnectbtnimg{
            cursor:pointer;
            transition:.2s ease
          }
          #gconnectbtnimg:hover{
            box-shadow:0 0 3px 2px rgba(66,133,244,.3)
          }
          #moreinfobtn{
            float:right;
            margin-top:17px;
            margin-right:20px;
            background-color:#252729;
            padding:5px 10px;
            font-size:12px;
            cursor:pointer;
            border-radius:3px
          }
          .loadmoresearch,.loadmoresearch2,.recomendedtitle{
            height:25px;
            background-color:transparent;
            border:none;
            border-bottom:1px solid #ffffff45;
            width:calc(100% - 30px);
            margin-left:20px;
            margin-bottom:20px;
            cursor:default;
            color:rgba(255,255,255,.9);
            text-align:center
          }
          .loadsearchbtn{
            background-color:#303539;
            padding:1px 10px;
            margin-left:20px;
            cursor:pointer
          }
          #featuredgenre{
            display:inline-block;
            max-width:calc(100% - 175px);
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
            font-size:12px;
            color:#a5a5a5
          }
          #featuredcard{
            margin-left:20px;
            margin-right:10px;
            padding:10px 15px;
            font-size:14px;
            background-color:rgb(30,30,30);
            color:rgba(255,255,255,.78);
            margin-bottom:10px;
            height:160px
          }
          #featuredbg{
            width:100%;
            margin-top:-50%;
            filter:blur(15px);
            -webkit-filter:blur(15px);
            opacity:.2
          }
          #featuredbgcont{
            height:160px;
            overflow:hidden;
            margin:-10px -15px -160px -15px;
            animation:fadein .3s
          }
          #featuredcont{
            position:relative;
            z-index:1;
            height:140px;
            margin-top:10px;
            animation:fadein .3s
          }
          #featuredimg{
            height:160px;
            min-width:110px;
            float:left;
            margin:-10px 10px 0 -15px
          }
          #featuredtitle{
            font-size:20px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap
          }
          #featuredtext{
            margin:12px 0;
            height:58px;
            overflow:hidden;
            color:#a5a5a5;
            font-size:13px
          }
          #featuredNext,#featuredBack{
            float:right;
            margin-right:15px;
            color:#7893aa;
            cursor:pointer
          }
          #announcement{
            margin-left:20px;
            height:48px;
            margin-right:10px;
            padding:10px 15px 0 15px;
            font-size:13px;
            background-color:rgb(30,30,30);
            overflow-y:hidden;
            color:rgba(255,255,255,.5);
            transition:height .5s ease
          }
          #sharebtn,#openreport,#syncbtn,#screenshotbtn,#widescreenbtn{
            float:right;
            cursor:pointer;
            font-size:12px;
            color:#74a4cc;
            display:none;
            margin-top:3px;
            margin-right:10px
          }
          #serverlabel{
            float:right;
            margin-right:5px;
            font-size:13px;
            margin-top:2px;
            border-left:1px solid #5b5b5b;
            padding-left:5px;
            display:none
          }
          #reloadbtn,#sandboxbtn{
            float:right;
            cursor:pointer;
            margin-right:10px;
            display:none;
            color:#79abd5;
            font-size:12px;
            margin-top:3px
          }
          #screenshotbtn,#widescreenbtn{
            display:block;
            font-size:15px;
            margin-top:1px
          }
          #castbtn{
            float:right;
            cursor:pointer;
            color:#6e96b7;
            margin:2px 10px 0 0
          }
          #sharebtn{
            color:#76a2c6;
            font-size:13px
          }
          #sharebtn:hover,#openreport:hover,#syncbtn:hover,#sandboxbtn:hover,#reloadbtn:hover,#showrecomendbtn:hover,#screenshotbtn:hover,#widescreenbtn:hover,#castbtn:hover{
            color:#7fc4fd
          }
          #sesonaltmp,#populartmp,#recenttmp,#movietmp,#generaltmp,#nowtime{
            display:none
          }
          #loadmorelist{
            cursor:pointer;
            margin-left:calc(50% - 105px);
            width:200px;
            text-align:center;
            background-color:#24282f;
            padding:5px;
            margin-top:30px;
            color:#99d4ff;
            border:1px solid #444e5b;
            border-radius:4px
          }
          #legendall{
            margin-left:20px;
            font-size:14px;
            color:#eea885;
            margin-top:20px
          }
          #legendtitle{
            border-bottom:1px solid #826759;
            margin-bottom:10px;
            font-size:20px
          }
          #noticerecent{
            font-size:13px;
            color:rgba(255,255,255,.5);
            margin-left:5%;
            margin-bottom:-10px
          }
          #updatebtn{
            display:none;
            cursor:pointer
          }
          #updatebtn .glyphicon{
            margin-left:3px
          }
          .genretitle{
            margin:0 10px 15px 21px;
            font-size:20px;
            text-align:center;
            background:rgb(34,34,34);
            padding:5px 0
          }
          .epsavailable{
            float:right;
            flex:1;
            font-size:13px;
            text-align:right;
            color:rgba(255,255,255,.7)
          }
          .epsavailable a{
            color:rgba(105,198,220,.5)
          }
          .epsavailable a:hover{
            color:rgba(164,238,255,.562)
          }
          #playercountdown{
            color:yellow;
            white-space:nowrap
          }
          .changelogdate{
            background-color:rgba(71,140,201,.4);
            padding:3px
          }
          .quickresult{
            background-color:rgb(25,25,25);
            padding:7px 10px;
            margin-bottom:18px;
            display:grid;
            gap:5px;
            border:1px solid #313131;
            color:rgba(255,255,255,.9);
            border-radius:0 0 3px 3px;
            overflow:hidden
          }
          .similarlist{
            padding:3px;
            display:block
          }
          .similarlist img{
            margin-right:10px;
            width:50px
          }
          #resultAlt .name,#result1 .name{
            text-align:center;
            white-space:normal;
            -webkit-line-clamp:6
          }
          .quicksearchcontainer{
            display:none;
            position:fixed;
            width:100%;
            z-index:10;
            margin-top:1px
          }
          #resultplace .quickresult{
            background-color:transparent;
            border:none;
            padding:0 20px;
            gap:7px
          }
          .leftside{
            min-height:500px
          }
          .quickresult li{
            height:100%
          }
          .quickresult .details{
            text-align:left;
            margin-left:65px
          }
          .quickresult .name{
            font-size:14px
          }
          .quickresult .searchimg{
            float:left;
            width:55px
          }
          .name a{
            color:#95b6d0
          }
          .name{
            color:#95b6d0
          }
          .quickresult li:hover{
            background-color:#202020
          }
          .qresulthover{
            background-color:#262626!important
          }
          #reportform .quickresult{
            background-color:transparent;
            border:none;
            padding:5px
          }
          #reportform .quickresult li:hover{
            background-color:transparent
          }
          #clearbtn{
            background-color:#642a24;
            color:#ffdfbd;
            border:1px solid #733d3d
          }
          #fullresultbtn{
            padding:7px 10px 0 10px;
            background-color:rgb(25,25,25);
            color:#aff0ff;
            border-left:1px solid #313131;
            border-right:1px solid #313131;
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(60px,1fr));
            gap:2px
          }
          #fullresultbtn a{
            cursor:pointer;
            background-color:#212324;
            margin-bottom:5px;
            font-size:13px;
            text-align:center;
            padding:2px 0;
            color:#8aadca
          }
          #fullresultbtn a:hover{
            color:#aadaff
          }
          .eprecgrid{
            margin:0 15px 15px 0;
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(34px,1fr));
            gap:3px;
            font-size:14px;
            text-align:center
          }
          .eprecgrid a{
            background-color:#242728;
            border:1px solid transparent
          }
          .resultcontainer{
            margin:0 auto;
            max-width:750px;
            box-shadow:0 0 80px 10px
          }
          .sanimepage{
            max-width:610px;
            box-shadow:0 0 100px 30px
          }
          .sanimepage #fullresultbtn{
            border:none;
            padding:7px 0 0 10px;
            border-right:1px solid #313131;
            border-left:1px solid #313131
          }
          .sotherpage{
            max-width:670px
          }
          .sotherpage #fullresultbtn{
            padding:5px 0 3px 10px;
            border:1px solid #3c3c3c;
            border-radius:3px
          }
          .absolutee{
            position:absolute
          }
          .plyr__control--overlaid{
            border-radius:3px
          }
          .plyr{
            height:100%!important
          }
          .plyr__menu__container{
            border-radius:2px
          }
          .plyr__time+.plyr__time{
            display:block
          }
          .tooltiptext{
            visibility:hidden;
            width:90px;
            background-color:rgb(51 51 51);
            color:#fff;
            text-align:center;
            padding:5px 0;
            border-radius:4px;
            bottom:27px;
            left:50%;
            margin-left:-45px;
            position:absolute;
            z-index:20;
            font-family:'Lexend deca',sans-serif;
            font-size:14px
          }
          .subtextmenuicon{
            font-size:13px;
            font-family:'Lexend deca',sans-serif;
            margin-left:2px
          }
          #nextbtn .tooltiptext{
            left:-16px
          }
          #nextbtn,.dlbutton,.proxybtn,.autoplaybutton,.lightbtn{
            cursor:pointer
          }
          .autoplaybutton:hover .tooltiptext{
            visibility:visible
          }
          .proxybtn:hover .tooltiptext{
            visibility:visible
          }
          .dlbutton:hover .tooltiptext{
            visibility:visible
          }
          #nextbtn:hover .tooltiptext{
            visibility:visible
          }
          .lightbtn:hover .tooltiptext{
            visibility:visible
          }
          #menumobilebtn,#menumobilebtn2,#showsearchbtn,#recomendedclosebtn{
            float:right;
            margin-right:15px;
            padding:3px 6px 0 6px;
            background-color:transparent;
            color:#96bdd9;
            display:none;
            border:none;
            font-size:20px;
            margin-bottom:-5px;
            margin-top:-2px;
            outline:none;
            border-radius:3px
          }
          #recomendedclosebtn{
            display:block;
            float:left;
            margin:15px 0 0 20px
          }
          #menumobilebtn2{
            display:block;
            margin-top:-35px;
            margin-right:calc(50% - 550px);
            font-size:22px
          }
          .chacedinfo{
            float:right;
            padding-right:3%;
            color:rgba(255,150,100,.7);
            font-size:13px
          }
          .searchbar{
            max-width:330px;
            display:inline
          }
          #loadingtext{
            font-size:20px;
            display:none;
            text-align:center
          }
          #animeinfobottom{
            display:none;
            float:left;
            font-size:13px;
            margin-left:8px;
            padding-left:8px;
            border-left:1px solid #4f4f4f
          }
          #animebtn2{
            background-color:#2f2f2f;
            padding:1px 7px;
            border:1px solid #4c4c4c;
            border-radius:3px
          }
          #userconfirmcheck{
            float:right;
            margin-right:10px;
            margin-top:18px;
            font-size:15px
          }
          .searchresult,.items{
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(140px,1fr));
            margin-left:-20px;
            gap:5px;
            margin-right:10px;
            margin-top:-10px
          }
          .compactitem a{
            margin-right:5px;
            margin-left:3px;
            display:inline-block;
            max-width:calc(100% - 70px)
          }
          .compactitem i{
            cursor:pointer;
            float:left;
            margin-right:5px
          }
          .compactitem{
            margin-left:20px;
            margin-right:90px
          }
          .timeCompact{
            float:right;
            margin-top:-23px;
            font-size:14px;
            margin-right:15px
          }
          .allitem a{
            margin-right:5px;
            max-width:calc(100% - 50px);
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            float:left
          }
          .allitem,.compactitem{
            color:gray
          }
          #alphabetical{
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(54px,1fr));
            margin-left:15px;
            margin-bottom:10px
          }
          #alphabetical button{
            color:white;
            background-color:#2f2f2f;
            border:none;
            margin:3px;
            outline:none
          }
          #alphabetical button[disabled]{
            background-color:#32531b
          }
          #playeroverlay{
            position:absolute;
            z-index:99;
            font-size:90px;
            padding-left:10px;
            width:100%;
            -webkit-text-stroke:1px #595959;
            opacity:.7;
            display:none;
            text-align:right
          }
          .searchresult li,.items li{
            background-color:#222;
            border:2px solid #0000;
            position:relative;
            animation:zoomout .3s
          }
          #pwaContainer{
            display:none;
            height:50px;
            background-color:#283538;
            margin:10px;
            margin-left:20px;
            font-size:14px;
            padding:15px
          }
          #pwaButton{
            padding:5px 15px 5px 15px;
            border-radius:2px;
            float:right;
            margin-top:-7px;
            display:block
          }
          #userlistcontainer{
            margin-left:22px;
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(350px,1fr));
            margin-top:-5px
          }
          .flexuserlist{
            display:flex;
            margin-bottom:5px;
            border-bottom:1px solid #2d2d2d;
            margin-right:10px;
            padding-bottom:5px;
            min-height:110px
          }
          .imguserlist{
            flex:0 0 95px
          }
          .detailuserlist{
            flex:1;
            margin-bottom:10px
          }
          .imgusr{
            width:80px
          }
          .titleuserlist{
            font-size:14px;
            margin-bottom:5px
          }
          .watchprogress{
            margin-top:5px;
            font-size:13px;
            color:#b0b0b0!important
          }
          .recflexlist .watchprogress{
            font-size:12px
          }
          .latestep{
            display:none
          }
          .listviewcount{
            color:#ffe57e;
            font-size:13px;
            margin:-5px 0
          }
          .infouserlist{
            font-size:13px;
            margin-right:15px;
            margin-bottom:5px;
            color:#bbb490
          }
          .usercontrol2{
            float:right
          }
          #extracontainer .reclistcontainer{
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            padding-right:10px
          }
          #extracontainer img{
            vertical-align:unset!important
          }
          #extracontainer a{
            margin-left:5px
          }
          #showExternalBtn{
            color:#999;
            background-color:#222;
            border:none;
            margin-left:18px;
            padding:5px;
            margin-top:10px;
            width:calc(100% - 25px);
            border-radius:4px
          }
          #loadStatus{
            text-align:center;
            margin-top:10px;
            display:none
          }
          .recflexlist{
            display:flex;
            margin-bottom:5px;
            margin-right:10px;
            min-height:100px
          }
          .recflexlist .imguserlist{
            flex:0 0 85px
          }
          .recflexlist .imgusr{
            width:75px
          }
          .reclistcontainer{
            margin:-13px -5px 10px 20px
          }
          .reclisttitle{
            font-size:14px;
            margin-bottom:5px
          }
          .reclisttitle a{
            color:#95b6d0
          }
          .reclisttitle a:hover{
            color:#9ccaee
          }
          .reclistplay{
            background-color:#252a32;
            border:none;
            color:#99d4ff;
            padding:2px 10px;
            border-radius:2px;
            cursor:pointer
          }
          .searchresult li:hover,.items li:hover{
            background-color:#ffffff1a;
            transform:scale(.97)
          }
          .quickresult li{
            cursor:pointer
          }
          .quickresult .infotext{
            font-size:12px!important;
            padding-left:0
          }
          .quickresult .name{
            padding:5px 0 0 0;
            -webkit-line-clamp:8;
            margin-top:0
          }
          .noresultnotif{
            margin-left:40px;
            font-size:13px;
            opacity:.5
          }
          .questionFAQ{
            padding:20px 20px 0 20px;
            color:#eec57b;
            font-size:19px
          }
          .answerFAQ{
            padding:0 20px 0 20px;
            font-size:14px
          }
          .subpartFAQ{
            border-bottom:1px solid gray;
            margin:20px 20px 0 20px;
            text-align:center
          }
          .subpanelmenu{
            text-align:center;
            margin-bottom:24px;
            border-bottom:1px solid #626262;
            border-top:1px solid #626262;
            padding:5px 0;
            margin-top:5px
          }
          .dubtag{
            color:#f18585
          }
          .name{
            padding-left:2px;
            padding-right:2px;
            padding-top:2px;
            margin-top:5px;
            line-height:16px;
            font-size:13px;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical;
            overflow:hidden
          }
          .resultimg{
            width:100%;
            max-width:160px;
            background-color:#333333;
            height:217px
          }
          .resultimg2{
            width:100%;
            background-color:#333333;
            min-height:150px;
            max-width:160px;
            border-radius:2px
          }
          .quickresult .resultimg2{
            min-height:unset
          }
          #bottommsg{
            margin-left:20px
          }
          #password{
            margin-bottom:5px
          }
          #gsignsection{
            display:none
          }
          .signinhome{
            margin-bottom:10px
          }
          .gsignin{
            margin-bottom:0;
            margin-left:calc(50% - 60px);
            opacity:.9;
            margin-top:-7px
          }
          .form-check-label,.form-check-input{
            cursor:pointer;
            font-weight:normal!important;
            margin-left:3px;
            margin-bottom:5px
          }
          .genresgrid .form-check-label:hover{
            background-color:#7fcfff3b;
            padding-left:5px;
            padding-right:10px;
            margin-left:-2px
          }
          .form-check-input:checked + .form-check-label{
            background-color:#7fcfff3b;
            padding-left:5px;
            padding-right:10px
          }
          .subtitleright{
            text-align:center;
            font-size:15px;
            margin:-10px;
            margin-bottom:-10px;
            padding:4px;
            margin-bottom:10px;
            border-top:1px solid #3c3c3c;
            border-bottom:1px solid #3c3c3c
          }
          .rightcard input[type="checkbox"]{
            margin:3px 0 -3px;
            float:left
          }
          #searchimg{
            flex:0 0 25px
          }
          #details{
            flex:1
          }
          .details{
            text-align:center
          }
          .nameId {
          display:none;
          }
          #flexcontainer{
            display:flex;
            min-width:50px;
            margin-top:20px
          }
          #genreplace{
            height:205px;
            opacity:.85;
            visibility:hidden;
            transition:height .5s ease
          }
          .genresgrid .form-check-input{
            opacity:.8
          }
          #ongoingplace{
            height:830px;
            min-height:830px;
            overflow-y:hidden;
            transition:height 1.2s ease;
            opacity:.9
          }
          #ongoingplace2{
            height:2180px;
            min-height:0px;
            overflow-y:hidden;
            transition:height 1.2s ease;
            opacity:.9
          }
          .topanimeli{
            list-style-type:none
          }
          .topanimea{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            align-items:flex-start;
            margin-bottom:7px
          }
          .topanimea:hover{
            background-color:#ffffff0d;
            border-color:#5b5b5b
          }
          .topanimeimg{
            width:56px;
            min-height:75px;
            margin-right:10px;
            border-radius:2px
          }
          .topanimename{
            font-size:13px;
            margin-bottom:3px;
            text-overflow:ellipsis;
            overflow:hidden;
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical
          }
          .topanimenumber{
            font-size:13px;
            margin-left:3px;
            color:#555
          }
          .topanimerating{
            margin-right:7px
          }
          .topanimerating i{
            color:#dbc137d1
          }
          .topanimeuser{
            padding-right:10px
          }
          .topanimestats{
            margin-left:3px;
            color:#aaa;
            display:flex;
            flex-direction:row;
            align-items:baseline;
            justify-content:flex-start;
            font-size:12px
          }
          .flexrightcard{
            display:flex;
            overflow-y:hidden;
            margin-bottom:5px
          }
          .halfleft2{
            flex:0 0 50%
          }
          .halfright{
            flex:1
          }
          .leftside{
            flex:0 0 1000px;
            margin-left:-20px;
            transition:.5s
          }
          #changepasscontainer{
            font-size:12px
          }
          .rightside{
            flex:1;
            font-size:13px;
            max-width:290px;
            animation-fill-mode:forwards;
            animation-duration:.4s;
            animation-timing-function:ease;
            overscroll-behavior:none;
            scrollbar-width:thin
          }
          .playersidebar{
            position:fixed;
            top:49px;
            z-index:9;
            padding:15px;
            font-size:13px;
            height:calc(100% - 47px);
            width:350px;
            margin-left:100%;
            color:white;
            overflow-y:auto;
            animation-fill-mode:forwards;
            animation-duration:.4s;
            animation-timing-function:ease
          }
          #opensidebarbtn{
            position:fixed;
            right:0;
            top:250px;
            padding:40px 5px;
            background-color:#202020;
            color:#6e96b7;
            cursor:pointer;
            display:none
          }
          #topmid{
            display:none;
            margin-bottom:-50px;
            margin-top:17px;
            margin-left:auto;
            margin-right:auto;
            max-width:100%;
            overflow:hidden;
            width:1100px;
            background-color:rgb(34,34,34);
            border-radius:4px;
            padding:6px;
            transition:all .5s ease-in-out
          }
          #topmidcont,#streambrcont{
            text-align:center;
            clear:both
          }
          #playerleftsidebar{
            position:fixed;
            top:0;
            z-index:23;
            background-color:rgb(25,25,25);
            font-size:14px;
            height:100%;
            width:370px;
            right:100%;
            color:white;
            animation-fill-mode:forwards;
            animation-duration:.4s;
            animation-timing-function:ease;
            overflow-y:auto;
            overscroll-behavior:none;
            scrollbar-width:thin;
            border-right:1px solid #2f2f2f
          }
          .rightcard:last-child{
            border-radius:0 0 4px 4px
          }
          .righttitle{
            background-color:rgb(60,69,80);
            text-align:center;
            padding:5px;
            margin:-10px;
            margin-bottom:-10px;
            margin-bottom:5px;
            position:absolute;
            width:288px;
            font-size:16px
          }
          body::-webkit-scrollbar,#playerleftsidebar::-webkit-scrollbar,#epslistplace::-webkit-scrollbar{
            width:10px;
            height:100%;
            background-color:transparent
          }
          body::-webkit-scrollbar-thumb,#playerleftsidebar::-webkit-scrollbar-thumb,#epslistplace::-webkit-scrollbar-thumb{
            background:rgba(255,255,255,.05)
          }
          .rightcard,.rightcardCenter{
            padding:10px;
            background-color:rgb(32,32,32);
            overflow-y:auto
          }
          .rightcardCenter{
            text-align:center
          }
          .rightcard ul{
            margin-bottom:-5px
          }
          .changelog{
            max-height:300px
          }
          .playbutton,.playbuttonextra{
            padding:4px;
            font-size:15px
          }
          .playbutton:disabled,.playbutton[disabled],.playbuttonextra:disabled,.playbuttonextra[disabled]{
            background-color:#4d7944!important;
            border-color:#244a1c
          }
          #manualTrackingCard{
            display:none;
            color:rgb(227,227,227);
            padding-bottom:15px
          }
          #infocard{
            color:rgb(227,227,227)
          }
          #progressnumber,#tracknumber{
            margin:5px 25px 0 25px;
            padding:5px;
            background-color:#282828;
            font-size:25px
          }
          .floattopsearch{
            position:fixed;
            background-color:rgb(25,25,25);
            top:0;
            width:100%;
            padding:10px;
            z-index:19;
            left:0
          }
          #playertopmenu{
            position:absolute;
            background:rgb(25,25,25)
          }
          #coverlight{
            position:fixed;
            width:100%;
            height:100%;
            z-index:21;
            display:none;
            background-color:rgba(0,0,0,.95)
          }
          #playercontainer{
            height:619px;
            width:100%;
            margin-bottom:5px;
            display:none;
            position:relative
          }
          #player1,#player2{
            display:none;
            background-color:rgb(5,5,5)
          }
          ul{
            list-style-type:none
          }
          table{
            border-collapse:collapse;
            border-spacing:0;
            color:white;
            margin-top:10px
          }
          body{
            font-size:17px;
            line-height:1.42857143;
            background-color:rgb(25,25,25);
            font-family:'Lexend deca',sans-serif;
            overscroll-behavior:none
          }
          textarea{
            color:white;
            font-family:'Lexend deca',sans-serif
          }
          html{
            scroll-behavior:smooth;
            overscroll-behavior:none;
            scrollbar-color:rgba(255,255,255,.1) rgba(0,0,0,.1);
            scrollbar-width:thin
          }
          #error{
            color:#ff8585;
            display:block;
            text-align:center
          }
          .toppart{
            background-color:transparent;
            padding-top:48px
          }
          #lastwatch{
            display:none;
            position:fixed;
            bottom:10px;
            right:calc(100% + 10px);
            padding:10px;
            background-color:#232323;
            border:1px solid #404040;
            color:#d9d9d9;
            max-width:calc(100% - 20px);
            font-size:12px;
            width:350px;
            z-index:2;
            animation-fill-mode:forwards;
            animation-duration:.6s;
            animation-timing-function:ease
          }
          #lastwatchurl{
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            color:gray
          }
          #lastwatchtitle{
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            font-size:15px
          }
          #lastwatchclosebtn{
            cursor:pointer;
            color:#7fc3ff;
            float:right;
            margin:-12px -10px -12px 10px;
            font-size:15px;
            background-color:#2a2d2f;
            padding:30px 10px;
            height:76px
          }
          .middle{
            position:relative;
            margin:0 auto;
            width:1270px;
            font-size:16px;
            color:white;
            min-height:calc(100vh - 190px);
            transition:width .5s
          }
          #timeleft{
            opacity:.5
          }
          #mascot{
            float:right;
            margin-top:-446px;
            margin-right:calc(50% - 840px);
            opacity:.9;
            width:180px
          }
          #malp{
            margin-bottom:-15px;
            margin-top:9px;
            opacity:.9;
            max-width:600px;
            font-size:14px
          }
          #malp .info{
            color:#c1c1c1
          }
          #malp select{
            -moz-appearance:auto;
            -webkit-appearance:auto;
            appearance:auto;
            margin-left:5px!important;
            background-color:#333!important
          }
          #backtotopbtn{
            position:fixed;
            right:30px;
            bottom:25px;
            margin-left:100px;
            width:60px;
            text-align:center;
            cursor:pointer;
            border-radius:3px;
            font-size:14px;
            background-color:#ffffff12;
            padding:6px;
            color:white;
            z-index:10;
            transition:opacity ease-in-out .2s
          }
          #searchbox{
            text-align:left
          }
          input{
            transition:ease-in-out all 300ms
          }
          #q{
            transition:ease-in-out border-color 300ms
          }
          .middle form input[type="submit"],#search form input[type="submit"]{
            height:2.6em;
            color:#fff;
            background-color:transparent;
            border-radius:3px;
            border:2px solid #fff;
            padding:0 1.5em;
            padding-bottom:.1em;
            font-family:'Lato';
            font-weight:400;
            font-size:.8em
          }
          .middle form input[type="submit"]:hover{
            background-color:#fff;
            background:rgba(255,255,255,.3)
          }
          #aligncenter{
            margin-bottom:3px
          }
          #search{
            max-width:100%;
            margin:0 auto;
            border:none;
            background-color:rgb(34,34,34);
            margin-bottom:-20px;
            margin-top:10px;
            position:relative;
            z-index:10
          }
          #searchform{
            padding:10px;
            text-align:center;
            max-width:540px;
            margin:0 auto
          }
          #tombol{
            display:inline
          }
          .subpart{
            font-size:21px;
            width:100%;
            text-align:center;
            color:white
          }
          .animetitle{
            font-size:22px;
            display:inline;
            margin-right:10px
          }
          .webtitle{
            max-width:170px;
            margin:-5px 10px -5px 10px;
            cursor:pointer;
            opacity:.9;
            min-width:165px
          }
          .webtitle:hover{
            opacity:1
          }
          .eptitle{
            padding:5px;
            text-align:left;
            padding-left:10px;
            font-size:16px;
            margin-top:-30px;
            border-radius:4px 4px 0 0
          }
          .altsourcenotif{
            opacity:.5;
            margin-left:7px;
            border-left:2px solid #515151;
            padding-left:7px
          }
          .proxybtn{
            color:gray
          }
          .dlbutton,.autoplaybutton,.proxybtn,.lightbtn{
            margin-right:8px
          }
          #eptitle{
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            max-width:calc(100% - 145px);
            opacity:.9
          }
          #trackingTitle{
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            padding:5px 20px
          }
          #toprightplayer{
            float:right;
            margin-right:7px;
            text-decoration:none;
            margin-top:-24px;
            font-size:17px
          }
          #tips{
            font-size:12px;
            color:rgba(255,255,255,.5);
            display:none;
            text-align:left;
            background-color:rgba(255,200,0,.1);
            max-width:380px;
            text-align:left;
            padding:3px;
            margin-left:calc(50% - 190px);
            margin-top:20px;
            margin-bottom:-55px;
            text-align:center
          }
          #tips a{
            opacity:.6;
            text-decoration:none
          }
          #flexbottom{
            display:none;
            border-top:1px solid rgba(255,255,255,.2);
            padding:10px 0 15px 0;
            margin-bottom:-10px;
            opacity:.85
          }
          #filterplace,#seasonfilter{
            opacity:.85
          }
          #filterplace .halfleft,#seasonfilter .halfleft{
            flex:0 0 50%
          }
          #seasonleft{
            flex:0 0 45%
          }
          #yearright{
            flex:0 0 40%
          }
          #seasonalgobtn{
            margin-top:23px;
            background-color:#2a2f39;
            padding:3px 0;
            margin-left:-2px;
            cursor:pointer;
            text-align:center;
            border-radius:4px;
            border:1px solid #42494f;
            color:#9edbff
          }
          select{
            -moz-appearance:none;
            -webkit-appearance:none;
            appearance:none;
            border:none;
            outline:none;
            background-color:#333;
            color:white;
            padding:5px;
            border-radius:3px;
            font-family:'Lexend deca',sans-serif
          }
          #srcselect{
            width:140px;
            margin-right:10px;
            float:right;
            display:none
          }
          #topfilterselect{
            position:absolute;
            top:32px;
            right:15px;
            width:120px;
            height:27px
          }
          #commentrule{
            color:#e0e0e0;
            font-size:13px;
            padding:10px;
            background-color:#333;
            margin:15px 0 5px;
            display:none;
            cursor:pointer;
            border-radius:5px
          }
          #topsortselect{
            width:120px;
            height:27px
          }
          #filterplace select,#seasonfilter select{
            width:calc(100% - 10px)
          }
          #manualTrackingSelect{
            width:120px;
            display:none;
            margin:-10px 0 10px calc(50% - 60px)
          }
          #streamtype{
            font-size:13px;
            opacity:.6;
            display:inline
          }
          #streamtypecontainer{
            margin:-9px -10px 4px 0
          }
          #bottomleft{
            flex:0 0 calc(100% - 125px)
          }
          #status,#genres{
            float:left;
            font-size:13px;
            color:rgba(255,255,255,.7)
          }
          #genres{
            margin-bottom:4px
          }
          .genresgrid{
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(100px,1fr));
            width:100%
          }
          #listplace{
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(350px,1fr));
            margin-left:20px;
            font-size:13px
          }
          .logininput{
            width:calc(100% - 6px);
            font-size:12px;
            margin-left:2px;
            background-color:rgba(0,0,0,.1);
            border:1px solid rgba(255,255,255,.1);
            padding:7px;
            margin-bottom:2px;
            margin-top:2px;
            outline:none;
            border-radius:3px
          }
          #seriestitlecontainer{
            text-align:center;
            color:#fff;
            font-size:20px;
            margin-top:-42px;
            margin-bottom:5px;
            z-index:9;
            position:relative
          }
          .flexserieslist{
            display:flex;
            margin-bottom:5px;
            border-bottom:1px solid #2d2d2d;
            padding-right:10px;
            min-height:110px;
            background:linear-gradient(90deg,rgba(255,255,255,.05) 0%,rgba(255,255,255,0) 40%);
            transition:opacity .4s ease
          }
          #seriestitle{
            background-color:#1919197a;
            padding:7px;
            max-width:790px;
            margin:0 auto;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis
          }
          .serieslabelitem{
            float:right;
            padding:0 6px;
            font-size:15px;
            margin-top:-17px
          }
          .numbering{
            text-align:center;
            font-size:23px;
            width:40px
          }
          .titleserieslist{
            margin-bottom:1px;
            margin-top:5px;
            font-size:15px;
            color:#b0b0b0
          }
          .seriestimeinfo{
            margin-top:-7px;
            font-size:13px;
            color:#b0b0b0!important
          }
          .logininput:focus{
            border:1px solid rgba(73,204,255,.521);
            border-radius:2px
          }
          .loginbtn{
            font-size:14px;
            margin:20px 0 7px 5px;
            padding:6px;
            opacity:.9
          }
          .loginbtn,.registerbtn,.changepassbtn,#manualtrackbtn,.changeuserbtn,#followbtn,#trackbtn{
            background-color:rgba(134,187,255,.17);
            color:#99d4ff;
            text-align:center;
            cursor:pointer;
            border:1px solid rgba(91,217,255,.2);
            border-radius:3px;
            outline:none
          }
          #dialogno{
            filter:grayscale(1);
            margin-right:5px
          }
          #confdialog{
            padding-bottom:15px!important;
            border:1px solid #575757!important
          }
          #confirmtext{
            margin:10px 5px;
            font-size:14px
          }
          .anitexttitle{
            color:#eae271
          }
          #showrecomendbtn{
            font-size:13px;
            padding:2px 5px 0 5px;
            display:inline;
            margin-left:8px;
            display:none;
            cursor:pointer;
            opacity:.9;
            color:#99d4ff;
            border-left:1px solid #515151;
            padding-left:8px
          }
          .typeTag{
            margin-left:5px;
            color:gray
          }
          .loadingreplacement{
            text-align:center;
            font-size:26px;
            padding:41px;
            padding-top:42px;
            color:transparent
          }
          #registerform,#changepassform,#importmalform,#premiumpanel,#simklform{
            display:none
          }
          .formsubtext{
            margin-left:10px;
            margin-bottom:10px;
            font-size:11px;
            color:#686868
          }
          #malogo{
            margin-bottom:10px;
            margin-left:calc(50% - 97px)
          }
          #simklogo{
            margin-bottom:10px;
            width:150px;
            margin-left:calc(50% - 75px)
          }
          #simklminicon{
            vertical-align:unset
          }
          #searchbutton,#searchbutton2{
            color:#8a8a8acf;
            font-size:15px;
            padding:7px;
            text-align:center;
            background-color:transparent;
            border-radius:0;
            border:none;
            margin-left:-35px;
            outline:none;
            margin-right:10px
          }
          .randombtn{
            float:left;
            font-size:17px;
            padding:1px;
            text-decoration:none!important;
            text-align:center;
            border:none;
            color:#ffffff94;
            margin-right:7px
          }
          .registerbtn{
            font-size:14px;
            margin:0 auto;
            width:100px;
            padding:6px
          }
          .changepassbtn,#manualtrackbtn,.changeuserbtn,#followbtn,#trackbtn{
            font-size:14px;
            margin:0 auto;
            width:120px;
            padding:6px;
            margin-top:7px
          }
          .changeuserbtn{
            width:140px
          }
          .usrpanelseparator{
            text-align:center;
            border-top:1px solid #ffffff40;
            margin-top:20px;
            padding-top:5px
          }
          #manualtrackbtn{
            font-size:13px
          }
          #followbtn,#trackbtn,#fillerbtn{
            display:none;
            font-size:12px;
            padding:1px 8px 1px 7px;
            width:unset;
            margin-bottom:2px;
            border-color:#323b46;
            transform:translateY(-3px);
            outline:none
          }
          #fillerbtn{
            border:1px solid #4c4c4c;
            color:#aeaeae;
            background-color:#2f2f2f;
            margin-left:5px
          }
          #trackbtn .glyphicon{
            top:1px
          }
          #highlighted{
            background-color:#222b2b
          }
          .neweptxt{
            color:yellow;
            font-size:13px
          }
          .countdowntxt{
            font-size:13px
          }
          #connectstatus{
            text-align:center
          }
          #usernametop{
            float:right;
            margin-top:-30px;
            color:white;
            margin-right:calc(50% - 500px);
            font-size:16px
          }
          #loginform .subtitleright{
            cursor:pointer
          }
          #loginform .halfleft{
            flex:0 0 70%;
            font-size:12px
          }
          #loginform{
            margin-bottom:-7px;
            display:none
          }
          #userpanel{
            display:none;
            text-align:center
          }
          #watchingstatus{
            margin-bottom:15px;
            display:block;
            margin-top:-8px;
            color:#b7b7b7
          }
          #untrackbtn{
            float:right;
            margin-top:-32px;
            color:#7fc3ff;
            cursor:pointer
          }
          #untrackbtn .glyphicon{
            color:#d44c4c
          }
          #premiumpanel{
            text-align:center
          }
          #premiumpanel .glyphicon-transfer,#premiumpanel .glyphicon-sunglasses{
            color:gray
          }
          #premiumnotice,#alretinfo,#alretinfo2{
            text-align:center;
            background-color:#323232;
            color:#d3d3d3;
            padding:10px;
            display:block;
            margin:-10px 5px 15px 5px
          }
          #iconmenu{
            font-size:30px;
            color:#7fc3ff;
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(90px,1fr))
          }
          .linkpersonal,.linkhome{
            color:#7fc3ff!important;
            text-decoration:none!important
          }
          .linkpersonal:hover,.linkhome:hover,#iconmenu .glyphicon:hover{
            opacity:.7
          }
          #menuclose,#reportclose{
            float:right;
            margin-right:1px;
            margin-left:-25px;
            margin-top:-1px;
            background-color:#333;
            padding:2px
          }
          #menuclose{
            margin-right:0;
            margin-top:-2px
          }
          #reportclose{
            margin-right:-5px;
            margin-top:-6px
          }
          .airtime{
            float:right;
            margin-top:-19px;
            cursor:pointer
          }
          #addTitle{
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            display:block;
            width:205px;
            scrollbar-width:thin
          }
          #addTitle::-webkit-scrollbar{
            height:5px;
            background-color:#2e2e2e
          }
          #addTitle::-webkit-scrollbar-thumb{
            background:#4c4c4c
          }
          .schedulelist{
            margin-left:10px;
            max-width:calc(100% - 50px);
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap
          }
          .scheduletitle{
            cursor:default;
            display:block;
            width:calc(100% - 10px);
            text-align:center;
            border-bottom:1px solid #515151;
            margin:8px 10px 7px 10px;
            font-size:16px
          }
          #scheduleinfo{
            text-align:center;
            width:100%;
            color:gray;
            margin-bottom:10px
          }
          #schedulenotice{
            margin:0 10px 15px 10px;
            background-color:#333324;
            padding:5px;
            text-align:center
          }
          #scheduletimezone{
            width:100%;
            padding-right:13px;
            text-align:right;
            margin-bottom:-25px
          }
          #animebtn{
            display:none;
            cursor:pointer;
            font-size:22px
          }
          #animepagemiddle{
            margin-top:-100px;
            padding-left:calc((100% - 1120px) / 2);
            padding-right:calc((100% - 1120px) / 2);
            min-height:calc(100vh - 270px);
            position:relative;
            z-index:1;
            display:flex
          }
          #animepagecountdown{
            color:yellow;
            margin-top:3px
          }
          .animerefbtn{
            font-size:14px;
            opacity:.8
          }
          #topcover{
            overflow:hidden;
            height:248px
          }
          #topcoverimage{
            width:100%;
            margin-top:-50%;
            opacity:.3;
            filter:blur(30px);
            -webkit-filter:blur(30px);
            min-height:100vw
          }
          #anicovercontain{
            position:relative
          }
          #maincoverimage{
            width:225px
          }
          #leftsideanimepage{
            flex:0 0 225px
          }
          #animeleftside{
            color:#ddd;
            font-size:13px;
            margin-bottom:20px
          }
          #infopanel{
            max-height:284px;
            overflow:hidden;
            margin:-10px;
            padding:10px;
            -webkit-transition:max-height .5s ease;
            -moz-transition:max-height .5s ease;
            -o-transition:max-height .5s ease;
            transition:max-height .5s ease
          }
          #scorebox{
            float:right;
            font-size:24px;
            color:#ddd;
            background-color:#191919;
            padding:1px 12px;
            margin-top:53px;
            border:1px solid #353535
          }
          #showstreambtn{
            font-size:18px;
            color:#b2dbff;
            background-color:#191919;
            padding:4px 12px;
            max-width:180px;
            cursor:pointer;
            margin-top:55px;
            float:left;
            border:1px solid #405264;
            border-radius:5px
          }
          #scorebox .glyphicon{
            font-size:20px
          }
          #iframeanime{
            width:100%;
            border:none;
            overflow:hidden;
            height:495px;
            margin-bottom:-6px
          }
          #rightsideanimepage{
            flex:1;
            padding-left:15px;
            min-width:250px;
            margin-bottom:10px;
            display:none
          }
          #panelplace{
            color:#ddd;
            margin-top:8px;
            margin-bottom:-10px;
            font-size:14px
          }
          #animepagetitle{
            font-size:30px;
            color:#e3e3e3;
            margin-top:103px
          }
          #genrelist{
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(95px,1fr));
            gap:10px;
            margin-top:70px;
            margin-bottom:5px;
            text-align:center;
            font-size:13px
          }
          .genretiles{
            background-color:rgba(0,0,0,.57);
            border-radius:3px
          }
          #seasontitle{
            text-align:center;
            width:100%;
            margin-top:5px;
            font-size:33px;
            margin-left:-45px
          }
          #openschedulebtn{
            float:right;
            background-color:#24272d;
            border:1px solid #44494d;
            padding:4px 12px;
            margin:0px 10px 0 0;
            color:#8dc5e6;
            outline:none;
            font-size:15px;
            border-radius:3px
          }
          #openschedulebtn:hover{
            background-color:#2c3033
          }
          .closebtn,.xclose{
            cursor:pointer;
            color:#d44c4c;
            float:right;
            margin-top:11px;
            margin-right:-8px;
            font-size:14px
          }
          .xclose{
            margin:-8px -5px -16px 0;
            background-color:#333;
            padding:2px;
            z-index:1
          }
          #iconmenu .glyphicon{
            flex:30px;
            cursor:pointer;
            margin-bottom:20px
          }
          #notifiaction .glyphicon{
            font-size:17px
          }
          #notifiaction,#reportform,#confdialog{
            position:fixed;
            top:130px;
            width:300px;
            left:50%;
            margin-left:-150px;
            padding:5px;
            text-align:center;
            display:none;
            color:white;
            font-size:16px;
            z-index:999;
            background-color:rgb(45,45,45);
            border:1px solid #d5d5d529;
            box-shadow:0 3px 5px #131313c7;
            border-radius:2px;
            animation-fill-mode:forwards;
            animation-duration:.2s;
            animation-timing-function:cubic-bezier(.68,-.55,.27,1.55)
          }
          #notifiaction{
            padding:10px 5px;
            background-color:rgb(55,55,55)
          }
          #reportform,#confdialog{
            top:calc(50% - 160px)
          }
          #missList{
            max-height:250px;
            font-size:13px;
            text-align:left;
            padding:10px;
            overflow:auto
          }
          #foldersvg{
            margin-bottom:-3px
          }
          #sendreportbtn{
            margin-bottom:10px;
            font-size:13px
          }
          .footer{
            width:100%;
            background-color:rgb(35,35,35);
            padding-bottom:27px;
            margin-top:30px;
            text-align:center;
            padding-top:10px;
            font-size:13px;
            color:rgb(80,80,80)
          }
          .footer a:hover{
            text-decoration:underline
          }
          .bottomtext,.leftbottom{
            color:rgb(150,150,150);
            font-size:14px;
            display:block;
            margin-bottom:10px;
            padding:0 5px 0 5px
          }
          .leftbottom a,.leftbottom a:hover{
            color:#b9b9b9
          }
          .bottomtext a,.bottomtext a:hover{
            color:rgb(150,150,150)
          }
          .leftbottom{
            text-align:left;
            width:100%;
            margin:0 auto;
            margin-bottom:-30px;
            background-color:#ffffff09;
            border:7px solid transparent;
            padding-left:calc((100% - 1270px) / 2);
            padding-right:calc((100% - 1270px) / 2);
            opacity:.7
          }
          .floatright{
            float:right
          }
          .customicon{
            display:inline-block;
            filter:grayscale(1);
            margin:0 0 0 6px;
            opacity:.7;
            margin-bottom:-2px
          }
          #playerbottomicon{
            text-align:center;
            background-color:#2b2b2b;
            padding:5px;
            margin-top:7px;
            opacity:.7
          }
          .discordicon{
            width:16px;
            height:16px;
            background-position:0 0;
            margin-bottom:0
          }
          .bitcoinicon{
            width:16px;
            height:16px;
            background-position:-51px 0;
            opacity:.9;
            margin-left:2px
          }
          .ethereumicon{
            width:16px;
            height:16px;
            background-position:-67px 0;
            opacity:.9;
            margin-left:5px
          }
          .rssicon{
            width:16px;
            height:16px;
            background-position:-34px 0;
            margin-bottom:0
          }
          .kofiicon{
            width:24px;
            height:16px;
            background-position:-86px 0;
            filter:none;
            opacity:.9;
            margin-right:-2px
          }
          .twittericon{
            width:16px;
            height:16px;
            background-position:-17px 0;
            margin-bottom:0
          }
          .searchimg{
            position:relative
          }
          .searchresult .searchimg::after{
            content:"";
            position:absolute;
            left:-1px;
            right:-1px;
            bottom:-1px;
            background:linear-gradient(0deg,#202020,#2020204a 15%,transparent 30%);
            top:0
          }
          .searchresult li:hover .searchimg::after{
            background:linear-gradient(0deg,#303030 0,transparent 25%)
          }
          .usercontrol{
            position:absolute;
            top:0;
            right:0;
            cursor:pointer;
            background-color:#393838;
            font-size:18px
          }
          .usercontrol .glyphicon{
            padding-right:10px;
            padding-left:10px
          }
          .usercontrol .glyphicon:hover{
            font-size:23px;
            padding-right:7px;
            padding-left:8px;
            margin-top:-4px
          }
          .compactitem .glyphicon-time,.usercontrol2 .glyphicon-time{
            color:#e3ab7b
          }
          .usercontrol2 .glyphicon-ok,.compactitem .glyphicon-ok{
            color:#0c0
          }
          .usercontrol .glyphicon-remove,.usercontrol2 .glyphicon-remove,.compactitem .glyphicon-remove{
            color:#ff2323
          }
          .usercontrol2 i{
            cursor:pointer;
            font-size:18px
          }
          .usercontrol2 .glyphicon{
            padding-right:10px
          }
          .usercard{
            display:none
          }
          .openregisterbtn,.openloginbtn{
            cursor:pointer;
            margin-left:10px;
            float:left
          }
          .openregisterbtn{
            float:right;
            margin-top:15px;
            margin-right:5px
          }
          .errormsg{
            background-color:rgba(255,100,100,.4);
            text-align:center;
            margin:5px;
            display:block;
            padding:5px 0 7px 0
          }
          .successmsg{
            background-color:rgba(0,238,49,.3);
            text-align:center;
            margin:5px;
            display:block;
            font-size:13px;
            padding:5px 0
          }
          .mobilemenureplace{
            display:none;
            text-align:center;
            background-color:#282d2f!important;
            margin-top:15px;
            overflow:hidden
          }
          #genresortbtn{
            margin-left:20px;
            font-size:14px;
            color:#cecece;
            display:none;
            text-align:right;
            padding-right:10px;
            padding-bottom:5px
          }
          #seasontopnav{
            display:none;
            margin-left:22px;
            font-size:14px;
            height:26px;
            color:#9cc2e3;
            position:relative
          }
          #prevseasonbtn{
            float:left;
            margin-right:8px;
            cursor:pointer
          }
          #nextseasonbtn{
            float:right;
            margin-left:10px;
            margin-right:10px;
            cursor:pointer
          }
          #donatelabel{
            float:left;
            margin-right:3px
          }
          .togglelabel{
            float:left;
            margin-right:8px
          }
          .togglelabel2{
            float:right;
            margin-left:7px;
            margin-right:5px
          }
          .switch{
            position:relative;
            display:inline-block;
            width:36px;
            height:16px;
            margin-top:2px
          }
          .switch input{
            opacity:0;
            width:0;
            height:0
          }
          .slider{
            position:absolute;
            cursor:pointer;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-color:#606060;
            -webkit-transition:.4s;
            transition:.4s
          }
          .slider:before{
            position:absolute;
            content:"";
            height:14px;
            width:14px;
            bottom:1px;
            left:2px;
            background-color:#bdbdbd;
            -webkit-transition:.4s;
            transition:.4s
          }
          input:checked + .slider{
            background-color:#2196F3
          }
          input:focus + .slider{
            box-shadow:0 0 1px #2196F3
          }
          input:checked + .slider:before{
            -webkit-transform:translateX(18px);
            -ms-transform:translateX(18px);
            transform:translateX(18px);
            background-color:#fff
          }
          .slider.round{
            border-radius:17px
          }
          .slider.round:before{
            border-radius:50%
          }
          .g-recaptcha,.cf-turnstile{
            overflow:visible;
            margin-left:calc(50% - 135px);
            margin-top:7px;
            opacity:.9;
            transform:scale(.9);
            -webkit-transform:scale(.9);
            transform-origin:0 0;
            -webkit-transform-origin:0 0
          }
          #genres a{
            color:rgba(158,209,253,.76)
          }
          #genres a:hover{
            text-decoration:underline
          }
          #editgenrebtn{
            display:none
          }
          #genres:hover #editgenrebtn{
            display:inline
          }
          .airday{
            float:left;
            font-size:13px;
            margin-left:3px;
            color:rgba(255,255,255,.7)
          }
          .infotext{
            padding:0 10px;
            font-size:12px;
            color:rgba(255,255,255,.6);
            margin-top:-5px;
            margin-bottom:5px;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap
          }
          .timetext{
            position:absolute;
            bottom:0;
            right:0;
            color:rgba(255,255,255,.95);
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            font-size:12px;
            padding:3px 5px 0 5px;
            border-radius:5px 0 0 0;
            background-color:rgba(32,32,32,.5);
            z-index:1
          }
          #animeimage{
            display:none;
            margin-top:10px;
            opacity:.8
          }
          #iframeplayer,#iframeplayer2{
            display:block;
            margin-bottom:5px;
            height:619px;
            width:100%;
            border:none;
            overflow:hidden;
            background-color:#3a3a3a
          }
          .released{
            font-size:13px;
            color:#a8a8a8!important;
            text-align:center;
            margin-bottom:5px
          }
          #readmorebtn{
            margin-left:20px;
            width:calc(100% - 30px);
            height:22px;
            padding:2px;
            opacity:.6;
            color:white;
            background-color:rgb(33,33,33);
            outline:none
          }
          #expandbtn,#expandbtn2{
            height:22px;
            margin-top:5px;
            margin-bottom:-5px;
            padding:2px;
            opacity:.6;
            color:white;
            background-color:transparent;
            outline:none
          }
          #resultAlt{
            display:none
          }
          .playerpage{
            position:relative;
            margin:0 auto;
            font-size:16px;
            color:white;
            width:1100px;
            box-shadow:none;
            margin-top:60px;
            background-color:rgb(35,35,35);
            border-radius:4px;
            transition:all .5s ease-in-out;
            transition-property:margin,height,width
          }
          #switch{
            display:none;
            cursor:pointer;
            text-decoration:none;
            margin-left:10px
          }
          #lowerplayerpage{
            padding:15px;
            margin-top:-5px;
            padding-bottom:0
          }
          #malusername{
            margin-bottom:4px
          }
          #reportinput{
            margin:10px 0 4px 0;
            max-width:271px;
            height:65px;
            background-color:#262626
          }
          #rememberme,#nodub,#nodub2,#skipwatched,#skipwatched2{
            margin-left:5px;
            opacity:.7
          }
          #azsearch{
            height:31px;
            max-width:100%;
            width:270px;
            margin-left:0;
            margin-top:7px
          }
          .rememberlabel{
            opacity:.7;
            margin-bottom:0
          }
          #navtab{
            margin:15px 10px 15px 20px
          }
          .nav-tabs li a{
            cursor:pointer;
            background-color:#282828;
            color:#87b4ce;
            font-size:17px;
            border-radius:0
          }
          .nav-tabs li a:hover{
            color:white;
            background-color:#2f2f2f
          }
          .nav>li>a{
            position:relative;
            display:block;
            padding:5px 14px;
            margin-right:2px
          }
          .nav-tabs>li>a{
            line-height:1.42857143;
            border-bottom:1px solid #606060
          }
          .nav-tabs .active a{
            cursor:default;
            background-color:#3e3e3e!important;
            color:white;
            margin-top:-1px;
            border-top:1px solid transparent;
            border-bottom:1px solid #cdcdcd
          }
          .nav-tabs{
            border-bottom:1px solid rgba(255,255,255,.15);
            min-width:350px
          }
          .mainsource{
            position:relative;
            background-color:#372e2e
          }
          .mainsource::after{
            content:"H";
            position:absolute;
            top:0;
            right:0;
            background-color:rgba(238,69,69,.8);
            padding:2px 8px 2px 8px;
            font-size:11px
          }
          .schedulemenucontainer{
            position:fixed!important;
            height:calc(100% - 50px);
            overflow-y:auto!important
          }
          @media screen and (max-width:1700px){
            #mascot{
                display:none
            }
          }
          @media screen and (max-width:1400px){
            .playerpage,#disquscomment,#flexstreambottom,#topmid,#belowbox{
                width:940px
            }
            #playercontainer{
                height:529px;
                min-height:50px
            }
            #iframeplayer,#iframeplayer2{
                height:529px;
                min-height:260px
            }
          }
          @media screen and (max-width:1280px){
            .middle{
                width:970px
            }
            .leftside{
                flex:0 0 690px
            }
            #backicon{
                margin-left:20px
            }
            #backiconhome{
                margin-left:calc(50% - 490px)
            }
          }
          @media screen and (max-width:1130px){
            #usernametop{
                margin-right:50px
            }
            #menumobilebtn2{
                margin-top:-35px;
                margin-right:5px
            }
            .reportText{
                display:none
            }
            #sharebtn{
                color:#76a2c6;
                font-size:13px
            }
            #openreport,#syncbtn,#reloadbtn,#sandboxbtn{
                font-size:12px;
                color:#76a2c6;
                margin-right:10px
            }
          }
          @media screen and (max-width:1000px){
            #disqus_thread{
                width:100%;
                margin-left:0
            }
            #changetext{
                display:none
            }
            #animebtn2{
                background-color:#2d2d2d;
                padding:2px 7px
            }
            .lightbtn{
                display:none
            }
            #topmid{
                margin-bottom:0;
                margin-top:1px;
                width:unset;
                background-color:#2f2f2f;
                border-radius:0;
                padding:0
            }
            #playerleftsidebar::-webkit-scrollbar{
                width:5px;
                background-color:transparent
            }
            .nav>li>a{
                padding:5px 8px
            }
            #fullresultbtn{
                grid-template-columns:repeat(auto-fit,minmax(55px,1fr));
                gap:2px;
                padding:7px 3px 0 3px
            }
            #status,#genres,.epsavailable{
                font-size:12px
            }
            #fullresultbtn a{
                margin-bottom:3px;
                font-size:12px;
                padding:2px 0;
                color:#7ea7bf
            }
            #topfilterselect,#topsortselect{
                width:95px
            }
            #featuredtitle{
                font-size:15px
            }
            #featuredtext{
                font-size:12px;
                margin:10px 0;
                height:72px
            }
            #screenshotbtn,#widescreenbtn{
                display:none
            }
            .sanimepage,.sotherpage{
                box-shadow:0 0 80px 10px
            }
            .sanimepage .quickresult{
                background-color:#202020;
                opacity:1
            }
            #playertopmenu{
                background-color:rgb(30,30,30)
            }
            #addTitle{
                width:unset;
                color:#ffb680
            }
            .sanimepage #fullresultbtn,.sotherpage #fullresultbtn{
                opacity:1;
                background-color:#1e1e1e;
                padding:5px
            }
            #iframeplayer,#iframeplayer2{
                height:56.3vw
            }
            #playercontainer{
                height:56.3vw
            }
            .compactitem{
                font-size:14px
            }
            .timeCompact{
                margin-top:-20px;
                font-size:13px;
                margin-right:10px
            }
            .btn-primary{
                background-color:#38678e
            }
            body,html{
                background-color:#1f1f1f
            }
            .subpart{
                background-color:#263239
            }
            #streamtypecontainer{
                margin:-5px -10px 5px 0
            }
            #showcommentbtn{
                background-color:rgb(52,61,72);
                border:1px solid #334f5b;
                border-radius:unset;
                width:100%;
                height:33px;
                margin:0
            }
            #nextbtn,.dlbutton,.proxybtn,.autoplaybutton,.lightbtn{
                top:4px
            }
            #userconfirmcheck{
                display:none
            }
            #lastwatch{
                bottom:0;
                right:100%;
                max-width:100%;
                width:100%
            }
            .leftbottom{
                padding-right:10px
            }
            #btcaddress{
                display:none
            }
            #notifiaction{
                top:110px
            }
            .playerpage{
                width:100%;
                min-height:calc(100vh - 100px);
                margin-top:33px;
                border-radius:unset;
                background-color:transparent!important
            }
            #disquscomment,#flexstreambottom,#disquscommentnew,#belowbox{
                width:100%;
                background-color:transparent;
                margin:0;
                padding:5px 10px
            }
            #flexstreambottom,#anibottomplace{
                display:block;
                padding:0
            }
            #anicommentplace{
                background-color:transparent;
                margin:20px 0
            }
            .playbutton,.playbuttonextra{
                padding:3px;
                font-size:14px
            }
            #epslistplace{
                gap:3px;
                grid-template-columns:repeat(auto-fill,minmax(44px,1fr));
                max-height:122px
            }
            #belowcomment{
                padding:0 10px
            }
            #streambottomright{
                margin-top:10px;
                margin-bottom:15px;
                padding:0
            }
            #anibottomright{
                margin-top:20px;
                margin-bottom:7px;
                padding:0
            }
            .tooltiptext,#openschedulebtn{
                display:none
            }
            .eptitle{
                border-radius:unset;
                padding:9px;
                font-size:14px
            }
            .footer{
                padding-left:20px;
                padding-right:20px;
                font-size:11px
            }
            .bottomtext{
                font-size:12px
            }
            .webtitle{
                max-width:150px;
                margin-top:-1px;
                margin-bottom:-4px;
                min-width:50px
            }
            .resultimg{
                min-height:150px!important;
                height:unset
            }
            #menuclose{
                display:none
            }
            .xclose{
                margin:-1px 0 -15px 0;
                background-color:#404040
            }
            #q,#searchbutton,#usernametop,#backtotopbtn{
                display:none
            }
            #q,#searchbutton{
                margin-top:-2px
            }
            #q::-webkit-search-cancel-button,#azsearch::-webkit-search-cancel-button{
                display:unset
            }
            #lowerplayerpage{
                padding:10px
            }
            #tips{
                display:none!important
            }
            .animetitle{
                font-size:17px;
                margin-top:15px
            }
            #animebtn{
                font-size:18px
            }
            #epslistplace{
                width:100%;
                margin-top:8px
            }
            .searchbar{
                max-width:40%;
                margin-left:-20px
            }
            .topmenubtn{
                display:none
            }
            #searchbox{
                float:left;
                width:calc(100% - 200px)
            }
            #iconmenu{
                grid-template-columns:repeat(auto-fill,minmax(95px,1fr))
            }
            #streamtype{
                margin-top:-5px;
                margin-bottom:-17px;
                font-size:12px
            }
            #showrecomendbtn{
                font-size:12px;
                opacity:.7
            }
            .middle{
                width:100%;
                min-height:calc(100vh - 200px);
                color:white
            }
            .rightcard,.rightcardCenter{
                background-color:rgb(34,34,34)
            }
            .leftside{
                padding-left:8px
            }
            .floattopsearch{
                padding:10px 0 10px 0
            }
            #leftsideanimepage{
                width:100%
            }
            #animepagemiddle{
                display:block;
                margin-top:-157px;
                min-height:calc(100vh - 280px)
            }
            #animepagetitle{
                margin-top:10px;
                font-size:20px;
                display:none
            }
            #anicovercontain{
                width:150px;
                margin:0 auto
            }
            #maincoverimage{
                width:150px;
                margin-left:13px;
                min-height:200px;
                border:1px solid #626262;
                border-radius:4px
            }
            #animeleftside .rightcard{
                background-color:transparent;
                margin-bottom:-20px
            }
            #panelplace{
                font-size:12px;
                min-height:100px;
                margin-bottom:-5px
            }
            #rightsideanimepage{
                padding-right:10px;
                padding-left:10px;
                padding-bottom:5px
            }
            #showstreambtn{
                font-size:14px;
                color:#9bc6ec;
                background-color:#282828;
                max-width:unset;
                text-align:center;
                border-radius:3px;
                width:90px;
                margin:-15px 0 10px 165px;
                float:none;
                position:absolute;
                border:1px solid #404040;
                top:185px;
                left:10px
            }
            #srcselect{
                width:100px
            }
            #scorebox{
                margin-top:10px;
                float:none;
                border-top:none;
                border-left:none
            }
            #infopanel{
                max-height:0;
                margin:unset;
                padding:unset
            }
            #iframeanime{
                height:calc(56vw - 15px)
            }
            #flexcontainer{
                display:block
            }
            #navtab{
                overflow-x:auto
            }
            #foldersvg{
                margin-bottom:-5px
            }
            .name{
                font-size:12px
            }
            .infouserlist{
                margin-right:5px
            }
            .rightside{
                max-width:100%;
                width:420px;
                margin-left:100%;
                position:fixed;
                top:47px;
                z-index:9;
                background-color:#1a1a1a;
                padding:10px;
                height:calc(100% - 47px);
                overflow-y:scroll
            }
            .questionFAQ{
                padding:20px 20px 0 30px
            }
            .answerFAQ{
                padding:0 20px 0 30px;
                font-size:13px
            }
            .subpartFAQ{
                margin:20px 20px 0 30px
            }
            .playersidebar{
                width:420px;
                margin-left:100%;
                max-width:100%;
                background-color:rgb(30,30,30)
            }
            #playertopmenu,.absolutee{
                position:fixed
            }
            #playerleftsidebar{
                max-width:100%;
                width:450px;
                border:none
            }
            .nav-tabs li a{
                font-size:14px;
                padding-top:6px
            }
            .mobilemenureplace{
                display:block
            }
            .mobilemenureplace a{
                display:inline!important
            }
            .righttitle{
                width:90%
            }
            #menumobilebtn,#showsearchbtn{
                display:block
            }
            #menumobilebtn2{
                margin-top:-2px;
                margin-right:15px
            }
            #homeicon,#homeicon2,#backiconhome,#backicon{
                margin-left:10px;
                margin-right:0;
                margin-top:2px
            }
            .searchresult,.items{
                grid-template-columns:repeat(auto-fill,minmax(110px,1fr))!important
            }
            .quickresult .details{
                text-align:left;
                margin-left:55px
            }
            .quickresult .name{
                font-size:13px
            }
            .quickresult .searchimg{
                float:left;
                width:45px
            }
            .quickresult .infotext{
                font-size:11px!important
            }
            .resultimg2{
                min-height:unset!important;
                max-width:unset
            }
            #seriestitle{
                font-size:16px;
                margin-top:-46px
            }
            #seriestitlecontainer{
                margin-top:10px;
                margin-bottom:5px
            }
            .titleserieslist{
                font-size:13px
            }
            .numbering{
                font-size:18px;
                width:28px;
                padding-top:3px
            }
            .serieslabelitem{
                font-size:12px;
                padding:0 5px
            }
          }

          body {
          margin: 0;
          }

          nav {
          display: block;
          }
          a:active,
          a:hover {
          outline: 0;
          }
          b {
          font-weight: 700;
          }
          img {
          border: 0;
          }
          button,
          input {
          color: inherit;
          font: inherit;
          margin: 0;
          }
          button {
          cursor: pointer;
          overflow: visible;
          text-transform: none;
          }
          button[disabled],
          html input[disabled] {
          cursor: default;
          }
          th {
          padding: 0;
          }
          .glyphicon {
          position: relative;
          top: 2px;
          display: inline-block;
          font-family: "Glyphicons Halflings";
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          -webkit-font-smoothing: auto;
          -moz-osx-font-smoothing: auto;
          }
          .glyphicon-music:before {
          content: "\e002";
          }
          .glyphicon-search:before {
          content: "\e003";
          }
          .glyphicon-user:before {
          content: "\e008";
          }
          .glyphicon-th:before {
          content: "\e011";
          }
          .glyphicon-th-list:before {
          content: "\e012";
          }
          .glyphicon-ok:before {
          content: "\e013";
          }
          .glyphicon-remove:before {
          content: "\e014";
          }
          .glyphicon-off:before {
          content: "\e017";
          }
          .glyphicon-home:before {
          content: "\e021";
          }
          .glyphicon-time:before {
          content: "\e023";
          }
          .glyphicon-download-alt:before {
          content: "\e025";
          }
          .glyphicon-download:before {
          content: "\e026";
          }
          .glyphicon-list-alt:before {
          content: "\e032";
          }
          .glyphicon-lock:before {
          content: "\e033";
          }
          .glyphicon-flag:before {
          content: "\e034";
          }
          .glyphicon-tag:before {
          content: "\e041";
          }
          .glyphicon-font:before {
          content: "\e047";
          }
          .glyphicon-text-width:before {
          content: "\e051";
          }
          .glyphicon-align-center:before {
          content: "\e053";
          }
          .glyphicon-list:before {
          content: "\e056";
          }
          .glyphicon-share:before {
          content: "\e066";
          }
          .glyphicon-check:before {
          content: "\e067";
          }
          .glyphicon-forward:before {
          content: "\e075";
          }
          .glyphicon-remove-sign:before {
          content: "\e083";
          }
          .glyphicon-ok-sign:before {
          content: "\e084";
          }
          .glyphicon-info-sign:before {
          content: "\e086";
          }
          .glyphicon-share-alt:before {
          content: "\e095";
          }
          .glyphicon-eye-open:before {
          content: "\e105";
          }
          .glyphicon-comment:before {
          content: "\e111";
          }
          .glyphicon-link:before {
          content: "\e144";
          }
          .glyphicon-flash:before {
          content: "\e162";
          }
          .glyphicon-open:before {
          content: "\e167";
          }
          .glyphicon-transfer:before {
          content: "\e178";
          }
          .glyphicon-sd-video:before {
          content: "\e186";
          }
          .glyphicon-hd-video:before {
          content: "\e187";
          }
          .glyphicon-cd:before {
          content: "\e201";
          }
          .glyphicon-king:before {
          content: "\e211";
          }
          .glyphicon-queen:before {
          content: "\e212";
          }
          .glyphicon-apple:before {
          content: "\f8ff";
          }
          .glyphicon-scale:before {
          content: "\e230";
          }
          .glyphicon-text-color:before {
          content: "\e242";
          }
          .glyphicon-text-background:before {
          content: "\e243";
          }
          .glyphicon-menu-down:before {
          content: "\e259";
          }
          * {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          }
          :after,
          :before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          }
          html {
          font-size: 10px;
          -webkit-tap-highlight-color: transparent;
          }
          button,
          input {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          }
          a:focus {
          outline: 5px auto -webkit-focus-ring-color;
          outline-offset: -2px;
          }
          img {
          vertical-align: middle;
          }
          p {
          margin: 0 0 10px;
          }
          .mark,
          mark {
          padding: 0.2em;
          background-color: #fcf8e3;
          }
          ul {
          margin-top: 0;
          margin-bottom: 10px;
          }
          ul ul {
          margin-bottom: 0;
          }
          th {
          text-align: left;
          }
          label {
          display: inline-block;
          max-width: 100%;
          margin-bottom: 5px;
          }
          input[type="search"] {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          }
          input[type="checkbox"],
          input[type="radio"] {
          margin: 4px 0 0;
          line-height: normal;
          }
          input[type="checkbox"][disabled],
          input[type="radio"][disabled] {
          cursor: not-allowed;
          }
          input[type="file"] {
          display: block;
          }
          input[type="range"] {
          display: block;
          width: 100%;
          }
          input[type="checkbox"]:focus,
          input[type="file"]:focus,
          input[type="radio"]:focus {
          outline: 5px auto -webkit-focus-ring-color;
          outline-offset: -2px;
          }
          .form-control {
          display: block;
          width: 100%;
          height: 34px;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 1.42857143;
          }
          .form-control::-moz-placeholder {
          color: #999;
          opacity: 1;
          }
          .form-control:-ms-input-placeholder {
          color: #999;
          }
          .form-control::-webkit-input-placeholder {
          color: #999;
          }
          .form-control::-ms-expand {
          background-color: transparent;
          border: 0;
          }
          .form-control[disabled],
          .form-control[readonly] {
          background-color: #eee;
          opacity: 1;
          }
          .form-control[disabled] {
          cursor: not-allowed;
          }
          .btn {
          display: inline-block;
          margin-bottom: 0;
          font-weight: 400;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          -ms-touch-action: manipulation;
          touch-action: manipulation;
          cursor: pointer;
          background-image: none;
          border: 1px solid transparent;
          padding: 6px 4px;
          font-size: 14px;
          line-height: 1.42857143;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          }
          .btn.active:focus,
          .btn:active:focus,
          .btn:focus {
          outline: 0;
          }
          .btn:focus,
          .btn:hover {
          color: #333;
          text-decoration: none;
          }
          .btn.active,
          .btn:active {
          background-image: none;
          outline: 0;
          -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
          }
          .btn[disabled] {
          cursor: not-allowed;
          opacity: 0.65;
          -webkit-box-shadow: none;
          box-shadow: none;
          }
          .btn-info {
          color: #fff;
          background-color: #5bc0de;
          border-color: #46b8da;
          }
          .btn-info:focus {
          color: #fff;
          background-color: #31b0d5;
          border-color: #1b6d85;
          }
          .btn-info:hover {
          color: #fff;
          background-color: #31b0d5;
          border-color: #269abc;
          }
          .btn-info.active,
          .btn-info:active {
          color: #fff;
          background-color: #31b0d5;
          background-image: none;
          border-color: #269abc;
          }
          .btn-info.active:focus,
          .btn-info.active:hover,
          .btn-info:active:focus,
          .btn-info:active:hover {
          color: #fff;
          background-color: #269abc;
          border-color: #1b6d85;
          }
          .btn-info[disabled]:focus,
          .btn-info[disabled]:hover {
          background-color: #5bc0de;
          border-color: #46b8da;
          }
          .btn-link {
          font-weight: 400;
          color: #337ab7;
          border-radius: 0;
          }
          .btn-link,
          .btn-link.active,
          .btn-link:active,
          .btn-link[disabled] {
          background-color: transparent;
          -webkit-box-shadow: none;
          box-shadow: none;
          }
          .btn-link,
          .btn-link:active,
          .btn-link:focus,
          .btn-link:hover {
          border-color: transparent;
          }
          .btn-link:focus,
          .btn-link:hover {
          color: #23527c;
          text-decoration: underline;
          background-color: transparent;
          }
          .btn-link[disabled]:focus,
          .btn-link[disabled]:hover {
          color: #777;
          text-decoration: none;
          }
          .btn-lg {
          padding: 10px 16px;
          font-size: 18px;
          line-height: 1.3333333;
          border-radius: 6px;
          }
          .btn-sm {
          padding: 5px 10px;
          font-size: 12px;
          line-height: 1.5;
          border-radius: 3px;
          }
          .btn-block {
          display: block;
          width: 100%;
          }
          .btn-block + .btn-block {
          margin-top: 5px;
          }
          input[type="button"].btn-block,
          input[type="reset"].btn-block,
          input[type="submit"].btn-block {
          width: 100%;
          }
          .open > a {
          outline: 0;
          }
          [data-toggle="buttons"] > .btn input[type="checkbox"],
          [data-toggle="buttons"] > .btn input[type="radio"] {
          position: absolute;
          clip: rect(0, 0, 0, 0);
          pointer-events: none;
          }
          .nav {
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
          }
          .nav > li {
          position: relative;
          display: block;
          }
          .nav .open > a,
          .nav .open > a:focus,
          .nav .open > a:hover {
          background-color: #eee;
          border-color: #337ab7;
          }
          .nav > li > a > img {
          max-width: none;
          }
          .nav-tabs {
          border-bottom: 1px solid #ddd;
          }
          .nav-tabs > li {
          float: left;
          }
          .tab-content > .active {
          display: block;
          }
          .label {
          display: inline;
          padding: 0.2em 0.6em 0.3em;
          font-size: 75%;
          font-weight: 700;
          line-height: 1;
          color: #fff;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: 0.25em;
          }
          a.label:focus,
          a.label:hover {
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          }
          .label:empty {
          display: none;
          }
          .btn .label {
          position: relative;
          top: -1px;
          }
          .nav:after,
          .nav:before {
          display: table;
          content: " ";
          }
          .nav:after {
          clear: both;
          }
          .hidden {
          display: none !important;
          }
          .btn-success {
          color: #fff;
          background-color: #438643;
          border-color: #346834;
          }
          .btn-success.focus,
          .btn-success:focus {
          color: #fff;
          background-color: #449d44;
          border-color: #255625;
          }
          .btn-success:hover {
          color: #fff;
          background-color: #317031;
          border-color: #2a5a2a;
          }
          .btn-success.active,
          .btn-success:active {
          color: #fff;
          background-color: #2c582c;
          background-image: none;
          border-color: #204720;
          }
          .btn-danger {
          color: #fff;
          background-color: #d9534f;
          border-color: #d43f3a;
          }
          .btn-danger.focus,
          .btn-danger:focus {
          color: #fff;
          background-color: #c9302c;
          border-color: #761c19;
          }
          .btn-danger:hover {
          color: #fff;
          background-color: #c9302c;
          border-color: #ac2925;
          }
          .btn-danger.active,
          .btn-danger:active {
          color: #fff;
          background-color: #c9302c;
          background-image: none;
          border-color: #ac2925;
          }
          .btn-danger.active.focus,
          .btn-danger.active:focus,
          .btn-danger.active:hover,
          .btn-danger:active.focus,
          .btn-danger:active:focus,
          .btn-danger:active:hover,
          .focus {
          color: #fff;
          background-color: #ac2925;
          border-color: #761c19;
          }
          .btn-danger.disabled.focus,
          .btn-danger.disabled:focus,
          .btn-danger.disabled:hover,
          .btn-danger[disabled].focus,
          .btn-danger[disabled]:focus,
          .btn-danger[disabled]:hover,
          fieldset[disabled] .btn-danger:focus,
          fieldset[disabled] .btn-danger:hover,
          fieldset[disabled].btn-danger.focus {
          background-color: #d9534f;
          border-color: #d43f3a;
          }
          .btn-danger .badge {
          color: #d9534f;
          background-color: #fff;
          }
          .btn-primary {
          color: #fff;
          background-color: #3d698c;
          border-color: #28455e;
          }
          .btn-primary:focus {
          color: #fff;
          background-color: #3c709c;
          border-color: #19405f;
          }
          .btn-primary:hover {
          color: #fff;
          background-color: #26435b;
          border-color: #1d3346;
          }
          .btn-primary.active,
          .btn-primary:active {
          color: #fff;
          background-color: #286090;
          background-image: none;
          border-color: #204d74;
          }
          .btn-primary.active:focus,
          .btn-primary.active:hover,
          .btn-primary:active:focus,
          .btn-primary:active:hover {
          color: #fff;
          background-color: #1f4260;
          border-color: #132a3e;
          }
          a:hover {
          color: #d9eeff;
          text-decoration: none;
          }
          a {
          background-color: transparent;
          color: #a7ccea;
          text-decoration: none;
          }
          img {
          image-rendering: -webkit-optimize-contrast;
          }
          .glyphicon-sunglasses:before {
          content: "\e240";
          }
          .glyphicon-transfer:before {
          content: "\e178";
          }
          .glyphicon-random:before {
          content: "\e110";
          }
          .glyphicon-menu-hamburger:before {
          content: "\e236";
          }
          .glyphicon-menu-up:before {
          content: "\e260";
          }
          .glyphicon-time:before {
          content: "\e023";
          }
          .glyphicon-save:before {
          content: "\e166";
          }
          .glyphicon-arrow-left:before {
          content: "\e091";
          }
          .glyphicon-star:before {
          content: "\e006";
          }
          .glyphicon-wrench:before {
          content: "\e136";
          }
          .glyphicon-subtitles:before {
          content: "\e188";
          }
          .glyphicon-floppy-save:before {
          content: "\e175";
          }
          .glyphicon-question-sign:before {
          content: "\e085";
          }
          .glyphicon-exclamation-sign:before {
          content: "\e101";
          }
          .glyphicon-play:before {
          content: "\e072";
          }
          .glyphicon-chevron-left:before {
          content: "\e079";
          }
          .glyphicon-repeat:before {
          content: "\e030";
          }
          .glyphicon-calendar:before {
          content: "\e109";
          }
          .glyphicon-chevron-right:before {
          content: "\e080";
          }
          .glyphicon-bell:before {
          content: "\e123";
          }
          .glyphicon-plus:before {
          content: "\002b";
          }
          .glyphicon-cog:before {
          content: "\e019";
          }
          .glyphicon-camera:before {
          content: "\e046";
          }
          .glyphicon-refresh:before {
          content: "\e031";
          }
          .glyphicon-pencil:before {
          content: "\270f";
          }
          .glyphicon-fullscreen:before {
          content: "\e140";
          }
          .glyphicon-stats:before {
          content: "\e185";
          }
          .glyphicon-globe:before {
          content: "\e135";
          }
          .glyphicon-bullhorn:before {
          content: "\e122";
          }
          .glyphicon-stats {
          transform: translateY(-1px);
          }
          @keyframes notifin {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
          }
          @keyframes notifout {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-20px);
            opacity: 0;
          }
          }
          @keyframes moveout2 {
          from {
            transform: translateX(-350px);
          }
          to {
            transform: translateX(0);
          }
          }
          @keyframes movein2 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-350px);
          }
          }
          @keyframes moveout2mobile {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
          }
          @keyframes movein2mobile {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
          }
          @keyframes moveout2recomend {
          from {
            transform: translateX(370px);
          }
          to {
            transform: translateX(0);
          }
          }
          @keyframes movein2recomend {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(370px);
          }
          }
          @keyframes moveout2mobilerecomend {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
          }
          @keyframes movein2mobilerecomend {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
          }
          @keyframes lastwatchspawn {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(45px);
          }
          }
          @keyframes lastwatchout {
          from {
            transform: translateX(370px);
          }
          to {
            transform: translateX(45px);
          }
          }
          @keyframes lastwatchin {
          from {
            transform: translateX(45px);
          }
          to {
            transform: translateX(370px);
          }
          }
          @keyframes lastwatchoutmobile {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(35px);
          }
          }
          @keyframes lastwatchinmobile {
          from {
            transform: translateX(35px);
          }
          to {
            transform: translateX(100%);
          }
          }
          @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
          }
          .spinner {
          animation: rotator 1.4s linear infinite;
          margin-top: 20px;
          }
          @keyframes rotator {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(270deg);
          }
          }
          .path {
          stroke-dasharray: 187;
          stroke-dashoffset: 0;
          stroke: #98bfff;
          transform-origin: center;
          animation: dash 1.4s ease-in-out infinite;
          }
          @keyframes dash {
          0% {
            stroke-dashoffset: 187;
          }
          50% {
            stroke-dashoffset: 46.75;
            transform: rotate(135deg);
          }
          100% {
            stroke-dashoffset: 187;
            transform: rotate(450deg);
          }
          }
          @keyframes zoomout {
          from {
            transform: scale(0.94);
          }
          to {
            transform: scale(1);
          }
          }
          #loadcontainer {
          position: fixed;
          top: 0;
          z-index: 22;
          width: 100%;
          overflow: hidden;
          display: none;
          }
          #loadcontainer2 {
          margin-top: -2px;
          overflow: hidden;
          display: none;
          }
          .loadindicator {
          height: 2px;
          background-color: #43caff;
          position: relative;
          animation-name: infiniteload;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          }
          @keyframes infiniteload {
          0% {
            left: -100%;
            width: 100%;
          }
          50% {
            left: 40%;
            width: 45%;
          }
          100% {
            left: calc(100% + 35%);
            width: 35%;
          }
          }
          #homeicon,
          #homeicon2,
          #backiconhome,
          #backicon {
          float: left;
          margin-top: 5px;
          cursor: pointer;
          margin-left: calc(50% - 550px);
          font-size: 19px;
          margin-right: 10px;
          color: #b7b7b7;
          }
          #homeicon:hover,
          #homeicon2:hover,
          #backiconhome:hover,
          #backicon:hover {
          color: white;
          }
          #homeicon {
          margin-left: 0;
          }
          #backiconhome {
          margin-left: calc(50% - 620px);
          }
          #personalisttitle {
          text-align: center;
          font-size: 17px;
          }
          .topmenubtn {
          margin-left: 5px;
          margin-right: 5px;
          color: #b7b7b7;
          padding-top: 10px;
          display: inline;
          font-size: 15px;
          text-decoration: none;
          padding-bottom: 15px;
          cursor: pointer;
          }
          .topmenubtn:hover {
          color: white;
          }
          .topmenubtn .glyphicon {
          margin-right: 8px;
          }
          #q::-webkit-search-cancel-button,
          #azsearch::-webkit-search-cancel-button {
          display: none;
          }
          #q,
          #azsearch {
          color: white !important;
          background-color: rgba(0, 0, 0, 0.2) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          text-transform: capitalize;
          }
          #q:focus,
          #azsearch:focus {
          border-radius: 3px;
          }
          .form-control:focus,
          .manualEditInput:focus {
          border: 1px solid rgba(73, 203, 255, 0.521) !important;
          outline: 0;
          }
          #epslistplace {
          margin-top: 5px;
          max-height: 140px;
          margin-bottom: 10px;
          overflow-y: auto;
          display: none;
          opacity: 0.9;
          gap: 4px;
          grid-template-columns: repeat(auto-fill, minmax(47px, 1fr));
          }
          #loadmorebtn,
          .loadmorebtn {
          grid-column: span 4 / auto;
          }
          .playbtn {
          padding: 6px 0;
          }
          #notice {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          }
          #flexstreambottom {
          width: 1100px;
          margin: 0 auto;
          display: flex;
          transition: all 0.5s ease-in-out;
          }
          #belowbox {
          width: 1100px;
          margin: 0 auto;
          transition: all 0.5s ease-in-out;
          display: none;
          overflow: hidden;
          }
          #anibottomplace {
          display: flex;
          }
          #anicommentplace {
          margin-top: 20px;
          }
          #streambottomright,
          #anibottomright {
          flex: 0 315px;
          padding-left: 15px;
          margin-top: 25px;
          display: none;
          margin-bottom: 20px;
          }
          #disquscomment,
          #disquscommentnew {
          display: none;
          text-align: center;
          opacity: 0.9;
          width: 1100px;
          margin: 25px auto 15px auto;
          background-color: rgb(35, 35, 35);
          padding: 5px 15px;
          border-radius: 3px;
          transition: all 0.5s ease-in-out;
          }
          #disquscommentnew {
          width: unset;
          }
          #disqus_thread {
          width: calc(100% - 10px);
          margin-left: 5px;
          }
          #showcommentbtn {
          width: 280px;
          height: 35px;
          color: rgba(255, 255, 255, 0.9);
          background-color: rgb(53 61 72);
          border: 1px solid #4b7283;
          border-radius: 3px;
          font-size: 15px;
          margin: 10px;
          outline: none;
          }
          .rating {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #171717b3;
          padding: 0 5px 2px 7px;
          font-size: 12px;
          color: white;
          border-radius: 0 0 5px 0;
          }
          .rating .glyphicon {
          color: #ffcb00c7;
          }
          #recomendedlist {
          margin-right: 10px;
          margin-bottom: 15px;
          padding-top: 55px;
          }
          #recomendedlist .resultimg {
          height: unset !important;
          min-height: 190px;
          }
          #gconnectbtn {
          margin-bottom: 0;
          width: 100%;
          text-align: center;
          }
          #gconnectbtnimg {
          cursor: pointer;
          transition: 0.2s ease;
          }
          #gconnectbtnimg:hover {
          box-shadow: 0 0 3px 2px rgba(66, 133, 244, 0.3);
          }
          #moreinfobtn {
          float: right;
          margin-top: 17px;
          margin-right: 20px;
          background-color: #252729;
          padding: 5px 10px;
          font-size: 12px;
          cursor: pointer;
          border-radius: 3px;
          }
          .loadmoresearch,
          .loadmoresearch2,
          .recomendedtitle {
          height: 25px;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #ffffff45;
          width: calc(100% - 30px);
          margin-left: 20px;
          margin-bottom: 20px;
          cursor: default;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          }
          .loadsearchbtn {
          background-color: #303539;
          padding: 1px 10px;
          margin-left: 20px;
          cursor: pointer;
          }
          #featuredgenre {
          display: inline-block;
          max-width: calc(100% - 175px);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 12px;
          color: #a5a5a5;
          }
          #featuredcard {
          margin-left: 20px;
          margin-right: 10px;
          padding: 10px 15px;
          font-size: 14px;
          background-color: rgb(30, 30, 30);
          color: rgba(255, 255, 255, 0.78);
          margin-bottom: 10px;
          height: 160px;
          }
          #featuredbg {
          width: 100%;
          margin-top: -50%;
          filter: blur(15px);
          -webkit-filter: blur(15px);
          opacity: 0.2;
          }
          #featuredbgcont {
          height: 160px;
          overflow: hidden;
          margin: -10px -15px -160px -15px;
          animation: fadein 0.3s;
          }
          #featuredcont {
          position: relative;
          z-index: 1;
          height: 140px;
          margin-top: 10px;
          animation: fadein 0.3s;
          }
          #featuredimg {
          height: 160px;
          min-width: 110px;
          float: left;
          margin: -10px 10px 0 -15px;
          }
          #featuredtitle {
          font-size: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          }
          #featuredtext {
          margin: 12px 0;
          height: 58px;
          overflow: hidden;
          color: #a5a5a5;
          font-size: 13px;
          }
          #featuredNext,
          #featuredBack {
          float: right;
          margin-right: 15px;
          color: #7893aa;
          cursor: pointer;
          }
          #announcement {
          margin-left: 20px;
          height: 48px;
          margin-right: 10px;
          padding: 10px 15px 0 15px;
          font-size: 13px;
          background-color: rgb(30, 30, 30);
          overflow-y: hidden;
          color: rgba(255, 255, 255, 0.5);
          transition: height 0.5s ease;
          }
          #sharebtn,
          #openreport,
          #syncbtn,
          #screenshotbtn,
          #widescreenbtn {
          float: right;
          cursor: pointer;
          font-size: 12px;
          color: #74a4cc;
          display: none;
          margin-top: 3px;
          margin-right: 10px;
          }
          #serverlabel {
          float: right;
          margin-right: 5px;
          font-size: 13px;
          margin-top: 2px;
          border-left: 1px solid #5b5b5b;
          padding-left: 5px;
          display: none;
          }
          #reloadbtn,
          #sandboxbtn {
          float: right;
          cursor: pointer;
          margin-right: 10px;
          display: none;
          color: #79abd5;
          font-size: 12px;
          margin-top: 3px;
          }
          #screenshotbtn,
          #widescreenbtn {
          display: block;
          font-size: 15px;
          margin-top: 1px;
          }
          #castbtn {
          float: right;
          cursor: pointer;
          color: #6e96b7;
          margin: 2px 10px 0 0;
          }
          #sharebtn {
          color: #76a2c6;
          font-size: 13px;
          }
          #sharebtn:hover,
          #openreport:hover,
          #syncbtn:hover,
          #sandboxbtn:hover,
          #reloadbtn:hover,
          #showrecomendbtn:hover,
          #screenshotbtn:hover,
          #widescreenbtn:hover,
          #castbtn:hover {
          color: #7fc4fd;
          }
          #sesonaltmp,
          #populartmp,
          #recenttmp,
          #movietmp,
          #generaltmp,
          #nowtime {
          display: none;
          }
          #loadmorelist {
          cursor: pointer;
          margin-left: calc(50% - 105px);
          width: 200px;
          text-align: center;
          background-color: #24282f;
          padding: 5px;
          margin-top: 30px;
          color: #99d4ff;
          border: 1px solid #444e5b;
          border-radius: 4px;
          }
          #legendall {
          margin-left: 20px;
          font-size: 14px;
          color: #eea885;
          margin-top: 20px;
          }
          #legendtitle {
          border-bottom: 1px solid #826759;
          margin-bottom: 10px;
          font-size: 20px;
          }
          #noticerecent {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin-left: 5%;
          margin-bottom: -10px;
          }
          #updatebtn {
          display: none;
          cursor: pointer;
          }
          #updatebtn .glyphicon {
          margin-left: 3px;
          }
          .genretitle {
          margin: 0 10px 15px 21px;
          font-size: 20px;
          text-align: center;
          background: rgb(34, 34, 34);
          padding: 5px 0;
          }
          .epsavailable {
          float: right;
          flex: 1;
          font-size: 13px;
          text-align: right;
          color: rgba(255, 255, 255, 0.7);
          }
          .epsavailable a {
          color: rgba(105, 198, 220, 0.5);
          }
          .epsavailable a:hover {
          color: rgba(164, 238, 255, 0.562);
          }
          #playercountdown {
          color: yellow;
          white-space: nowrap;
          }
          .changelogdate {
          background-color: rgba(71, 140, 201, 0.4);
          padding: 3px;
          }
          .quickresult {
          background-color: rgb(25, 25, 25);
          padding: 7px 10px;
          margin-bottom: 18px;
          display: grid;
          gap: 5px;
          border: 1px solid #313131;
          color: rgba(255, 255, 255, 0.9);
          border-radius: 0 0 3px 3px;
          overflow: hidden;
          }
          .similarlist {
          padding: 3px;
          display: block;
          }
          .similarlist img {
          margin-right: 10px;
          width: 50px;
          }
          #resultAlt .name,
          #result1 .name {
          text-align: center;
          white-space: normal;
          -webkit-line-clamp: 6;
          }
          .quicksearchcontainer {
          display: none;
          position: fixed;
          width: 100%;
          z-index: 10;
          margin-top: 1px;
          }
          #resultplace .quickresult {
          background-color: transparent;
          border: none;
          padding: 0 20px;
          gap: 7px;
          }
          .leftside {
          min-height: 500px;
          }
          .quickresult li {
          height: 100%;
          }
          .quickresult .details {
          text-align: left;
          margin-left: 65px;
          }
          .quickresult .name {
          font-size: 14px;
          }
          .quickresult .searchimg {
          float: left;
          width: 55px;
          }
          .name a {
          color: #95b6d0;
          }
          .name {
          color: #95b6d0;
          }
          .quickresult li:hover {
          background-color: #202020;
          }
          .qresulthover {
          background-color: #262626 !important;
          }
          #reportform .quickresult {
          background-color: transparent;
          border: none;
          padding: 5px;
          }
          #reportform .quickresult li:hover {
          background-color: transparent;
          }
          #clearbtn {
          background-color: #642a24;
          color: #ffdfbd;
          border: 1px solid #733d3d;
          }
          #fullresultbtn {
          padding: 7px 10px 0 10px;
          background-color: rgb(25, 25, 25);
          color: #aff0ff;
          border-left: 1px solid #313131;
          border-right: 1px solid #313131;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
          gap: 2px;
          }
          #fullresultbtn a {
          cursor: pointer;
          background-color: #212324;
          margin-bottom: 5px;
          font-size: 13px;
          text-align: center;
          padding: 2px 0;
          color: #8aadca;
          }
          #fullresultbtn a:hover {
          color: #aadaff;
          }
          .eprecgrid {
          margin: 0 15px 15px 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(34px, 1fr));
          gap: 3px;
          font-size: 14px;
          text-align: center;
          }
          .eprecgrid a {
          background-color: #242728;
          border: 1px solid transparent;
          }
          .resultcontainer {
          margin: 0 auto;
          max-width: 750px;
          box-shadow: 0 0 80px 10px;
          }
          .sanimepage {
          max-width: 610px;
          box-shadow: 0 0 100px 30px;
          }
          .sanimepage #fullresultbtn {
          border: none;
          padding: 7px 0 0 10px;
          border-right: 1px solid #313131;
          border-left: 1px solid #313131;
          }
          .sotherpage {
          max-width: 670px;
          }
          .sotherpage #fullresultbtn {
          padding: 5px 0 3px 10px;
          border: 1px solid #3c3c3c;
          border-radius: 3px;
          }
          .absolutee {
          position: absolute;
          }
          .plyr__control--overlaid {
          border-radius: 3px;
          }
          .plyr {
          height: 100% !important;
          }
          .plyr__menu__container {
          border-radius: 2px;
          }
          .plyr__time + .plyr__time {
          display: block;
          }
          .tooltiptext {
          visibility: hidden;
          width: 90px;
          background-color: rgb(51 51 51);
          color: #fff;
          text-align: center;
          padding: 5px 0;
          border-radius: 4px;
          bottom: 27px;
          left: 50%;
          margin-left: -45px;
          position: absolute;
          z-index: 20;
          font-family: "Lexend deca", sans-serif;
          font-size: 14px;
          }
          .subtextmenuicon {
          font-size: 13px;
          font-family: "Lexend deca", sans-serif;
          margin-left: 2px;
          }
          #nextbtn .tooltiptext {
          left: -16px;
          }
          #nextbtn,
          .dlbutton,
          .proxybtn,
          .autoplaybutton,
          .lightbtn {
          cursor: pointer;
          }
          .autoplaybutton:hover .tooltiptext {
          visibility: visible;
          }
          .proxybtn:hover .tooltiptext {
          visibility: visible;
          }
          .dlbutton:hover .tooltiptext {
          visibility: visible;
          }
          #nextbtn:hover .tooltiptext {
          visibility: visible;
          }
          .lightbtn:hover .tooltiptext {
          visibility: visible;
          }
          #menumobilebtn,
          #menumobilebtn2,
          #showsearchbtn,
          #recomendedclosebtn {
          float: right;
          margin-right: 15px;
          padding: 3px 6px 0 6px;
          background-color: transparent;
          color: #96bdd9;
          display: none;
          border: none;
          font-size: 20px;
          margin-bottom: -5px;
          margin-top: -2px;
          outline: none;
          border-radius: 3px;
          }
          #recomendedclosebtn {
          display: block;
          float: left;
          margin: 15px 0 0 20px;
          }
          #menumobilebtn2 {
          display: block;
          margin-top: -35px;
          margin-right: calc(50% - 550px);
          font-size: 22px;
          }
          .chacedinfo {
          float: right;
          padding-right: 3%;
          color: rgba(255, 150, 100, 0.7);
          font-size: 13px;
          }
          .searchbar {
          max-width: 330px;
          display: inline;
          }
          #loadingtext {
          font-size: 20px;
          display: none;
          text-align: center;
          }
          #animeinfobottom {
          display: none;
          float: left;
          font-size: 13px;
          margin-left: 8px;
          padding-left: 8px;
          border-left: 1px solid #4f4f4f;
          }
          #animebtn2 {
          background-color: #2f2f2f;
          padding: 1px 7px;
          border: 1px solid #4c4c4c;
          border-radius: 3px;
          }
          #userconfirmcheck {
          float: right;
          margin-right: 10px;
          margin-top: 18px;
          font-size: 15px;
          }
          .searchresult,
          .items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          margin-left: -20px;
          gap: 5px;
          margin-right: 10px;
          margin-top: -10px;
          }
          .compactitem a {
          margin-right: 5px;
          margin-left: 3px;
          display: inline-block;
          max-width: calc(100% - 70px);
          }
          .compactitem i {
          cursor: pointer;
          float: left;
          margin-right: 5px;
          }
          .compactitem {
          margin-left: 20px;
          margin-right: 90px;
          }
          .timeCompact {
          float: right;
          margin-top: -23px;
          font-size: 14px;
          margin-right: 15px;
          }
          .allitem a {
          margin-right: 5px;
          max-width: calc(100% - 50px);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          float: left;
          }
          .allitem,
          .compactitem {
          color: gray;
          }
          #alphabetical {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(54px, 1fr));
          margin-left: 15px;
          margin-bottom: 10px;
          }
          #alphabetical button {
          color: white;
          background-color: #2f2f2f;
          border: none;
          margin: 3px;
          outline: none;
          }
          #alphabetical button[disabled] {
          background-color: #32531b;
          }
          #playeroverlay {
          position: absolute;
          z-index: 99;
          font-size: 90px;
          padding-left: 10px;
          width: 100%;
          -webkit-text-stroke: 1px #595959;
          opacity: 0.7;
          display: none;
          text-align: right;
          }
          .searchresult li,
          .items li {
          background-color: #222;
          border: 2px solid #0000;
          position: relative;
          animation: zoomout 0.3s;
          }
          #pwaContainer {
          display: none;
          height: 50px;
          background-color: #283538;
          margin: 10px;
          margin-left: 20px;
          font-size: 14px;
          padding: 15px;
          }
          #pwaButton {
          padding: 5px 15px 5px 15px;
          border-radius: 2px;
          float: right;
          margin-top: -7px;
          display: block;
          }
          #userlistcontainer {
          margin-left: 22px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          margin-top: -5px;
          }
          .flexuserlist {
          display: flex;
          margin-bottom: 5px;
          border-bottom: 1px solid #2d2d2d;
          margin-right: 10px;
          padding-bottom: 5px;
          min-height: 110px;
          }
          .imguserlist {
          flex: 0 0 95px;
          }
          .detailuserlist {
          flex: 1;
          margin-bottom: 10px;
          }
          .imgusr {
          width: 80px;
          }
          .titleuserlist {
          font-size: 14px;
          margin-bottom: 5px;
          }
          .watchprogress {
          margin-top: 5px;
          font-size: 13px;
          color: #b0b0b0 !important;
          }
          .recflexlist .watchprogress {
          font-size: 12px;
          }
          .latestep {
          display: none;
          }
          .listviewcount {
          color: #ffe57e;
          font-size: 13px;
          margin: -5px 0;
          }
          .infouserlist {
          font-size: 13px;
          margin-right: 15px;
          margin-bottom: 5px;
          color: #bbb490;
          }
          .usercontrol2 {
          float: right;
          }
          #extracontainer .reclistcontainer {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 10px;
          }
          #extracontainer img {
          vertical-align: unset !important;
          }
          #extracontainer a {
          margin-left: 5px;
          }
          #showExternalBtn {
          color: #999;
          background-color: #222;
          border: none;
          margin-left: 18px;
          padding: 5px;
          margin-top: 10px;
          width: calc(100% - 25px);
          border-radius: 4px;
          }
          #loadStatus {
          text-align: center;
          margin-top: 10px;
          display: none;
          }
          .recflexlist {
          display: flex;
          margin-bottom: 5px;
          margin-right: 10px;
          min-height: 100px;
          }
          .recflexlist .imguserlist {
          flex: 0 0 85px;
          }
          .recflexlist .imgusr {
          width: 75px;
          }
          .reclistcontainer {
          margin: -13px -5px 10px 20px;
          }
          .reclisttitle {
          font-size: 14px;
          margin-bottom: 5px;
          }
          .reclisttitle a {
          color: #95b6d0;
          }
          .reclisttitle a:hover {
          color: #9ccaee;
          }
          .reclistplay {
          background-color: #252a32;
          border: none;
          color: #99d4ff;
          padding: 2px 10px;
          border-radius: 2px;
          cursor: pointer;
          }
          .searchresult li:hover,
          .items li:hover {
          background-color: #ffffff1a;
          transform: scale(0.97);
          }
          .quickresult li {
          cursor: pointer;
          }
          .quickresult .infotext {
          font-size: 12px !important;
          padding-left: 0;
          }
          .quickresult .name {
          padding: 5px 0 0 0;
          -webkit-line-clamp: 8;
          margin-top: 0;
          }
          .noresultnotif {
          margin-left: 40px;
          font-size: 13px;
          opacity: 0.5;
          }
          .questionFAQ {
          padding: 20px 20px 0 20px;
          color: #eec57b;
          font-size: 19px;
          }
          .answerFAQ {
          padding: 0 20px 0 20px;
          font-size: 14px;
          }
          .subpartFAQ {
          border-bottom: 1px solid gray;
          margin: 20px 20px 0 20px;
          text-align: center;
          }
          .subpanelmenu {
          text-align: center;
          margin-bottom: 24px;
          border-bottom: 1px solid #626262;
          border-top: 1px solid #626262;
          padding: 5px 0;
          margin-top: 5px;
          }
          .dubtag {
          color: #f18585;
          }
          .name {
          padding-left: 2px;
          padding-right: 2px;
          padding-top: 2px;
          margin-top: 5px;
          line-height: 16px;
          font-size: 13px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          }
          .resultimg {
          width: 100%;
          max-width: 160px;
          background-color: #333333;
          height: 217px;
          }
          .resultimg2 {
          width: 100%;
          background-color: #333333;
          min-height: 150px;
          max-width: 160px;
          border-radius: 2px;
          }
          .quickresult .resultimg2 {
          min-height: unset;
          }
          #bottommsg {
          margin-left: 20px;
          }
          #password {
          margin-bottom: 5px;
          }
          #gsignsection {
          display: none;
          }
          .signinhome {
          margin-bottom: 10px;
          }
          .gsignin {
          margin-bottom: 0;
          margin-left: calc(50% - 60px);
          opacity: 0.9;
          margin-top: -7px;
          }
          .form-check-label,
          .form-check-input {
          cursor: pointer;
          font-weight: normal !important;
          margin-left: 3px;
          margin-bottom: 5px;
          }
          .genresgrid .form-check-label:hover {
          background-color: #7fcfff3b;
          padding-left: 5px;
          padding-right: 10px;
          margin-left: -2px;
          }
          .form-check-input:checked + .form-check-label {
          background-color: #7fcfff3b;
          padding-left: 5px;
          padding-right: 10px;
          }
          .subtitleright {
          text-align: center;
          font-size: 15px;
          margin: -10px;
          margin-bottom: -10px;
          padding: 4px;
          margin-bottom: 10px;
          border-top: 1px solid #3c3c3c;
          border-bottom: 1px solid #3c3c3c;
          }
          .rightcard input[type="checkbox"] {
          margin: 3px 0 -3px;
          float: left;
          }
          #searchimg {
          flex: 0 0 25px;
          }
          #details {
          flex: 1;
          }
          .details {
          text-align: center;
          }
          #flexcontainer {
          display: flex;
          min-width: 50px;
          margin-top: 20px;
          }
          #genreplace {
          height: 205px;
          opacity: 0.85;
          visibility: hidden;
          transition: height 0.5s ease;
          }
          .genresgrid .form-check-input {
          opacity: 0.8;
          }
          #ongoingplace {
          height: 830px;
          min-height: 830px;
          overflow-y: hidden;
          transition: height 1.2s ease;
          opacity: 0.9;
          }
          .topanimeli {
          list-style-type: none;
          }
          .topanimea {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 7px;
          }
          .topanimea:hover {
          background-color: #ffffff0d;
          border-color: #5b5b5b;
          }
          .topanimeimg {
          width: 56px;
          min-height: 75px;
          margin-right: 10px;
          border-radius: 2px;
          }
          .topanimename {
          font-size: 13px;
          margin-bottom: 3px;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          }
          .topanimenumber {
          font-size: 13px;
          margin-left: 3px;
          color: #555;
          }
          .topanimerating {
          margin-right: 7px;
          }
          .topanimerating i {
          color: #dbc137d1;
          }
          .topanimeuser {
          padding-right: 10px;
          }
          .topanimestats {
          margin-left: 3px;
          color: #aaa;
          display: flex;
          flex-direction: row;
          align-items: baseline;
          justify-content: flex-start;
          font-size: 12px;
          }
          .flexrightcard {
          display: flex;
          overflow-y: hidden;
          margin-bottom: 5px;
          }
          .halfleft2 {
          flex: 0 0 50%;
          }
          .halfright {
          flex: 1;
          }
          .leftside {
          flex: 0 0 1000px;
          margin-left: -20px;
          transition: 0.5s;
          }
          #changepasscontainer {
          font-size: 12px;
          }
          .rightside {
          flex: 1;
          font-size: 13px;
          max-width: 290px;
          animation-fill-mode: forwards;
          animation-duration: 0.4s;
          animation-timing-function: ease;
          overscroll-behavior: none;
          scrollbar-width: thin;
          }
          .playersidebar {
          position: fixed;
          top: 49px;
          z-index: 9;
          padding: 15px;
          font-size: 13px;
          height: calc(100% - 47px);
          width: 350px;
          margin-left: 100%;
          color: white;
          overflow-y: auto;
          animation-fill-mode: forwards;
          animation-duration: 0.4s;
          animation-timing-function: ease;
          }
          #opensidebarbtn {
          position: fixed;
          right: 0;
          top: 250px;
          padding: 40px 5px;
          background-color: #202020;
          color: #6e96b7;
          cursor: pointer;
          display: none;
          }
          #topmid {
          display: none;
          margin-bottom: -50px;
          margin-top: 17px;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
          overflow: hidden;
          width: 1100px;
          background-color: rgb(34, 34, 34);
          border-radius: 4px;
          padding: 6px;
          transition: all 0.5s ease-in-out;
          }
          #topmidcont,
          #streambrcont {
          text-align: center;
          clear: both;
          }
          #playerleftsidebar {
          position: fixed;
          top: 0;
          z-index: 21;
          background-color: rgb(25, 25, 25);
          font-size: 14px;
          height: 100%;
          width: 370px;
          right: 100%;
          color: white;
          animation-fill-mode: forwards;
          animation-duration: 0.4s;
          animation-timing-function: ease;
          overflow-y: auto;
          overscroll-behavior: none;
          scrollbar-width: thin;
          border-right: 1px solid #2f2f2f;
          }
          .rightcard:last-child {
          border-radius: 0 0 4px 4px;
          }
          .righttitle {
          background-color: rgb(60, 69, 80);
          text-align: center;
          padding: 5px;
          margin: -10px;
          margin-bottom: -10px;
          margin-bottom: 5px;
          position: absolute;
          width: 288px;
          font-size: 16px;
          }
          body::-webkit-scrollbar,
          #playerleftsidebar::-webkit-scrollbar,
          #epslistplace::-webkit-scrollbar {
          width: 10px;
          height: 100%;
          background-color: transparent;
          }
          body::-webkit-scrollbar-thumb,
          #playerleftsidebar::-webkit-scrollbar-thumb,
          #epslistplace::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          }
          .rightcard,
          .rightcardCenter {
          padding: 10px;
          background-color: rgb(32, 32, 32);
          overflow-y: auto;
          }
          .rightcardCenter {
          text-align: center;
          }
          .rightcard ul {
          margin-bottom: -5px;
          }
          .changelog {
          max-height: 300px;
          }
          .playbutton,
          .playbuttonextra {
          padding: 4px;
          font-size: 15px;
          }
          .playbutton:disabled,
          .playbutton[disabled],
          .playbuttonextra:disabled,
          .playbuttonextra[disabled] {
          background-color: #4d7944 !important;
          border-color: #244a1c;
          }
          #manualTrackingCard {
          display: none;
          color: rgb(227, 227, 227);
          padding-bottom: 15px;
          }
          #infocard {
          color: rgb(227, 227, 227);
          }
          #progressnumber,
          #tracknumber {
          margin: 5px 25px 0 25px;
          padding: 5px;
          background-color: #282828;
          font-size: 25px;
          }
          .floattopsearch {
          position: fixed;
          background-color: rgb(25, 25, 25);
          top: 0;
          width: 100%;
          padding: 10px;
          z-index: 19;
          left: 0;
          }
          #playertopmenu {
          position: absolute;
          background: rgb(25, 25, 25);
          }
          #coverlight {
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: 21;
          display: none;
          background-color: rgba(0, 0, 0, 0.95);
          }
          #playercontainer {
          height: 619px;
          width: 100%;
          margin-bottom: 5px;
          display: none;
          position: relative;
          }
          #player1,
          #player2 {
          display: none;
          background-color: rgb(5, 5, 5);
          }
          ul {
          list-style-type: none;
          }
          table {
          border-collapse: collapse;
          border-spacing: 0;
          color: white;
          margin-top: 10px;
          }
          body {
          font-size: 17px;
          line-height: 1.42857143;
          background-color: rgb(25, 25, 25);
          font-family: "Lexend deca", sans-serif;
          overscroll-behavior: none;
          }
          textarea {
          color: white;
          font-family: "Lexend deca", sans-serif;
          }
          html {
          scroll-behavior: smooth;
          overscroll-behavior: none;
          scrollbar-color: rgba(255, 255, 255, 0.1) rgba(0, 0, 0, 0.1);
          scrollbar-width: thin;
          }
          #error {
          color: #ff8585;
          display: block;
          text-align: center;
          }
          .toppart {
          background-color: transparent;
          padding-top: 48px;
          }
          #lastwatch {
          display: none;
          position: fixed;
          bottom: 10px;
          right: calc(100% + 10px);
          padding: 10px;
          background-color: #232323;
          border: 1px solid #404040;
          color: #d9d9d9;
          max-width: calc(100% - 20px);
          font-size: 12px;
          width: 350px;
          z-index: 2;
          animation-fill-mode: forwards;
          animation-duration: 0.6s;
          animation-timing-function: ease;
          }
          #lastwatchurl {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: gray;
          }
          #lastwatchtitle {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 15px;
          }
          #lastwatchclosebtn {
          cursor: pointer;
          color: #7fc3ff;
          float: right;
          margin: -12px -10px -12px 10px;
          font-size: 15px;
          background-color: #2a2d2f;
          padding: 30px 10px;
          height: 76px;
          }
          .middle {
          position: relative;
          margin: 0 auto;
          width: 1270px;
          font-size: 16px;
          color: white;
          min-height: calc(100vh - 190px);
          transition: width 0.5s;
          }
          #timeleft {
          opacity: 0.5;
          }
          #mascot {
          float: right;
          margin-top: -446px;
          margin-right: calc(50% - 840px);
          opacity: 0.9;
          width: 180px;
          }
          #malp {
          margin-bottom: -15px;
          margin-top: 9px;
          opacity: 0.9;
          max-width: 600px;
          font-size: 14px;
          }
          #malp .info {
          color: #c1c1c1;
          }
          #malp select {
          -moz-appearance: auto;
          -webkit-appearance: auto;
          appearance: auto;
          margin-left: 5px !important;
          background-color: #333 !important;
          }
          #backtotopbtn {
          position: fixed;
          right: 30px;
          bottom: 25px;
          margin-left: 100px;
          width: 60px;
          text-align: center;
          cursor: pointer;
          border-radius: 3px;
          font-size: 14px;
          background-color: #ffffff12;
          padding: 6px;
          color: white;
          z-index: 10;
          transition: opacity ease-in-out 0.2s;
          }
          #searchbox {
          text-align: left;
          }
          input {
          transition: ease-in-out all 300ms;
          }
          #q {
          transition: ease-in-out border-color 300ms;
          }
          .middle form input[type="submit"],
          #search form input[type="submit"] {
          height: 2.6em;
          color: #fff;
          background-color: transparent;
          border-radius: 3px;
          border: 2px solid #fff;
          padding: 0 1.5em;
          padding-bottom: 0.1em;
          font-family: "Lato";
          font-weight: 400;
          font-size: 0.8em;
          }
          .middle form input[type="submit"]:hover {
          background-color: #fff;
          background: rgba(255, 255, 255, 0.3);
          }
          #aligncenter {
          margin-bottom: 3px;
          }
          #search {
          max-width: 100%;
          margin: 0 auto;
          border: none;
          background-color: rgb(34, 34, 34);
          margin-bottom: -20px;
          margin-top: 10px;
          position: relative;
          z-index: 10;
          }
          #searchform {
          padding: 10px;
          text-align: center;
          max-width: 540px;
          margin: 0 auto;
          }
          #tombol {
          display: inline;
          }
          .subpart {
          font-size: 21px;
          width: 100%;
          text-align: center;
          color: white;
          }
          .animetitle {
          font-size: 22px;
          display: inline;
          margin-right: 10px;
          }
          .webtitle {
          max-width: 170px;
          margin: -5px 10px -5px 10px;
          cursor: pointer;
          opacity: 0.9;
          min-width: 165px;
          }
          .webtitle:hover {
          opacity: 1;
          }
          .eptitle {
          padding: 5px;
          text-align: left;
          padding-left: 10px;
          font-size: 16px;
          margin-top: -30px;
          border-radius: 4px 4px 0 0;
          }
          .altsourcenotif {
          opacity: 0.5;
          margin-left: 7px;
          border-left: 2px solid #515151;
          padding-left: 7px;
          }
          .proxybtn {
          color: gray;
          }
          .dlbutton,
          .autoplaybutton,
          .proxybtn,
          .lightbtn {
          margin-right: 8px;
          }
          #eptitle {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: calc(100% - 145px);
          opacity: 0.9;
          }
          #trackingTitle {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding: 5px 20px;
          }
          #toprightplayer {
          float: right;
          margin-right: 7px;
          text-decoration: none;
          margin-top: -24px;
          font-size: 17px;
          }
          #tips {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          display: none;
          text-align: left;
          background-color: rgba(255, 200, 0, 0.1);
          max-width: 380px;
          text-align: left;
          padding: 3px;
          margin-left: calc(50% - 190px);
          margin-top: 20px;
          margin-bottom: -55px;
          text-align: center;
          }
          #tips a {
          opacity: 0.6;
          text-decoration: none;
          }
          #flexbottom {
          display: none;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 0 15px 0;
          margin-bottom: -10px;
          opacity: 0.85;
          }
          #filterplace,
          #seasonfilter {
          opacity: 0.85;
          }
          #filterplace .halfleft,
          #seasonfilter .halfleft {
          flex: 0 0 50%;
          }
          #seasonleft {
          flex: 0 0 45%;
          }
          #yearright {
          flex: 0 0 40%;
          }
          #seasonalgobtn {
          margin-top: 23px;
          background-color: #2a2f39;
          padding: 3px 0;
          margin-left: -2px;
          cursor: pointer;
          text-align: center;
          border-radius: 4px;
          border: 1px solid #42494f;
          color: #9edbff;
          }
          select {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          border: none;
          outline: none;
          background-color: #333;
          color: white;
          padding: 5px;
          border-radius: 3px;
          font-family: "Lexend deca", sans-serif;
          }
          #srcselect {
          width: 140px;
          margin-right: 10px;
          float: right;
          display: none;
          }
          #topfilterselect {
          position: absolute;
          top: 32px;
          right: 15px;
          width: 120px;
          height: 27px;
          }
          #commentrule {
          color: #e0e0e0;
          font-size: 13px;
          padding: 10px;
          background-color: #333;
          margin: 15px 0 5px;
          display: none;
          cursor: pointer;
          border-radius: 5px;
          }
          #topsortselect {
          width: 120px;
          height: 27px;
          }
          #filterplace select,
          #seasonfilter select {
          width: calc(100% - 10px);
          }
          #manualTrackingSelect {
          width: 120px;
          display: none;
          margin: -10px 0 10px calc(50% - 60px);
          }
          #streamtype {
          font-size: 13px;
          opacity: 0.6;
          display: inline;
          }
          #streamtypecontainer {
          margin: -9px -10px 4px 0;
          }
          #bottomleft {
          flex: 0 0 calc(100% - 125px);
          }
          #status,
          #genres {
          float: left;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          }
          #genres {
          margin-bottom: 4px;
          }
          .genresgrid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          width: 100%;
          }
          #listplace {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          margin-left: 20px;
          font-size: 13px;
          }
          .logininput {
          width: calc(100% - 6px);
          font-size: 12px;
          margin-left: 2px;
          background-color: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 7px;
          margin-bottom: 2px;
          margin-top: 2px;
          outline: none;
          border-radius: 3px;
          }
          #seriestitlecontainer {
          text-align: center;
          color: #fff;
          font-size: 20px;
          margin-top: -42px;
          margin-bottom: 5px;
          z-index: 9;
          position: relative;
          }
          .flexserieslist {
          display: flex;
          margin-bottom: 5px;
          border-bottom: 1px solid #2d2d2d;
          padding-right: 10px;
          min-height: 110px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0) 40%
          );
          transition: opacity 0.4s ease;
          }
          #seriestitle {
          background-color: #1919197a;
          padding: 7px;
          max-width: 790px;
          margin: 0 auto;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          }
          .serieslabelitem {
          float: right;
          padding: 0 6px;
          font-size: 15px;
          margin-top: -17px;
          }
          .numbering {
          text-align: center;
          font-size: 23px;
          width: 40px;
          }
          .titleserieslist {
          margin-bottom: 1px;
          margin-top: 5px;
          font-size: 15px;
          color: #b0b0b0;
          }
          .seriestimeinfo {
          margin-top: -7px;
          font-size: 13px;
          color: #b0b0b0 !important;
          }
          .logininput:focus {
          border: 1px solid rgba(73, 204, 255, 0.521);
          border-radius: 2px;
          }
          .loginbtn {
          font-size: 14px;
          margin: 20px 0 7px 5px;
          padding: 6px;
          opacity: 0.9;
          }
          .loginbtn,
          .registerbtn,
          .changepassbtn,
          #manualtrackbtn,
          .changeuserbtn,
          #followbtn,
          #trackbtn {
          background-color: rgba(134, 187, 255, 0.17);
          color: #99d4ff;
          text-align: center;
          cursor: pointer;
          border: 1px solid rgba(91, 217, 255, 0.2);
          border-radius: 3px;
          outline: none;
          }
          #dialogno {
          filter: grayscale(1);
          margin-right: 5px;
          }
          #confdialog {
          padding-bottom: 15px !important;
          border: 1px solid #575757 !important;
          }
          #confirmtext {
          margin: 10px 5px;
          font-size: 14px;
          }
          .anitexttitle {
          color: #eae271;
          }
          #showrecomendbtn {
          font-size: 13px;
          padding: 2px 5px 0 5px;
          display: inline;
          margin-left: 8px;
          display: none;
          cursor: pointer;
          opacity: 0.9;
          color: #99d4ff;
          border-left: 1px solid #515151;
          padding-left: 8px;
          }
          .typeTag {
          margin-left: 5px;
          color: gray;
          }
          .loadingreplacement {
          text-align: center;
          font-size: 26px;
          padding: 41px;
          padding-top: 42px;
          color: transparent;
          }
          #registerform,
          #changepassform,
          #importmalform,
          #premiumpanel,
          #simklform {
          display: none;
          }
          .formsubtext {
          margin-left: 10px;
          margin-bottom: 10px;
          font-size: 11px;
          color: #686868;
          }
          #malogo {
          margin-bottom: 10px;
          margin-left: calc(50% - 97px);
          }
          #simklogo {
          margin-bottom: 10px;
          width: 150px;
          margin-left: calc(50% - 75px);
          }
          #simklminicon {
          vertical-align: unset;
          }
          #searchbutton,
          #searchbutton2 {
          color: #8a8a8acf;
          font-size: 15px;
          padding: 7px;
          text-align: center;
          background-color: transparent;
          border-radius: 0;
          border: none;
          margin-left: -35px;
          outline: none;
          margin-right: 10px;
          }
          .randombtn {
          float: left;
          font-size: 17px;
          padding: 1px;
          text-decoration: none !important;
          text-align: center;
          border: none;
          color: #ffffff94;
          margin-right: 7px;
          }
          .registerbtn {
          font-size: 14px;
          margin: 0 auto;
          width: 100px;
          padding: 6px;
          }
          .changepassbtn,
          #manualtrackbtn,
          .changeuserbtn,
          #followbtn,
          #trackbtn {
          font-size: 14px;
          margin: 0 auto;
          width: 120px;
          padding: 6px;
          margin-top: 7px;
          }
          .changeuserbtn {
          width: 140px;
          }
          .usrpanelseparator {
          text-align: center;
          border-top: 1px solid #ffffff40;
          margin-top: 20px;
          padding-top: 5px;
          }
          #manualtrackbtn {
          font-size: 13px;
          }
          #followbtn,
          #trackbtn,
          #fillerbtn {
          display: none;
          font-size: 12px;
          padding: 1px 8px 1px 7px;
          width: unset;
          margin-bottom: 2px;
          border-color: #323b46;
          transform: translateY(-3px);
          outline: none;
          }
          #fillerbtn {
          border: 1px solid #4c4c4c;
          color: #aeaeae;
          background-color: #2f2f2f;
          margin-left: 5px;
          }
          #trackbtn .glyphicon {
          top: 1px;
          }
          #highlighted {
          background-color: #222b2b;
          }
          .neweptxt {
          color: yellow;
          font-size: 13px;
          }
          .countdowntxt {
          font-size: 13px;
          }
          #connectstatus {
          text-align: center;
          }
          #usernametop {
          float: right;
          margin-top: -30px;
          color: white;
          margin-right: calc(50% - 500px);
          font-size: 16px;
          }
          #loginform .subtitleright {
          cursor: pointer;
          }
          #loginform .halfleft {
          flex: 0 0 70%;
          font-size: 12px;
          }
          #loginform {
          margin-bottom: -7px;
          display: none;
          }
          #userpanel {
          display: none;
          text-align: center;
          }
          #watchingstatus {
          margin-bottom: 15px;
          display: block;
          margin-top: -8px;
          color: #b7b7b7;
          }
          #untrackbtn {
          float: right;
          margin-top: -32px;
          color: #7fc3ff;
          cursor: pointer;
          }
          #untrackbtn .glyphicon {
          color: #d44c4c;
          }
          #premiumpanel {
          text-align: center;
          }
          #premiumpanel .glyphicon-transfer,
          #premiumpanel .glyphicon-sunglasses {
          color: gray;
          }
          #premiumnotice,
          #alretinfo,
          #alretinfo2 {
          text-align: center;
          background-color: #323232;
          color: #d3d3d3;
          padding: 10px;
          display: block;
          margin: -10px 5px 15px 5px;
          }
          #iconmenu {
          font-size: 30px;
          color: #7fc3ff;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          }
          .linkpersonal,
          .linkhome {
          color: #7fc3ff !important;
          text-decoration: none !important;
          }
          .linkpersonal:hover,
          .linkhome:hover,
          #iconmenu .glyphicon:hover {
          opacity: 0.7;
          }
          #menuclose,
          #reportclose {
          float: right;
          margin-right: 1px;
          margin-left: -25px;
          margin-top: -1px;
          background-color: #333;
          padding: 2px;
          }
          #menuclose {
          margin-right: 0;
          margin-top: -2px;
          }
          #reportclose {
          margin-right: -5px;
          margin-top: -6px;
          }
          .airtime {
          float: right;
          margin-top: -19px;
          cursor: pointer;
          }
          #addTitle {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
          width: 205px;
          scrollbar-width: thin;
          }
          #addTitle::-webkit-scrollbar {
          height: 5px;
          background-color: #2e2e2e;
          }
          #addTitle::-webkit-scrollbar-thumb {
          background: #4c4c4c;
          }
          .schedulelist {
          margin-left: 10px;
          max-width: calc(100% - 50px);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          }
          .scheduletitle {
          cursor: default;
          display: block;
          width: calc(100% - 10px);
          text-align: center;
          border-bottom: 1px solid #515151;
          margin: 8px 10px 7px 10px;
          font-size: 16px;
          }
          #scheduleinfo {
          text-align: center;
          width: 100%;
          color: gray;
          margin-bottom: 10px;
          }
          #schedulenotice {
          margin: 0 10px 15px 10px;
          background-color: #333324;
          padding: 5px;
          text-align: center;
          }
          #scheduletimezone {
          width: 100%;
          padding-right: 13px;
          text-align: right;
          margin-bottom: -25px;
          }
          #animebtn {
          display: none;
          cursor: pointer;
          font-size: 22px;
          }
          #animepagemiddle {
          margin-top: -100px;
          padding-left: calc((100% - 1120px) / 2);
          padding-right: calc((100% - 1120px) / 2);
          min-height: calc(100vh - 270px);
          position: relative;
          z-index: 1;
          display: flex;
          }
          #animepagecountdown {
          color: yellow;
          margin-top: 3px;
          }
          .animerefbtn {
          font-size: 14px;
          opacity: 0.8;
          }
          #topcover {
          overflow: hidden;
          height: 248px;
          }
          #topcoverimage {
          width: 100%;
          margin-top: -50%;
          opacity: 0.3;
          filter: blur(30px);
          -webkit-filter: blur(30px);
          min-height: 100vw;
          }
          #anicovercontain {
          position: relative;
          }
          #maincoverimage {
          width: 225px;
          }
          #leftsideanimepage {
          flex: 0 0 225px;
          }
          #animeleftside {
          color: #ddd;
          font-size: 13px;
          margin-bottom: 20px;
          }
          #infopanel {
          max-height: 284px;
          overflow: hidden;
          margin: -10px;
          padding: 10px;
          -webkit-transition: max-height 0.5s ease;
          -moz-transition: max-height 0.5s ease;
          -o-transition: max-height 0.5s ease;
          transition: max-height 0.5s ease;
          }
          #scorebox {
          float: right;
          font-size: 24px;
          color: #ddd;
          background-color: #191919;
          padding: 1px 12px;
          margin-top: 53px;
          border: 1px solid #353535;
          }
          #showstreambtn {
          font-size: 18px;
          color: #b2dbff;
          background-color: #191919;
          padding: 4px 12px;
          max-width: 180px;
          cursor: pointer;
          margin-top: 55px;
          float: left;
          border: 1px solid #405264;
          border-radius: 5px;
          }
          #scorebox .glyphicon {
          font-size: 20px;
          }
          #iframeanime {
          width: 100%;
          border: none;
          overflow: hidden;
          height: 495px;
          margin-bottom: -6px;
          }
          #rightsideanimepage {
          flex: 1;
          padding-left: 15px;
          min-width: 250px;
          margin-bottom: 10px;
          display: none;
          }
          #panelplace {
          color: #ddd;
          margin-top: 8px;
          margin-bottom: -10px;
          font-size: 14px;
          }
          #animepagetitle {
          font-size: 30px;
          color: #e3e3e3;
          margin-top: 103px;
          }
          #genrelist {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
          gap: 10px;
          margin-top: 70px;
          margin-bottom: 5px;
          text-align: center;
          font-size: 13px;
          }
          .genretiles {
          background-color: rgba(0, 0, 0, 0.57);
          border-radius: 3px;
          }
          #seasontitle {
          text-align: center;
          width: 100%;
          margin-top: 5px;
          font-size: 33px;
          margin-left: -45px;
          }
          #openschedulebtn {
          float: right;
          background-color: #24272d;
          border: 1px solid #44494d;
          padding: 4px 12px;
          margin: 0px 10px 0 0;
          color: #8dc5e6;
          outline: none;
          font-size: 15px;
          border-radius: 3px;
          }
          #openschedulebtn:hover {
          background-color: #2c3033;
          }
          .closebtn,
          .xclose {
          cursor: pointer;
          color: #d44c4c;
          float: right;
          margin-top: 11px;
          margin-right: -8px;
          font-size: 14px;
          }
          .xclose {
          margin: -8px -5px -16px 0;
          background-color: #333;
          padding: 2px;
          z-index: 1;
          }
          #iconmenu .glyphicon {
          flex: 30px;
          cursor: pointer;
          margin-bottom: 20px;
          }
          #notifiaction .glyphicon {
          font-size: 17px;
          }
          #notifiaction,
          #reportform,
          #confdialog {
          position: fixed;
          top: 130px;
          width: 300px;
          left: 50%;
          margin-left: -150px;
          padding: 5px;
          text-align: center;
          display: none;
          color: white;
          font-size: 16px;
          z-index: 999;
          background-color: rgb(45, 45, 45);
          border: 1px solid #d5d5d529;
          box-shadow: 0 3px 5px #131313c7;
          border-radius: 2px;
          animation-fill-mode: forwards;
          animation-duration: 0.2s;
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
          }
          #notifiaction {
          padding: 10px 5px;
          background-color: rgb(55, 55, 55);
          }
          #reportform,
          #confdialog {
          top: calc(50% - 160px);
          }
          #missList {
          max-height: 250px;
          font-size: 13px;
          text-align: left;
          padding: 10px;
          overflow: auto;
          }
          #foldersvg {
          margin-bottom: -3px;
          }
          #sendreportbtn {
          margin-bottom: 10px;
          font-size: 13px;
          }
          .footer {
          width: 100%;
          background-color: rgb(35, 35, 35);
          padding-bottom: 27px;
          margin-top: 30px;
          text-align: center;
          padding-top: 10px;
          font-size: 13px;
          color: rgb(80, 80, 80);
          }
          .footer a:hover {
          text-decoration: underline;
          }
          .bottomtext,
          .leftbottom {
          color: rgb(150, 150, 150);
          font-size: 14px;
          display: block;
          margin-bottom: 10px;
          padding: 0 5px 0 5px;
          }
          .leftbottom a,
          .leftbottom a:hover {
          color: #b9b9b9;
          }
          .bottomtext a,
          .bottomtext a:hover {
          color: rgb(150, 150, 150);
          }
          .leftbottom {
          text-align: left;
          width: 100%;
          margin: 0 auto;
          margin-bottom: -30px;
          background-color: #ffffff09;
          border: 7px solid transparent;
          padding-left: calc((100% - 1270px) / 2);
          padding-right: calc((100% - 1270px) / 2);
          opacity: 0.7;
          }
          .floatright {
          float: right;
          }
          .customicon {
          display: inline-block;
          filter: grayscale(1);
          margin: 0 0 0 6px;
          opacity: 0.7;
          margin-bottom: -2px;
          }
          #playerbottomicon {
          text-align: center;
          background-color: #2b2b2b;
          padding: 5px;
          margin-top: 7px;
          opacity: 0.7;
          }
          .discordicon {
          width: 16px;
          height: 16px;
          background-position: 0 0;
          margin-bottom: 0;
          }
          .bitcoinicon {
          width: 16px;
          height: 16px;
          background-position: -51px 0;
          opacity: 0.9;
          margin-left: 2px;
          }
          .ethereumicon {
          width: 16px;
          height: 16px;
          background-position: -67px 0;
          opacity: 0.9;
          margin-left: 5px;
          }
          .rssicon {
          width: 16px;
          height: 16px;
          background-position: -34px 0;
          margin-bottom: 0;
          }
          .kofiicon {
          width: 24px;
          height: 16px;
          background-position: -86px 0;
          filter: none;
          opacity: 0.9;
          margin-right: -2px;
          }
          .twittericon {
          width: 16px;
          height: 16px;
          background-position: -17px 0;
          margin-bottom: 0;
          }
          .searchimg {
          position: relative;
          }
          .searchresult .searchimg::after {
          content: "";
          position: absolute;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: linear-gradient(0deg, #202020, #2020204a 15%, transparent 30%);
          top: 0;
          }
          .searchresult li:hover .searchimg::after {
          background: linear-gradient(0deg, #303030 0, transparent 25%);
          }
          .usercontrol {
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          background-color: #393838;
          font-size: 18px;
          }
          .usercontrol .glyphicon {
          padding-right: 10px;
          padding-left: 10px;
          }
          .usercontrol .glyphicon:hover {
          font-size: 23px;
          padding-right: 7px;
          padding-left: 8px;
          margin-top: -4px;
          }
          .compactitem .glyphicon-time,
          .usercontrol2 .glyphicon-time {
          color: #e3ab7b;
          }
          .usercontrol2 .glyphicon-ok,
          .compactitem .glyphicon-ok {
          color: #0c0;
          }
          .usercontrol .glyphicon-remove,
          .usercontrol2 .glyphicon-remove,
          .compactitem .glyphicon-remove {
          color: #ff2323;
          }
          .usercontrol2 i {
          cursor: pointer;
          font-size: 18px;
          }
          .usercontrol2 .glyphicon {
          padding-right: 10px;
          }
          .usercard {
          display: none;
          }
          .openregisterbtn,
          .openloginbtn {
          cursor: pointer;
          margin-left: 10px;
          float: left;
          }
          .openregisterbtn {
          float: right;
          margin-top: 15px;
          margin-right: 5px;
          }
          .errormsg {
          background-color: rgba(255, 100, 100, 0.4);
          text-align: center;
          margin: 5px;
          display: block;
          padding: 5px 0 7px 0;
          }
          .successmsg {
          background-color: rgba(0, 238, 49, 0.3);
          text-align: center;
          margin: 5px;
          display: block;
          font-size: 13px;
          padding: 5px 0;
          }
          .mobilemenureplace {
          display: none;
          text-align: center;
          background-color: #282d2f !important;
          margin-top: 15px;
          overflow: hidden;
          }
          #genresortbtn {
          margin-left: 20px;
          font-size: 14px;
          color: #cecece;
          display: none;
          text-align: right;
          padding-right: 10px;
          padding-bottom: 5px;
          }
          #seasontopnav {
          display: none;
          margin-left: 22px;
          font-size: 14px;
          height: 26px;
          color: #9cc2e3;
          position: relative;
          }
          #prevseasonbtn {
          float: left;
          margin-right: 8px;
          cursor: pointer;
          }
          #nextseasonbtn {
          float: right;
          margin-left: 10px;
          margin-right: 10px;
          cursor: pointer;
          }
          #donatelabel {
          float: left;
          margin-right: 3px;
          }
          .togglelabel {
          float: left;
          margin-right: 8px;
          }
          .togglelabel2 {
          float: right;
          margin-left: 7px;
          margin-right: 5px;
          }
          .switch {
          position: relative;
          display: inline-block;
          width: 36px;
          height: 16px;
          margin-top: 2px;
          }
          .switch input {
          opacity: 0;
          width: 0;
          height: 0;
          }
          .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #606060;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          }
          .slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          bottom: 1px;
          left: 2px;
          background-color: #bdbdbd;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          }
          input:checked + .slider {
          background-color: #2196f3;
          }
          input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
          }
          input:checked + .slider:before {
          -webkit-transform: translateX(18px);
          -ms-transform: translateX(18px);
          transform: translateX(18px);
          background-color: #fff;
          }
          .slider.round {
          border-radius: 17px;
          }
          .slider.round:before {
          border-radius: 50%;
          }
          .g-recaptcha,
          .cf-turnstile {
          overflow: visible;
          margin-left: calc(50% - 135px);
          margin-top: 7px;
          opacity: 0.9;
          transform: scale(0.9);
          -webkit-transform: scale(0.9);
          transform-origin: 0 0;
          -webkit-transform-origin: 0 0;
          }
          #genres a {
          color: rgba(158, 209, 253, 0.76);
          }
          #genres a:hover {
          text-decoration: underline;
          }
          #editgenrebtn {
          display: none;
          }
          #genres:hover #editgenrebtn {
          display: inline;
          }
          .airday {
          float: left;
          font-size: 13px;
          margin-left: 3px;
          color: rgba(255, 255, 255, 0.7);
          }
          .infotext {
          padding: 0 10px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: -5px;
          margin-bottom: 5px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          }
          .timetext {
          position: absolute;
          bottom: 0;
          right: 0;
          color: rgba(255, 255, 255, 0.95);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 12px;
          padding: 3px 5px 0 5px;
          border-radius: 5px 0 0 0;
          background-color: rgba(32, 32, 32, 0.5);
          z-index: 1;
          }
          #animeimage {
          display: none;
          margin-top: 10px;
          opacity: 0.8;
          }
          #iframeplayer,
          #iframeplayer2 {
          display: block;
          margin-bottom: 5px;
          height: 619px;
          width: 100%;
          border: none;
          overflow: hidden;
          background-color: #3a3a3a;
          }
          .released {
          font-size: 13px;
          color: #a8a8a8 !important;
          text-align: center;
          margin-bottom: 5px;
          }
          #readmorebtn {
          margin-left: 20px;
          width: calc(100% - 30px);
          height: 22px;
          padding: 2px;
          opacity: 0.6;
          color: white;
          background-color: rgb(33, 33, 33);
          outline: none;
          }
          #expandbtn,
          #expandbtn2 {
          height: 22px;
          margin-top: 5px;
          margin-bottom: -5px;
          padding: 2px;
          opacity: 0.6;
          color: white;
          background-color: transparent;
          outline: none;
          }
          #resultAlt {
          display: none;
          }
          .playerpage {
          position: relative;
          margin: 0 auto;
          font-size: 16px;
          color: white;
          width: 1100px;
          box-shadow: none;
          margin-top: 60px;
          background-color: rgb(35, 35, 35);
          border-radius: 4px;
          transition: all 0.5s ease-in-out;
          transition-property: margin, height, width;
          }
          #switch {
          display: none;
          cursor: pointer;
          text-decoration: none;
          margin-left: 10px;
          }
          #lowerplayerpage {
          padding: 15px;
          margin-top: -5px;
          padding-bottom: 0;
          }
          #malusername {
          margin-bottom: 4px;
          }
          #reportinput {
          margin: 10px 0 4px 0;
          max-width: 271px;
          height: 65px;
          background-color: #262626;
          }
          #rememberme,
          #nodub,
          #nodub2,
          #skipwatched,
          #skipwatched2 {
          margin-left: 5px;
          opacity: 0.7;
          }
          #azsearch {
          height: 31px;
          max-width: 100%;
          width: 270px;
          margin-left: 0;
          margin-top: 7px;
          }
          .rememberlabel {
          opacity: 0.7;
          margin-bottom: 0;
          }
          #navtab {
          margin: 15px 10px 15px 20px;
          }
          .nav-tabs li a {
          cursor: pointer;
          background-color: #282828;
          color: #87b4ce;
          font-size: 17px;
          border-radius: 0;
          }
          .nav-tabs li a:hover {
          color: white;
          background-color: #2f2f2f;
          }
          .nav > li > a {
          position: relative;
          display: block;
          padding: 5px 14px;
          margin-right: 2px;
          }
          .nav-tabs > li > a {
          line-height: 1.42857143;
          border-bottom: 1px solid #606060;
          }
          .nav-tabs .active a {
          cursor: default;
          background-color: #3e3e3e !important;
          color: white;
          margin-top: -1px;
          border-top: 1px solid transparent;
          border-bottom: 1px solid #cdcdcd;
          }
          .nav-tabs {
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          min-width: 350px;
          }
          .mainsource {
          position: relative;
          background-color: #372e2e;
          }
          .mainsource::after {
          content: "H";
          position: absolute;
          top: 0;
          right: 0;
          background-color: rgba(238, 69, 69, 0.8);
          padding: 2px 8px 2px 8px;
          font-size: 11px;
          }
          .schedulemenucontainer {
          position: fixed !important;
          height: calc(100% - 50px);
          overflow-y: auto !important;
          }
          @media screen and (max-width: 1700px) {
          #mascot {
            display: none;
          }
          }
          @media screen and (max-width: 1400px) {
          .playerpage,
          #disquscomment,
          #flexstreambottom,
          #topmid,
          #belowbox {
            width: 940px;
          }
          #playercontainer {
            height: 529px;
            min-height: 50px;
          }
          #iframeplayer,
          #iframeplayer2 {
            height: 529px;
            min-height: 260px;
          }
          }
          @media screen and (max-width: 1280px) {
          .middle {
            width: 970px;
          }
          .leftside {
            flex: 0 0 690px;
          }
          #backicon {
            margin-left: 20px;
          }
          #backiconhome {
            margin-left: calc(50% - 490px);
          }
          }
          @media screen and (max-width: 1130px) {
          #usernametop {
            margin-right: 50px;
          }
          #menumobilebtn2 {
            margin-top: -35px;
            margin-right: 5px;
          }
          .reportText {
            display: none;
          }
          #sharebtn {
            color: #76a2c6;
            font-size: 13px;
          }
          #openreport,
          #syncbtn,
          #reloadbtn,
          #sandboxbtn {
            font-size: 12px;
            color: #76a2c6;
            margin-right: 10px;
          }
          }
          @media screen and (max-width: 1000px) {
          #disqus_thread {
            width: 100%;
            margin-left: 0;
          }
          #changetext {
            display: none;
          }
          #animebtn2 {
            background-color: #2d2d2d;
            padding: 2px 7px;
          }
          .lightbtn {
            display: none;
          }
          #topmid {
            margin-bottom: 0;
            margin-top: 1px;
            width: unset;
            background-color: #2f2f2f;
            border-radius: 0;
            padding: 0;
          }
          #playerleftsidebar::-webkit-scrollbar {
            width: 5px;
            background-color: transparent;
          }
          .nav > li > a {
            padding: 5px 8px;
          }
          #fullresultbtn {
            grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
            gap: 2px;
            padding: 7px 3px 0 3px;
          }
          #status,
          #genres,
          .epsavailable {
            font-size: 12px;
          }
          #fullresultbtn a {
            margin-bottom: 3px;
            font-size: 12px;
            padding: 2px 0;
            color: #7ea7bf;
          }
          #topfilterselect,
          #topsortselect {
            width: 95px;
          }
          #featuredtitle {
            font-size: 15px;
          }
          #featuredtext {
            font-size: 12px;
            margin: 10px 0;
            height: 72px;
          }
          #screenshotbtn,
          #widescreenbtn {
            display: none;
          }
          .sanimepage,
          .sotherpage {
            box-shadow: 0 0 80px 10px;
          }
          .sanimepage .quickresult {
            background-color: #202020;
            opacity: 1;
          }
          #playertopmenu {
            background-color: rgb(30, 30, 30);
          }
          #addTitle {
            width: unset;
            color: #ffb680;
          }
          .sanimepage #fullresultbtn,
          .sotherpage #fullresultbtn {
            opacity: 1;
            background-color: #1e1e1e;
            padding: 5px;
          }
          #iframeplayer,
          #iframeplayer2 {
            height: 56.3vw;
          }
          #playercontainer {
            height: 56.3vw;
          }
          .compactitem {
            font-size: 14px;
          }
          .timeCompact {
            margin-top: -20px;
            font-size: 13px;
            margin-right: 10px;
          }
          .btn-primary {
            background-color: #38678e;
          }
          body,
          html {
            background-color: #1f1f1f;
          }
          .subpart {
            background-color: #263239;
          }
          #streamtypecontainer {
            margin: -5px -10px 5px 0;
          }
          #showcommentbtn {
            background-color: rgb(52, 61, 72);
            border: 1px solid #334f5b;
            border-radius: unset;
            width: 100%;
            height: 33px;
            margin: 0;
          }
          #nextbtn,
          .dlbutton,
          .proxybtn,
          .autoplaybutton,
          .lightbtn {
            top: 4px;
          }
          #userconfirmcheck {
            display: none;
          }
          #lastwatch {
            bottom: 0;
            right: 100%;
            max-width: 100%;
            width: 100%;
          }
          .leftbottom {
            padding-right: 10px;
          }
          #btcaddress {
            display: none;
          }
          #notifiaction {
            top: 110px;
          }
          .playerpage {
            width: 100%;
            min-height: calc(100vh - 100px);
            margin-top: 33px;
            border-radius: unset;
            background-color: transparent !important;
          }
          #disquscomment,
          #flexstreambottom,
          #disquscommentnew,
          #belowbox {
            width: 100%;
            background-color: transparent;
            margin: 0;
            padding: 5px 10px;
          }
          #flexstreambottom,
          #anibottomplace {
            display: block;
            padding: 0;
          }
          #anicommentplace {
            background-color: transparent;
            margin: 20px 0;
          }
          .playbutton,
          .playbuttonextra {
            padding: 3px;
            font-size: 14px;
          }
          #epslistplace {
            gap: 3px;
            grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
            max-height: 122px;
          }
          #belowcomment {
            padding: 0 10px;
          }
          #streambottomright {
            margin-top: 10px;
            margin-bottom: 15px;
            padding: 0;
          }
          #anibottomright {
            margin-top: 20px;
            margin-bottom: 7px;
            padding: 0;
          }
          .tooltiptext,
          #openschedulebtn {
            display: none;
          }
          .eptitle {
            border-radius: unset;
            padding: 9px;
            font-size: 14px;
          }
          .footer {
            padding-left: 20px;
            padding-right: 20px;
            font-size: 11px;
          }
          .bottomtext {
            font-size: 12px;
          }
          .webtitle {
            max-width: 150px;
            margin-top: -1px;
            margin-bottom: -4px;
            min-width: 50px;
          }
          .resultimg {
            min-height: 150px !important;
            height: unset;
          }
          #menuclose {
            display: none;
          }
          .xclose {
            margin: -1px 0 -15px 0;
            background-color: #404040;
          }
          #q,
          #searchbutton,
          #usernametop,
          #backtotopbtn {
            display: none;
          }
          #q,
          #searchbutton {
            margin-top: -2px;
          }
          #q::-webkit-search-cancel-button,
          #azsearch::-webkit-search-cancel-button {
            display: unset;
          }
          #lowerplayerpage {
            padding: 10px;
          }
          #tips {
            display: none !important;
          }
          .animetitle {
            font-size: 17px;
            margin-top: 15px;
          }
          #animebtn {
            font-size: 18px;
          }
          #epslistplace {
            width: 100%;
            margin-top: 8px;
          }
          .searchbar {
            max-width: 40%;
            margin-left: -20px;
          }
          .topmenubtn {
            display: none;
          }
          #searchbox {
            float: left;
            width: calc(100% - 200px);
          }
          #iconmenu {
            grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
          }
          #streamtype {
            margin-top: -5px;
            margin-bottom: -17px;
            font-size: 12px;
          }
          #showrecomendbtn {
            font-size: 12px;
            opacity: 0.7;
          }
          .middle {
            width: 100%;
            min-height: calc(100vh - 200px);
            color: white;
          }
          .rightcard,
          .rightcardCenter {
            background-color: rgb(34, 34, 34);
          }
          .leftside {
            padding-left: 8px;
          }
          .floattopsearch {
            padding: 10px 0 10px 0;
          }
          #leftsideanimepage {
            width: 100%;
          }
          #animepagemiddle {
            display: block;
            margin-top: -157px;
            min-height: calc(100vh - 280px);
          }
          #animepagetitle {
            margin-top: 10px;
            font-size: 20px;
            display: none;
          }
          #anicovercontain {
            width: 150px;
            margin: 0 auto;
          }
          #maincoverimage {
            width: 150px;
            margin-left: 13px;
            min-height: 200px;
            border: 1px solid #626262;
            border-radius: 4px;
          }
          #animeleftside .rightcard {
            background-color: transparent;
            margin-bottom: -20px;
          }
          #panelplace {
            font-size: 12px;
            min-height: 100px;
            margin-bottom: -5px;
          }
          #rightsideanimepage {
            padding-right: 10px;
            padding-left: 10px;
            padding-bottom: 5px;
          }
          #showstreambtn {
            font-size: 14px;
            color: #9bc6ec;
            background-color: #282828;
            max-width: unset;
            text-align: center;
            border-radius: 3px;
            width: 90px;
            margin: -15px 0 10px 165px;
            float: none;
            position: absolute;
            border: 1px solid #404040;
            top: 185px;
            left: 10px;
          }
          #srcselect {
            width: 100px;
          }
          #scorebox {
            margin-top: 10px;
            float: none;
            border-top: none;
            border-left: none;
          }
          #infopanel {
            max-height: 0;
            margin: unset;
            padding: unset;
          }
          #iframeanime {
            height: calc(56vw - 15px);
          }
          #flexcontainer {
            display: block;
          }
          #navtab {
            overflow-x: auto;
          }
          #foldersvg {
            margin-bottom: -5px;
          }
          .name {
            font-size: 12px;
          }
          .infouserlist {
            margin-right: 5px;
          }
          .rightside {
            max-width: 100%;
            width: 420px;
            margin-left: 100%;
            position: fixed;
            top: 47px;
            z-index: 9;
            background-color: #1a1a1a;
            padding: 10px;
            height: calc(100% - 47px);
            overflow-y: scroll;
          }
          .questionFAQ {
            padding: 20px 20px 0 30px;
          }
          .answerFAQ {
            padding: 0 20px 0 30px;
            font-size: 13px;
          }
          .subpartFAQ {
            margin: 20px 20px 0 30px;
          }
          .playersidebar {
            width: 420px;
            margin-left: 100%;
            max-width: 100%;
            background-color: rgb(30, 30, 30);
          }
          #playertopmenu,
          .absolutee {
            position: fixed;
          }
          #playerleftsidebar {
            max-width: 100%;
            width: 450px;
            border: none;
          }
          .nav-tabs li a {
            font-size: 14px;
            padding-top: 6px;
          }
          .mobilemenureplace {
            display: block;
          }
          .mobilemenureplace a {
            display: inline !important;
          }
          .righttitle {
            width: 90%;
          }
          #menumobilebtn,
          #showsearchbtn {
            display: block;
          }
          #menumobilebtn2 {
            margin-top: -2px;
            margin-right: 15px;
          }
          #homeicon,
          #homeicon2,
          #backiconhome,
          #backicon {
            margin-left: 10px;
            margin-right: 0;
            margin-top: 2px;
          }
          .searchresult,
          .items {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)) !important;
          }
          .quickresult .details {
            text-align: left;
            margin-left: 55px;
          }
          .quickresult .name {
            font-size: 13px;
          }
          .quickresult .searchimg {
            float: left;
            width: 45px;
          }
          .quickresult .infotext {
            font-size: 11px !important;
          }
          .resultimg2 {
            min-height: unset !important;
            max-width: unset;
          }
          #seriestitle {
            font-size: 16px;
            margin-top: -46px;
          }
          #seriestitlecontainer {
            margin-top: 10px;
            margin-bottom: 5px;
          }
          .titleserieslist {
            font-size: 13px;
          }
          .numbering {
            font-size: 18px;
            width: 28px;
            padding-top: 3px;
          }
          .serieslabelitem {
            font-size: 12px;
            padding: 0 5px;
          }
          }

          @font-face {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/assets/fonts/lexend.woff2') format('woff2'), url('/assets/fonts/lexend.woff') format('woff'), url('/assets/fonts/lexend.ttf') format('truetype')
          }

          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/assets/fonts/roboto.woff2') format('woff2'), url('/assets/fonts/roboto.woff') format('woff'), url('/assets/fonts/roboto.ttf') format('truetype')
          }

          @font-face {
            font-family: "Glyphicons Halflings";
            src: url('/assets/fonts/glyph.woff2') format("woff2"), url('/assets/fonts/glyph.woff') format("woff"), url('/assets/fonts/glyph.ttf') format('truetype'), url('/assets/fonts/glyph.svg') format("svg")
          }

        </style>
      <app-header ?enableBack="${true}"></app-header>

      <body style="background-color:rgb(25,25,25)">
      <div id="coverlight" style="z-index:8"></div>
      <div id="loadcontainer">
        <div class="loadindicator"></div>
      </div>
      <div class="toppart">
        <div id="songContent" class="floattopsearch">
          <a id="backiconhome" onclick="window.history.back()"><i class="glyphicon glyphicon-chevron-left"></i></a>
          <a id="homeicon" href="index.php"><i class="glyphicon glyphicon-home"></i></a>
          <div id="searchbox">
            <input type="text" style="display:none;">
            <input type="password" style="display:none;">
            <a href="index.php"><img class="webtitle" alt="AnimixReplay" src="" /></a>
            <input
                class="form-control searchbar"
                pattern=".{3,}"
                placeholder="Search"
                id='q'
                type="search"
                autocomplete="off"
                onfocus="searchfocused()"
                onblur="searchblur()"
                onfocusout="searchUnfocus()"
              />

        <button id="searchbutton" onClick="dosearchfromplayer()"><i class="glyphicon glyphicon-search"></i></button>
            <a class="topmenubtn" title="Random anime" href="/random.php"><i class="glyphicon glyphicon-random"></i>Random</a>
            <a class="topmenubtn" title="A-Z List" href="/list.php">A-Z List</a>
          </div>
          <button id="menumobilebtn" OnClick="showmobilemenu()"><i class="glyphicon glyphicon-menu-hamburger"></i></button>
          <button id="showsearchbtn" OnClick="togglesearch()"><i class="glyphicon glyphicon-search"></i></button>
        </div>
      </div>
      <div class="quicksearchcontainer" style="display: none;">
        <div class="resultcontainer">
          <div id="fullresultbtn">
            <a onClick="searchfull()">Full</a><a onClick="searchE1()">GOGO</a><a onClick="searchE11()">AL</a><a onClick="searchE6()">RUSH</a><a onClick="searchMAL()">MAL</a>
          </div>


          <ul id="search-results" class="quickresult">
              <!-- Results in here -->
            </ul>


        </div>
      </div>
      <div class="middle">
        <div id="flexcontainer">
          <div class="leftside">
            <div id="pwaContainer">
              AniMixPlay PWA available<button id="pwaButton" class="btn btn-primary">Install PWA</button>
            </div>
            <div id="featuredcard">
              <div id="featuredbgcont">
                <img id="featuredbg" src="#" />
              </div>

              <div id="featuredcont">

                <a href="/v2/high-school-dxd-dub/ep1"><img id="featuredimg" src="/assets/webp/dxd_thumbnail.webp" /></a>
                <div id="featuredtitle"><a href="/v2/high-school-dxd-dub/ep1">Highschool DxD</a></div>
                <div id="featuredtext"> A war between heaven and hell is raging on Earth—and hormonal fury is raging in Issei’s pants. Enter curvy redhead Rias, president of The Occult Research Club: a club that doesn’t actually research the occult. They are the occult—and Rias is a Devil!</div>
                <div id="featuredgenre"><i class="glyphicon glyphicon-tag"></i> Best, Anime, Ever</div>
                <!--
                <a id="featuredNext" onClick="showFeatured(curFeatured + 1)"><i class="glyphicon glyphicon-chevron-right"></i></a>
                <a id="featuredBack" onClick="showFeatured(curFeatured - 1)"><i class="glyphicon glyphicon-chevron-left"></i></a>
                -->
              </div>
            </div>

            <div id="announcement" style="display: none;">
              Beware of fake sites, only <span style="color:#c1ba93;">animixreplay.to</span> is ours.<br>
              Don't rely on google search! use bookmark instead.<br>
              <br>
              If you got problem try <i class="glyphicon glyphicon-repeat"></i> reload the player several times, or just switch to external player.<br>
              Also worth to try in incognito mode, disabling browser extension, or clearing cache.<br>
              <br>
              For mobile users, you can swipe left / right to open menu, schedule, and stream list.<br>
              You can also install PWA (add to homescreen) to launch AniMixPlay like an app.<br>
              <br>
              Read more info in our <a href="info.html">info</a> page.<br>
            </div>
            <button style="display: none;"type="button" id="readmorebtn" onClick="readmore()" class="btn btn-secondary btn-sm btn-lg btn-block"><i class="glyphicon glyphicon-menu-down"></i></button>
            <button type="button" id="openschedulebtn" onClick="showschedulemenu()"><i class="glyphicon glyphicon-time"></i> Schedule</button>
            <div id="navtab">
              <ul class="nav nav-tabs">
                <!-- <li id="recentbtn" class="active" onload="recentfetch()"><a>Recent</a></li> -->
                <li id="subbtn" class="active" onload="subfetch()"><a>Sub</a></li>
                <li id="dubbtn"><a style="border-bottom: 1px solid #e36a6a;">Dub</a></li>
                <!-- <li id="followedbtn"><a>Followed</a></li> -->
                <li id="popularbtn"><a>Popular</a></li>
                <li id="upcomingbtn"><a>Upcoming</a></li>
                <li id="moviebtn"><a>Movie</a></li>
              </ul>
            </div>
            <div id="seasontopnav">
              <div id="prevseasonbtn" onClick="seasonPrev()">&lt; Previous season</div>
              <div id="nextseasonbtn" onClick="seasonNext()">Next season &gt;</div>
              <select id="topfilterselect" onchange="seasonFilterChange()">
                <option value="all">Show all</option>
                <option value="new">New</option>
                <option value="continuing">Continuing</option>
              </select>
            </div>
            <div id="genresortbtn">
              Sort by :
              <select id="topsortselect" onchange="filterSortChange()">
                <option value="any">none</option>
                <option value="popular" selected>Popularity</option>
                <option value="rating">Rating</option>
                <option value="latest">Latest update</option>
              </select>
            </div>
            <div id="resultplace">
              <ul id="homepage"class="searchresult">
                <!-- Mainpage Slots -->


              </ul>
              <div id="bottommsg">
                <div type="button" id="loadmorelist"><i class="glyphicon glyphicon-menu-down"></i> Load more</div>
              </div>

            </div>
            <div id="loadingtext">
              <svg class="spinner" width="75px" height="75px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
              </svg><br><br>Loading...
            </div>
            <div id="resultAlt">
              <div id="loadmoresearch">Loading...</div>
            </div>
            <br>
          </div>


          <div class="rightside" id="rightsidee">

            <div class="rightcard">
              <div style="display: none;"class="loadingreplacement">Loading...</div>
              <div id="userpanel">
        <span class="usernameplace"></span><span id="premiumcrown"></span><br><br>
        <div id="iconmenu">
            <a class="linkpersonal glyphicon glyphicon-th-list" href=""><br><span class="subtextmenuicon">User Panel</span></a>
            <i class="autotrackbtn glyphicon glyphicon-refresh" onclick="autotrackbtnclick();"><br><span class="subtextmenuicon">Autotracking</span></i>
            <i class="glyphicon glyphicon-off" onclick="logout();"><br><span class="subtextmenuicon">Logout</span></i>
        </div>
        <div id="logoutmsg"></div>
    </div>
    <div id="loginform" style="display: block;">
        <div class="flexrightcard">
            <div class="halfleft">
                <input class="logininput" placeholder="Username" id="username" type="text" autocomplete="username">
                <input class="logininput" placeholder="Password" id="password" type="password" autocomplete="current-password">
                <input type="checkbox" value="" id="rememberme" checked="">
                <label class="form-check-label rememberlabel" for="rememberme">
                Remember me
                </label>
            </div>
            <div class="halfright">
                <div class="loginbtn" onclick="login();">Login</div>
                <a class="openregisterbtn" onclick="window.location.href='/account/index';">Register</a>
            </div>
        </div>
        <div id="statuslogin"></div>
    </div>
    <form id="registerform">
        <a class="openloginbtn" onclick="backlogin();">&lt; back</a><br><br>
        <span id="alretinfo">Note: we don't use email (no reset password), please use password manager so you not forget</span>
        <div id="formregister">
            <input class="logininput" placeholder="Username" id="usernameregis" type="text" autocomplete="off">
            <div class="formsubtext">letters/numbers/_.-| max 25 chars</div>
            <input class="logininput" placeholder="Password" id="passwordregis" type="password" autocomplete="off">
            <div class="formsubtext">any 4 - 200 chars</div>
            <input class="logininput" placeholder="Confirm Password" id="confirm" type="password" autocomplete="off">
            <div class="formsubtext">retype password</div>
            <div class="g-recaptcha" data-theme="dark" data-sitekey="6LfYUUceAAAAAEC5G8ZmQEqELhXx55thJrVKDrew"></div>
        </div>
        <div id="statusregister"></div>
        <div class="registerbtn" onclick="window.location.href='/account/index';">Register</div>
    </form>

            </div>
            <br>
            <div class="rightcard signinhome" id="gsignsection">
              <div class="subtitleright" style="border-bottom:none"></div>
              <div id="gconnectbtn"><img id="gconnectbtnimg" onClick="connectGoogle()" src="assets/s/gsign.jpg"></div>
            </div>
            <div class="rightcard mobilemenureplace">
              <a class="topmenubtn" onClick="showschedulemenu()"><i class="glyphicon glyphicon-time"></i>Schedule</a>
              <a class="topmenubtn" title="Random anime" href="anime/18055.html"><i class="glyphicon glyphicon-random"></i>Random</a>
              <a class="topmenubtn" title="A-Z List" href="list.html">A-Z List</a>
            </div>
            <div class="rightcard">
              <div class="flexrightcard" id="seasonfilter">
                <div id="seasonleft">
                  <label for="seasonselect">Season:</label>
                  <select id="seasonselect">
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                  </select>
                </div>
                <div id="yearright">
                  <label for="yearselect">Year:</label>
                  <select id="yearselect"></select>
                </div>
                <div style="flex:1">
                  <div id="seasonalgobtn" onClick="seasonGo()">GO</div>
                </div>
              </div>
            </div>
            <div class="rightcard">
              <div class="subtitleright">Genres</div>

              <div class="genresgrid form-check"><div><input class="form-check-input" type="checkbox" id="gen-Action" value="Action">
                <label class="form-check-label" for="gen-Action">Action</label></div><div><input class="form-check-input" type="checkbox" id="gen-Adventure" value="Adventure">
                <label class="form-check-label" for="gen-Adventure">Adventure</label></div><div><input class="form-check-input" type="checkbox" id="gen-Anti-Hero" value="Anti-Hero">
                <label class="form-check-label" for="gen-Anti-Hero">Anti-Hero</label></div><div><input class="form-check-input" type="checkbox" id="gen-CGDCT" value="CGDCT">
                <label class="form-check-label" for="gen-CGDCT">CGDCT</label></div><div><input class="form-check-input" type="checkbox" id="gen-College" value="College">
                <label class="form-check-label" for="gen-College">College</label></div><div><input class="form-check-input" type="checkbox" id="gen-Comedy" value="Comedy">
                <label class="form-check-label" for="gen-Comedy">Comedy</label></div><div><input class="form-check-input" type="checkbox" id="gen-Drama" value="Drama">
                <label class="form-check-label" for="gen-Drama">Drama</label></div><div><input class="form-check-input" type="checkbox" id="gen-Dub" value="Dub">
                <label class="form-check-label" for="gen-Dub">Dub</label></div><div><input class="form-check-input" type="checkbox" id="gen-Ecchi" value="Ecchi">
                <label class="form-check-label" for="gen-Ecchi">Ecchi</label></div><div><input class="form-check-input" type="checkbox" id="gen-Fantasy" value="Fantasy">
                <label class="form-check-label" for="gen-Fantasy">Fantasy</label></div><div><input class="form-check-input" type="checkbox" id="gen-GagHumor" value="Gag Humor">
                <label class="form-check-label" for="gen-GagHumor">Gag Humor</label></div><div><input class="form-check-input" type="checkbox" id="gen-Game" value="Game">
                <label class="form-check-label" for="gen-Game">Game</label></div><div><input class="form-check-input" type="checkbox" id="gen-Harem" value="Harem">
                <label class="form-check-label" for="gen-Harem">Harem</label></div><div><input class="form-check-input" type="checkbox" id="gen-Historical" value="Historical">
                <label class="form-check-label" for="gen-Historical">Historical</label></div><div><input class="form-check-input" type="checkbox" id="gen-Horror" value="Horror">
                <label class="form-check-label" for="gen-Horror">Horror</label></div><div><input class="form-check-input" type="checkbox" id="gen-Idol" value="Idol">
                <label class="form-check-label" for="gen-Idol">Idol</label></div><div><input class="form-check-input" type="checkbox" id="gen-Isekai" value="Isekai">
                <label class="form-check-label" for="gen-Isekai">Isekai</label></div><div><input class="form-check-input" type="checkbox" id="gen-Iyashikei" value="Iyashikei">
                <label class="form-check-label" for="gen-Iyashikei">Iyashikei</label></div><div><input class="form-check-input" type="checkbox" id="gen-Josei" value="Josei">

                <!--
                <label class="form-check-label" for="gen-Josei">Josei</label></div><div><input class="form-check-input" type="checkbox" id="gen-Kids" value="Kids">
                <label class="form-check-label" for="gen-Kids">Kids</label></div><div><input class="form-check-input" type="checkbox" id="gen-MagicalGirl" value="Magical Girl">
                <label class="form-check-label" for="gen-MagicalGirl">Magical Girl</label></div><div><input class="form-check-input" type="checkbox" id="gen-MartialArts" value="Martial Arts">
                <label class="form-check-label" for="gen-MartialArts">Martial Arts</label></div><div><input class="form-check-input" type="checkbox" id="gen-Mecha" value="Mecha">
                <label class="form-check-label" for="gen-Mecha">Mecha</label></div><div><input class="form-check-input" type="checkbox" id="gen-Military" value="Military">
                <label class="form-check-label" for="gen-Military">Military</label></div><div><input class="form-check-input" type="checkbox" id="gen-Movie" value="Movie">
                <label class="form-check-label" for="gen-Movie">Movie</label></div><div><input class="form-check-input" type="checkbox" id="gen-Music" value="Music">
                <label class="form-check-label" for="gen-Music">Music</label></div><div><input class="form-check-input" type="checkbox" id="gen-Mythology" value="Mythology">
                <label class="form-check-label" for="gen-Mythology">Mythology</label></div><div><input class="form-check-input" type="checkbox" id="gen-Mystery" value="Mystery">
                <label class="form-check-label" for="gen-Mystery">Mystery</label></div><div><input class="form-check-input" type="checkbox" id="gen-Otaku" value="Otaku">
                <label class="form-check-label" for="gen-Otaku">Otaku</label></div><div><input class="form-check-input" type="checkbox" id="gen-Parody" value="Parody">
                <label class="form-check-label" for="gen-Parody">Parody</label></div><div><input class="form-check-input" type="checkbox" id="gen-Police" value="Police">
                <label class="form-check-label" for="gen-Police">Police</label></div><div><input class="form-check-input" type="checkbox" id="gen-Psychological" value="Psychological">
                <label class="form-check-label" for="gen-Psychological">Psychological</label></div><div><input class="form-check-input" type="checkbox" id="gen-Racing" value="Racing">
                <label class="form-check-label" for="gen-Racing">Racing</label></div><div><input class="form-check-input" type="checkbox" id="gen-Revenge" value="Revenge">
                <label class="form-check-label" for="gen-Revenge">Revenge</label></div><div><input class="form-check-input" type="checkbox" id="gen-Romance" value="Romance">
                <label class="form-check-label" for="gen-Romance">Romance</label></div><div><input class="form-check-input" type="checkbox" id="gen-Rural" value="Rural">
                <label class="form-check-label" for="gen-Rural">Rural</label></div><div><input class="form-check-input" type="checkbox" id="gen-Samurai" value="Samurai">
                <label class="form-check-label" for="gen-Samurai">Samurai</label></div><div><input class="form-check-input" type="checkbox" id="gen-School" value="School">
                <label class="form-check-label" for="gen-School">School</label></div><div><input class="form-check-input" type="checkbox" id="gen-Sci-Fi" value="Sci-Fi">
                <label class="form-check-label" for="gen-Sci-Fi">Sci-Fi</label></div><div><input class="form-check-input" type="checkbox" id="gen-Seinen" value="Seinen">
                <label class="form-check-label" for="gen-Seinen">Seinen</label></div><div><input class="form-check-input" type="checkbox" id="gen-Shoujo" value="Shoujo">
                <label class="form-check-label" for="gen-Shoujo">Shoujo</label></div><div><input class="form-check-input" type="checkbox" id="gen-ShoujoAi" value="Shoujo Ai">
                <label class="form-check-label" for="gen-ShoujoAi">Shoujo Ai</label></div><div><input class="form-check-input" type="checkbox" id="gen-Shounen" value="Shounen">
                <label class="form-check-label" for="gen-Shounen">Shounen</label></div><div><input class="form-check-input" type="checkbox" id="gen-ShounenAi" value="Shounen Ai">
                <label class="form-check-label" for="gen-ShounenAi">Shounen Ai</label></div><div><input class="form-check-input" type="checkbox" id="gen-SliceofLife" value="Slice of Life">
                <label class="form-check-label" for="gen-SliceofLife">Slice of Life</label></div><div><input class="form-check-input" type="checkbox" id="gen-Space" value="Space">
                <label class="form-check-label" for="gen-Space">Space</label></div><div><input class="form-check-input" type="checkbox" id="gen-Sports" value="Sports">
                <label class="form-check-label" for="gen-Sports">Sports</label></div><div><input class="form-check-input" type="checkbox" id="gen-SuperPower" value="Super Power">
                <label class="form-check-label" for="gen-SuperPower">Super Power</label></div><div><input class="form-check-input" type="checkbox" id="gen-Supernatural" value="Supernatural">
                <label class="form-check-label" for="gen-Supernatural">Supernatural</label></div><div><input class="form-check-input" type="checkbox" id="gen-Survival" value="Survival">
                <label class="form-check-label" for="gen-Survival">Survival</label></div><div><input class="form-check-input" type="checkbox" id="gen-Suspense" value="Suspense">
                <label class="form-check-label" for="gen-Suspense">Suspense</label></div><div><input class="form-check-input" type="checkbox" id="gen-TimeTravel" value="Time Travel">
                <label class="form-check-label" for="gen-TimeTravel">Time Travel</label></div><div><input class="form-check-input" type="checkbox" id="gen-Vampire" value="Vampire">
                <label class="form-check-label" for="gen-Vampire">Vampire</label></div><div><input class="form-check-input" type="checkbox" id="gen-Work" value="Work">
                <label class="form-check-label" for="gen-Work">Work</label>
                          -->
                </div></div>

              <button type="button" id="expandbtn" onClick="expandgenre()" class="btn btn-secondary btn-sm btn-lg btn-block"><i class="glyphicon glyphicon-menu-down"></i></button>
            </div>
            <div class="rightcard" style="display:none; border-top: 1px solid #3c3c3c;">
              <div class="flexrightcard" id="filterplace">
                <div class="halfleft">
                  <label for="typeselect">Stream:</label>

                  <select id="typeselect" onchange="typechange()">
                    <option value="0">Any</option>
                    <option value="1">GOGO Stream</option>
                    <option value="11">AL Stream</option>
                    <option value="6">RUSH Stream</option>
                  </select>
                </div>
                <div class="halfright">
                  <label for="langselect">Sub/Dub:</label>
                  <select id="langselect" onchange="langchange()">
                    <option value="any">Any</option>
                    <option value="sub">Sub</option>
                    <option value="dub">Dub</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="rightcard" style="margin-bottom:20px">
              <div class="subtitleright">Weekly Top</div>
              <div id="ongoingplace" style="height:unset"></div>
              <div id="ongoingplace2" style="visibility: hidden; height: 0px;"></div>
              <button type="button" id="expandbtn2" onClick="expandweekly()" class="btn btn-secondary btn-sm btn-lg btn-block"><i class="glyphicon glyphicon-menu-down"></i></button>
            </div>
          </div>

        </div>
      </div>
      <div id="playerleftsidebar" class="schedulemenucontainer">
        <button id="recomendedclosebtn" style="margin-left:10px" OnClick="showschedulemenu()"><i class="glyphicon glyphicon-arrow-left"></i></button>
        <div id="seasontitle"></div>
        <div id="scheduletimezone"></div>
        <div id="recomendedlist" style="padding-top:unset"></div>
        <div id="schedulenotice">Release time is estimated</div>
      </div>
      <div class="leftbottom">
        <span id="donatelabel">RSS</span><a class="customicon rssicon" href="rss.html"></a>
        <div class="floatright">
          <div class="togglelabel">Chat</div>
          <label class="switch">
            <input type="checkbox" id="enablechat">
            <span class="slider round"></span>
          </label> <a href="info.html" style="font-size:17px;margin-left:4px"><i class="glyphicon glyphicon-info-sign"></i></a><br>
        </div>
      </div>
      <div class="footer">
        <span class="bottomtext">
          Watch HD Anime for Free ©2022 AnimixReplay
        </span>
        Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.
      </div>
      <div id="notifiaction"></div>
      <div id="lastwatch">
        <i onClick="lastwatchclose();" id="lastwatchclosebtn" class="glyphicon glyphicon-remove"></i>
        Continue watching :<br>
        <a id="lastwatchlink">
          <div id="lastwatchtitle"></div>
          <div id="lastwatchurl"></div>
        </a>
      </div>
      <script type="text/javascript">
        var nowtime = 'Yea';
        var envYear = 2023;
        var envSeason = 'Winter';
        var curFeatured = 8;
      </script>
      <script src="/assets/js/weeklytop.min.js?version=2"></script>
      <img src="/assets/Mayumi-chan_2.webp" id="mascot">
      <!-- <div id="backtotopbtn" style="opacity: 1;"><i class="glyphicon glyphicon-menu-up"></i></div> -->
      </body>
    `;
  }
}
